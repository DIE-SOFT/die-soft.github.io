---

title: Monthly Update 24 - Second Anniversary Post
description: Recapping some fun updates
image: /assets/images/devlog/2024-06-28-preview.png
---

## Monthly Update #24 - Second Anniversary Post 🎉

Welcome back, Sleepyheads! This is our 24th monthly update since the Kickstarter campaign wrapped up, making this our **two-year anniversary** post. Even though we’re past our initial target date for release, I still think it’s important to celebrate this milestone. Despite this delay, we’re still making great progress and the game is always marching closer to completion. So with that in mind, I thought I’d take a moment to share some of my favorite bits of tech and content that have come together over the last two years since the Kickstarter wrapped up.

(And if you want to take a look at [last year’s anniversary post](https://diesoft.games/2023/05/26/nemo-monthly-update-12.html), I took a look back at what the game looked like well before the Kickstarter when it was just early concepts and animation tests).
 

## Recapping My Favorite Updates 📸  

### Nemo Maker (and dynamic world loading)

(See [this update](https://diesoft.games/2022/08/26/nemo-monthly-update-2.html) for more)

Nemo Maker is a really cool tool that allows for rapid testing and exploration of platforming ideas. It is inspired by, and functions much like Nintendo’s *Mario Maker*, allowing quick placement of tiles and prefabs, and allowing you to quickly hop in and test that idea out.

![img](https://i.kickstarter.com/assets/045/552/576/3ed4a1d64de5fd387442aed32540b509_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584593&width=700&sig=CdAEMuk1SWla7FIXFNIUZv5NCZoGkbX5us0GMbteo4c%3D)

But it also ties into the way the world is authored, which is that it is made up of JSON-based rooms which are dynamically loaded in around the player as needed. The Nemo Maker authoring tool and the tech that allows for the rooms authored there to load in dynamically go hand-in-hand.

![img](https://i.kickstarter.com/assets/045/552/578/a506652984ce77fdaf217647aa124358_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584606&width=700&sig=nNCVnSSDaq%2FphZ2xKMDvZNrOpLOmw2zrm%2FCFOAde33o%3D)In this sped-up scene-view of the game, you can see rooms loading in around the player as needed.

When the Kickstarter released, there was a build made available to streamers to help share some excitement about the campaign. But it was built using Unity’s scenes, rather than leveraging the custom JSON based rooms loading in around the player dynamically which wasn’t finished being developed at that time.

All of this authoring and playback tech was developed after the campaign finished. A lot of the first few months was spent developing and improving this code alongside feature development, and I’m really proud of how it has turned out and allows for a very large, interconnected, and seamlessly loading world to appear around the player as they explore.
 

### The Map

(See [this update](https://diesoft.games/2023/02/24/nemo-monthly-update-8.html) for more)

This somewhat ties into the last point, as the map you use to navigate is powered by the same data that is used to load the world in around the player. That same early build we had during the Kickstarter that didn't use the dynamic world loading also did not have a functioning map.

![img](https://i.kickstarter.com/assets/045/552/582/0248540f8fe1c2e22bbcb87aed35fe83_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584644&width=700&sig=TsJuvbS520xt7xUmf6QFyv%2FbCnyc3Eqj03ArXvXeTn8%3D)This shows off the map dynamically updating when the gate is unlocked

Since then I’ve also extended this into including a mini-map feature that displays a small number of chunks around the player to help with navigation. This gives you the quick heads-up version of the map for simple, nearby navigation. And then the full world map in the pause menu can be used for macro-navigation such as finding a path to get to an entirely different domain.

![img](https://i.kickstarter.com/assets/045/552/584/ecd537b1b965327d877768af0f853b8a_original.png?fit=scale-down&origin=ugc&q=100&v=1719584644&width=700&sig=eaqyjTv0Cf12rpoHCxFvczBY%2BaJ9o5ZkZKlPlYtogUQ%3D)You can see the minimap here in the lower-left corner of the screen. You can toggle it on or off from the settings menu.

Maps are such a crucial aspect of Metroidvania games, and I’m happy to have emulated what I love about some of my favs (especially the simplicity of [*Symphony of the Night*’s map system](https://www.mobygames.com/game/3739/castlevania-symphony-of-the-night/screenshots/playstation/273153/)) with some quality of life fixes I’ve always wanted but haven’t seen yet (specifically automatic highlighting of areas you haven’t yet explored and showing important details like one-way edges or paths blocked by a toy you don't yet have).
 

### New Dream Domains

When the Kickstarter was live, we mostly showed off the Dreamswept Plains because that was the only domain that was fully fleshed out (though the Gumdrop Gardens was closer to done than not and we had a background for the Mushroom Marsh). I wanted to highlight all of the cool domains you’ll visit in *Little Nemo*, but I was stuck just showing a hint of them.

![img](https://i.kickstarter.com/assets/045/552/588/099c348f0cefef37fb74430215d679d8_original.png?fit=scale-down&origin=ugc&q=100&v=1719584677&width=700&sig=A%2Fkr%2BN%2FgNXNmWvl6wm2UOz0xMl7FzinRINZktAp90Ns%3D)The image that appeared in the Kickstarter teasing domains that were only in concept at that point

Since then we’ve finished up the Mushroom Marsh tilesets and gimmicks, created gimmicks for Gumdrop Gardens and got the background, tilesets, and gimmicks in place for the Haunted Hollow, the Valley of Silence, the Palace, and a secret domain I won’t be spoiling. And Nightlight City is nearly done with Crystal Caverns underway (you’ll see updates on those two down below in the updates from this month). That means all nine domain environments are either fully ready or just about there.

These environment designs represent a huge chunk of the work for the game, so I’m really excited to have nearly all of the world’s environmental art complete. Here’s a quick glance at where each of the 9 domains of Slumberland stand (not counting the In Between and Nemo’s bedroom of course), but don’t look if you’ve been avoiding domain spoilers! **Spoiler Image Warning! 🙈**

![img](https://i.kickstarter.com/assets/045/552/593/adbc69b3a27550a8800077c0e0a6496c_original.png?fit=scale-down&origin=ugc&q=100&v=1719584707&width=700&sig=KxnOFFT%2BldTYpuckxrDQ9s5V%2Bu9SsWXR%2BJ5MXnDDWy4%3D)This is just a quick screencap of each of the nine dream domains. You can see two are still in progress.

Until I recently hired João, this was just me doing every aspect of designing, drawing, and implementing these domains, so I’m really proud of how they’ve come together despite that it took a bit longer than originally planned.

 

#### Rapid Fire Mode!

I don’t want this recap to carry on for too long, but I have some more of my fav updates to share, so I’m just gonna list them out and link to where I originally shared them.

- [Dynamic Fluids and Foliage Shader Tech](https://diesoft.games/2023/08/25/nemo-monthly-update-14.html#dynamic-fluids--)
  I’m just really happy with how this turned out, even though it’s a relatively small thing. It gives some important visual flair (the domain I'm not spoiling uses it in a few really cool ways).
- [Metronome Timing System](https://diesoft.games/2024/03/29/nemo-monthly-update-21.html#turret-type-enemies-and-the-metronome-%EF%B8%8F)
  I developed this relatively recently to improve how the timing of turret-style enemies works, and it’s been really handy as I’ve been using it for any timing-based gimmicks and it is always an improvement. (The gimmicks for Nightlight City I show off below make use of this system to ensure things like the train and hydrant platforms can be perfectly synchronized as desired)
- [Little Buddies](https://diesoft.games/2024/05/31/nemo-monthly-update-23.html#little-buddies-)
  When the Kickstarter launched, there were just idle animations of *Lampet* and *B.O.B.* with not-so-good pathfinding to show off the general idea of these buddies. Since then we’ve [revamped their pathfinding](https://diesoft.games/2024/04/26/nemo-monthly-update-22.html#pathfinding-) so that they can properly follow the player, and all of them except for *Polter-Pal* are now fully animated with their respective unique abilities fully functioning. If you're a **Sleepyhead** backer, have you tried finding and playing with *My Alien Monster* in the current build of the game yet?!

There’s so much more that has come together over the last two-years to get to where we are now, but I just wanted to share some of my favorite bits with you all. If you ever want to go back and check out old updates, remember that you can find all of the updates that have been made public [on our website](https://diesoft.games/devlog) (which is handy if you ever want to share updates with a friend).
 

## Updates from June 🌞

So let’s take a look at what we’ve most recently accomplished this month. We’ve been getting lots of work done for the last two dream domains, so this is gonna be full of spoilers…
 

# Spoilers Abound ❗🙈❗  

### Panda Tuxpin Sprites

Last month when I talked about all of the Little Buddies, the Panda Tuxpin sprites were just sketched in, so I didn’t get to show them off. Now that those are all done, I just wanted to share a quick animation showing off this cute little buddy that will follow you around and read to you the lore discs scattered throughout Slumberland.

![img](https://i.kickstarter.com/assets/045/552/610/3fd6cc7e1c1857cdb5d5ea1adaa91914_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584825&width=700&sig=buevKuTPNVyKOF9nXlz5TBTtnBazfYQdZE73plSHFLE%3D)

### 💡Nightlight City💡

This month, the Nightlight City domain has really come together. The background is all done and I’m really happy with how it’s balancing the early 20th century art deco influence with the almost sci-fi future city touches. Shout out to João for handling all of these background sprites from concept to final assets. Here’s a look at just the backdrop for this domain:

![img](https://i.kickstarter.com/assets/045/552/616/b06bb2171541cb99ca1857d002dba8a5_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584875&width=700&sig=B%2B%2F0YSZTH0X6pW%2FZXzDGGuHAm8S0tBsZK%2BKv1a9yycs%3D)

Everything is pretty far along with the other aspects of this domain too. The main collision tile is done, and the gimmicks are gray boxed in, but a lot of things I just have sketched in right now as I make final tweaks before settling on the colors and rendering things out.

![img](https://i.kickstarter.com/assets/045/552/620/182fa83386beea398743b2415b920cf0_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584898&width=700&sig=An4NzOLHn16Ae8WOqITj2GpTirYBnrSpYoyEGp91Qrk%3D)All of the sprites in white are still being finalized

Above you can see the **Toy Train Platforms**. These are just simple horizontally moving platforms that start at one tile and will end at another. You can ride these to get across a gap, or perhaps you’ll need to run against one to get the way you’re headed. It’s fun trying to navigate jumping from one train to another nearby one. Right now the sprites are just roughed in, so you’ll have to use your imagination a bit.

Another new gimmick is the **Hydrant Platform** which is just grayboxed in for now. The top of the hydrant will fly off with a gush of water every few seconds and you can ride it upwards.

![img](https://i.kickstarter.com/assets/045/552/624/b13bc4619903f52d960df161fab8f7da_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584922&width=700&sig=ZX2vHZrrzH7MJVWY%2FiMFFdNpD3323vhXDk0Y8kRpAag%3D)You’ll just have to believe me that these are hydrants since they don’t have proper sprites yet

Fans of Mario 2 will probably be reminded of the whales in stage 4-2, which were definitely an inspiration here.

![img](https://i.kickstarter.com/assets/045/552/625/076ee6244224b2b9cd93b6359d7cee29_original.png?fit=scale-down&origin=ugc&q=100&v=1719584931&width=700&sig=JWwlETHAis3xOegFFuyWcifY4i8qffzoYvuwo%2BXEZKU%3D)A screencap from Super Mario Bros. 2 stage 4-2 which features whale blow holes erupting with water you can ride upwards

And finally we have the **Bouncing Platforms**, which I briefly touched on in an earlier post. There are two kinds, platforms which will just endlessly bounce in a specific area, and ones that are emitted from a spawn point and have a fixed lifespan.

![img](https://i.kickstarter.com/assets/045/552/634/267b04f6e71eeef2c67634aa51487b0d_original.gif?fit=scale-down&origin=ugc&q=92&v=1719584983&width=700&sig=1gqSrWuWgHyKmz6XJnmhtIhAdZdPPBPR6Uw%2FaYhItHk%3D)Nemo just riding a bouncing platform for fun. This type will bounce endlessly.

![img](https://i.kickstarter.com/assets/045/552/644/8c4ac3b26795a7233945d7e6fcc8df74_original.gif?fit=scale-down&origin=ugc&q=92&v=1719585016&width=700&sig=rlSdndzYt3LOk5s5SIPiZhCEx9LZ1DQMJ6K%2B6pGb%2FW4%3D)These platforms with a lifespan can be used to make more difficult platforming challenges

The goal of these different moving platform gimmicks was to take what's fun and exciting about moving platforms (it's just kind of fun to ride something that is moving about on its own, and mitigating the momentum of that movement you leave the platform is a fun challenge as well) and to mitigate what I particularly don't like about moving platforms typically (waiting for a moving platform to return can be annoying when they have long paths you miss your boarding opportunity). Right out of the gate, these gimmicks are already very promising in terms of coming up with fun platforming challenges in this domain.

And for NPCs, I can show a quick peek at how Silas is coming along. The sprites are in the process of getting sketched in and his dialogue isn’t fleshed out yet, but he should be ready soon.

![img](https://i.kickstarter.com/assets/045/552/652/c00ac98a3771524c9296eb0052a21c90_original.gif?fit=scale-down&origin=ugc&q=92&v=1719585033&width=700&sig=1BSUBRgU0tDnsApjjjxGW02fiEVrxl86%2Fj7BzAqSOW8%3D)I love the Power Glove, it’s so bad

There’s some other stuff here that’s not quite ready to show yet but is on the way. The enemies are in the design phase (they will all be little mechanical things that Silas has created but have gone rogue and will be reminiscent of enemies like Bob-ombs and Mecha Koopas) and Gertie’s Dinosaur form and photo hunt are grayboxed in a bit but still need more work.
 

### ✨Crystal Caverns✨

We’re not quite as far along with this domain, but we did get started on the background. This one is a bit different because typically the backgrounds involve different layers that parallax at different speeds and don’t need to line up, but here we wanted a background that repeated seamlessly at the same intervals across the different layers so that we could have this distant cavern effect where the layers line up every few chunks to create the appearance of a network of caverns.

Right now we are just getting the background layers sketched in and the lighting figured out, but here’s a quick peek at how it’s looking:

![img](https://i.kickstarter.com/assets/045/552/660/6cc901b56ae31faba46884f1598480c1_original.gif?fit=scale-down&origin=ugc&q=92&v=1719585070&width=700&sig=Eh1%2FjbLcUeo8J60RgoBOVhG0mh7yMC7C9ugqSjszkXo%3D)

Once I get the Nightlight City domain better wrapped up, I’ll move on to working on the gimmicks for this area. Here you can expect a lot of “toggleable” gimmicks. There are crystals which can be hit to toggle nearby hazards and other gimmicks on or off. The enemies will mostly be bug themed, so perhaps we can find some beetle shells to toss around to hit those crystals… I hope to have more to share on this front in next month’s update!
 

# Back to Spoiler-Free ✅🐵✅  



## Thoughts on Timeline

In my update last month, I mentioned there were three major areas to focus on to get content complete, and one of those was finishing the last two domains. We made some great headway towards that point this month, despite it being a short month (I was out for a couple long weekends resulting in a few 3 or 4 day weeks in a row), so I think we're on track.

One of the other major areas of focus that needs to get wrapped up is finishing up all of the enemies in the game. Next month I hope to make some progress grayboxing the Nightlight City and Crystal Cavern enemies. For now we have some designs that are in need of grayboxing and testing.
 

## Kickstarter Friends 💚

There are two Kickstarters I’ve spotted this month that I think you all might be interested in. They are both **Metroidvanias** that look cute and exciting!

The first is [Layers Deep](https://www.kickstarter.com/projects/tallordergames/layers-deep), which is clearly taking some inspiration from one of my favorite pieces of media from recent years, *Over the Garden Wall*.

![img](https://i.kickstarter.com/assets/045/552/675/a02ce6e445f9b9cf6dcf5dc05c67dab0_original.png?fit=scale-down&origin=ugc&q=100&v=1719585119&width=700&sig=aqQDsQzvwIfonKhwC9zQz0moGkfuw3XoU9p24QP54LU%3D)Layers Deep Kickstarter

You are a little onion who has just sprouted near the end of Autumn, and it seems the **Southern Gothic world** around you is beginning to fall into ruin. Explore this hand-drawn **non-linear 2D open world** to **make your character stronger** so that you can make the climb to the surface world and hopefully to your salvation. **Gather upgrades**, and use them to **access new areas** and get lost in this world inspired by Hollow Knight and Over the Garden Wall.

The other Kickstarter campaign is for a game called [**Pipsqueak!**](https://www.kickstarter.com/projects/pipsqueakgame/pipsqueak), which has some really cute pixel art with plenty of squash and stretch in the animations.

![img](https://i.kickstarter.com/assets/045/552/690/74c7126291f958664f0625571b7ae6c2_original.png?fit=scale-down&origin=ugc&q=100&v=1719585204&width=700&sig=ri2j95x3ZpIwRFkWpSCLrzH5kzKuRrw0zzD4Gnm3q%2BU%3D)Pipsqueak! Kickstarter

**Pipsqueak!** is a **Metroidvania** starring Tofu, a small mouse exploring a strange and hostile world. Uncover the truth of this expansive labyrinth through **exploration**, **discovery**, **combat**, and **platforming challenges**. Bring hope to this dying land and its tiny inhabitants in this grand adventure of **mouse-sized proportions**!
 

## Thank you for following along 😊

Wow, two years you’ve been following along with progress on *Little Nemo and the Guardians of Slumberland*. If you’ve been reading these each month and getting all the way down here to my closing statements, just know that it means a lot to me. Putting these posts together each month takes a bit of time, but it’s very fulfilling to know that you Sleepyheads will get to follow along and share in some part of the fun of developing this game.

That’s all for this month, and I look forward to sharing more with you next month. Until then! 👋

-Dave

![img](https://i.kickstarter.com/assets/045/552/703/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1719585269&width=700&sig=C3VSDBhS0BaptmbIw4JAj4ZaH0ItLWz%2B640MbQV8WS8%3D)
