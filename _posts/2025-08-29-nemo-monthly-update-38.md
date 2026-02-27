---

title: Monthly Update 38
description: How an enemy for Little Nemo is made, the World Map, and more!
image: /assets/images/devlog/2025-08-29-preview.png
---

# Monthly Update #38 😎

Welcome back for another update, Sleepyheads! Can you believe we’re closing out August already?! 😱 That’s just about it for the summer, but I’m still enjoying the weather and not quite ready for it to be over. I had a productive August though, and got plenty of work done, and in addition to showing some of that off, I wanted to do another fun deep dive into a specific topic. So without further ado, let’s get into it:


## The Making of “Little Nemo”

For this month’s update, I thought I’d show off the making of process in more detail. As many of you reading probably already know, despite having some very important people helping with the game, *Little Nemo* is mostly a solo developed title. So I want to show you what my process looks like by diving into the full end-to-end process of just a small piece of the game: developing a single new enemy. I think this will give you a good sense of how many different hats you have to wear as a solo developer for the production side of things alone, while also trying to highlight how I get help when I can.

![img](https://i.kickstarter.com/assets/050/624/749/f6b75d0d0171d2253c2d70e052641094_original.jpg?fit=scale-down&origin=ugc&q=92&v=1756488006&width=700&sig=Fz%2BPmMWopZlYlArEJW1VIvigEH%2FueJFUm%2B36gI8LYqU%3D)A photo I took during the Kickstarter of me working in my office/studio

I’ll start by showing off the enemy we’re gonna be discussing, the Helmlet:

![img](https://i.kickstarter.com/assets/050/624/211/e993e5de7422e0ae3bd8773cde198516_original.webp?fit=scale-down&origin=ugc&q=92&v=1756485017&width=700&sig=tkX3w6a0AmpDoO7lu8h%2BVjTFFs9%2FamBjZSgxeekwW%2B8%3D)The Helmet patrolling in the test environment

This is a very simple enemy that just walks back and forth and is armored from the front. It shares a color scheme with the Burrchin and Slowpoke enemies because, like them, it is designed to go in any domain. Now that you know what we’re aiming for, let’s back up and start at the beginning of this whole process.

### Step 1: Design

The inception for this enemy comes from two areas. The first is that while working on level design with Rygar (who helps out a bit with boss and level design), the Raddler was identified as an enemy that is nice to place anywhere. Its simple walk-back-and-forth behavior makes it a nice and easy enemy to slot in anywhere. The Raddler was designed as an enemy for the Dreamswept Plains, and so I didn’t love putting it into other domains, but it didn’t necessarily clash, so we just started using it throughout Slumberland.

Then more recently, I was playing some *Mega Man 4* and I noticed that the [Shield Attacker](https://wiki.megamanmaker.com/index.php/Shield_Attacker) enemies are quite fun. They are a simple back-and-forth enemy, but with the twist of being armored from the front. Even though we liked the simplicity of the Raddler, I thought we could afford to add just a bit of complexity since we already have the very simple Burrchin and Slowpoke to use for “easy” enemies.

So now we had an enemy in mind: one that simply patrols back and forth, but is armored when attacked from the front, it damages you if you touch it, and should visually fit in with Burrchin and Slowpoke. Alright, so let’s make it!


### Step 2: Visual Design

Next up I need to come up with a visual concept for this enemy. This is somewhere that I might enlist João’s help to come up with a visual concept, but in this case, I was confident in my ability to come up with something appropriate, so I worked on the visual design myself.

As I mentioned before, the Burrchin and Slowpoke are some of our other “generic” enemies designed for use in any domain. Their general visual motif is “cute but dangerous plushie”.

![img](https://i.kickstarter.com/assets/050/624/306/1d41ce1f844ce9fa2a53be30789b6241_original.webp?fit=scale-down&origin=ugc&q=92&v=1756485676&width=700&sig=67LU32Rk1zC5KS%2FoHC5PUp9XlH6D3%2Ba9AqZXuPSVJMM%3D)The Burrchin and Slowpoke are enemies you'll find throughout Slumberland

So we want something like this, but it needs some kind of shielding in the front. Okay, what if it’s a mask, kind of like *Mario 2*’s Shy Guy or *Kirby*’s MetaKnight?

![img](https://i.kickstarter.com/assets/050/624/348/24f248867004cf48316ebb80ac8cf500_original.png?fit=scale-down&origin=ugc&q=100&v=1756485895&width=700&sig=E18RXxCek3KXmN53tBFRYEfm2DVC0op0%2B7FLDwgVLE4%3D)The Shy Guy from Mario 2 has a mask that could provide some armor perhaps?

That’s a good idea, but a mask doesn't necessarily look “shielded” enough, so we’ll just need to accentuate the mask a bit more and make it a little more shield-like. I’m thinking it should probably look more like a tower shield.

Additionally, since this enemy damages you on touch, we’d like it to have some spikes to make sure that’s immediately clear to players and they don’t think you can step on this enemy to pick it up. Luckily I have the time-lapse available for the ideation of this enemy, so you can see all the various visual ideas I tried out before I found the one I really liked:

![img](https://i.kickstarter.com/assets/050/624/405/e3a592756040fb7a61fa2a5c4cf80b72_original.webp?fit=scale-down&origin=ugc&q=92&v=1756486148&width=700&sig=4TpN%2FS8GvH3F9n68klZkOENoupRUpN9IUVI7rsaVXoI%3D)Me scribbling down different ideas until I found something I was happy with

So that leaves us with a design that looks something like this:

![img](https://i.kickstarter.com/assets/050/624/436/7e4f1a915bb52302653b6635f94a7ecb_original.png?fit=scale-down&origin=ugc&q=100&v=1756486313&width=700&sig=sZeSgetnURxWQAOvl6RDj52vmFvyvNqyN9tKjIziQYI%3D)The initial sketch that I was happy with for Helmlet

It’s around this time that I also start coming up with a name for the enemy. I’m generally aiming for something cute, fun, and which includes some kind of pun or reference to the enemy’s function or inspiration. I settled on “Helmlet” as the helmet part of the name communicates the enemy’s armor, and the “-let” part of the name helps make it sound like a small and cute name.

So there we have it. Okay on to the next step!


### Step 3: Sprite Animations

This step is actually quite a bit slower and more work-intensive than you might realize, so I’m gonna break it down quite a bit. For this step, I’m primarily working on my iPad and an Apple Pencil, before bringing everything back to the PC to get imported into the Unity project.

**Sub-step 1: Finding the motion**  
First we need to sketch out the motion for our walk cycle. Luckily in this case, we only have to worry about the walk cycle, and a frame or two for turning around. I’ll often start these out by just drawing in the keyframes I want to hit, so I’ll have a choppy version of the animation to get the general idea of what I’m after.

![img](https://i.kickstarter.com/assets/050/624/465/7237cb73f849c89ebbe76989665606d5_original.webp?fit=scale-down&origin=ugc&q=92&v=1756486451&width=700&sig=JXo6JeH7pCfR0FJciD9jCe%2F1JQnM%2F3LzEg8%2FGVWWJAo%3D)Just a few keyframes to convey Helmet's waddle

**Sub-step 2: Tweening and Inking**  
After I’ve identified the keyframes for an animation I think will look good, I render the rest of the details. The first step to that is tweening the animation with a target typically of 15fps (we’ll use 30fps as needed if it’s something that needs more motion detail or clarity and moves quickly, or go down to 10 or even 7.5fps for animations that have very little motion. And we also make sure this is all at the target resolution (typically 256 pixels per unit, with standard enemy size being roughly 1x1 units).

![img](https://i.kickstarter.com/assets/050/624/521/d62336fc944bb5a61b5fc5490b877ed4_original.png?fit=scale-down&origin=ugc&q=100&v=1756486648&width=700&sig=QLxyiwFOlJNnouOTbLDhla8oF2pxWQ56v7qklpkLBu8%3D)All of the inked drawings for Helmlet's walk cycle

You’re probably thinking, why would you draw this 14 separate times? That seems like overkill, especially since most frames are so similar, and you’d be right. But something I strive for with *Little Nemo* is making sure not only that it *is* hand-drawn, but that it *feels* hand-drawn. And getting the feel involves re-drawing the sprite so you get those subtle differences in each frame that cause a so-called “boil” in the animation and help the animated elements in the game really pop and come alive. The minor details such as the texture of the inking come through really nicely when the game is running at 4K resolution.

![img](https://i.kickstarter.com/assets/050/624/593/aa40c9b7eb870df919a439b6e18d6227_original.webp?fit=scale-down&origin=ugc&q=92&v=1756486965&width=700&sig=Y4h5CNqdCKJ%2BGSmTirMCI5VU%2FtUOmCFQuibe93fFdp4%3D)All 14 inked sprites in sequence

**Sub-step 3: Shading, details, and coloring**  
Now for all of the details that go into each frame. I probably don’t need to talk too much about these, so I’ll just share a timelapse of each step being added to the sprite sheet.

![img](https://i.kickstarter.com/assets/050/624/704/654094ecb616790ab9c9b76a73c7acea_original.webp?fit=scale-down&origin=ugc&q=92&v=1756487678&width=700&sig=3PXM5gwInkksibNyHfFUJV4R4x%2FkDPINoy7XO4YGwG8%3D)A time-lapse of how the sprite sheet looks as we add details from each step

The way the colors cover up all of the details probably seems kind of weird, but that’s because we’re making two different textures that are combined using a shader so that we can dynamically re-color the sprites. This is all just custom rendering tech I’ve developed for the game, and if you wanna learn more about it, I wrote it up in detail way back during the game’s Kickstarter campaign in this post here: [Little Nemo Art Pipeline](https://diesoft.games/2022/06/13/nemo-art-pipeline.html).

And again, we’ve selected a simple example here, so the only other animation we have is a two-frame turnaround animation, but we will also do this step for any other animations the enemy needs.


### Step 4: Importing Sprites into Unity

Next up, we’ll export the drawings from Procreate as PSDs (Photoshop's file format). I recently set up a local [NAS](https://en.wikipedia.org/wiki/Network-attached_storage) server (essentially an in-home cloud solution) for DIE SOFT, which helps make this process faster and easier than using google drive since it’s all over local network instead of over the internet (these PSDs can sometimes get quite large). So these PSDs go onto the NAS and then I can access them from my PC. I use Photoshop to export sprite sheets for the animations, and then import them into Unity and get them sliced up into individual sprites.

![img](https://i.kickstarter.com/assets/050/624/773/d39de8c2326fa598651cca6c83306af4_original.png?fit=scale-down&origin=ugc&q=100&v=1756488186&width=700&sig=WRWPJYNl1biuhW3chKjaozVClqFVgoE3SJNtlAj0bhg%3D)Slicing up the sprite sheet in Unity

I could have just not mentioned this step because it seems self-evident that this would need to happen, but it’s worth calling it out because even with the various automation steps involved to make this relatively fast and easy, these are the sorts of tasks that can easily eat up loads of time unexpectedly when you’re doing even the most simple tasks yourself.


### Step 5: Scripting Enemy Behavior

Now that we’ve got the sprites in there, we need to get them moving around on screen and behaving as expected. Since we’ve got a simple case, this step once again is very simple. The enemy AI is not a particularly strong part of my Nemo codebase, but it is robust enough that I can easily build out an enemy like this. In fact, I already have an enemy archetype for it I call “Simple Patrol” which adds the MoveForward, TurnaroundAtWall, TurnaroundAtHazard, and TurnaroundAtLedge traits, which is all this needs to do what we want it to.

So we’ll create a [prefab](https://docs.unity3d.com/6000.1/Documentation/Manual/Prefabs.html) for it which is a variant of our standard enemy base, we add the SimplePatrol behaviour, add an ArmorBox to it (so it can block hits from the front), add a hitbox to it (so that it hurts us if we touch it), and then fiddle with all the parameters such as its walk speed until we’re happy with it.

![img](https://i.kickstarter.com/assets/050/624/855/4caf7ef29004559c0139fcc9246e121b_original.webp?fit=scale-down&origin=ugc&q=92&v=1756488569&width=700&sig=eXMoiseWN2sBW2qZ8NcP4BYFv4KTspf2Fih8lAwBXEs%3D)Here's the Helmlet's prefab. Lots of components, but many of them are from the base enemy prefab

Even with this simplest of enemy types, this step manages to take a good amount of time. There’s often a lot more fiddling than I anticipate going in. For instance, with this enemy, I needed to fiddle with my armor logic because even if you hit the enemy from behind, if your weapon overlapped the armorbox, the attack would get blocked.


### Step 6: Make it Authorable

We have a functional prefab for the enemy at this point, and if *Little Nemo* were built using Unity [scenes](https://docs.unity3d.com/6000.2/Documentation/Manual/CreatingScenes.html), we would just be placing the prefab directly into scenes. But Slumberland is built out of Rooms encoded into JSON files and authored using the Nemo Maker tool I’ve built. If you wanna see a little more about this, I talked about it in [an earlier Kickstarter update](https://diesoft.games/2022/08/26/nemo-monthly-update-2.html#this-months-progress-breakdown). But that means I have one last abstraction step: bring this prefab into Nemo Maker so I can place it into the world.

This involves just making a prefab swatch, and putting it into the appropriate palette (in this case the shared palette since this can be used in any domain).

![img](https://i.kickstarter.com/assets/050/624/897/810cb25b9a8ed1fa79fc246c633561b5_original.png?fit=scale-down&origin=ugc&q=100&v=1756488806&width=700&sig=LI%2BkvY0TluesMF6sWMbQnxxdj3wy2O7QClbRyw4zZ8U%3D)Helmlet's Nemo Maker swatch

Much like the importing of the sprites into Unity, this is the sort of task I could ignore while sharing my process, but I think that would be doing you a disservice in terms of trying to show you what actually happens here. Also this is also one of those menial tasks that quickly adds up.


### Step 7: The Steps We Skipped

This enemy doesn’t need any custom sound effects, but if it did, those needs would get jotted down into a doc where I’m tracking sound effects for Jonathan Baken to work on when he does his next pass on SFX for the game. There’s a whole process for getting those imported and utilized in the game that looks a bit like what we looked at here and definitely takes a bit of time. If anyone is interested, I could do a similar look at that process next.

This enemy also doesn’t really have any narrative implications. If it did, I would probably try to chat with Cid about it during the design phase to make sure it fits into Slumberland’s narrative appropriately.

And of course this enemy doesn’t have any musical requirements, so Peter Berkman’s contributions to the game’s soundtrack aren’t relevant to what I’ve walked you through here.

I just wanted to get this step in to point out where other contributors are typically involved in the process even though they weren’t in this particular example.

### And We’re Done!

So now we’ve got this new enemy, available to use in Nemo Maker and you got to follow along for the whole process.

![img](https://i.kickstarter.com/assets/050/625/134/0aa49f63fcf1c3d397a4616c8ed78811_original.webp?fit=scale-down&origin=ugc&q=92&v=1756490537&width=700&sig=duUILTyeTJaVrA3kosalhIRjUXUj89OlOkgJIjQl1cc%3D)Using Nemo Maker to place the newly made Helmlet into the world to test it out

Please leave some comments down below and let me know what you thought of all of this and what you’d like to see for next month’s developer update! But now, let’s dig into some of the stuff I worked on this month that I can share with you all.


## Stuff worked on this month 💪

Most of this month I was working on the game’s final boss, and that’s something I want to keep under wraps until you play the game yourself, but I also worked on some other stuff that will be fun to share.


# Minor Spoilers Ahead❗🙈❗

These are nothing too spoilery here, but you can see some domains and a Little Buddy below, so if you're avoiding *all* the details, look away for a bit until I give the all clear.


### World Map 🗺️

João recently finished up some small drawings to represent each domain on the map screen, so I wrapped up work on the world map. This is a “layer” of the map that shows up if you zoom far enough out on the map screen (or press the b button).

![img](https://i.kickstarter.com/assets/050/625/162/61483069743ab35cf9e6643ea73e7061_original.png?fit=scale-down&origin=ugc&q=100&v=1756490691&width=700&sig=llKmDvdzQXD%2BOA19T6OkGRwTvPe2e6UoA8grHJNybAY%3D)When zooming out from the room-view of the map, you'll see the entire domains and can select them to see their name as well as how many Blue Moons you've found in that domain

This layer of the map screen is mostly just for fun and flavor, but it does serve a few purposes:

- Remind the player of which domains are where. The room view of the map is colored by domain, but it doesn’t have any domain labeling. By zooming out you can see “oh yeah the crystally, cavernous place is in the lower left part of the map.”
- Allow the player to track how many Blue Moons they’ve collected in total and in each domain. Notice the total count of Blue Moons in the lower left, and the per-domain count underneath the selected domain's name label.
- Easily see which domains have fast travel unlocked. This isn't pictured here yet, but the plan is to add some visual cues to make it more clear which domains can be fast traveled to.

This one was nice to wrap up since it’s crucial for the fast travel system to work correctly. Now it just needs:

- Minor notifications for when Blue Moons are collected.
- A more prominent notification when enough Blue Moons are collected to unlock fast travel for each domain.
- An explanation for the player so that they understand how fast travel is unlocked by collecting Blue Moons.

These final additions are relatively simple, so I'll probably sneak them in soon.


### Polter-Pal

This Little Buddy I had actually never finished implementing until just this month. I’ve had the sprites finished up for a bit, but needed to do some scripting to get set up with a new style of Little Buddy. This ghost doesn’t use the normal pathfinding logic and is much simpler since it just follows directly behind Nemo, but it does need to find enemies to target and zoom over to them. Then I also had to do a decent chunk of work to make sure all of the enemies could be scared.

![img](https://i.kickstarter.com/assets/050/625/216/d0d7b2d207f941f029aa368abedc42f2_original.webp?fit=scale-down&origin=ugc&q=92&v=1756491001&width=700&sig=eO7WkOIA5q2R5SEpKMhDXeur2igQVqIpc556EBV9R6U%3D)Polter-Pal helping out Nemo by scaring nearby enemies

Overall, I’m really happy with how this Buddy turned out. I think it’s very helpful, without feeling like it's so good as to be the only one you should use. *My Alien Monster*, for comparison, has to be carried to help out, but he can even eat projectiles and some other hazards, so you might actually prefer to use him instead if you want help dealing with the threats of Slumberland.


# Back to Spoiler-Free ✅🐵✅  

### Game Ending

Since we’re getting so close to finishing up the game, I’m also turning my attention to some of the smaller details I had been putting off. One of these is the game ending/credits. There are few different elements of the endings for both Mario 2 and Mario 3 on the NES, and one that I think would be great for our game is the “worlds showcase” you get at the end of Mario 3.

![img](https://i.kickstarter.com/assets/050/625/228/66148372c5fb5be1c8871417baa39a92_original.gif?fit=scale-down&origin=ugc&q=92&v=1756491070&width=700&sig=PylA58W4%2BaY0AB9vrsh9b9QPZ3iXTOl%2Bjbd5cAV0prI%3D)Mario 3's end-of-game tour of the various worlds found in the game

I love how this lets you take some time after you’ve finished and just chill and appreciate the worlds you just played through with a quick recap. I was wondering if I could do something like that and just spent a little time toying with creating a little “diorama” for a specific environment and realized it was fairly easy and doable.

![img](https://i.kickstarter.com/assets/050/625/264/9ab46b642093ffe6eed89fde7fd52300_original.webp?fit=scale-down&origin=ugc&q=92&v=1756491251&width=700&sig=9k4fVeMN%2BO5%2BtJGGCP29CY%2BFBD876GwVgAOqjN4x0Dg%3D)A similar approach for Slumberland, here we're showing off Dreamswept Plains

I’m pretty happy with how this is looking and I think it will be a really nice moment when you’ve completed the game and get to briefly revisit each of the domains.


### A few other small things

Two other small things worth mentioning that I worked on but right now are still only in text form: the game’s Artbook and the Powerline to the Professor.

**The Artbook**  
I wanted to save this for very late, but I need to at least plan out what’s going to be in here because I want the artbook pages to be littered throughout Slumberland for you to find, so I need to know how many sections/pages we have and roughly what content they contain so that I know where they should go in the world and I can get those placed. So I've begun planning out exactly what's going into this.

**Powerline to the Professor**  
I’ll show this off more once I’ve got some sprites to show (this is something I’m hoping to get João’s help with) but I built out the dialogue logic and script for a “hotline” for which you find booths throughout Slumberland. This is a lot like the Nintendo hotline people my age will recall from their youth. You can use this hotline to call up “the Professor” to get tips about the game. Right now a lot of simple game tips are shared by Flip, but I want a lot of that kind of information to come from these booths instead. More to come on this topic in the near future!

And that’s it for stuff I can show off that I worked on this month.


## Kickstarter Friends 💚

I think there's definitely some interest overlap with *Little Nemo* and the exploration focus of this Kickstarter for [Mountain Soul](https://www.kickstarter.com/projects/mountainsoul/mountain-soul-a-cozy-platformer-of-exploration-and-guidance). Check it out:

![img](https://i.kickstarter.com/assets/050/625/129/7e580dc10b201216dbb7b89dbdc7483f_original.png?fit=scale-down&origin=ugc&q=100&v=1756490493&width=700&sig=%2FfP0bd9%2Bzu1vsoz%2Fv%2FAhcRHH%2FY70UG9zfj6m4J5440o%3D)

**Mountain Soul** is a cozy platformer that invites you to **relax**, **explore**, and discover the quiet wonders of a **serene mountain landscape**. Set in a world where **nature thrives**, this game combines **gentle exploration** with **meaningful interactions**, encouraging you to **take your time**, immerse yourself in the **tranquil surroundings**, and uncover the mountain’s **hidden secrets**.


## Until Next Month 👋

Thanks so much for reading all the way down here. As always, I’d love to hear your thoughts on this update and things you’d like to see in upcoming updates. We’re roughly six months out from our release window, which might sound like a long time for you all, but that means things are all coming together right now. Keep an eye on the Discord for updates because we’ll be looking to do some more thorough playtesting of the entire game very soon. If that’s something that is appealing to you, make sure to watch for that opportunity. Thanks for reading, Sleepyheads!

-Dave
