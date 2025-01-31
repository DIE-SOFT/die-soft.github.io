---

title: Monthly Update 26
description: World Atlas, Quests, and the enemies of Nightlight City
image: /assets/images/devlog/2024-08-30-preview.png
---

## Monthly Update #26 ☀️

Hello, Sleepyheads! It’s the last Friday of the month again, so that means it’s time to share with you all what I’ve been up to this month. I’ve been trying to focus less on finishing art assets this month so that I can get the bulk of the world all blocked in, so you might see a bit more sketchy and blocked in stuff than usual. But there’s plenty to share, so let’s get into it!

Oh, and one small note for any of you reading via email: I've recently switched to using .webp instead of .gif for animations as Kickstarter allows for those and it reduces the file size significantly. Unfortunately it results in static images in the emails that Kickstarter sends out. So I recommend viewing this on the web (click the "View on Kickstarter" button above if you're reading this via email).
 

## Timeline 🕰️

And let’s start with how things are looking for our timeline. We’re at the end of summer, which was when I was hoping to have a mostly content complete game. I didn’t get there, but we’re actually fairly close now. So let’s break down the major areas that need completion and where they stand.

**Level/world design that remains**  
We’ve got the world all boxed in now (details on that in the spoilers below), but there is still fine detail that we need. There are still large chunks of the world that you mostly just run through. One of the goals of this game is that the world is always fun and interesting to move through and feels like a traditional platformer. So rather than just spicing areas up by simply littering it with enemies, it needs the enemies, gimmicks, and level design to act in concert to keep every room of the world interesting and unique. So there is still work to be done here. This month I was mostly focused on big picture work (making sure all the domains connect in interesting ways and the pathing makes sense) and didn’t spend time dialing in any specific domain’s level design.

**Enemy and boss implementations that remain**  
As I mentioned before, I plan to leave the bosses for last, but this month we got the enemies for Nightlight City grayboxed in (see below in the spoilers for more details). I also worked on some quest design for the domains where you have a quest to complete rather than a boss to fight (also more on that below). 

**Environment design for the last two domains**  
As I mentioned above, I was focused less on art this month, so I didn’t finish up the Nightlight City or Crystal Cavern tilesets, which are the last two major bits of work on this front.

And just to be clear, there is other work that needs to happen, but this is the stuff that is blocking having a fully playable game that I can get in front of testers. Once I get there, that’s when I’ll be able to start lining up a release date as I better understand how the whole thing feels & plays as a more complete game.

As we’re doing a simultaneous PC and Switch release, I will also need to bake in time to do all the porting to Switch, so I need plenty of lead time. Seeing as I would ideally avoid a holiday-timed release (competition gets stiff at the end of the year for video game spending), I think the game not already being content complete means we’re looking at a release sometime in 2025 rather than this year. I’m still not ready to put a date on this, but I don’t think I’ll have these major tasks done for another month or two, which does not give me time to actually get the game ready for release. I know a lot of you probably assumed we’d be releasing this year when I pushed back from the original 2023 target date, but I hope you’ll be willing to wait a bit longer.

I’m feeling pretty great about things right now. I know it probably sounds wild that it’s only August and I’m already talking about shipping this year not being feasible, but having the game be just about ready to be played end-to-end (even if some content is blocked in) is really exciting for me and it’s been such a long and daunting road to get here. I’ve still got loads of work to do, but everything is coming together finally in a much more concrete way. Read down below in the spoilers, especially the bit about the world map, to see what I mean.
 

## Early Build Access 💾

I haven’t done a new build in a bit as the Atlas data was all a bit jumbled up while I worked on boxing out the entire world. Now with things getting ironed out, I am going to be doing a new build soon. Something to keep in mind with this build is that you’ll have access to most of the world, but large chunks will just be boxed in for now, meaning it likely won’t actually be fun to play, so I don’t recommend it. But for those of you that want to see all of the domains (I may consider blocking off the one I want to keep secret for now, but on the other hand, if you want to spoil that for yourself maybe that’s fine) and all of the toys and PJs and Little Buddies, you’ll be able to do that. Just be ready for some empty rooms, placeholder dialogue, and other unfinished content.

That should be coming soon. I just need to run through and do some testing and make sure all the pathways are navigable in the ways I expect them to be. I will of course let you all know when that goes live in the [Discord](https://discord.com/invite/9NymgSJAVp) server.

And I also want to point out, when a new build goes out, you’ll be able to eventually reach the Palace’s Observatory to see all of the pet-related backer rewards. All of the pet statues will be there, but the constellations aren’t all visible via the telescope yet. We’re in the process of getting those all done, but it probably won’t be done by the time I push this new build. When those are ready, I’ll share a video so that backers can see how their pet looks in there without having to spoil themselves on other parts of the game. Keep an eye out for that hopefully in next month’s update.
 

## Technical Deep Dive on Pathfinding 🤓

And one last thing before we get into spoilers. This month I finally published a blog post I’d been working on for a while. I do a lot of work that I don’t share here, or at least not in depth, because I figure it’s probably mostly only of interest to other engineers or people that just like to see the fine details of how things get made. But, if you are interested, please read my blog post about [how I built the pathfinding systems for the Little Buddies](https://diesoft.games/2024/08/18/devlog-pathfinding.html). It’s a bit longer than a typical Kickstarter update and only focuses on this one detail. As someone that is primarily an engineer, it’s really fun to geek out about these sorts of details, but I try to restrain myself in these updates so you can get the bigger picture of how development is going. So if that sounds like something you’d be interested in, please give it a read!

Okay, now onto all the spoilery details of what I’ve been up to this month…
 

# Spoilers Abound ❗🙈❗

There's plenty of spoilery stuff in here, so avert your eyes if you don't wanna know!
 

## World Atlas 🗺️

I will start with what I’m most excited about, which is how the world is coming together. As I mentioned, I’ve got everything at least boxed in so that the flow of the world can be understood by playing through everything. This is a hard thing to share with you all in a digestible format, so I thought I’d just show off how the world Atlas appears from a birds-eye view. I have it panning so that you can understand how the Pac-Man style world wrapping will affect the layout.

![img](https://i.kickstarter.com/assets/046/276/307/b6e49716a234d0fdce346232d648f900_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046443&width=700&sig=SvILN8ZJsE81Hv2pzKLHohGWSrTXZiekiym6DXF4w5g%3D)This is a still image taken from Nemo Maker of the entire world of Slumberland, panning to show off how it wraps around on itself.

So what are you looking at here exactly? Well, this is the world of Slumberland as seen in *Nemo Maker* (the tool I use to do all the world/level editing). Each rectangle is a room, with each room is just one or more screen-sized chunks. The color of the room represents the RoomType, which loosely correlates to which domain it is, although Haunted Hollow (in the lower right) has fairly different colors because it has multiple color schemes that are quite different from one another. For better context and scale, I’ll just zoom in on a room for you.

![img](https://i.kickstarter.com/assets/046/276/317/c0789bd1595517f0b9081c0b7904c31a_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046493&width=700&sig=DuAF97F0nPTUMlWhftcDYSTDfgCfCH1XZHe12%2Fih5Ug%3D)Zooming in on a room from a fully zoomed out view of the Atlas to help give you a sense of scale.

The world isn’t gigantic, but it’s very densely packed. The goal here is to create a world that is large enough to allow for plenty of exciting and interesting secrets and interconnectedness, without getting so big that getting from one place to another feels like a daunting trek. Navigating the world should be fun and interesting, and that dovetails nicely into the next thing I wanted to talk about that I worked on this month…
 

## Quests ⚙️

Rescuing the Guardian of each domain won’t always involve fighting a boss. Two of the domains have a major quest that you undertake instead, and there are other non-essential side-quests you can do as well. The reason this is relevant to the discussion of the world map layout, is these quests typically involve finding and carrying items that could be anywhere in the Slumberland. Rather than simply finding the relevant items and having them just go into your “inventory”, you’ll need to pick them up like any other object, and haul them to the NPC in question. While this risks feeling repetitive, re-traversing through the world while carrying an item becomes a uniquely interesting task when you consider that you cannot attack, pogo bounce, dangle, or defend when you’re carrying an item. Of course you can set the item down for a bit if you need, but you can’t simply abandon it (if you get far away enough from the item that it despawns you’ll need to return to where you originally found it to grab it again).

Don't expect to be juggling lots of sidequests though, in fact, there is no quest tracker. You'll just occassionally encounter NPCs that will ask you to bring them something, or take something somewhere else.

You can find important quest items before you actually have the relevant quest, but you won’t be able to pick them up and carry them until you've been given the quest. This is a preemptive design decision to prevent players from encountering a quest item for an unknown quest and feeling like they should simply carry it around until they encounter the associated NPC as I think that would hamper their fun. But don’t worry, if you do encounter a quest item early, it will be added to your map so you can find it again later.

![img](https://i.kickstarter.com/assets/046/276/320/0765269471937aca58a8e1b607a9aedc_original.png?fit=scale-down&origin=ugc&q=100&v=1725046512&width=700&sig=c5kdoKnKZWgFl%2FxIEPGcbcWHfNELbaP9syzQxjlMD4U%3D)Nemo encounters a video game cartridge before he’s met Alex and been sent on this particular quest.

So let’s see what quests you will be sent on that we worked on this month.

### Alex’s Cartridge Quest 🎮

When you meet Alex, the Guardian of Haunted Hollow, he’ll set you on a quest to find some video game cartridges for him. Unlike the other domains you’ve done previously where you could quickly continue through the domain and fight a boss, you won’t be able to finish this right away. It will require venturing to new parts of Slumberland, domains you maybe haven’t even been to yet, and finding and retrieving game cartridges.

![img](https://i.kickstarter.com/assets/046/276/322/ff3a7c29de3778609b05cb3f9a511b17_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046531&width=700&sig=VvOhZVxHginrWsP%2FfNfWBt1Ve%2F4O5W0pDPiVYH7ByeQ%3D)Nemo returning a (sketched-in) video game cartridge back to Alex

### Silas’ Photo Hunt 📷 

The Guardian of Nightlight City, Gertie, is missing when we arrive here. So before we can get much further, we’ll need Silas’ help. First he wants us to get some photos of the rumored giant dinosaur that’s been spotted throughout Nightlight City. Silas will provide us with the Camera, but we’ll need to carry that with us as we navigate this dangerous area looking for opportunities to take a photo of the dinosaur.

![img](https://i.kickstarter.com/assets/046/276/327/effba4b32fc4a3f0d867e353c22a126c_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046552&width=700&sig=7qrY2%2BpFv60Y2N07ZRPE6SxsZx34%2F%2FgBgxa5f0lXweM%3D)Nemo capturing a photo of a dinosaur in Nightlight City. The dinosaur appears to be quite camera shy.

Did I mention there’s plenty of placeholder art still? There’s no camera sprite yet, and we’re just using a not-yet-animated sketch of the dinosaur for now. But importantly, this quest all functions as expected so we can progress through the game and rescue the Guardian of Nightlight City.

### Silas’ Search for Missing Parts ⚙️

That’s not the only quest we can do for Silas, there’s also an optional quest to find some missing mechanical parts he needs to build something. As we continue exploring the world, we can bring these parts back to Silas to help him build something awesome and receive a really nice reward for doing so.
 

## Nightlight City Enemies 💡

This month I got Nightlight City enemies grayboxed in. I’m pretty excited with how these turned out as I’ve been having fun just toying with them a bit in *Nemo Maker*. I don’t have any art for these yet, so you’ll just have to use your imagination. The enemies in this domain are all creations of Silas’ (he loves to tinker) that have gone rogue due to the Oblivion taking over Slumberland. Let's take a look at 'em:

### LumenBot

This little edison-bulb-headed wind-up robot is just trying to be helpful and light up the way for you, but it’s way too bright. Probably best to just let it be and try to navigate despite the reduced visibility because if you attack it, you’ll break its bulb and it’ll get worked up. In fact, this little robot doesn’t even have a hitbox unless you break its bulbs (those exposed lead wires hurt).

![img](https://i.kickstarter.com/assets/046/276/329/3cf5cb5b0d5598c7b9a5ded4ac8b96bb_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046577&width=700&sig=ev1kBqdIIQ6CX1fIV3rCma8WXXNW9e0C61o%2FqD%2B4lLw%3D)LumenBot is way too bright

### MechaDino

Silas’ interest in large lizards led him to build these Godzilla-inspired wind-up toys which can fire a burst of electricity out of their mouths, so you’ll need to watch out for their attack. But if you can get on top of one, you can simply pluck out its wind-up key which will cause it to overcharge and explode.

![img](https://i.kickstarter.com/assets/046/276/338/410d6eb9eff1ce70637c096f49fde359_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046625&width=700&sig=TrKQ1GQQhGWHpOa6JcpUGCg2rDymnV3OQg6bUea23lY%3D)Pluck out MechaDino's wind-up key to cause it to explode!

### Aplomb-Bomb

This plucky bot loves people, so it will head towards you as soon as it spots you. Unfortunately its battery has gone bad and is about to explode! You’ll have to run away, or you can attack it to stun it and then toss it away.

![img](https://i.kickstarter.com/assets/046/276/361/a9939d0f4ec1706f1430808437430381_original.webp?fit=scale-down&origin=ugc&q=92&v=1725046732&width=700&sig=wT97GeN%2FH3kEtk3Yhk5KUgaUndHyYF1%2FFkIHUQUML4o%3D)Aplomb-Bomb love to get picked up and held by humans, but you should probably stay away



# Back to Spoiler-Free ✅🐵✅

And that’s the most exciting stuff I worked on this month. So now we’re back to spoiler free stuff to finish up this month’s update…
 

## Kickstarter (and other Indie Game) Friends 💚

### [Garbanzo Quest!](https://zachisagardner.itch.io/garbanzo-quest)

I want to share your attention with a couple of games this month that I think you might appreciate. The first actually doesn’t have a Kickstarter, but is a game I’ve been having a blast with as I play through the pre-release version. It officially comes out next week (September 4th), so you should check out Garbanzo Quest! on [itch.io](https://zachisagardner.itch.io/garbanzo-quest) and [Steam](https://store.steampowered.com/app/2105910/Garbanzo_Quest/) (though it looks like you can get it sooner on itch).

This game is a very solid level-based platformer that has a ton of charm. If you like cute platforming, and a bit of a (very fair) challenge, then this is probably for you.

![img](https://i.kickstarter.com/assets/046/276/390/c954e7127bb6591f568b5d5005335d2c_original.jpg?fit=scale-down&origin=ugc&q=92&v=1725046867&width=700&sig=B%2BVBIqFpVQSKAbkw42FE4h3Fc%2BwJKBSRpKkiTLPumMU%3D)

*The crazy bullet-heck platformer where your main weapon is your own spit! Help Garbanzo (and Pinto if you have a buddy) save their Friends from the evil Billi' Bones and his wacky world full of hand-crafted challenges, secrets, and branching paths!*

### [Fallen Tear: The Ascension](https://www.kickstarter.com/projects/fallentearascension/fallen-tear-the-ascension-high-fantasy-jrpg-metroidvania)

If you’re looking for a beautifully hand-drawn Metroidvania however, then you should take a peek at the Kickstarter for [Fallen Tear: The Ascension](https://www.kickstarter.com/projects/fallentearascension/fallen-tear-the-ascension-high-fantasy-jrpg-metroidvania). This is one I had to back just based on the strength of the game’s animations alone. I’m really looking forward to it.

![img](https://i.kickstarter.com/assets/046/276/396/6180156c9eff7ec48451f73f43b619f3_original.png?fit=scale-down&origin=ugc&q=100&v=1725046921&width=700&sig=cwU7ePLPm2EJgkpGt7hctZOXjynajY7nrrhNeZo9myA%3D)

*Embark on a vast, high, dark-fantasy adventure overtaken by corrupt gods in this Metroidvania + JRPG inspired by Suikoden, Zelda ( BOTW ), and Ori and Will of the Wisps. Fallen Tear: The Ascension is a traditionally animated 2D Metroidvania focused on exploration, slick combat, and a narrative-driven story filled with compelling and lovable characters.* 
 

## That’s all for now! 👋

As always, thank you so much for reading until the very end. Don’t forget to come visit in the [Discord](https://discord.com/invite/9NymgSJAVp) with questions! I hope you’ve all had a great summer so far, and I’ll see you in September with more updates on *Little Nemo*!

-Dave

![img](https://i.kickstarter.com/assets/046/276/403/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1725046994&width=700&sig=uO%2BT5P97vcX%2BfUgroar5v6OK6VFFFu3Ni8YvjrPBrZQ%3D)
