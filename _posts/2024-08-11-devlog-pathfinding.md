---

title: Pathfinding in a 2D Platformer
description: An end-to-end look at how pathfinding is achieved in Little Nemo.
image: /assets/images/devlog/2024-08-11-preview.png

---

# Pathfinding in a 2D Platformer

Welcome! Before I get into things, if you don't already know me, a quick intro: I'm Dave, founder of **DIE SOFT**, and I do the programming, art, and animation for the upcoming game *Little Nemo and the Guardians of Slumberland*. Before I dig into all the technical details, let me show and then describe to you exactly what I'm going to be talking about in this post:

![img](https://i.ibb.co/TWp7Zhd/little-buddy-example.webp)Nemo's Little Buddy, Panda Tuxpin, can be seen here using pathfinding to follow along with the player

I'm going to be breaking down **how I got Nemo's Little Buddies to follow the player around**, talking about things from an **abstract, high level overview** with **no code samples** and attempting to give a general layout of my solution from **end-to-end**. That means I’ll be talking about creating a pathfinding graph, executing pathfinding, moving the buddies along the found path, working around pathfinding limitations, and how all these systems tie together.

If you finish reading and are curious about specific implementation details, I'm happy to chat about it! Come find me on our [Discord](https://discord.com/invite/9NymgSJAVp) server (we’ve got a **#game-dev** channel in there and I love to talk about this stuff with people).



### Some Context

*Little Nemo and the Guardians of Slumberland* is a 2D platformer-centric metroidvania (meaning it plays more like Super Mario Bros., but has a world and upgrades more like Super Metroid), and one of the items you can collect are **Little Buddies**, small stuffed animals or otherwise anthropomorphized toys who will follow you around the world and provide some sort of passive benefit (for example, Lampet is a light source, B.O.B. detects secrets, and My Alien Monster can eat enemies). This sort of feature is often implemented by allowing the "familiar" to no-clip through terrain and just float near the player, but I wanted these buddies to be extra cute and fun so having them run and jump alongside Nemo felt right.

![img](https://i.ibb.co/pfb97bk/sotn-familiar.webp)Familiars in "Symphony of the Night" don't interact with the terrain and simply float near the player.

The player character in Little Nemo has a variety of mobility options available (increasingly so as they unlock new abilities) and the Little Buddies can only run and jump, so our solution is to have them use pathfinding to follow along with Nemo. So let's break down what kind of work needs to happen to accomplish this…

As for the technical context of what I'm describing, I'm writing all of this in C# for my Unity project, but because I'm talking about things at a high level of abstraction, you could apply these ideas in other languages and game engines. The important thing to keep in mind here is simply that we're working in a 2D world which is composed of tiles that conform to a grid. Whether you're using Unity's or Godot's tilemaps to build your world shouldn't matter.



## General Overview

Our pathfinding solution breaks down into two major areas: **building the world graph**, and then using that graph to do **pathfinding and path following**. I'll quickly outline these steps before getting into the details of them.

### The World Graph

The pathfinding algorithm we're working with is going to need a [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) to work from (tldr; for those unfamiliar: a graph is a collection of nodes and edges that connect those nodes together). Essentially what we need to do is codify our understanding of the world's terrain into a graph that describes how our entities can move through it. This is the hardest and most complex part of this entire solution, so it's important to appreciate exactly what we're trying to achieve.

In my case, Slumberland is mostly composed of tilemaps that follow a uniform grid, so it's easy to get a sense of what **nodes** we need in our graph: we'll simply start with assuming every tile in the world will have some corresponding node in the graph. We then also need to connect these nodes with **edges** that describe how we traverse from one node to another. It will be important that all of our edges are one-way; consider falling for example, which we expect to only work in a downward direction.

![img](https://i.ibb.co/mX9frVX/pathfinding-edges.png)A debug view of the world graph overlaid on a small portion of the world terrain. Each node has different colors that convey what kind of node it is, and the lines between them are the color-coded edges.

### Pathfinding and Path Following

Despite "pathfinding" being in the title of this post, it's actually one of the least interesting parts of all of this. We're using the [A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm) to do pathfinding, and there are plenty of articles out there describing how to leverage A*, but I'm more interested in discussing how this step gets integrated into the whole process. To use a pathfinding algorithm like this, we need to supply the algorithm with our graph, as well as which nodes from within that graph are our **starting** and **goal** nodes. The resulting output from this pathfinding algorithm will be a **path** (or lack thereof if no valid path from start to goal exists).

The **path** is essentially just an ordered sequence of edges that your entity can follow to go from node to node, eventually reaching the **goal** node.

![img](https://i.ibb.co/c1532T9/path.webp)You can see here how Lampet’s path is a collection of edges from the world graph. The crosshairs show which node Lampet is currently heading towards. Green is a walking edge, cyan is a jumping edge, and red is a falling edge.

Once we have a path, we need to tell our entity how to follow it. The implementation details will heavily depend on the structure of your game logic. Generally speaking though, you'll want to keep track of which **segment** of the path the entity is currently traversing, describe to the entity how to follow that segment of the path, and then also watch for when we've reached the end of that segment and can move on to the next (or if there is no next segment, we've reached our goal).

In this context, a path **segment** roughly corresponds to a graph edge, but will contain other details as well, so it’s good to think of the path **segment** as its own concept with its own name, rather than just calling it an edge.

![img](https://i.ibb.co/VH6S65f/pathfollowing.webp)My Alien Monster follows along, running, jumping, and passing through platforms as the path dictates.



### A Quick Example

Before we get into the details of these steps, I think it will be helpful to help anchor your understanding of how the graphs are used by the pathfinding logic with a quick example. This will hopefully better help you understand how nodes and edges are used by the pathfinding logic.

In this example, we'll just have Panda Tuxpin trying to get to the Star, and we'll examine each step along the path.

![img](https://i.ibb.co/hMJz7sg/simple-example-1.png)

At the start here, things are pretty simple. We're at a Surface node, and it has a WalkTo edge to the neighboring Surface node to our right. That moves us closer to the goal and walking from one surface to another is the easiest thing to do, so that's what Panda Tuxpin will do here.

![img](https://i.ibb.co/bQDFD8q/simple-example-2.png)

At this node however, things get a little trickier. We can walk to our neighboring Surface node to the right, but it is also a HazardSurface. Since we want to avoid Hazards if possible, this node is fairly expensive to traverse, so let's keep looking at other edges heading out from this node.

Surface nodes will also have JumpTo nodes to most nearby Surface nodes, and although jumping also has a cost associated with it, it's less expensive than getting hurt by the hazard. Unfortunately, there is not a JumpTo node that jumps us straight to the Goal because that pillar of Solid tiles is blocking us, but we do have a JumpTo node to the top of that pillar. That's going to be the best way to get closer to the goal for the lowest cost, so that's what Panda Tuxpin would do next.

![img](https://i.ibb.co/vHZBVqZ/simple-example-3.png)

Now that we're up here, there's no neighboring Surface node for us to walk to to get closer to the goal, but we do have an edge that allows us to fall directly onto the goal. Falling is relatively inexpensive so that is the sensible next step Panda Tuxpin would take and would reach the goal.



## Digging into the Details

Now that I've laid out a general picture of what we're doing, let's get into the finer details about each step.

### Back to the Graph

I glossed over quite a bit in describing the graphs above, so I'm going to dig into more detail about each component of the graph.

- **Nodes**: Since each node corresponds to a position in our grid, it will want integer x and y coordinates to describe its **position**. And then it will also need some kind of **NodeType**.
  - **NodeType**: This should be some kind of [bit field](https://learn.microsoft.com/en-us/dotnet/api/system.flagsattribute?view=net-8.0) enum. It being a bit field will be important because it is likely that nodes can have multiple node types associated with them. Here's a quick rundown of some of the NodeTypes I have defined to give you an idea: None/Empty (default value), Solid (this is a collideable area we can't go through), PassThru (for platforms that are not solid, but we can stand on them and drop down through them), Hazard (something which will damage us if we touch it), Surface (an area where we can safely stand), HazardSurface (a surface, but we can't safely stand there without getting hurt), DoNotEnter (areas we simply don't want our entity to go for one reason or another).
- **Edges**: This needs a *from-node* and a *to-node*. Like the Node, it will have an **EdgeType**. And importantly, it will have some **cost** associated with it.
  - **EdgeType**: This is an enum which should roughly correspond to the types of locomotion our entities have. For instance, my EdgeType includes: WalkTo (simply horizontal traversal to a neighboring node), JumpTo (this is what defines that we can jump from one node to another), PassThruTo (for our PassThru platforms that the entity can simply drop through whenever desired).
  - **Cost**: This is an essential element to pathfinding. Cost roughly corresponds to how quickly or easily we can traverse an edge. The pathfinding algorithm will want to find the path to the target with the lower cost. I have a PathingCosts static class which has some constants and static functions I can use to calculate the cost to go from node A to node B with a given EdgeType. You can adjust these costs to your liking to incentivize and disincentivize different traversal methods. For instance, in my solution the cost for entering and exiting a Surface node is higher if that Surface is tagged as a SurfaceHazard. This causes the Buddies to avoid stepping on any hazards *if they can easily avoid it*, but also allows them to quickly hop on hazards if there are no better paths to take.
- **Graph Details**: As you can tell, the graph we're describing is uniquely tailored for the entity we need to move through the world. In my case I only have these Little Buddies using the graph, so it is custom tailored for them. They are also exactly one unit tile in size, which means they can fit through any one-tile tall or wide gaps, making all of this much easier. If we had other, larger entities with different locomotive capabilities that required pathfinding, they would likely need their own graphs, and you would need to decide what logic could be shared between them when building those graphs. For instance, if we had entities that could not jump, we could create a second graph for them which uses the same nodes, but which has none of the JumpTo edges between nodes.
  - **Bounds**: Something you need to consider is the bounds of your graph. Are you graphing out an entire level all at once, breaking it up into multiple parts? In my case, I have opted to simply graph out the area of the world directly around the player by some small, arbitrary amount. As we approach those bounds, I simply request that a new graph be made for the bounds around the player once again. Your solution could be even simpler, and this graph could even get baked in at authoring time and then is just loaded in if you have some entity that needs to make use of it. I can get away with my runtime solution because I'm deprioritizing this work on a background thread since it's not essential (we still have the old graph to work with until the new one finishes generating, and even if we exceeded those bounds before a new graph was generated, the Buddy will probably still have a relevant path to be following in the meantime).

## Sequence of Tasks to Build a Graph

Now that we understand a bit more about the details of what this graph looks like, let’s dig into how we build that graph.

![img](https://i.ibb.co/5Fq6CjT/graph-building-anim.webp)This is what our sequence will look like as we populate the graph in the steps below.

### Populating the Graph with Nodes

Query everything that contributes to world geography. In my case, this is all of our tilemaps that make up the world, as well as any collideable prefabs. I made an interface, IGraphNodeProvider, that they all conform to. I can simply query it with the method NodeType NodeTypeAt(int2 gridPos) and that tilemap or prefab is responsible for describing what NodeType is created in each location. So for instance, my collideable tilemaps will respond with NodeType.Solid for any grid position where they have a tile painted in.

We will iterate over every position in the bounds that we want graphed out and ask every IGraphNodeProvider what type of NodeType they provide at that location. This comes back to why it was important that we use a bit field enum for our NodeType. Since we're querying from multiple sources, we can simply bitwise OR them all together to get our final NodeType (eg. if both the main collider tilemap, and the hazards tilemap have a tile at a specific location, after querying them both, we’ll know that location is both solid and a hazard). At each of these positions create a node using the NodeType we got by combining input from all of our IGraphNodeProviders.

![img](https://i.ibb.co/ZGgQqHx/some-nodes-gizmos.png)Here is a gizmo showing the node types overlayed on our world. Solid nodes are black PassThru are blue, and Hazards are red. Notice the monkey bar tiles don’t have nodes because the Buddies do not make use of them so they are not relevant to their pathfinding.

All of our nodes describe the contents of the world now, but now we need to do a second pass to add more NodeTypes, based on the nodes that we populated the graph with in the first step. For instance, you will probably want to go through and add NodeType.Surface to any node that is above a node which is NodeType.Solid and which itself is not solid. These secondary nodes will be essential because these will usually be the nodes that our entity actually passes through and is concerned with.

![img](https://i.ibb.co/5TMLykT/all-nodes-gizmos.png)Here you can see the same nodes as above, but with all of the additional nodes we've added on top of that such as different Surface types and ledges.

Right now we have nodes for every tile, even the empty ones, so we can simplify our graph by deleting any nodes with the None/Empty NodeType. They can be safely removed because we know they won’t be relevant to pathfinding other than that we know we can pass through them. It also drastically speeds up the time it takes to generate the edges of our graph, and results in fewer edges which also speeds up pathfinding (which is logic that you will definitely need to do at runtime).

### Connecting the Nodes with Edges

This is where you'll have a lot of very specific logic based on your needs. Generally what I'm trying to do is allow the Buddies to walk horizontally, fall off of ledges, fall through pass through platforms, and jump from any node to any other that we expect they can reach. It’s a good bit of code (about 350 lines of C#), so I will walk through a quick overview of what I'm doing:

While iterating over every node in the graph:
- **Walking**: If it is flagged with NodeType.Surface, create a WalkTo edge to any nodes to the left or right that are also flagged as NodeType.Surface.
- **Falling**: If it is tagged as a NodeType.Ledge (this is what we tag nodes adjacent to surfaces which aren’t surfaces themselves, ie. if we can walk off a surface) or NodeType.PassThru, then we’ll find any surface nodes we can drop down to, considering both falling straight down and falling while moving forward (and here’s my [desmos link](https://www.desmos.com/calculator/4pzk7tuw2b) for how to calculate the latter).
- **Jumping**: If it is flagged with NodeType.Surface, check if there are any NodeType.PassThru which we can jump to directly above (just using our jump height for that). Then we also check for any other surfaces we can jump to. Essentially what I’m doing for this is considering that our entity is probably limited by some jump height and some horizontal speed. When can then look at every nearby node and see if any jumping arc gets us to it without colliding. Since we’re dealing with axis-aligned bounding boxes, that’s actually very achievable: we can check for collisions along the parabola of our jump along each of the four corners of our entity’s collider box. Here’s the [desmos link](https://www.desmos.com/calculator/dyuzpw3rdq) for what that looks like. If we can jump to that node without colliding with something on the way, this edge simply stores the start velocity that will produce the exact parabola we checked for collisions (and our entity will jump using that specific velocity when following the path).

![img](https://i.ibb.co/YcB8jyp/edge-gizmos.png)And now finally we have the same context as shown above, but with all of the edges drawn in as well. Each of these lines represents how a Little Buddy could possibly get from one node to another.

I’m glossing over some fairly interesting details here. The desmos graphs I linked above were presented with very little context, so if you wanna know more about how exactly I’m using these formulas to determine if a Buddy can get from one node to another by jumping or falling in my specific use cases, come chat with me in [Discord](https://discord.com/invite/9NymgSJAVp).

## Path Following Details

How your entities follow a path is going to be very specific to your circumstances, so I think what I want to do is talk about how I handled this for my use case from a high level overview. For each entity that has a path which needs to be followed, we run this logic each frame:

1. First, let's make sure that we actually have a path and that it is actually valid (eg. does it have a greater-than-zero number of segments)? Have we reached the end of the path (which we know by tracking which segment of the path we're currently on)? If the path is invalid or we've reached the end, the path following logic doesn't need to do anything this frame and we're done here.
2. But assuming we do have a valid path and we haven't reached the end, we need to check if we've reached the end of our current segment. Knowing if you've reached the end can be kind of tricky and I found I fiddled with this logic a decent amount to get things working correctly. But what I settled on is essentially: if we've come close enough to, or gone past the position of that segment's end node, we're done with this segment. Additionally, for segments which are JumpTo edges, we check to make sure we're grounded before we determining we're done with this segment.
   1. If we have reached the end of the segment, we'll update our current segment to the next segment in the path. But if that was the last one, then we have reached the end of our path and we're done here.
3. Now that we know we have a valid path, and we have some path segment we are trying to reach the end of, we need to figure out how to tell our entity to actually move in a way that brings us closer to reaching this segment's end node. Effectively, you'll want to branch on the **EdgeType** of the segment you're currently working on, and set your entity's inputs accordingly. For instance, if we're on a WalkTo segment, I set our heading to ensure we're facing the target node, and then tell the entity to start walking.

This loop essentially boils down to:

1. Did we reach the target for our current segment yet?
2. Set our entity's input values to what we need to move our entity towards the target.

## Tying it all Together

We've gone into detail about how we generate the path, use it for pathfinding, and then how to use those paths to move our entities. But that's not the whole story, we need to tie all these things together. So I'm going to give a quick look at what all that looks like for my Little Buddy pathfinding, and then also some additional things we do to help smooth over failure scenarios for the pathfinding.

**Overview of Important ECS Components and Steps We Use**

1. There is a Graphable MonoBehaviour which is in charge of watching for changes to our tilemaps and regenerates our pathfinding graph whenever a tilemap is modified (because we sometimes destroy tiles for instance), or whenever we've moved far enough that we risk reaching the bounds of the current pathfinding graph. This is runtime logic in my implementation, but I suspect in a lot of, if not most, use cases you'd be doing this graph building logic at authoring time instead. 
2. Our Little Buddies have a **PathFollower** component. This component holds our entities' state about the Path they're currently following, and which Segment of the Path they're currently working on.
3. Then there is a BuddyTagAlongSystem which is watching for the movement of the player. Whenever the player moves to a new tile/node, this system will find the nearest appropriate node that the Buddy should head to (there's a bit of logic hiding in here where we look behind the player and also look downwards to find a valid surface node that is close to, but behind the player). Whenever we determine that the most appropriate node for the Buddy to head to has changed, we'll add a **NewPathRequest** component to it.
4. Whenever one of our Buddies is tagged with the **NewPathRequest** component, this will trigger an asynchronous (because we let it run on a background thread and don't want it blocking normal game logic) call to do the A* pathfinding from the buddy's current node to the target node found in the previous step. When that pathfinding is done, it updates the Path that is stored in the **PathFollower** component.
5. And then the PathFollowing system is in charge of handling all of the path following logic I described above for any entity with the **PathFollower** component.
6. And finally we have a system which is charge of handling the cases when our pathfinding fails us. This system simply watches for and handles a few important problem cases:
   1. If our Buddy is too far from the player, but there is a valid surface nearby, we'll simply have the buddy jump to that valid surface node. It will ignore all collisions and will jump whatever distance it needs to. This is effectively a teleport catch-up mechanism, it just looks more natural.
   2. If we couldn't find a path from the current node to the target node, we'll similarly just jump to it as we did above, ignoring all collisions and effectively just teleporting us to the destination.
   3. If there are no valid surfaces near enough to the player, the Little Buddy will jump onto the player's back and ride along with Nemo until we find a valid surface node nearby again. This is especially great for times when the player is traversing somewhere that the Buddies simply cannot go, such as when climbing around on monkey bars, or floating through the air with the cape.

And with that, you have a fairly exhaustive birds-eye-view of what all of the Little Buddy pathfinding looks like from end-to-end. As a quick recap we talked about:

* Creating a pathfinding graph
* Finding a path using that graph
* Moving the buddies along the found path
* Working around pathfinding limitations
* And how all these systems tie together

## Takeaways

Ultimately I'm really happy with this system. There are a few minor things still I want to clean up, but it's really fun to have your favorite Little Buddy following along with you as you make your way through Slumberland. It was ultimately more work than I originally anticipated, but that is mostly due to my first approach at a solution having a major design flaw that was ultimately not fixable (I won't get into that here since this is already so long).

One thing that was a bit surprising was how these Little Buddies remind me of Tails in Sonic 2, even though this wasn't actually a source of inspiration. If you're unfamiliar, Sonic 2 introduced the character Tails, who always followed along with you like a faux player 2 of sorts. It's mostly just superficial, but it's a really nice touch that adds a bit of fun to the game, much in the same way these Buddies do.

![img](https://i.ibb.co/TvRs4Dq/sonic2.webp)The CPU-controlled Tails character following along with the player in Sonic 2

The Little Buddies were conceived of as a potent upgrade item that players could be excited to collect, while also forcing them to make meaningful choices about which Buddy they currently want to take with them to Slumberland. But I suspect that ultimately these Buddies will end up being more important as a source of flavor rather than gameplay impact thanks to the success of this pathfinding. We shall see if players agree once the game releases.



## Thanks for Reading!

If you made it all the way through, thank you so much for reading all of this. It was quite a long one, but I wanted to try to tackle the whole end-to-end pathfinding solution because I felt like I had trouble getting examples like this from other developer's implementations of anything similar, so I hope seeing how I accomplished this will be helpful if you're ever doing something at all similar. And if you have any feedback about all of this, please let me know. I'm curious if these engineering-centric deep dives are interesting enough that I should do more in the future.

![img](https://i.ibb.co/pKw55wz/bob-backpack.webp)I'll leave you with this quick clip of B.O.B. following along and then briefly hopping onto Nemo's back for a short ride

And one final plug for the Discord: if you wanna ask about some of the finer details of all of this (I wrote my own A* implementation for this if you wanna talk about that for instance), feel free to hop into the Little Nemo [Discord](https://discord.com/invite/9NymgSJAVp) server where I’m happy to go on about all of this at length if prompted. Thank you! 😊

-Dave

![img](https://i.ibb.co/fp2p9m0/hot-beverage.png)
