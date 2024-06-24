---
title: Monthly Update 5
---
# Monthly Update 5

*(Note: Originally posted [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3676053))*

Welcome back for another monthly update on the dev progress of *Little Nemo and the Guardians of Slumberland*. I hope any and all of you Sleepyheads that celebrate Thanksgiving had a wonderful holiday weekend! ✨

This update is coming a few days later (I typically post these on the last Friday of the month) because I was taking a little break myself. But I do have some fun stuff to share. Some of it is more fun to *show*, and some of it gets a little more into the *technical weeds* a bit.

##  Progress for this Month 🦃

I’ve been posting lots of animated gifs to show what’s new in past updates, but I thought I would combine a bunch of stuff together into a nice 4K YouTube video (make sure to full-screen the embed to see it in all its hi-res detail). I’ve been working on the core art assets for Mushroom Marsh, which will most likely be the second or third zone of Slumberland which you will explore. I’ve got some of the main tiles done (though they still need random variation alternate tiles, so it will look a bit repetitive for now) and I’m pretty happy with the tweaks I’ve been making to the background (a mega-flora mushroom forest) and global lighting from what you’ve maybe seen so far from earlier assets shared in the Kickstarter video and animations.

[Mushroom Marsh Early Preview Video](https://youtu.be/F169415BMeU)

I’ve also been working on the gates that we’ve seen so far in the game. I wasn’t super happy with the art for keys, and I wanted to add a gem so that I can color-code them to visually match their associated locks (I’d love feedback from anyone with any type of color blindness on how I can better ensure there’s no issues here, so please get in touch if you have feedback about that). In addition to showing off the Mushroom Marsh,  I also showed off how that key color-coding looks, and also a gate which uses a pressure plate, which is using some behind the scenes work I did with the NemoMaker tooling this month as well (which I’ll get into more below).

![img](https://i.kickstarter.com/assets/039/342/386/a35f6a00c324c088872ac047c144d053_original.png?fit=scale-down&origin=ugc&width=700&sig=%2FeHn4dzGeT6BAEybAfA1GzVr95B2vLwBUA4XHLj%2BNVA%3D)Here's a side-by-side of the sprites that combine to make the key and lock sprites which can be dynamically recolored as needed. On the left: colors describe gradients. On the right: red describes tone and green describes emission.

So I think that video shows off some of the more visible work I did this month, but for anyone more technically inclined, or just likes to get all the details, I’ll share some of the other stuff I’ve been working on.

##  The Fun Tech Stuff Updates 🤓

First I want to give another big shout out to the Sleepwalkers and Guardians that have been helping test the early builds on Steam and providing feedback. It’s been really helpful in pinning down some bugs and making sure they get fixed. So I’ve spent a little bit of time hunting down some of those bugs that I had been punting until now and making sure those got fixed. (Sometimes it's nice to not fix a bug until you're sure people will actually encounter it)

I’ve also added a new feature, which isn’t implemented yet, but is critical for how the major zones function in terms of plot and goals: I can now disable all Oblivion in a given zone. So minor story spoilers ahead, skip to the next paragraph if you don’t want any of that: with the Oblivion taking over Slumberland, your primary goal is to rescue the Guardian of each zone and dispel the Oblivion there. When you first enter a new zone, the Oblivion may be preventing you from traversing some pathways (or hiding secrets…) and after you help the Guardian, they will in turn help Nemo unlock a memory which will dispel any Oblivion found in that zone. Though each zone will be different in their own ways, this aspect of rescuing /helping Guardians and dispelling Oblivion will be a common feature that will somewhat transform each area.

And then getting into the very fine details, I also added some new features to NemoMaker which I needed to finish up some core functionality:

- I can now have swatches which have variations and I can manually select which variation or have it randomly selected. This is very useful especially for decorative prefabs which I want to place and will give me the control for either fine tuning, or just randomized variant selection as needed.
- Something that may seem rather simple, but is actually a bit tricky because of the way I’ve built the world out of seamless screen-sized chunks that load dynamically around the player: now prefab instances can have references to each other (something you’d get automatically if you were using Unity’s scene’s to load in GameObjects). This is important for doing relatively simple things that involve two entities (eg. having a pressure plate “connected” to a door so that it opens or closes when you stand on the pressure plate, as seen in the video embed above). This gets relatively complicated by the fact that the instances may be inter-dependent, but I don't want to block the main thread while everything in a given area loads in, so we're very careful about how instances refer to one another and when everything that is required has been loaded in for them to reference.

![img](https://i.kickstarter.com/assets/039/342/194/669724751ef804e56f1c3340e70810a7_original.png?fit=scale-down&origin=ugc&width=700&sig=RXY3jmXSLj7Yi3JpZVArtWIvUVKuLkEvnXI%2FzhRb2LM%3D)Here’s a quick look at the small area from the video above as seen in NemoMaker

##  Status of the Sleepwalker Early Build 💾

In the last update, I was hoping to have things feeling “demo ready” by now, and I have made some strides on that front (I’ll have a new build up soon for those of you following along closely which will finally include some difficulty adjustments for the Rocktopus boss encounter) but there is still a critical piece I didn’t finish yet which is the dialogue-centric “cutscene” flow for when you rescue a Guardian. The Guardian of the Dreamswept Plains is Minerva (or Mina), who has been transformed into an owl, and rescuing her will serve as a sort of introduction to the general flow of the game and help set your sights on your primary goal (getting to the Palace and finding King Morpheus). That bit will help set the scene and I think will be important to making this chunk of the game feel “demo ready” so I’ll need a bit more time working on that this month to get there.

##  What’s Next? ❄️

So next month will be targeting some of the things that I didn’t wrap up this month, and also preparing a Steam store presence (which I’ve also done a bit of work on, but it still needs more work to be as polished as I’d like it to be).

- Finish Guardian Rescue flow
- Finalize the assets in the In-Between zones
- Finish more tiles for the Mushroom Marsh
- More enemy types and “gimmicks” for each zone (eg. poison gunk in the Mushroom Marsh)
- Continue squashing any bugs as the Sleepwalkers spot them
- Get the Steam store presence ready for wishlists

As usual, lots for me to do on the agenda, especially for December, but I’m feeling really good about how things have been coming together the last couple of months. I’ve got a good balance of work to keep me busy both on the computer and drawing and animating on the iPad.

Thanks for reading all the way down to the bottom! ❤️ As usual, please leave any feedback in the comments below or come join us in the [Discord](https://discord.com/invite/9NymgSJAVp). What did you think of me condensing things into a single hi-res video? Is that preferable or do you like the embedded gifs I’ve done in the past? Have a great December, Sleepyheads! ⛄

-Dave
