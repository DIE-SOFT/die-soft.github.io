---

title: Monthly Update 14

---

# Monthly Update 14 🌞



August is nearly over as we reach the final Friday of the month, and although that means we’re heading towards the end of summer 😔 at least we get to dive into another monthly update. Before I jump into it, I just want to shout out the [Discord server](https://discord.com/invite/9NymgSJAVp); come give us a visit there if you haven’t already joined. It’s always nice to touch base with y’all more directly! 😊



## Unity Version Update

![img](https://ksr-ugc.imgix.net/assets/042/069/022/9cee4915946a4af02bcc0c11f9b5a3dd_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1692977563&gif-q=50&lossless=true&s=f24438c9d0d4342e78285a600773a656)

This month I upgraded the *Little Nemo* project from Unity 2020.3 (LTS) to 2022.3 (LTS). Wow! 🎉 … what does that mean? Well here’s a quick breakdown of how Unity’s annual release cycle works:

Each year Unity releases two “tech streams” (20XX.1 and 20XX.2) which introduce new features and often break backwards compatibility while overall improving things and adding new features. New versions of their packages (non-essential features you can opt into) often will require a certain version of Unity meaning you sometimes need to upgrade Unity to upgrade your packages.

Then a third release (which usually happens in the first half of the next year) rolls up all the changes into a “long term support” (LTS) version. This is what you want to target as the version you’ll be using when you release your game because it is considered stable (they’ve been working out the bugs for the last few versions and won’t make any significant changes) but will continue to get bug fixes back-ported to it as needed.

I was previously on the LTS version from 2020, which I had originally anticipated releasing with. However, as we’ve pushed back from the original release target of this year, it makes sense to get more up-to-date. If your version gets too out of date, even if you don’t need any new features, it can potentially pose a problem for getting your build published.

But the exciting thing about this LTS version, which came out fairly recently, is that it allows us to upgrade to the 1.0 release of Unity’s Entities package. This means I can move away from the preview (not suggested for production) version I have been using. There are lots of improvements to this package, which will come in very handy once I get to the optimization phase of development and I need to get every bit of performance possible for the Nintendo Switch.

I could really go into all the details about why I am using and enjoy using Unity’s DOTS systems (Data Oriented Tech Stack), but I will leave that for anyone to come ask me about in the [Discord](https://discord.com/invite/9NymgSJAVp) (we have a #game-dev channel for anyone interested in these sorts of things).



## Content Updates

This month a lot of what I worked on was finishing up things I showed off in the last two updates which were in early states, so I’ll mostly show those off, but I’ve also been working on a portion of the game I am not going to be spoiling at all before release, so I specifically **won’t** be sharing any of that content with you.

We’ve also got some amazing tracks in the work from Peter Berkman, but they’re not quite ready to share yet. Once those get more finalized I’ll make sure to get some videos up on YouTube so you can hear a bit of them because they’re pretty amazing. 🎵



## Spoilers Abound ❗🙈❗



While showing off the background art for the Palace dream domain, it wasn’t quite ready, so I thought I’d show how it’s looking with the more finalized assets in the background.

![img](https://ksr-ugc.imgix.net/assets/042/069/030/1641e750de84146c79f12c4e56dfd60f_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1692977613&gif-q=50&q=92&s=a85682f7171ab24571723ec7b5be05f7)Revisiting the penciled-in Palace outdoor background assets from last month, now with finalized art assets with a depth of field blur

I also got some more tilesets completed, so here’s a look at what the pass-thru, dangle, and alternate collision tiles look like, as well as some cleanup and polish for the main collision tiles (the red carpet is a bit nicer now and there are better wooden details within large solid tile areas).

![img](https://ksr-ugc.imgix.net/assets/042/069/043/b46ca02823e4f950504a27bfa900c7a2_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1692977672&gif-q=50&q=92&s=8388b413d89265952ed71c3e3b3c706e)Finalized tilesets for the Palace domain



## Dynamic Fluids  💨🌊

Two months ago I shared the beginnings of my systems for handling fluid displacement for making some sprites reactive to player movement due to wind or moving through a liquid. I actually ran into a bit of a technical roadblock for a bit (ultimately I wasn’t able to use ShaderGraph for what I wanted and I had to write my shader manually) so I only just got back to it this month, but it’s all wrapped up now and I wanted to show off some of the ways this is used for fun effects.

![img](https://ksr-ugc.imgix.net/assets/042/069/059/5254882174625cee74f68c22ade2b86a_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1692977752&gif-q=50&q=92&s=a0630c5e10fac74243c91dc16cd465ee)The gunk that comes out of the mushrooms here prevents you from running full speed or jumping more than one tile high.

This is the gunk in the Mushroom Marsh which really forced my hand on finally developing this system. I knew it just wouldn’t work without some kind of fluid-like reaction to the player entering and moving through it. As with the Entities stuff I talked about above, there are some really interesting technical details for how this is implemented, so feel free to ask for more info about it! Also shout-out to [aarthificial's wind solution](https://github.com/aarthificial/pixelgraphics/tree/master) which I looked to for inspiration.

![img](https://ksr-ugc.imgix.net/assets/042/069/065/77af4787a6b9ab4d154f0a9b2cd742d7_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1692977793&gif-q=50&q=92&s=13f69974ad39627e70d898bc63ff00df)The bushes can now gently rustle in the wind and react as things move past them.

And here is a use case we already had: dynamic foliage. It’s nice to have this stuff react to the player and other motion because it just makes the simple act of moving through the world a tiny bit more interactive and fun. All these little details add up, so I did want to eventually get this back in here (I had an earlier system, but it wasn’t quite right and worked only for foliage).

And finally, this is just a fun visual effect for a specific area of the game I won’t talk about. It's just a bit of interactive flavor that isn’t very critical, but will hopefully make the entire area it appears in come together that much better.

![img](https://ksr-ugc.imgix.net/assets/042/069/071/aa822e3e9719edd2c8ecac2fdbd22e9a_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1692977853&gif-q=50&q=92&s=39d2f9256c7b6afbc363618e2b8186a9)This is just a bit of a surreal effect being shown without context to highlight some of the more surprising things we can do with this system.



## A Quick Update on the Early Builds 💾

For the Sleepwalkers reading who have access to the builds, I thought I’d give a quick update in case you’re wondering if there will be a new build anytime soon. Right now I’m trying to focus on getting a bunch of the environmental art done for all of the dream domains (there are nine total, the first three are done, I’m roughly halfway through the last three, and then I am going to do the middle three). Because I’m primarily focused on getting these art assets done, I haven’t been focusing on much “level design”, so there isn’t much more to allow access to in the early build. Once I have more of the environments ready I will probably take more time to focus on filling out the world a bit more and allowing access (essentially open up some of those gates that are barring progress). I will let you all know once we get there.



## Until next month! 👋

That’s it for this month’s update. As always, thank you so much for reading and following along with the development. Comments and feedback mean a lot to me, so please share your thoughts below or in the [**Discord**](https://discord.com/invite/9NymgSJAVp). I’ll see you Sleepyheads in another month’s time, until then!

-Dave
