---

title: Monthly Update 49
description: Solving Traversal Stutter Issues
image: /assets/images/devlog/2026-07-31-preview.png
---

# Monthly Update #49🏖️

I hope you’re all having a wonderful summer (or winter, for those of you on the southern side of the planet). I’m continuing to try to make the most of the good weather while trying to stay productive and on task. But, there’s plenty to dig into this month, so I’ll get right to it! And I apologize in advance for the lack of images, but it's a fairly dry and technical update.


## v1.0.7 Released

I finally managed to get out this pretty mammoth update for Little Nemo. I know I first mentioned Game Genius™ a few updates ago, but that kind of got blocked by the refactoring work I was doing. In [last month’s update](https://diesoft.games/2026/06/26/nemo-monthly-update-48.html), I mentioned the Addressables overhaul and update to a newer version of Unity. That work actually continued into this month as I ended up migrating further to Unity 6.3 and then again to Unity 6.4. I was running into some issues with Unity 6.0 that could be solved by moving to Unity 6.3, and that meant migrating my Fluid Sim to use Render Graph. Then once on Unity 6.4, I discovered a show-stopping bug that could only be fixed by upgrading to a newer version of Unity. This is unfortunate because 6.3 is the most recent LTS (Long Term Support) version of Unity, so Unity 6.4 will get end-of-life'd a bit sooner. But after all of that, I got things into a good place and the game is much better for it.

I also packed in tons of smaller bug fixes and tweaks into this update. But if you’re thinking of revisiting the game, make sure you have the latest version. I also updated the build on itch.io, so if you’re using that platform instead of Steam, you can also find it there!

Last month I called out three things that were next on my list of priorities: addressing traversal stutter, Switch specific performance, and Switch specific tweaks. I’ve made great progress on all of these fronts, especially the former.


## Traversal Stutter 📈

I know I’ve tossed this term around before, but for those of you that are unaware, this is a blanket term for anytime your frame time graph spikes (that is to say, when suddenly the game gets very choppy for a brief moment) due to streaming and loading in content around the player in open-world games. This month I’ve managed to firmly identify all of the areas that are contributing to these spikes, and have been smoothing them out.

### Tilemaps

Most of the world of Slumberland is made up of Tilemaps. I love this approach because the world gets a retro vibe when you can clearly see the grid-based nature of the world. So when we load in new content around the player, that means updating the contents of every Tilemap layer we use (there are several, the main world collision, hazards, Oblivion, decoration Tilemaps, the monkey bars, and more).

Updating the Tilemaps was the single biggest contributor to this traversal stutter because when you update a Tilemap , Unity is doing a LOT of work all on the main thread, and there is no option to background that work. It’s also easy for allocations to get out of hand since you need to provide the Tilemap  with an array of the TileBases that you’re updating in a given area of the Tilemap with. So the work on this front was two-fold:

- Re-use arrays instead of generating new ones for each Tilemap update. I’m using a technique called pooling, which involves saving any arrays you use for later in a “pool” which you can pull from later when you need another, instead of allocating an entirely new one.
- Distribute our calls to update screen-sized chunks of each Tilemap and for each layer over a number of frames. Previously, when the player moved far enough to trigger the loading in of new nearby rooms, we would be updating all of the Tilemaps for each of those rooms as soon as any assets they needed finished loading in (which typically meant they were all updating at the same time). Now we will only update a single layer of a single chunk per-frame. Distributing those over a number of frames prevents that single big spike all at once.

Doing both of these things, and in tandem was fairly tricky, so this one took a bit longer than the other issues I tackled. In the end though, it still happens fast enough that you’re unlikely to reach a room before these Tilemap updates have finished doing their work (and we still have the guard logic in place that the game will pause until everything is ready if you do somehow reach a room too early).

### Tilemap Collision

The collision for the Tilemaps is all handled entirely in my own code since we’re using our own physics system. This is great because it means I can more carefully determine what work needs to be on the main thread, and what work can get backgrounded to just finish on its own time. Doing work on a background thread is kind of like distributing main thread work over a number of frames, but it instead lets the CPU determine how much time to offer to that thread, instead of doing some arbitrary amount of work per frame. It also tends to result in code that is easier to read and reason about, which is always nice.

So while I was already doing a lot of the collision work on a background thread, I actually had even more work that I was able to move to a background thread, and additionally, I similarly did some work here that resulted in fewer allocations whenever updating colliders for a Tilemap. Previously I used to query the Tilemap to get information about the tiles present so I could determine which tiles had collision, but since working directly with the Tilemaps is so slow, I instead now just keep that data on my own when loading in the room’s data, and just determine which tiles have collision without actually needing to query the Tilemap about it.

### Prefab Anchor Instantiation

The next big time cost when loading in new rooms is loading in all of the “stuff” that’s in there. The way the game handles this is pretty straight-forward: static things like simple decorations can just simply get loaded straight in, but for more complicated things, we have Prefab Anchors. You can think of these anchors as spawn points. They need to always be there and need to be distinct from the object itself. Whenever this anchor gets close enough to being on screen, it will determine if that object needs to be spawned by checking a few things: “is the object already spawned somewhere in the world?” or “was the object already collected/destroyed?” and so on.

Previously these anchors used the Hybrid GameObject/ECS system just like most other prefabs, but they didn’t actually need any GameObject. Since the player never actually sees these anchors, they don’t make use of any of Unity’s legacy components like a SpriteRenderer or Animator. And since instantiating GameObjects can be quite expensive, I moved these over to being pure ECS. We simply create the entities for each of these Prefab Anchors using an entity archetype, and the result is that the time spent creating of these anchors is drastically reduced.

### Prefab Instantiation

But when we do actually instantiate the “thing” that the anchor is placeholding for, we definitely need to spawn a new GameObject. These are typically built from some GameObject prefab, and these can often become quite complicated with many components, not to mention the hybrid logic that copies their data into ECS (which I previously [wrote about improving](https://diesoft.games/2026/05/29/nemo-monthly-update-47.html#performance-updates-)). So to speed up instantiating many prefabs at once, we’ll use the same method we did for the Tilemaps and distribute these calls over many frames.

This causes some slight problems because currently other parts of the code are assuming that these objects are instantiated all on the same frame, but after cleaning up those assumptions and making sure we’re able to properly wait for these prefabs to instantiate when they might be delayed for some number of frames, we removed another big single-frame spike associated with world traversal.

And with that, we have the biggest causes of traversal stutter under control. Obviously this work will be critical on the Switch, whose CPU is much less powerful, but I’m excited to get this work into a new build for people playing on Steam Deck or other devices that were encountering these stutters.

There is still one more issue that is somewhat related to the traversal stutter that I would like to fix: when Nemo moves into a new chunk and the map shifts, I’ve noticed that the frame times during those animations get *quite a bit higher*. In general, working with Unity’s UI systems has been a bit of a problem, so I will probably tackle this along with tackling map performance in general because even on more powerful computers, the map can feel a bit sluggish when in the grid/room view.


## Other Switch Port Work

Last month I mentioned there were a lot of platform specific tweaks I needed to make for Switch, so I got started on these. I got all of the easy ones out of the way for now, though I expect more things will pop up as I dig into Nintendo’s documentation again and hunt for things that the game is currently doing “wrong.”

So what sort of stuff did I take care of? The game now defaults to swapping UI confirm and cancel on Switch (so the right-face button is confirm), there is no option to quit the game (you’re just supposed to let the player use the system options to quit out of the game), and some of the settings have been removed or streamlined (e.g. you can’t adjust the resolution manually on the Switch, it should just render either 1080p or 720p depending on console mode). I should note, these menu changes are specific to the Switch port.

I also discovered and fixed some other things that popped up because they only start to become a problem when we're very resource constrained. For instance, when we enter dialogue scenes, we used to keep the world active behind the dialogue. Even though it wasn’t visible but was being rendered, I had never noticed it being a problem. On the Switch however, the dialogue scenes had noticeably poor performance, so I made sure to disable the world while the dialogue scene was active (this is similar to how we already handled the pause menu). Similarly, when the attract mode video played on the main menu, the bedroom stayed active behind the video. On the Switch, however, playing a 1080p video while we’re still rendering stuff underneath causes very noticeable choppiness in the video. So now we disable the bedroom while that video plays. 

When I make these kinds of changes, they apply to all versions of the game. Even though I tended to not notice these are performance issues, any performance gains that this sort of work offers on Switch, even if not *needed* by other platforms, can become battery life gains on something like the Steam Deck. So even if you’re not excited for the Switch release (in which case, it’s very cool that you’re still reading along), I hope it’s nice to know all of the improvements will result in a better game on PC as well.

### Switch Profiling

I previously mentioned that I needed to do a lot of research into the Switch performance to figure out where the major bottlenecks are. So I got started on that this month, and found that there is definitely a lot more GPU bottleneck than one might expect. I got handy with the Nvidia Low Level Graphics Debugger and started looking into what’s slowing things down in various domains.

I believe I’ve spotted some potentially big low-hanging fruit for optimization, but I need to spend a little more time with it. Right now something that really stands out is that Unity’s sprite meshes tend to result in very high-poly sprite renderers. So when we’ve got a bunch of them all layered in the background, we end up with a scene that is rendering a lot of triangles. The other big one is in domains like Valley of Silence, which have a lot of particles, they aren’t getting culled. This one kind of surprised me, but a fine detail I didn’t know about Unity’s particle systems is that it’s really easy to wind up with them being unable to get culled, so they’ll be rendered even when they’re offscreen. The Valley of Silence’s snow causes a lot of particles to be rendered, most of which aren’t even on screen.

I’m sure I’ll find more areas for optimization, but it’s nice to have some clear problem areas to tackle first. This is probably where I’ll be starting on things as we head into next month.


## Current State of Switch Port

So where are things at with the Switch Port right now? Well there’s still more performance work to be done, but we’ve made big strides at reducing the very “spikey” performance issues. And there are some features I want to introduce for the Switch launch as well. So let’s take a look at what’s left:

- Continue tackling performance issues (including specifically improving UI/map performance)
- Implement New Features (Bestiary, Artbook, and make the instruction manual available in-game)
- Get Nintendo to agree that the game is ready and approve it for release.

So there’s still a bit to do yet, but we’re on track. I’m trying to figure out a release date, and also hopefully convincing Nintendo that they should be excited about and promoting the game.


## What About the Soundtrack?

I also wanted to address where things are at with the soundtrack since some of you have been asking. Things are in Pete’s hands right now because each track needs to get adapted into a standard non-looping version of the song. I know he’s been pretty busy with Anamanaguchi stuff, but I’m sure we’ll get to this before the Switch release (or possibly coinciding with it). For those of you playing on PC, I hope you enjoy the in-game music player in the meantime!


## That’s All For Now 👋

Okay, this one ended up running a little longer than I intended, and I know this was pretty technical and probably boring for a lot of you, but that’s just the type of work that’s left right now. As always, I’ll do a quick plug for the [Discord](https://discord.com/invite/9NymgSJAVp) server: I am always hanging out in there and it’s nice to chat with people, so please come on by! Thanks for reading all the way through, and I’ll catch you in the next one.

-Dave
