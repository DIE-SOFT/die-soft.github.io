---

title: Monthly Update 44
description: Countdown to PC Launch, Playtesting, and other updates
image: /assets/images/devlog/2026-02-27-preview.png
---

# Monthly Update #44 🌨️

Well winter certainly continued to be very snowy for us east coasters in February. Luckily I have a snow-blower, or I would have lost a lot of precious development time to shoveling snow!😅 I hope those of you in this region are staying safe and warm 🍵

This month is gonna be another relatively short update like December’s was. My hands are full with all the last minute stuff I’m trying to take care of ahead of release. And that is because, in case you missed it: *Little Nemo and the Guardians of Slumberland* will be releasing on PC (Steam and itch.io) on **March 31**, and you can **play the demo right now** in Steam Next Fest!

![img](https://i.kickstarter.com/assets/052/761/594/7c943c0a1ad4ede0df130779f3267f95_original.png?fit=scale-down&origin=ugc&q=100&v=1772209355&width=700&sig=4rRapGieiVPuVVwhfUG67EaHNQ2N8FQ0%2F23XAfRUuW4%3D)Steam Next Fest Banner for Little Nemo

So I’m keeping very busy, but I do want to share what I'm focused on ahead of the PC launch date.
 

## Countdown to Launch ⌚

This month, I’m trying to get the game review ready ASAP so that we can get early keys out to people that are interested in reviewing the game (reviewers need a bit of lead time to be able to play the game and write up a review so that it’s ready to go the day of release). Meanwhile I’m also trying to promote the game and make sure people know that *Little Nemo* is a part of Steam Next Fest. The goal is to get as many wishlists as possible ahead of launch (so **please help spread the word** 🙌).

Meanwhile I’m also trying to gather as much feedback from playtesters as possible, and also there is a bit of content for the game that I’ve been finishing up. These both warrant their own topics, so let’s dig a bit into each of them…
 

## Playtesting the Full Game 🎮

Playtesters in the Discord as well as some trusted friends and family have been playing through the full game and providing feedback and insight into problem areas. There are I think two major things I’m working on addressing now (and this is where the time spent building the tools that allow me to easily make changes come in handy):

**1. The “Golden Path” isn’t clear enough**
I designed the game to be focused on exploration, with a mix of gating techniques (ability gates, difficulty gates, shortcut unlocks, etcetera), but will often allow players access to much of the map at once. I really appreciate this kind of open-endedness in the games I play, and don’t want to reduce any of that, but it’s clear that I could be doing a better job of letting players know which way *is probably the best place to go next*. I generally refer to this sensible route through the game and ordering of upgrades and bosses as the **Golden Path**.

Luckily we already have some great tools for helping convey this: Flip can show up or make a call to Nemo to help with guidance, and can even make sure places we should head will show up on the map so you can see which direction to head in. I just need to give a little more of these kinds of guidance.

A great example of this is in how the game opens up after saving the first Guardian. There are then two domains you can visit, and neither is given more priority. But importantly, in one of them you get the Bubble Wand (and it's also a little easier) and that Toy is super helpful in the other domain. Many playtesters have been heading to this other domain first, and then getting overwhelmed by the difficulty (there are lots of spore projectiles there which one can simply block if they’ve already acquired the Bubble Wand).

So this is very solvable with the tools we have, the important thing is identifying these areas where players tend to go in unexpected directions, and then helping guide them back the path that I think makes the most sense to go in.

Additionally, I’m gaining an appreciation for the fact that exploring off the beaten path is much more rewarding when you *know you’re not supposed to be there*. So by providing more guidance on the Golden Path, I help players that are hoping to stay on the straight and narrow, and also make going off that path more exciting.

**2. The game is too difficult**
I shouldn’t be too surprised by this, as the history of the game has constantly been me reducing the difficulty, whether that’s just smoothing out rough edges, giving players more opportunities to heal, or introducing kinder mechanics. But I’m continuing to see this throughout, and I have loads of notes for ways to help with this. I’ll mention a few of these to give you a concrete idea of what I’m talking about.

I’m likely going to increase the velocity with which moons shoot up out of defeated enemies. This comes from seeing that a lot of players that are having the most difficulty, also have difficulty collecting moons before they land on the ground and break into candy. These are the players that need the most help, and this is an easy way to do so.

I’m going to introduce more moons throughout the world. I think generally I’ve been too conservative with my placement of yellow moons. While they can be acquired from enemies, sometimes that’s just not enough, or you maybe can’t kill enemies because you’re carrying something. So generally speaking, I’m going to be adding more moons throughout the world.

And finally a big one is introducing more moons into boss battles. It’s clear that boss battles need more healing opportunities, especially for any that go a little longer. For the Rocktopus boss fight (which you can try in the demo), I don’t think this is as much of a problem, but in the Crystal Cruncher boss fight, for example, it’s become clear that we could really use healing opportunities.

**3. Other miscellaneous details**
And finally there are loads of other little things here and there that pop up. For instance visual details that could use clarity (e.g. the monkey bars in Dreamswept Plains could use a minor touch up to make them more visible). There are still some corners the camera goes around in a way that aren’t ideal, and so I’m trying to hunt those down and smooth them out. And I have loads of other notes that don’t fall into any particular category of things, like “can we get the Sweettooth PJs to players sooner?” All of these little details that aren’t perfect can likely be improved with very minimal tweaks and changes, and addressing them will help the whole of the game come together and really sing.

There’s also a few performance issues still outstanding (draw calls in two domains and Unity’s rule tiling logic needing improvement) that I’m kind of lumping into here as well because I think generally the performance has held up fairly well.
 

## Remaining Content ⚒️

If you were paying close attention to the public demo, you may have noticed I pushed some changes implementing more of the Rank Up system. This system is fully implemented, but there are still enemies and bosses that can get harder (this might sound silly given I described above the game being too hard, but this is an opt-in system and is what allows us to make the game easier while still challenging players that are more experienced). So tweaking the behavior of the remaining enemies and bosses for Rank Up mode is something I’m still finishing up ahead of launch. I will probably send the game to reviewers before this is fully done since it’s a somewhat niche system I don’t expect most people to engage with).

This week I’ve also been finishing up what’s behind two doors in the world that were still closed, even in the most recent playtests. This is just a bit of content that is somewhat tied to one another regarding Captain Sweetbeard and Alex, the Guardian of Haunted Hollow. I don’t want to spoil it, but I hope plenty of you will end up taking on those challenges and seeing what awaits at the end of that quest line.

And the last major thing missing is just polishing up the ending of the game. There is no ending “cinematic” but there is still a small scene and “reveal” that I want to be a poignant and touching moment, so it needs a bit more polishing up. You might recall me mentioning a domain-recap for the ending of the game back in [Monthly Update #38](https://diesoft.games/2025/08/29/nemo-monthly-update-38.html), but I still need to assemble those.

I also called out some tasks in last month's update that I'm working on finishing up. Most of these aren’t big tasks, but because I’m juggling them with prep for launch, I’m busier than I’ve ever been.
 

## DIE SOFT at GDC! 🤝

Well, it’s not just that I’m shipping the game in several weeks that I’m super busy, it’s also because I know I’m going to be fully occupied and not working on the game for at least one of those weeks because **I’ll be at GDC this year**!

I know most of you likely won’t be attending GDC because it is an industry event, but if you *are* there, please make sure to stop and say “hi” if you spot me! I’d love to get the chance to meet any backers that helped make this game possible.

The goal of attending this is just to kind of get myself out into the game dev scene. I’ve been pretty heads down just working on *Little Nemo* for many years now, but once I wrap it up later this year, I’ll be trying to figure out what’s next for me and for DIE SOFT. This isn’t super relevant to *Little Nemo*, but I just wanted to share this because it’s all part of game dev I suppose, and I like sharing a peek behind the curtain.
 

## New Capsule Art?! 🖼️

By the way, did you happen to notice that I modified *Little Nemo*’s capsule art on Steam? I had originally imagined that I would do a pretty big overhaul to what I was using for the capsule art (promotional thumbnails on Steam). But ultimately, the ideas I had were too busy and didn’t add anything. But I didn’t love using just an in-game sprite for Nemo on there, so I drew a new one. I had a lot of help from João on this, as the pose I used was actually one he came up with when I had him sketch some ideas for better capsule art a while back.

Also the logo is a bit more clear as I rendered out a vector-based version of the logo to work from, instead of the crayon-textured version of the logo seen on that title screen that I had been working from.

So what do you think?

![img](https://i.kickstarter.com/assets/052/761/627/c8fb035d30d24c2d890125c32c48ae6a_original.png?fit=scale-down&origin=ugc&q=100&v=1772209467&width=700&sig=9XYU%2BBkJq8399W1ac7eLNUl%2Bsef1MKn%2FFzj32EqLwKk%3D)New capsule art, slightly simplified, new art for Nemo, and cleaned up logo

## That’s it for now! 👋

Okay, I said I was gonna keep it short, but that’s still a sizable wall of text, so I’m gonna wrap things up now. I just want to take a moment to thank you all for following along. Though this journey won’t be complete next month when the game releases on PC, it is of course a hugely significant milestone. I couldn’t have done it without your support 🙌

Next month’s **Monthly Update** will come *just before* we launch, so that’ll be the last one before many of you are playing the game, so I’ll try to make it special.

Thank you, Sleepyheads! Stay safe and warm out there 😊

-Dave

![img](https://i.kickstarter.com/assets/052/761/648/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1772209509&width=700&sig=hZC7aQTtJIeS92Erg7CTwxYs3Pm5MVCUwKowy681uRU%3D)
