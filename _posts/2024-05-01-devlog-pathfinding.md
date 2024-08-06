---

title: Pathfinding in a 2D Platformer Context
description: Going into all the details of our how Little Nemo's buddy pathfinding is achieved.
image: /assets/todo-preview.png

---

# Pathfinding in a 2D Platformer Context

Before I dig into all the technical details, let me show and then describe to you exactly what I'm going to be talking about in this post:

![img](https://i.ibb.co/TWp7Zhd/little-buddy-example.webp)Nemo's buddy Panda Tuxpin using pathfinding to follow along

I'm going to be breaking down **how I got these little creatures to follow the player around**, talking about things from an **abstract, high level overview** with **no code samples**. That means I’ll be talking about creating a pathfinding graph, executing pathfinding, and then moving the buddies along the found path.

If you finish reading and are curious about specific implementation details, I'm happy to chat about it! Come find me on our [Discord](https://discord.com/invite/9NymgSJAVp) server (we’ve got a **#game-dev** channel in there and I love to talk about this stuff with people).



### Some Context

*Little Nemo and the Guardians of Slumberland* is a 2D platformer-centric metroidvania, and one of the items you can collect are **Little Buddies**, small stuffed animals or otherwise anthropomorphized toys who will follow you around the world and provide some sort of passive (or mostly passive) benefit. This sort of feature is often implemented by allowing the "familiar" to no-clip through terrain and just float near the player, but I wanted these buddies to be extra cute and fun so having them run and jump alongside Nemo felt right. The standard floating, no-clip solution makes a lot of sense, especially when you consider that your player character probably has a variety of mobility options and the familiar needs to keep up with the player.

![img](https://i.ibb.co/pfb97bk/sotn-familiar.webp)Familiars in "Symphony of the Night" don't interact with the terrain and simply float near the player.

Towards the end of this post I'll also talk a bit about some of the related ways we help our Little Buddies keep up even when Nemo is moving quicky or through terrain the Buddies can't move through.



## General Overview

Our pathfinding solution breaks down into three major areas: **building a world graph**, **pathfinding**, and **path following**. I'll quickly outline each of these steps before getting into the details of each.

### The World Graph

The pathfinding algorithm we're working with is going to need some [**graph**](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) to work from (tldr; for those unfamiliar: a graph is a collection of nodes and edges that connect those nodes together). Essentially what we need to do is codify our understanding of the world's terrain into a graph that describes how our entities can move through it. This is the hardest and most complex part of this entire solution, so it's important to appreciate exactly what we're trying to achieve.

In my case, Slumberland is mostly composed of tilemaps that follow a uniform grid, so it's easy to get a sense of what **nodes** we need in our graph: we'll simply start with assuming every tile in the world will have some corresponding node in the graph. We then also need to connect these nodes with **edges** that describe how we traverse from one node to another. It will be important that all of our edges are one-way; consider falling for example, which we expect to only work in a downward direction.

![img](https://i.ibb.co/mX9frVX/pathfinding-edges.png)A debug view of the world graph overlaid on a small portion of the world terrain. Each node has different colors that convey what kind of node it is, and the lines between them are the color-coded edges.

### Pathfinding

Despite "pathfinding" being in the title of this post, it's actually one of the least interesting parts of all of this. We're using the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm) to do pathfinding, and there are plenty of articles out there describing how to leverage A*, but I'm more interested in discussing how this step gets integrated into the whole process. To use a pathfinding algorithm like this, we need our graph and which nodes from within that graph are our **starting** and **goal** nodes. The resulting output from this pathfinding algorithm will be a **path** (or lack thereof if no valid path from start to goal exists).

The exact implementation of your path is isn't so important, but it will effectively just be an ordered sequence of edges that your entity can follow to go from node to node, eventually reaching the goal node.

![img](https://i.ibb.co/c1532T9/path.webp)You can see here how each time Nemo moves, Lampet’s path is a collection of edges from the world graph. The crosshairs show which node Lampet is currently heading towards. Green is a walking edge, cyan is a jumping edge, and red is a falling edge.

### Following the Path

Once we have a path, we need to tell our entity how to follow it. This is probably the next hardest part of this entire system to figure out, and the implementation details will heavily depend on the structure of your game logic. Generally speaking though, you'll want to keep track of which **segment** of the path the entity is currently traversing, describe to the entity how to follow that segment of the path, and then also watch for when we've reached the end of that segment and can move on to the next (or if there is no next segment, we've reached our goal).

In this context, a path **segment** roughly corresponds to a graph edge, but will contain other details as well, so it’s good to think of the path segment as its own concept with its own name, rather than just calling it an edge.

![img](https://i.ibb.co/VH6S65f/pathfollowing.webp)My Alien Monster follows along, running, jumping, and passing through platforms as the path dictates.



## Digging into the Details

Now that I've laid out a general picture of what we're doing, let's get into the finer details about each step.

### Back to the Graph

I glossed over quite a bit in describing the graphs above, so I'm going to dig into more detail about each component of the graph.

- **Nodes**: Since each node corresponds to a position in our grid, it will want integer x and y coordinates to describe its **Position**. And then it will also need some kind of **NodeType**.
  - **NodeType**: This should be some kind of[ bit field](https://learn.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=net-8.0) enum. It being a bit field will be important because it is likely that nodes can have multiple node types associated with them. Here's a quick rundown of some of the NodeTypes I have defined to give you an idea: None/Empty (default value), Solid (this is a collideable area we can't go through), PassThru (for platforms that are not solid, but we can stand on them and drop down through them), Hazard (something which will damage us if we touch it), Surface (an area where we can safely stand), HazardSurface (a surface, but we can't safely stand there without getting hurt), DoNotEnter (areas we simply don't want our entity to go for one reason or another).
- **Edges**: This needs a *frominode* and a *to-node*. Like the Node, it will have an **EdgeType**. And importantly, it will have some **cost** associated with it.
  - **EdgeType**: This is an enum which should roughly correspond to the types of locomotion our entities have. For instance, my EdgeType includes: WalkTo (simply horizontal traversal to a neighboring node), JumpTo (this is what defines that we can jump from one node to another), PassThruTo (for our PassThru platforms that the entity can simply drop through whenever desired).
  - **Cost**: This is an essential element to pathfinding. Cost roughly corresponds to how quickly or easily we can traverse an edge. The pathfinding algorithm will want to find the path to the target with the lower cost. I have a PathingCosts static class which has some constants and static functions I can use to calculate the cost to go from node A to node B with a given EdgeType. You can adjust these costs to your liking to incentivize and disincentivize different traversal methods. For instance, in my solution the cost for entering and exiting a Surface node is higher if that Surface is tagged as a SurfaceHazard. This causes the Buddies to avoid stepping on any hazards *if they can easily avoid it*, but also allows them to quickly hop on hazards if there are no better paths to take.
- **Graph Details**: As you can tell, the graph we're describing is uniquely tailored for the entity we need to move through the world. In my case I only have these Little Buddies using the graph, so it is custom tailored for them. They are also exactly one unit tile in size, which means they can fit through any one-tile tall or wide gaps, making all of this much easier. If we had other, larger entities with different locative capabilities that required pathfinding, they would likely need their own graphs, and you would need to decide what logic could be shared between them when building those graphs. For instance, if we had entities that could not jump, we could create a second graph for them which uses the same nodes, but which has none of the JumpTo edges between nodes.
  - **Bounds**: Something you need to consider is the bounds of your graph. Are you graphing out an entire level all at once, breaking it up into multiple parts? In my case, I have opted to simply graph out the area of the world directly around the player by some small, arbitrary amount. As we approach those bounds, I simply request that a new graph be made for the bounds around the player once again. Your solution could be even simpler, and this graph could even get baked in at authoring time and then is just loaded in if you have some entity that needs to make use of it. I can get away with my runtime solution because I'm deprioritizing this work on a background thread since it's not essential (we still have the old graph to work with until the new one finishes generating, and even if we exceeded those bounds before a new graph was generated, the Buddy will probably still have a relevant path to be following in the meantime).

## Sequence of Tasks to Build a Graph

Now that we understand a bit more about the details of what this graph looks like, let’s dig into how we build that graph.

### Populating the Graph with Nodes

Query everything that contributes to world geography. In my case, this is all of our tilemaps that make up the world, as well as any collideable prefabs. I made an interface, IGraphNodeProvider, that they all conform to. I can simply query it with the method NodeType NodeTypeAt(int2 gridPos) and that tilemap or prefab is responsible for describing what NodeType is created in each location. So for instance, my collideable tilemaps will respond with NodeType.Solid for any grid position where they have a tile painted in.

We will iterate over every position in the bounds that we want graphed out and ask every IGraphNodeProvider what type of NodeType they provide at that location. This comes back to why it was important that we use a bit field enum for our NodeType. Since we're querying from multiple sources, we can simply bitwise OR them all together to get our final NodeType (eg. if both the main collider tilemap, and the hazards tilemap have a tile at a specific location, after querying them both, we’ll know that location is both solid and a hazard). At each of these positions create a node using the NodeType we got by combining input from all of our IGraphNodeProviders.

![img](https://i.ibb.co/ZGgQqHx/some-nodes-gizmos.png)Here is a gizmo showing the node types overlayed on our world. Solid nodes are black PassThru are blue, and Hazards are red. Notice the monkey bar tiles don’t have nodes because the Buddies do not make use of them so they are not relevant to their pathfinding.

All of our nodes describe the contents of the world now, but now we need to do a second pass to add more NodeTypes. For instance, you will probably want to go through and add NodeType.Surface to any node that is above a node which is NodeType.Solid and which itself is not solid. These secondary nodes will be essential because these will usually be the nodes that our entity actually passes through.

![img](https://i.ibb.co/5TMLykT/all-nodes-gizmos.png)Here you can see the same nodes as above, but with all of the additional nodes we've added on top of that such as different Surface types and ledges.

Right now we have nodes for every tile, even the empty ones, so we can simplify our graph by deleting any nodes with the None/Empty NodeType. They can be safely removed because we know they won’t be relevant to pathfinding other than that we know we can pass through them. It also drastically speeds up the time it takes to generate the edges of our graph, and results in fewer edges which also speeds up pathfinding (which is logic that you will definitely need to do at runtime).

### Connecting the Nodes with Edges

This is where you'll have a lot of very specific logic based on your needs. Generally what I'm trying to do is allow the Buddies to walk horizontally, fall off of ledges, fall through pass through platforms, and jump from any node to any other that we expect they can reach. It’s a good bit of code (about 350 lines of C#), so I will walk through a quick overview of what I'm doing:

1. Iterate over every node in the graph
   1. **Walking**: If it is flagged with NodeType.Surface, create a WalkTo edge to any nodes to the left or right that are also flagged as NodeType.Surface.
   2. **Falling**: If it is tagged as a NodeType.Ledge (this is what we tag nodes adjacent to surfaces which aren’t surfaces themselves, ie. if we can walk off a surface) or NodeType.PassThru, then we’ll find any surface nodes we can drop down to, considering both falling straight down and falling while moving forward (and here’s my [desmos link](https://www.desmos.com/calculator/4pzk7tuw2b) for how to calculate the latter).
   3. **Jumping**: If it is flagged with NodeType.Surface, check if there are any NodeType.PassThru which we can jump to directly above (just using our jump height for that). Then we also check for any other surfaces we can jump to. This part is probably the most complicated portion of all of this. Essentially what I’m doing for this is considering that our entity is probably limited by some jump height and some horizontal speed. When can then look at every nearby node and see if any jumping arc gets us to it without colliding. Since we’re dealing with axis-aligned bounding boxes, that’s actually very achievable: we can check for collisions along the parabola of our jump along each of the four corners of our entity’s collider box. Here’s the [desmos link](https://www.desmos.com/calculator/dyuzpw3rdq) for what that looks like. If we can jump to that node without colliding with something on the way, this edge simply stores the start velocity that will produce the exact parabola we checked for collisions (and our entity will jump using that specific velocity when following the path).

![img](https://i.ibb.co/YcB8jyp/edge-gizmos.png)And now finally we have the same context as shown above, but with all of the edges drawn in as well. Each of these lines represents how a Little Buddy could possibly get from one node to another.

I’m glossing over some fairly interesting details here. The desmos graphs I linked above were presented with very little context, so if you wanna know more about how exactly I’m using these formulas to determine if a Buddy can get from one node to another by jumping or falling in my specific use cases, come chat with me in [**Discord**](https://discord.com/invite/9NymgSJAVp).

## Path Following Details

I just glossed over the path following logic above, but it’s important that we’ve established that following a path means we’re trying to execute upon a sequence of path segments. The general structure of this looks something like:

1. Assuming we have a valid path, and we haven’t already reached the end of it, let’s check if we’re ready to move to the next segment. The way we know if we’re ready to move to the next segment is simply by asking each frame: are we approximately to the location of the node at the end of the current segment?
   1. If we have reached the next node, check if that is the goal node. If so, we've reached our destination. Otherwise just change our current segment to reflect the one we’re working on now.
   2. Otherwise, we’re still working through the current segment so continue on.
2. Now we need a simple method that will tell us what inputs we need for our entity based on the current segment. For instance, if it’s a jumping edge, this will describe the jump velocity and whether or not we should be moving forward. If it’s a pass thru edge, we’ll describe that the entity should activate the pass thru input so it can fall through that platform. This will be very game-logic specific.
3. Now you simply repeat this each frame, executing the inputs based on the current segment, and each time checking if you’ve reached the end of the current segment (or the end of the entire path).

## Tying it all Together

Once you have a world graph, a pathfinding algorithm, and some way to follow the paths you find, you just need these systems to coordinate. I’m using an Entity Component System, so I have some systems that run and watch for the presence of entities which are in need of pathfinding, and if we do have a need for pathfinding, we’ll make sure there’s always a valid graph available (occasionally refreshing that graph as we move about the world or the contents of the world change). Those entities can then make pathfinding requests (in my case these are asynchronous requests running in a background thread) and once they get a path back, they can store that path as their most up-to-date path they are currently following.

## Takeaways

Even though this idea started with a simple idea of familiars, I think it's turned out more like the faux player 2 Tails that follows you about in Sonic 2.

[Sonic 2 Tails] Caption: This was an interesting idea, but tails clearly had trouble keeping up with Sonic.

The end result is that the buddies are kind of like your Player 2 in a single-player game. It gives some much appreciated company in a genre originally established by a lone space bounty hunter.

[ Clips of Little Buddies ]

If you made it all the way through, thanks for reading. If you wanna hear some of the more details, feel free to hop into the Little Nemo [Discord](https://discord.com/invite/9NymgSJAVp) server, where we have a **#game-dev** channel within which I’m happy to talk about all of this at length if prompted.

-Dave

![img](https://i.ibb.co/fp2p9m0/hot-beverage.png)
