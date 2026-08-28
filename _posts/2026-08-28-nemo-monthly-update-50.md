---

title: Monthly Update 50
description: Continuing with Performance Optimizations
image: /assets/images/devlog/2026-08-28-preview.png
---

# Monthly Update #50☔

Hello, Sleepyheads! We’re up to the **50th** monthly update! 😵 These are a lot of fun to write up and share with you all, but we’re nearly to the end of these as things continue forward with the Switch port. This one is gonna be another tech-focused update, so if you liked last month’s, then grab a drink, take a seat, and get ready for a nerdy read. 🤓

But first, I’ve got some fun updates:
 

## RetroGameCon

We’re going to have a booth at [RetroGameCon](https://www.retrogamecon.com/) in Syracuse, NY this year! This will be in the first weekend of October (on the 2nd, 3rd, and 4th) and it looks like it’s going to be quite a big event. I’ve never been to this convention, but I’m excited to show off the game in-person, and I hope to print out some Steam key codes onto some kind of fun physical item so that I can sell digital copies in-person (no promises though, it’s just something I’m looking into).

![img](https://i.kickstarter.com/assets/054/919/191/5882c3e623cd73deaf4ffec85dd45f28_original.jpg?fit=scale-down&origin=ugc&q=92&v=1787934561&width=700&sig=ulHu524wN5y3afDQET8RclBm5UacHSN14CkkXoORX%2FI%3D)RetroGameCon attracts quite a crowd with lots of vendors and some indie game booths as well!

I’m also excited to go so that I can take some time to look around the event myself. I try not to collect too much retro gaming hardware since it can be expensive and take up a lot of space, but there are definitely some cartridges out there that I’d like to have in my collection. If you’re into retro and vintage gaming, definitely [check it out](https://www.retrogamecon.com/events), and if you’ll be attending, please stop by our booth to say “hi!”
 

## Debug Magazine

For those of us that grew up reading *Nintendo Power* and other physical gaming magazines, they hold a special place in our heart. I recently discovered [Debug](https://www.teamdebug.com/) which is a beautiful magazine that is carrying this torch, and specifically focuses on indie gaming. We were very lucky to have been reviewed in their June - July #16 issue (which you can purchase a physical copy of [here](https://debu.gg/16)) and reviewer Nick Crocker heaped praise onto *Little Nemo* in their two-page spread, ultimately awarding the game a score of **4.5 out of 5 stars**. 🤩

![img](https://i.kickstarter.com/assets/054/919/210/0b3e9b7a5b931eab7a9051732f546175_original.png?fit=scale-down&origin=ugc&q=100&v=1787934596&width=700&sig=RGaSlzWAPrXPdo4u%2BP1dEtM4ua%2Ft7SJcM8utbGV%2BLCI%3D)If you wanna read the full text of the review, please support Debug by picking up a copy of issue #16

I just want to share a small snippet from the closing of Nick’s review here:

*"Little Nemo and the Guardians of Slumberland" is a thoroughly charming adventure. It understands that childhood imagination isn’t simply about whimsical imagery – though it certainly has that in buckets and spades – but about seeing limitless possibilities in ordinary things.*

It’s a special kind of rewarding to see the game you worked on for so long be praised in a physical print magazine. I’ve been eager to get my game onto Nintendo Switch because I always knew it would feel really special to see my own game on a Nintendo console, but this is a very rewarding circumstance I had never even considered. Thanks so much to Debug, not only for reviewing *Little Nemo*, but also for helping to keep the print magazine dream alive. 🙌
 

# Let’s Get into the Details! 🤓

Okay, now onto what I’ve been up to this month. I actually don’t have very many distinct topics because I’ve mostly been focused on two major things, but there’s plenty to talk about here, and also how this performance-work ties into how the game has been developed throughout.

First off, following up with what I discussed last month:
 

## Traversal Stutter Follow-Up 📈

[Last month](https://diesoft.games/2026/07/31/nemo-monthly-update-49.html#traversal-stutter-), I discussed in detail how I was tackling the various issues that were leading to traversal stutter. At the time I thought I was mostly done, but once I got to QA testing my work from July, I discovered there were quite a few issues and there was still a bit of work to go to make sure the game worked properly after a pretty big overhaul to how we load in and instantiate the world around Nemo.

I think to give you an idea of why this work was so tricky, I should break it down from a high level:

Almost all of the traversal stutter issues came down to the problem of: we have a bunch of objects and world that we want to instantiate all at once (because everything in a room loads in at once, and we often load in multiple rooms at once) and instantiating those things into the world can take up quite a bit of time on the main thread, meaning the game will simply wait until that work is done to continue, resulting in a stutter.

So the solution is to spread that work out over multiple frames. Since we know we can’t finish that work in a reasonable amount of time on mobile hardware (that is, a matter of a few ms, since we only have a 16ms budget each frame), we’ll do some amount of it each frame, then continue with the work on the following frame. Sounds easy enough right?

The issue is that previously we were dealing with synchronous code: so we’d call, for instance, our method to instantiate all of the prefabs that should appear in a room, and we’d know as soon as that method returned, that all of the objects would be instantiated. Now we need an asynchronous method that will instead return us a Task which we can then wait on. Additionally, we’re going to want to pass in a CancellationToken to any of these async methods so that they can gracefully handle being cancelled (for example, if Nemo suddenly wakes up while we’re in the middle of instantiating things, we need to tell it to cancel that async operation so things from Slumberland don’t start spawning into Nemo’s bedroom).

Additionally we now need to deal with any side effects that might show up due to code operating under the presumption of things being instantiated on the same frame that we request those instantiations. Luckily, a lot of this code is already async, since we first need to load in the prefabs from disk into memory, but there were definitely some tricky issues popping up due to assumptions about those prefabs actually getting instantiated immediately once loaded.

So ultimately, I ended up needing another two weeks of work on these refactors to get things into a good place. Here are some *fun* bugs that popped up while getting this stuff all ironed out to give you an idea of how impactful it can be:

- Trying to load a room while it was already unloading (easy to cause in some scenarios where you can move through the world quickly) would cause it to simply not load (while not being aware that it wasn’t loaded), allowing Nemo to walk into completely unloaded areas.
- Boo-Hoos, the owl mask enemies that haunt some items, were once again sometimes failing to spawn (this was actually a new way for an old bug to occur that originally happened around the time we launched). Boo-Hoos do some unique stuff because they’re closely associated with another object in the world and their lifespan is tied to whether or not that item still exists, but also we need to account for that item simply not being loaded in yet.
- Prefabs in a room that exceeded the room’s bounds such that its center point was equal to the boundaries of the room could cause rooms to simply fail to load. This one managed to give me quite a headache chasing down what ended up being a very simple fix.
- Pausing the game while this async instantiation was happening would break everything because we disable the world while paused, and we need the world to be enabled to spawn things into it.

But now I think this stuff is all in a good place and performance has drastically improved. I’m looking forward to getting this out in the next update, but I’m going to keep forging on ahead with other improvements before I take the time to actually fully QA and test another new build (and there are some crashes players are experiencing in v1.07, which I should address before making a new build as well).
 

## Map and Mini-Map Performance 🗺️

With these traversal stutters out of the way, the next biggest performance issue that stood out while profiling was the time spent with the mini-map, specifically when it pans the map every time Nemo enters a new screen chunk. But you probably also noticed that simply zooming out on the map screen results in pretty poor performance. What’s going on here?

![img](https://i.kickstarter.com/assets/054/919/229/9e6a866eda5fee7677db1095764614a0_original.png?fit=scale-down&origin=ugc&q=100&v=1787934709&width=700&sig=pygaYgST0KxPBhQIgcj45GQ6H1bgionGyyVHmNTrFYY%3D)Don’t look too closely at this if you’re avoiding spoilers! But here you can see how the map screen can get quite complex when zoomed out.

### How does the map work?

Our map and mini-map both use the same rendering logic, just with some different behaviour logic (because the mini-map is a bit more complicated due to needing to update live). What’s neat about our map is it’s using a lot of the same logic that the world itself uses to load in, just a little differently:

- What are our loading bounds? (In the map’s case, it’s whatever the visible area of the map is, which changes as we pan and zoom)
- Load in the room from disk for every room that appears in those bounds
- And now render that room: in the map’s case that means creating the background, the edges around it, and icons for any prefabs that appear in that room.

The way each room is rendered is broken into three tiers, where the sorting order is important (so later items appear on top of earlier items):

- The room’s background color, the chunk grid, and each chunk of the room that we’ve explored should be colored in.
- Then we have each edge of that room (and any icons needed for those edges, such as lock icons).
- And finally we have the icons for anything that is in that room (although some icons are special and get rendered separately which I’ll describe below)

![img](https://i.kickstarter.com/assets/054/919/236/af67a8bc779a301e9f258d71db54225b_original.png?fit=scale-down&origin=ugc&q=100&v=1787934773&width=700&sig=%2F6S0krZmOP1ESHxJChsStY5FvwNwMyXptkKWdehw3oQ%3D)Here I’ve scribbled annotations onto the map view so you can tell exactly what I’m referring to

The version of the map in the currently live version of the game is pretty naive and I’m just using Unity’s UI Images to render each element. So a room ultimately has *several* renderers: one for the background, one for the grid, one for each chunk colored in, one for each edge, and at least one for each icon.

Once we zoom out and have lots of room loaded in, it’s simply too many Canvas Renderers for Unity’s UI system to handle in a timely fashion. To make it work, I needed to combine multiple renderers into one using quad meshes. This gets a little too complicated to go into much detail here, but essentially if we pack our sprites into the same texture, we can combine multiple elements into one, which speeds up the rendering process.

So with a little work, we’re able to reduce each room down to only needing TWO renderers instead of many. We need two because of the importance of the layering I described above. The first quad mesh combines the background, the grid, and each chunk getting colored in. The second mesh contains all of the edges and the icons. The icons would ideally get their own mesh to go into, but we can get away with packing them in with the edges by simply adding them last (so they’ll go on top of the edges in that room). There is a small risk due to this optimization that icons can be overlapped by edges from adjacent rooms, but it should rarely if ever happen.

One small catch with the icons is that some of them aren’t simple sprites: NPC icons often have an animated exclamation mark over their heads, Flip often has a “look over here” effect on her icon, and important upgrade items have a glowing, attention grabbing, animated effect behind them. For those icons, we continue to use the old code path and render those out by instantiating prefabs with their own canvas renderers, and for simpler icons which are just sprites, we bake those into our combined quad mesh.

![img](https://i.kickstarter.com/assets/054/919/241/f74cd1c3979bef8e92b6ebdcdfc6d5de_original.png?fit=scale-down&origin=ugc&q=100&v=1787934798&width=700&sig=CxH7lNePoU6wEh0YH9qE8BacBow9f43WkXI5rL%2FvDFc%3D)Here you can see like-for-like performance of the map when zoomed out in a worst case scenario, and the spike that occurs when we start panning around. On our profiling target of Steam Deck, it went from sub-30fps, to well within 60fps.

The result after all of that is map performance on the Steam Deck at 1080p comfortably at 60fps. I should mention: though I imagine most players are playing the Steam Deck in handheld at 720p, I like to target a 1080p docked mode because the Switch is even less powerful, so I want a more aggressive profiling target.
 

## Why is it all so complicated?! 😵‍💫

I’ve gone into all of the fine details here, but at an even higher level of dissecting this, why is it all so difficult and complex?! Why is it taking so long to address these performance concerns? There are a few things at play here, that I think it’s worth getting into. Consider this a bit of a post-mortem more generally for the game.

### 1. The game is overly complex:

*Little Nemo* is effectively an open world game. Loading in the world around the player (as opposed to using a black screen transition) is something I knew would add complexity to the game, but even still I probably underestimated it. For instance, because we’re always in the same scene, I need to dynamically re-center everything around the world’s origin point to help keep floating point imprecision in physics to a minimum. This alone has turned out to be a recurring pain point throughout development

### 2. Much of the Game was developed on the fly:

While I was generally good about developing things in a sensible way that I would be able to continue to iterate and build upon them, I frequently added features to systems they weren’t originally designed for. This becomes a problem because when you don’t design a system for all of the use cases it ultimately handles, those new use cases are more likely to be tacked on with more fragile code that is easier to break when you then come along and change things *once again*.

### 3. Later development moved even faster:

When writing features which were added late into development, I was often less careful about making sure the code was robust. This made sense because a) since we’re close to done, it’s less likely I’ll need to add more code on top of it, so fragility is less of an issue, and b) I’m feeling more pressure to finish up features more quickly. I think this is mostly a sane way to approach late feature development: we have a strong, robust core of the codebase, and it’s okay to write some more fragile and immediate-results driven code on top of that. But some of that code is the stuff which needed to be iterated upon to get performance where we want it.

### 4. Lack of unit and integration testing:

This somewhat ties into the last point, but I think this happened even earlier in development. Some of my most foundational bits of code have test suites to make sure they do their job correctly. Writing tests is a great way to prove out baseline functionality without having to manually test that things work in different real use case scenarios. Fairly early on in development though, as systems started becoming more complicated, I felt these would be less impactful vs the time it would take to write them, and I stopped writing tests. In a one-person dev environment, this very well could have been the correct call to make. But the result is that sometimes I wind up having to work through long compile times, then launch the game, get it all started up, and then run into a bug that is simple enough that a unit test would have caught it much faster. I probably should have been better at identifying specifically the things which would have benefitted from unit testing (they are great for testing functionality of small, atomic systems).

### 5. General codebase size and scope:

The *Little Nemo* codebase is large enough that testing something dead simple can be a minutes long operation (Unity needs to recompile the code, reload the domain, launch the game, then I need to actually get into the game, get to whatever game state I need to be to test the thing, then run my manual test). Oftentimes I’m working through issues that I don’t fully understand, and I’m just trying to poke and prod to figure out what’s going on, which means doing rapid iterations of the above flow, so I end up spending 30-60s each time to iterate on something which I only need a few seconds to actually test. A recent upgrade of my computer (importantly going from 16 to 32 GB of RAM) has sped up this process significantly and fixed the very frequent out-of-memory crashes I was getting from Unity towards the end of development, but this is still one of the slowest aspects of working on the project.

### TLDR;

This is a large and complicated game and some of the features which need performance improvements are built with code that is a bit more fragile than is ideal. I think this is the sort of stuff that is probably helpful to read for anyone that is curious about game dev, or even that is just curious about why it seems to take so long to make games.
 

# That’s All For Now! 👋

Okay, sorry to those of you that don’t like the very technical updates, but I hope everyone else enjoyed this look into the optimization work I’m doing. Next month I hope to have more to announce about the Switch version, but there are still tasks remaining from the [list I shared](https://diesoft.games/2026/07/31/nemo-monthly-update-49.html#current-state-of-switch-port) in last month’s update. I’m a little behind in that I had hoped to be all done by summer’s end and just waiting for a good date to release on, but I think the biggest and scariest performance concerns have been ironed out.

Next month, I hope to dig into some fine details of the GPU optimizations I’ll be doing specifically to get things running smoother on the Switch based on my [earlier Switch profiling](https://diesoft.games/2026/07/31/nemo-monthly-update-49.html#switch-profiling), so be ready for another *in-the-weeds* update next month. But I also hope to share details about some of the remaining feature work to be done! So stay tuned, and I’ll see you all again next month. Oh and don’t forget to come by the [Discord](https://discord.com/invite/9NymgSJAVp) server to say hi! That’s often where I share exciting news and such first, or just chat about whatever game I’m playing on the weekends. I hope to see you there!

-Dave
