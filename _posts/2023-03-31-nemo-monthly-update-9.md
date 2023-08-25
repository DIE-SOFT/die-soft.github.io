---
title: Monthly Update 9
---
# Montly Update 9

Hello, Sleepyheads! 👋 Wow, with March wrapping up, that’s our ninth month in development since the Kickstarter campaign ended. It goes by so fast, but it is certainly exciting to look back and see how far the game has come since then. Before I dig into what I’ve been up to this month, I want to give another reminder that last month I sent out  invitations to all of the **special tier** backers to collect information for the special rewards. There are still several backers that haven’t filled those out yet, so please make sure you get to it (and I’ll keep emailing reminders). If you don’t fill out the form in time, I may not be able to ensure your reward makes it into the game. If you’re not sure if you filled that form out and you are a special tier backer, you can always get in touch with me directly via [Discord](https://discord.com/invite/9NymgSJAVp).

Also just want to give a fair warning that I go into a lot of technical details in this post. 🤓



## Steam Deck Prep 🎮

Some exciting news for those of you that don’t have a Nintendo Switch, but are looking forward to playing *Little Nemo* on a handheld: I picked up a Steam Deck this month to help ensure the game will be able to launch with verified status.

![img](https://ksr-ugc.imgix.net/assets/040/445/066/b73a096b72300027987874b1d0241f6f_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1680296819&gif-q=50&q=92&s=c1077372df69a93d88ec0dc7345a7766)A shot of a Little Nemo development build running on the Steam Deck

Right out of the box, the game runs really well and hits the 60fps target simply using the Steam Deck’s built-in support for Windows games using Proton (uncapping the framerate sees it hitting about 90fps on average). If you have the *💾 Early Builds Access* reward and have tried this yourself, you may have noticed that the game drops some frames any time content loads in around the player. This is something that isn’t impactful enough to be noticed easily on a powerful enough Desktop PC, but on a device like this it becomes much more noticeable (personally I’m quite sensitive to these kinds of frame dips, although you might not have even noticed it yourself). Though the systems responsible for this were a known target for performance improvements, it’s helpful to run on a device like this to get a sense of how urgent that need is.

I thought it might be fun to do a quick technical dive into what those performance concerns are and how I plan to ultimately address them.



**Performance Improvement Targets: The Technical Details** 🤖

The first area in question is my code for interfacing between the legacy Unity code (GameObjects and MonoBehaviours) and the new ECS & DOTS systems. ECS/DOTS is still fairly new (though coming out of preview soon) and doesn’t have robust 2D support, so ultimately it made the most sense to roll my own code to support “Hybridism”, or converting my GameObjects into Entities. Most of my game logic is designed to operate in the ECS/DOTS framework, but I still need the GameObjects so that we can take advantage of important MonoBehaviour components such as Unity’s Animator and SpriteRenderer. I have my own Entity authoring components I call “Proxies” that are adding ECS Components to their Entities in a very naive way that results in a lot of shuffling of archetypes in ECS. Essentially, I’m just sequentially adding each of the Components I want, rather than adding them all at once, and this causes the EntityManager to have to keep shuffling things around in memory and is much slower than it needs to be. The end result is that simply instantiating one of my Hybrid GameObjects is much slower than it should and could be, and it can have a noticeable impact on a slower device. Because GameObject instantiation is work that *must* happen on the main thread, it causes noticeable stutter when playing if it takes long enough.

The solution here will be to make my Hybrid conversion process a bit more streamlined by collecting all of the data Components each Proxy wishes to add to the Entity, and then create or find an archetype based on those desired Components and apply them all at once. Although it sounds fairly straight-forward, it will be a decent chunk of work (hence why I haven’t already done it) because it will involve a lot of performance testing to make sure it’s as beneficial as it can be.

![img](https://ksr-ugc.imgix.net/assets/040/445/105/f9dc7ded3af54c3395c7281bff97391c_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1680297178&gif-q=50&q=92&s=ef1573cac75ae745e1b4e7cbef627091)Look, I don't have any good/relevant screenshots to show here as I go into the technical weeds, so have a promotional ECS image from Unity.com 😅

The second area of improvement surrounds the loading in of the Tiles that are in each Chunk of the game world. I make extensive use of Unity’s Tilemaps and some extras they offer on GitHub, specifically the RuleTiles. These are Tiles that can change which sprite is used for a Tile based on its neighboring Tiles. Currently, that logic is run on the main thread and is not Burstable (a performance optimization that is great for this sort of work). So the fix here will be to rewrite the RuleTile’s logic for determining which sprite to use in a Burstable manner, and also to find a way to pre-emptively collect that data *before* we need to render the Tile, so that we can run that logic on a background thread and only begin writing in those Tiles once we know the data is ready.

I believe these two areas for improvement account for the better part of the performance dips that occur every time we load in world chunks around the player, so if I can get them fixed, the game should run *very* smoothly on the Steam Deck.



##  Steam Deck vs. Nintendo Switch 

For those of you that do have both a Steam Deck and a Nintendo Switch, I thought I’d offer a little insight into how I imagine the game will ultimately run on these two devices in case that informs your decision for which platform to get *Little Nemo* on.



**Color**

The first thing I noticed when running the game on Steam Deck is that the colors are quite washed out compared to all other monitors I typically see the game run on. I’ve heard estimates that the Steam Deck’s screen only handles about 68% of the sRGB gamut, and that about tracks with how it looks. Alternatively, the Switch's original LCD Switch screen appears to be 100% sRGB coverage, and when I’ve run the game there, I was *very* happy with the color reproduction. So if faithful color reproduction is something you notice, the Switch will do a better job here. And if you have an OLED model of the Switch (which I do not) I imagine the difference between devices becomes even greater.



**Resolution**

Both devices have a screen that is 1280px wide, so they run at 720p. It’s important to note that *Little Nemo* is designed specifically for a 16:9 target, so it does not take advantage of the marginal extra vertical space on the Steam Deck’s screen. Because the Nintendo Switch’s screen is physically smaller, it winds up looking slightly sharper, but they are running at the same resolution. So both devices should wind up with having very similar/the same picture quality in terms of resolution and sprite scaling.



**Performance**

On the Steam Deck, the game can immediately hit performance goals, so there’s no worry here. On the Nintendo Switch however, early builds have shown that some concessions will need to be made (along with targeted performance improvements) for the game to hit the 60fps target. Please keep in mind that many third-party games on the Nintendo Switch, even 2D ones, typically target 30fps. I hope to be able to hit that 60fps target, but there will be visual concessions (such as a drop in the dynamic lighting resolution for instance). So the Steam Deck is gonna be a clear winner in terms of performance.

As we get closer to the game being complete and I’m able to focus on targeting Nintendo Switch performance, I’ll share more about how that is all shaping up to help you make the decision about which platform you’d like to receive the game on.



## Oblivion Revamp 🌌

Okay, that’s enough about the Steam Deck. Some other non-spoiler work I did this month that I can share is a visual revamp of the Oblivion.

![img](https://ksr-ugc.imgix.net/assets/040/445/158/7d847f21c13cc45c7c8e8d7c21ad2ae8_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1680297673&gif-q=50&q=92&s=3a3d74a2268d63d22ed00b52f579a5b7)

The sprites that I was using for the Oblivion tiles were initially intended to be a placeholder, but I thought they had been working decently enough to not be a priority. But more recently I had realized from talking to others, that *what* exactly the Oblivion *is* wasn’t coming through correctly. It is supposed to be a watery substance, and the rectilinear nature of Tilemaps made that difficult to convey easily.

This new set of tile sprites makes extensive use of the RuleTile logic to round out any corners where one corner of a tile touches any other corner of a tile, which helps gives it a sense of cohesion and surface tension that you'd have with this inky, watery material. The texture used to create the parallax layers within the body of the material was also a placeholder (I was previously simply using the starry night background used for the background of the title screen). Although I really like how that looked, it was always intended to be bubbles rather than stars, so I made a new texture for those layers.

Ultimately I hope that this has the same visual appeal that it did before, while looking a little more polished and better conveying some of the material properties it was always intended to.

![img](https://ksr-ugc.imgix.net/assets/040/445/189/2153a93b8f5e5e0b241ef67414dd5cd1_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1680297884&gif-q=50&lossless=true&s=88a33b1f8b324ee3899a6940011dec19)This is a side-by-side look at the textures used for the tiles and the parallax layers of the Oblivion respectively.



## Spoilers Abound ❗🙈❗

Everything from here on out is a bit spoilery, so read at your own discretion.

Last month I showed off a bit of the Cape toy, which gives Nemo the ability to slow fall and air dodge, but I didn’t have the animations ready yet. So here’s a quick look at the cape in action:

![img](https://ksr-ugc.imgix.net/assets/040/445/194/8cb14995bea816e0e259f1dcbb4013aa_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1680297948&gif-q=50&q=92&s=3916971f9ad2b2b5c401ae442c2fdbd6)

Here you can see Nemo is able to reach platforms that would normally be inaccessible both through the slow fall ability and using the air dodge to reach new heights (as a double jump of sorts). You can also see Nemo passing safely through a Burrchin using the temporary invulnerability granted during the air dodge.



##  Pajama Guardian - Shortcake PJs 🍰 

This month I also worked with one of our most generous backers who had the *🛏️ Design Pajamas* special reward tier. Together we came up with the Shortcake PJs, which provide Nemo with the *Sweets Aplenty* buff causing more candy to spawn when you break open Moons.

![img](https://ksr-ugc.imgix.net/assets/040/445/209/c6999e30a0f4569afacd79751975c1bb_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1680298039&gif-q=50&q=92&s=eca829ebbb32990048983a9225979806)

Nemo wearing the Shortcake PJs

The color scheme and ability were inspired by a character that this backer and I both loved when we were younger (and which you may be able to guess from the name). The color scheme has a base PJ color similar to Nemo’s default PJs, but with strawberry-jam purplish-red hair and line colors, and an ultimately softer and somewhat sepia-leaning palette that creates a nice retro feel I think.

 I won’t name the backer in case they’d prefer to remain anonymous, but thank you so much for your support! 🙌 🍰



## Footsteps 🐾

I also worked with Jonathan Baken (in charge of all of our sound effects) this month to create some new footstep sounds for the Gumdrop Gardens and Mushroom Marsh. You may have noticed in any footage thus far of those areas, the footstep sound and visual effect is the same as it is in the Dreamswept Plains. We actually have a fairly robust system in place that allows each different Tile type to have its own collection of surface effects. Surface effects include any effects that an entity emits when interacting with a surface (running, landing, jumping, bumping into, etc.) and what I call an “effect” is actually a short lived GameObject prefab which includes any mix of particle effects, sprite animations, sound effects, or really anything else we need.

I’ve put up a short YouTube video just showing how these footsteps change as Nemo moves over different types of Tiles. The footsteps are a bit quiet (by design so they don't overwhelm the soundscape) so you may need to turn you volume up a bit:

[YouTube Video Link](https://www.youtube.com/watch?v=c9DZpV5BAEw)



I’ll give a quick technical breakdown of what’s happening here for those interested:

1. Nemo’s run animation is told to emit the “footstep” effect at the precise frame when Nemo’s foot is hitting the ground.
2. Nemo’s effects emitter knows it should always emit the footstep effect from the bottom rear corner of Nemo’s bounds.
3. When surface-related effects are emitted, they’ll check in with the surface we’re in contact with and see if that surface would like to emit the effect on our behalf.
4. The main collision and pass thru collision tilemaps have some logic that will check where the effect is and find the nearest tile, and it will check a dictionary to see which effects collection to use depending on the tile.

While each zone will have wildly different backgrounds, tilesets, soundtracks, enemies, and more, these sorts of smaller details I expect will go a long way to making sure they land just right and start to feel like places you'd want to visit in a dream yourself.




## Other Kickstarter Campaigns! 💚

Before you go, I just want to remind you that Kickstarter is a great way to help indie games get made. There are lots of campaigns running right now which could use your help, and here are a few 2D platforming games that I think you should take a peek at:

![img](https://ksr-ugc.imgix.net/assets/040/445/260/2ccc3a4333ee585d74acf615e7b71e86_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1680298431&gif-q=50&q=92&s=9f270cb82bfd0ce67170e6ecaf13c186)



[Windswept](https://www.kickstarter.com/projects/weatherfell/windswept) looks like a really cute and fun traditional platformer very clearly inspired by one of my favs: Donkey Kong Country 2.

![img](https://ksr-ugc.imgix.net/assets/040/445/264/3bdb3624e71b2f8765e7c445e8c7e7b0_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1680298454&gif-q=50&q=92&s=3bb0dc770d95224f5454d29d3e59fc88)



[Telmari](https://www.kickstarter.com/projects/telmari/telmari) is a game I’ve been following on Twitter because the art style immediately caught my eye. This looks like another more traditional level-based platformer, with a fun new central mechanic.

![img](https://ksr-ugc.imgix.net/assets/040/445/268/0edcf7896e0e9a8e542a2ce384b1ed54_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1680298478&gif-q=50&q=92&s=c92e1497210edaf050fddfa325903506)



[Selini](https://www.kickstarter.com/projects/cymban/selini) looks a bit more like a metroidvania with a focus on exploration and upgrading abilities. This one is a bit of a different mood than what I usually look out for and I wouldn’t call it cute, but it certainly has a very beautiful visual style.



## Thanks so much! 🙌

That's all from me for this month. I've already been working on some stuff that's not ready to show just yet but I'm excited to show it to you all in next month's update. Until then! 👋

-Dave