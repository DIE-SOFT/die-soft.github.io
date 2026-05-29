---

title: Monthly Update 47
description: Music Player is out, Game Genius coming, more performance work
image: /assets/images/devlog/2026-05-29-preview.png
---

# Monthly Update #47 ⛅

Hello, Sleepyheads! I’m writing this update from outside because the weather is finally getting nice out (it has been a very cold and wet spring around here). I hope you all are having similarly beautiful weather right now.

It’s already been 4 weeks since our last update (despite that one arriving a week late), so I’ve got some updates to share with you about how things are coming along with getting the game ready to release on Nintendo Switch later this year.
 

### What’s New ✨

Before I get into it, I should apologize for the lack of images and animations in here. There's not much of visual interest to share with these updates, so it's gonna be a bit dry. But here’s what I’ve been up to this month:

#### Game Genius™️

One of the big flaws in the game I’ve been meaning to smooth over is that the hunt for 100% can get a bit tedious since you’re stuck just trying to find everything yourself without any guidance. This new feature replaces the Powerline to the Professor’s “What should I do next?” option with “Game Genius” once you’ve seen the final ending. This service provided by the Professor will show you roughly where to look for a secret on your map. So if you’ve completed the game, and have some candy to spare, you can use the Professor’s Hotline kiosks to help you determine where you should head to next to make some more progress towards 100% completion.

I’m still putting the finishing touches on this one, but it should be in the next update that I release for the game, so keep an eye out for it if you’ve been stuck at 98% completion looking for some help with those last few secrets. 😄
 

#### Music Player 🎵

As mentioned in last month’s update, this one has been in the works for a while. I had originally intended this to be in the game at launch, but I ended up spending more time on it and making it a little more fun. When you collect **Cassette Tapes** in Slumberland, you’ll unlock a specific Music Track, which is available from Main Menu > Extras > Music Player. Here's a short video showing it off:

{% include youtube-embed.html id="SURddjgMtds" %}

When you start up the Music Player, you’ll see any tracks you’ve unlocked (and ??? for any you have left to find) and can select them to listen to the music loop, just as it does in the game (most of the tracks typically have a short intro and then a separate looping section), and you’ll see the background updates to show the domain that music is from. Nemo will run along the bottom of the screen so that you can enjoy the background scrolling past as you take in the music. I was trying to make something that would serve a similar need as those 10 hour loop videos on YouTube: you just find a track you wanna hear, and listen for as long as you’d like, with some nice matching visuals.
 

#### Performance Updates 🤓

This section will get a bit technical, so if you wanna skip it, the tldr is that I’m making good progress in addressing one of the biggest performance bottlenecks: object initialization. But if you want the more interesting details, read on:

*Little Nemo* uses Unity’s Entity Component System (ECS) for most of the game’s logic, but this stuff is all relatively new and Unity didn’t have good solutions for bridging the legacy GameObject world with the ECS data and logic, so I built my own early on in development. Generally the way I do things is create MonoBehaviour-based “proxies” which are designed to add any relevant components to that Entity (e.g. the DynamicBodyProxy adds components like Acceleration, Velocity, and Translation). I’ve been doing this the very simple way, which is to just sequentially add components to the entity, but that is not the optimal way to do things. Instead, we ideally know all of the components an entity will have before we actually create it (this is called an “archetype”) to prevent the overhead cost of continually adding new types of components.

So I just finished changing how my GameObject to ECS conversion logic works so that it can create these entities in the most optimal way, and I’m now in the process of hunting down all the side effects and bugs that it will have caused (it changes the timing on things slightly which exposes anything which may have unwittingly relied on the specific timing of how the entities were added before). Once it’s all done, this will help reduce the stutters that occur during world traversal due to creating new objects in the world.

Once that is wrapped up, the next big problem for world traversal stutters is the Tilemap reloads. As we build the world around Nemo, we need to put new tiles into the tilemaps and update colliders, the former of which takes much longer than it should. You might think the collider stuff would be the slow part (we calculate maximal bounds rectangles out of all of the tiles and then create compound colliders for them), but that is all my own code and it's been designed to run in a non-blocking way with minimal blocking of the main thread (so less stuttering, it just updates the colliders when they're ready) whereas the Rule Tile logic is just some code that Unity provided in a helper project, and it is really bad about hogging the main thread with lots of work. So look out for updates on that coming up next!
 

#### Bug Hunting 🐛

I’ve also been continuing to track down and fix bugs. I’ve fixed a few smaller bugs this month, but spent most of my bug hunting time trying to track down how some of the weirder stuff is happening. I may have made some progress on this front, but it’ll be tough to tell until I get an update out and more people are playing it and I can see how frequent the issues are.
 

#### Localization and Marketing 🧑‍💼

I touched on these two concerns in last month’s update. They are ongoing as I’m trying to budget out translations as well as potentially getting some more help with marketing. I’ve also been experimenting with changes to the Steam page to see how some new screenshots and copy do for getting people excited to play the game, but it’ll need some more data before I know how successful it all was. This stuff has continued to be a slightly more outsized time sink that it represents here just because it’s not particularly exciting stuff to write about.
 

### What’s Next❓

Right now, for progress on the Switch port, you’ll probably see more talk of the Steam Deck. Once I get these traversal stutters addressed, and find the bugs that are causing performance to drop, we’ll have a really great and stable 60fps experience on the Steam Deck, and that’s when I’ll be ready to start focusing more directly on the more platform specific optimizations I need to make for the Nintendo Switch.

So this is all still in the works, and I don’t have any dates to share or anything, but things are coming along nicely, so stay tuned!
 

### Until Next Month 👋

As always, thanks for reading along with the updates. Make sure to come hang out in the [**Discord**](https://discord.com/invite/9NymgSJAVp) if you want the most timely updates on how things are coming along, or if you just wanna chat or ask questions! Until next month, Sleepyheads!

-Dave

![img](https://i.kickstarter.com/assets/053/915/849/c6ae5595d2e479d177ad02837c5676d5_original.png?fit=scale-down&origin=ugc&q=100&v=1780068656&width=700&sig=I8ioxvutQn81LqJ6XsnMNhXF%2BqeDz0QGjuZfwWyYcm8%3D)
