---

title: Monthly Update 12 - Anniversary Post

---

# Monthly Update 12: Anniversary Post



Wow, can you believe it?! The Kickstarter was wrapping up one year ago and we were just getting started with sharing our progress on the game. It's amazing how quickly that time goes by.  But this game's story starts even before the Kickstarter of course. I’ve been working on *Little Nemo* since well before then, so to celebrate this anniversary of the Kickstarter, I thought it would be fun to take a quick look even further back, to January and February of 2019 when I was just getting started on this journey and posted my first few updates to Twitter.



## Screenshots from Very Early Development 

One of the first things I shared on Twitter was a sketch for [Nemo’s run animation](https://twitter.com/diesoftgames/status/1090696554384625664). I wasn’t yet ready to share that this was going to be a Little Nemo game, so although you might be able to tell the character is wearing PJs, there is very little detail. This was mostly for finding motion I liked.

![img](https://i.kickstarter.com/assets/041/469/717/cbf8c7e0ef0c5d976f51d5d5784cfcf2_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=YfdeqDGTLGN1qfraMeq9Q2QTr0u%2FpFIRp7fVmOSPh3M%3D)First pass at Nemo’s run animation. There is little detail and no secondary animation such as the bouncing hair and PJ hood.



At this time I was learning to animate and finding a style I liked, but also finding a process workflow for making the art and animations and getting them into Unity. I believe this animation was drawn in Photoshop with an Intuos 4, before I settled on my current workflow of drawing everything on my iPad with Procreate.

I was also just getting the earliest iterations of my character controller figured out. Here is one of the [first looks](https://twitter.com/diesoftgames/status/1093618367645257728) at my character controller tied together with the placeholder animations for idle, running, and jumping.

![img](https://i.kickstarter.com/assets/041/469/725/9909ad90f1f926a6b1fbbf27bd0a3b9c_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=P3%2FRYhxwZ0RDoFhKvybvAFTFjNzqmrAhw72TsIau7Xc%3D)Nemo running and jumping for the first time.



This has changed and grown so much since then, but you can see that a lot of things I had pinned down early on here such as the jump height and running speed, which are still mostly unchanged.

One of the other elements I knew I wanted to pin down very early was the feel for Nemo’s room. It needed to have that sense of quiet repose to contrast your adventures in Slumberland. Here’s the earliest iterations I shared back then of [Nemo’s Bedroom](https://twitter.com/diesoftgames/status/1097950001815322624).

![img](https://i.kickstarter.com/assets/041/469/737/29f758b0366763da29f7f0108177aafb_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=tPvGr8D7JQQj8yniqmB%2BWmzuDfMO22BF1dc%2BfjEyFHc%3D)



I hadn’t even begun exploring the colors yet, I was figuring out the layout and how the parallaxed elements would work together, and the general lighting. Much like the other images above, though the details have changed, you can clearly see the line it took from there to where it is now.

The thing that’s funny about sharing these old animations is how rough they look in comparison to what’s in the game now, but back then, I could *see* what I was aiming for. These were just my best attempts at sharing a hint of what I was trying to convey.

By the time we got to the Kickstarter last year, you could see the fully realized version of the bedroom for comparison.

![img](https://i.kickstarter.com/assets/041/469/759/6c0f7c12249d60cb0dc10c30b236e9dd_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=zcdLsAR3M8UtPRr4mirq3ykxmha0CQt1rrtsiXbEFGI%3D)Nemo’s bedroom as it appeared in last year’s Kickstarter

Making a video game is a fairly daunting task as you’re constantly reminded of just how much work it is every step of the way, so it’s nice every now and again to take a look back at the steady progress you’ve been making. 😊



## Spoilers Abound ❗🙈❗

I don’t want to just leave you with reminiscences about this game’s humble origins. Let’s also get into what we’ve been up to this month! This is getting into some very spoilery stuff, so standard warnings apply here!



## Toy Adjustments 🪀

First up, I’ve pinned down the mechanical operations of some of the toys I wasn’t previously 100% happy with. Specifically the Bubble Wand and the Grapple Yo-Yo.

One of the goals I have for all of the toys is they each need to provide you with some unique ability, which is fun to use in and of itself, but also allows you to reach new areas you couldn’t have otherwise. And they should do so without simply being “keys.” My initial ideas for how to make the Bubble Wand grant the player access to new areas was to use water and have the Bubble Wand allow for new interactions within water. The problems here are a) I didn’t like any of the ideas I had come up with for exactly how those interactions work, and b) I often find that underwater areas are simply not fun for me. They change up the core movement gameplay too much and often in a way that feels sluggish. So for now I’ve created a gate that can only be passed with the bubble wand, by blocking this “enemy’s” attack.

![img](https://i.kickstarter.com/assets/041/469/811/6299d0745926616d9f301b8e9f16c97e_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=GPe1sLfvyWUIGg7KRAeLmYisMoWRJhTrnBNAn0qHvCg%3D)Nemo trying to get past an enemy designed to be countered with the Bubble Wand toy.

This gate will quickly close down hurting you and pushing you back. You’ll need to block its attack to get by (or if you’ve managed to get other toys out of sequence, you might find another way under it).

The other toy I wasn’t happy with was the Grapple Yo-Yo. It needed to be more lenient about connecting with the anchors, and also the release trajectory needed to be more predictable. Now is it’s much easier to hit the target as you’ll be magnetized into the start position with a quick tween into place, and then when you release the swing, you’ll release from one of three exact positions with one of three exact velocities. This means you can always reproduce an exact swing trajectory and use them much more reliably and intuitively.

![img](https://i.kickstarter.com/assets/041/469/828/85dc1db3bceb36c750580310537596d3_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=lEsPZ5MTiGEpGTtdvLttY0eP07ulAyZjFlTqp7gw8nU%3D)Here you can see the Grapple Yo-Yo is much better about attaching to the anchors, and the release trajectories occur at fixed positions and velocities



## Some new Characters in the Gumdrop Gardens 🥸

The Guardian of the Gumdrop Gardens is Jules. She’s been transformed into a Narwhal, and as with Minerva, you’ll need to find her scepter to help her transform back into her human form.

![img](https://i.kickstarter.com/assets/041/469/836/14e945e236a6ad63792e0afa0e3552e2_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=u%2BLtSI3kAgkxVcjfJP7rEbUp0hx1JlS8nUDsaepfxCk%3D)Jules stuck in Narwhal form

![img](https://i.kickstarter.com/assets/041/469/840/223defbefd1bc3176f239e7722831f4a_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=%2BgF7W5O%2FYwjM85zlQDe2JCMklUMaDtpIJM5Pi7F%2Foy0%3D)Jules excited to be back in human form

There’s another character you’ll be introduced to in the Gumdrop Gardens, but for now I’ll just share this concept sketch to pique your interest.

![img](https://i.kickstarter.com/assets/041/469/845/46c70c9b37d8b20053062b1f8861cf16_original.png?fit=scale-down&origin=ugc&width=700&sig=tq1%2FR2kb0Z5VTBaz2yvfkkGMy4Pb%2BWwqBSLxhR2weJY%3D)Mystery character?!

This character’s attire looks a bit like what Nemo used to wear to the palace. They seem to be keeping their identity hidden though… 



## In-Game Books 📖

One of the things I’ve started tackling this month is pinning down the details for how I will be handling some of the in-game features that were introduced as Kickstarter stretch goals / bonus rewards, such as the In-game Instruction Manual. I’ve been planning out the systems and UI for having these in-game, and also have begun to sketch some layouts and text contents for the Instruction Manual. I’ve designed the layout after the format used by NES manuals. Here’s a quick peek:

![img](https://i.kickstarter.com/assets/041/469/852/75c3591ecb92f474bbb3345ddf29bb41_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=o7aE8oVH2e3piFmg1%2Ff2VQrkZPdqg9Xzwq4nutnTpnA%3D)A very early sketch for the layout of the Instruction Manual shown with pages side-by-side

Something I’m keeping in mind here is that these booklets will likely appear in-game as fully rendered images (this will allow me to share the same source files for the PDF and possible print versions), so the text will not be dynamically sized. My intended solution for this case is to make sure you have pan and zoom controls available when browsing books. This will be dual-purpose: it will allow you to read any text that may be too small, and also allows you to take a closer look at any artwork you want to get a better look at.

The instruction manual, artbook, bestiary, and music player (something that wasn’t a stretch goal, but I’d really like to include) will be available in a new “Extras” Pause Menu screen that will appear below the Status/Map/Settings carousel. I’ll share a better look at that in a future update as it gets further developed.

# **Dynamic Foliage and Fluids Movement 💨**

In much earlier builds of *Little Nemo* I had a solution for dynamic foliage that would sway as Nemo passed by, but it wasn’t quite as robust as I wanted and was not as performant as I needed it to be. So this week I started work on reintroducing a better pass at this because I want fluid displacement for some “gunk” we have in the Mushroom Marsh and this ultimately is the same solution as needed for making foliage sway.

![img](https://i.kickstarter.com/assets/041/469/858/d1177fbe6bc2dc3d9d0a38e91e1efb19_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=VMrgMA4Ga1s9t0VlZqTseqtWJlnilLaQKrdcg5wI8Fs%3D)Debug views in the right-side corners show the tracked velocity of dynamic diegetic bodies

This is all very much a work-in-progress, but I thought I’d share this debugging view I’m using right now. We’re creating a 2D texture which tracks the velocity of all diegetic dynamic bodies that are on-screen. The result is very similar to a normal-map with the colors representing velocity in the four cardinal directions.

![img](https://i.kickstarter.com/assets/041/469/863/f6b7b693a7d3700a4aee76ddc9318b4e_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=mUGOq3V7f%2F28M9Ec5FXPBR9xhcUrqSVXdvas8jRaEkI%3D)Nemo walking through a prototype for a “gunk” hazard that will appear in the Mushroom Marsh

You can see here my greybox pass at the Mushroom Marsh gunk. This is another domain-specific gimmick in addition to the bouncy mushrooms, intended to help create a unique platforming identity for the area.  This gunk hinders your jumping ability so you can only *just* jump out of it. There are also some nasty nightmare creatures (the Marshwallows) that seem to like it. You’ll meet them in a future update.

The next step for this “fluid simulation” is to convert this velocity texture into a displacement texture which expresses a spring-like reaction to the velocity of moving objects. Once that step is done, any material will be able to access that texture so they can use it to displace their sprites to appear to sway or ripple in response to movement.



## That’s it for this month!

Thank you so much for following along with me on this journey for the past year. It’s really great to be able to share these updates and musings on game dev with all you Sleepyheads. And a special shout-out to everyone hanging out and chatting with me in the [Discord](https://discord.com/invite/9NymgSJAVp) server, there's always room for more, so come visit! Oh and just a quick reminder: if you wanna share with your friends that are not backers of the project, I’ve continued in the trend of publishing another previously backer-only post to our website. The latest is [Monthly Update 7](https://diesoft.games/2023/01/27/nemo-monthly-update-7.html).

Okay, until next month, Sleepyheads! 👋

-Dave
