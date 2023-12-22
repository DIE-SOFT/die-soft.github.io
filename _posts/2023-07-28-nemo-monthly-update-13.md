---

title: Monthly Update 13

---

# Monthly Update 13



Welcome back for another monthly update, Sleepyheads! This month really blasted by as I was deeply focused just drawing on my iPad. So for this update I just want to show off a bit of these mid-development environmental assets I’ve been working on for a dream domain you haven’t seen yet. And if you wanna stick around until the end, I’ll have an update on the 🎉 **Animated Intro** 🎉 to show off.

As a quick aside, I have a minor update on my drawing station: I finally upgraded from a 32GB 2018 iPad, to a 1TB 5th gen iPad Pro. I was often running out of space for my drawings (I draw everything with a resolution target of 4K so they get fairly large), and due to the low amount of RAM on the device, I would also often run into layer limit restrictions. And of course the screen is quite a bit larger, which makes drawing much nicer and hopefully has me hunching over my desk less. I got the device for a good deal on eBay, but it was still fairly expensive, so I just thought I’d update y’all on that since I used Kickstarter funds to pay for it. Thank you to all you backers! 😊

![img](https://ksr-ugc.imgix.net/assets/041/764/360/1eacefacacf7c743d3329a040d0b7bcf_original.jpg?ixlib=rb-4.1.0&w=700&fit=max&v=1690558729&gif-q=50&q=92&s=a6e5d108462e577fc2dbb8a306ea8a2a)Photo of my drawing station now with an iPad Pro

Okay, moving on: standard spoiler warnings apply. If you’d like to see new dream domains when you encounter them for the first time within the game, then you should probably stop here. But if you wanna see the nitty gritty behind-the-scenes, here we go…



## Spoilers Abound ❗🙈❗



I’ve been working on one of the later domains, the **🏛️** **Palace of Slumberland** **🏛️**. This is based on the area the original comics refer to as “Slumberland” (though we’re using that term to refer to the entirety of the dream world). This is an ornate palatial wonder that should feel very large and impressive, and there’ll be both outdoor and indoor areas throughout. Another important thing to note is that the Palace has a tower which we’ll be ascending. This will have an important impact on how we design the background, which I’ll get into down below.

![img](https://ksr-ugc.imgix.net/assets/041/764/374/5fd810e61104bec9f9163626fc61d175_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1690558872&gif-q=50&q=92&s=b14bd7ad7f20b63f137013b2421f6c27)Line art and first pass at lighting for the outdoor portions of the Palace

There are details missing here (color and shading), but I’ve got most of the elements at least inked in. I used some of Winsor McCay’s drawings of both Slumberland and the Palace of Ice for reference. If you were to dig into the details, this would look like a nonsensical design hodgepodge, but I think that fits really well with the whimsey of something a kid might dream up simply given the prompt of “palace.” As with the rest of the game, I’m trying to make this my own take on the source material, but I want that feeling of grandeur and opulence that the original comics have whenever they’re set in Slumberland.

![img](https://ksr-ugc.imgix.net/assets/041/764/388/6b77c248456f80bb674bd559a5d9d50d_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1690558941&gif-q=50&q=92&s=a81bf2e401e23b8da8e4aceb244710bb)Nemo falling from above to show off the vertical parallaxing of the Palace’s background elements

In most dream domains, the background does not have any vertical parallax. That’s not ideal, but it’s simply difficult to design around a fixed-in-world-space horizon line, whereas the horizontal parallax is easily solved by simply repeating elements. But since we’ll be ascending a tower in the Palace of Slumberland, I wanted to make sure you get a sense of that height by introducing vertical parallaxing in this domain. When ascending the tower, you'll be able to see through the windows that you’re climbing up into the clouds. It’s a bit more work (for instance, we need to design around what happens if you go below the horizon line, eg. underground) but it will help make this place that much more visually impressive.

We won’t always be outside though as of course we’ll want to go inside the Palace too. This is another way in which this domain is a bit more complex in its art needs. In the Dreamswept Plains for instance, we do have “cavernous” areas, but we just use a simple tile to create a near-background wall and then take advantage of our lighting/effects volumes to make those spaces feel distinct.

![img](https://ksr-ugc.imgix.net/assets/041/764/418/7b214f6409ba985930596f132a7afd3b_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1690559119&gif-q=50&q=92&s=4c17b45b4867153afd525a2c04242c21)Showing the transition from exterior to interior and back again in the Dreamswept Plains for comparison

But in the Palace, we want the interior to behave almost like its own environment (though you can still see the distant background out the windows). For this, we needed a new solution. I’ll try not to get too into the technical weeds on this, but essentially what we’re doing is using Unity’s tilemaps, but rather than using a 1x1 grid as we do for most other tilemaps, this tilemap’s grid matches our screen-sized chunk grid of 20x11 units. And rather than using simple sprites for each tile, we use a prefab. This way we can use the grid to position the tiles appropriately, and then we can use the rule tile’s logic to use the correct prefab based on whether or not it has neighbors in each of the 8 directions, and the prefab can contain multiple sprites at various parallax depths.

![img](https://ksr-ugc.imgix.net/assets/041/764/444/2f31e4e15043406c7b25d7ed3f5e1583_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1690559235&gif-q=50&q=92&s=24ef33a34ad6cb5a4d1f6e6023f6caa0)Showing off the tiling and parallaxing interior background

The end result is an indoor background that seamlessly tiles, with parallax scrolling, and we can add details based on whether or not there are neighboring chunk tiles (such as the marbled wainscotting at the base of a wall). Later we can get to objects that can be manually placed throughout the interior (braziers, suits of armor, etc.), but we want our baseline environment to have a nice starting point. So this is what we get anytime we simply make a room with the "PalaceDefaultIndoor" room type in NemoMaker.

![img](https://ksr-ugc.imgix.net/assets/041/764/481/8aae949fa497abb945ebbf5a29509fb9_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1690559369&gif-q=50&lossless=true&s=c31e1b1b637cb4807686415cde9be53b)An early sketch of the tiling chunk backgrounds and how they might change based on the neighboring chunks

One game series in particular that I was looking at while developing these interior areas is Castlevania (mostly Symphony of the Night). While we don’t want that moody, gothic feeling, those castle interiors tend to be very ornate and beautiful. One thing I think we’re doing better than those games though is that their backgrounds tend to be fixed with no parallax (there are of course exceptions). It makes a lot of sense not to use parallax for these near-background elements, because it can make tiling very difficult since each chunk will overlap with its neighboring chunks’ backgrounds depending on how far “back” it is. But I think even this little bit of parallax is worth that extra effort for two major reasons: 1) it just looks nice to have that little bit of parallax effect on anything in the background, and 2) it helps the player to innately understand what is in the midground and interactable/collidable, and what’s not.

And while on the topic of distinguishing the background and midground, that’s something I’m thinking about a lot when designing the main collision tiles for an area. I know I’ve probably mentioned it before, but it’s really important to me that a player never make a mistake because they thought they might collide with a background element or that they *did* collide with something they *thought* was a background element.

![img](https://ksr-ugc.imgix.net/assets/041/764/504/7389bfeaacb00054550fe4b181777764_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1690559474&gif-q=50&lossless=true&s=c23fb457bae24f936315fe0388893829)A work-in-progress look at the Palace’s main collision tiles

Here we’re using a bright red carpet to highlight collidable surfaces, with a dark wood and tufted velvet look for the rest of the area. The background is relatively bright & grayish, so this dark and colorful design will help it pop from the background. The nice thing about this style is that because of its uniformity, it doesn’t require random variation tiles that you need for things that are more organic, such as the rocky, earthy tiles in the Dreamswept Plains or the icing tiles in the Gumdrop Gardens.

![img](https://ksr-ugc.imgix.net/assets/041/764/521/f394d82577161f58cbf963e2576d78c2_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1690559567&gif-q=50&lossless=true&s=00ac2f952e883788916bbbcccc6f93c4)The actual sprite asset for these tiles. You can see we still need some tweaks and cleanup, but it’s almost there.

Of course there’s a lot more that goes into the making of a dream domain (enemies, gimmicks, props, etc.) but getting this first pass of the environment art done is a huge chunk of the work. So that’s it for the Palace for now. Moving on to another exciting update…



## First Peek at the Animated Intro 🤩

We just hit a big milestone for getting the animated intro done, which is to fully render the first few seconds at the target framerate, resolution, and quality. Of course, what you’re getting here has been converted to a GIF, *but* I hope this is enough to give you a hint of how great this thing is going to look. Fernando has been doing a great job getting this thing put together and I’m really excited about how the final animation will look when it’s fully assembled.

So here are the very first few seconds, which show off how we intend to transition back and forth between fully hand-animated sequences and gameplay sequences. Let me know what you think about how it’s looking in the comments!

![img](https://ksr-ugc.imgix.net/assets/041/764/536/16f49424092fdfd9d0545c1820bf1d5f_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1690559654&gif-q=50&q=92&s=cf1b3bf20cce2c2d5ecada50c32f5846)



## A Quick Reminder to support other Kickstarters! 💚

I just want to remind you all that you should hop into the [Video Games explore page](https://www.kickstarter.com/discover/advanced?category_id=35&woe_id=0) here on Kickstarter and see if there are any campaigns underway that you would consider supporting. I couldn’t be making this game without your support, and there are likely other games that you may be very excited about which could also use your support, so go take a peek!



## Until next month! 👋

Thank you again for all of you Sleepyheads that made it all the way to the bottom. I’m usually just heads down working on all of this, so it’s nice to come up for air and get some feedback on things from you all. The likes and comments are all very encouraging and appreciated. And my recurring reminder: if you haven't already joined, please come visit the [Discord](https://discord.com/invite/9NymgSJAVp) and chat with me 😊

See you again soon, Sleepyheads!

-Dave
