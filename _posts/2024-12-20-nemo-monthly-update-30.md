---

title: Monthly Update 30
description: Special collectibles, Quests, and more!
image: /assets/images/devlog/2024-12-20-preview.png
---

# Monthly Update #30 🎄

**Happy Holidays** to all of you Sleepyheads following along with development! It’s wild that we’re already about to close out 2024. Time flies when you’ve got your head down just focusing on making a game. But this is my favorite time of year, so after today I’ll be taking time off from game dev for a week or so and won’t be back at it until 2025 rolls in. I’m very lucky to get to spend this Christmas with family and I’m really looking forward to it. I hope all of you have peaceful and enjoyable holidays as well.

So as we head into the new year, where are we at with the development of *Little Nemo*? Well let’s get right into it with an update on the timeline for release:
 

## Timeline Update 🕰️

My goal for the end of this month was to have the game fully playable from end to end with all of the level design at least blocked in and placeholders for the boss encounters. I think right now you could get through the entire game, but there are some areas that aren’t blocked-in to the degree that I was imagining, so I still have some level design that I’m behind on. The reason I want to be able to have the game fully playable from end-to-end is so that at the start of 2025 I can start having people playing through and getting feedback on what is and is not working. The timeline for how long it takes to tweak the world/level design into a really fun spot is a bit of an unknown, so it’s important to get started on that sooner rather than later to help me pin down a release date.

So perhaps it will be helpful to iterate over what’s left to do in 2025 to get the game released. Here’s kind of a big picture bulleted list:

**Production** (basically finishing the game)

- Finish and polish level and world design
- Finish sprites and polishing for the remaining enemies (this is mostly Nightlight City and Valley of Silence enemies)
- Create/Finish five boss encounters
- Finish and polish up dialogue and dialogue trees
- Implement Bonus Features (eg. in-game manual and the in-game artbook, some of these may get punted until post release if need be, but there are some fun ones I’d like to add)
- Misc smaller tasks (eg. I still need to make the UI on the status page to show how many Lucky Coins and coin shards you have collected)
- Finish Music and SFX (for my time this simply means coordinating with Pete and Jonathan and implementing any minor technical updates needed)

**Post-Production** (getting it out the door)

- Quality Assurance and bug fixing (luckily I like to think I’ve been pretty good at this as I work, so while there will certainly be plenty of bugs we find and fix, I think it will be relatively under control considering the scope of the game)
- Create better marketing and storefront assets (videos, carousel images, finish editing the animated intro, etc.)
- Performance optimizations
- Switch port
- Consider localizations at or near release
- Prepare the digital backer rewards (artbook PDF, soundtrack download)
- Marketing & outreach. Basically just getting the word out (this might be the most time consuming task here, making sure people know about the game and its release date once we have it will occupy a lot of my time).

This looks like a lot of work to do, and it certainly is, but even being to the point where I can list out the major tasks in only this many bullet points, after years of looking at seemingly endless task lists, is very inspiring. This next year I might be busier than I’ve been throughout development, but it’s very exciting to see the game becoming something approaching a finished product that I’ll be able to proudly get out the door.

So I know some of you are probably skimming and thinking “yeah but when exactly is it gonna release?” I’m still not ready to give you all a date, but I hope to be able to settle those things early in 2025 because I will need to follow a fairly strict timeline to maximize my marketing and outreach efforts. First I just need to pin down some more of the unknowns (especially how much polish is needed to get things fun). The big immediate blocker for that is just getting the level/world design into a good enough state for first pass testing.

Okay, I think that’s enough about the timeline to release. Let’s get into showing off some of the fun stuff we’ve been working on this month!
 

## Collectibles and Quest Item Sprites 🌟

I’m not going to mark this as a spoiler because these are things that I’ve talked about in the past and will likely be in the instruction manual. I very much want all players to know about all of these things, so I’ll go ahead and show them off.

### Lucky Coin Shards 🪙

I finished up these sprites, though I still need to finish up the UI which will be displayed in the Status page.

![img](https://i.kickstarter.com/assets/047/628/197/9e4e72102437c52807662fe588f118b8_original.webp?fit=scale-down&origin=ugc&q=92&v=1734712290&width=700&sig=KLl7v6rqIom5%2FrAiKSXBFB%2BoloUSclbKV4GuEkGUCrA%3D)Here you can see a Wooden Lucky Coin Shard. After completing the Wood Coin, you'll move onto Steel and then Gold.

There are a total of 12 Lucky Coin Shards in the world, and collecting four of them will form a Lucky Coin. Each Lucky Coin you complete will reduce all incoming damage by one (with a minimum of one). I’ve talked a bit about how this works in a [previous update](https://diesoft.games/2024/03/29/nemo-monthly-update-21.html#lucky-coins-), so go read that if you haven’t already.

These are obviously a fairly important progression collectible, so I wanted the sprites to be large and exciting. I hope you like them! Thanks to Donkey Kong 64 and João for the puzzle piece motif idea. I was looking for a way to visually indicate that this was a quarter of a larger item, and I think this combined with the dashed outline of the whole coin does a good job of communicating that.

![img](https://i.kickstarter.com/assets/047/628/226/6824b32909c89987b7ae4ca035a7d90e_original.webp?fit=scale-down&origin=ugc&q=92&v=1734712481&width=700&sig=3lwmMw9dnW2fEUfQb6MYeebV2mC1TXVZREZfiGJwPnk%3D)Here's Nemo finding a Steel Lucky Coin Shard

### Cassette Tapes 📼

So I’m thinking I haven’t actually talked much about this, but I want to allow players to collect music tracks in-game to unlock them in the Music Player. Part of what makes a world fun and exciting to explore, aside from the appeal of the world itself, is the promise of finding rewards strewn about. So to that end, I’ve included this as one of the collectibles you can find in the world.

![img](https://i.kickstarter.com/assets/047/628/256/7a41300d6536d78f53cee279a8294128_original.webp?fit=scale-down&origin=ugc&q=92&v=1734712725&width=700&sig=U9g8Zv9gozTBsah5kGz1Aj7iVA2K1VminqmHcP1W9%2Bk%3D)Cassette Tape collectibles take advantage of dynamic sprite recoloring so that each can have its own color scheme to match the music contained within

Finding a Cassette Tape will unlock the associated music track for you in the music player, so you’ll find at least one in each domain for that domain’s music, as well as others for the various other tracks in the game (such as Main Menu music, the music that plays when a Guardian helps you remember, and others).
 

### Retro Game Cartridges 🕹️

You might find these throughout the world, but I won’t spoil what they’re for (though if you want to know, you can find mention of them in [this update](https://diesoft.games/2024/04/26/nemo-monthly-update-22.html#the-guardians-of-slumberland-)). I just wanted to show off how they’ve turned out.

![img](https://i.kickstarter.com/assets/047/628/307/6eea417c7e17bc88510f8aca607a3cd7_original.webp?fit=scale-down&origin=ugc&q=92&v=1734713081&width=700&sig=R89V1J6PbNrXAExT9HI5BeugUYBuKUyfVw6uSMzQr%2B0%3D)Nemo discovering and carrying around a Game Cartridge. These also take advantage of dynamic coloring so that I can make each game cartridge at least somewhat visually distinct without the need for individual sprite sheets for each of them.

One small detail to note here: if you discover one of these cartridges before you've met someone asking about them, Nemo will instead take note of it, but won't be able to carry it around. 

Because these Game Cartridges are a quest item, that dovetails nicely into some more work I did this month I wanted to share…
 

## Map Icon Overhaul 🗺️📌

In the builds of the game that you’ve seen so far, the way map icons worked was simply: once you’ve been into a room, that room will render on the map, and any items that should appear on the map as icons will show up as well. This works well for most of our use cases: you’re trying to get back to an NPC you’ve already met, or there was an item in a room that you were unable to reach previously and you want to get back to it. But there are two use-cases for icons on the map that we simply didn’t handle.
 

### Manually Adding Something to the Map

Sometimes when you speak with an NPC, we want them to be able to add something to your map, even if you haven’t been to the room that thing is in. Since we just simply rendered them or not based on the explored status of the room it was in, this needed a minor overhaul of that logic.

![img](https://i.kickstarter.com/assets/047/628/369/ed05d624f46f7cfee915cbd72c2e5a2c_original.webp?fit=scale-down&origin=ugc&q=92&v=1734713449&width=700&sig=lDkYIevf5uqxEnVGxKpDTgcWhA%2Fb7eoCywBY0D4kFtA%3D)Here we can see that Flip has added Minerva's location to our map to help us find our way to her.

This could use some visual treatment (perhaps even a quick animation when you open the map) but the important bit is done and we can flag any entity to appear on Nemo’s map. This is gonna be very critical for NPCs who specifically want you to head somewhere and you need help finding the way.
 

### Dynamic Map Icons

Another, much trickier problem we have is putting things on the map which Nemo can carry around through the world. Quest Items, such as the Game Cartridges, are a perfect example.

To set the context, I should probably quickly explain how items like this work in our seamless open world of Slumberland (this logic applies to basically everything that spawns into the world of Slumberland):

- A given item has a prefab instance anchor which defines where that item spawns in.
- When the room that anchor is in spawns, the anchor determines if the entity is already spawned into the world or not, and if it isn’t already in the world, it will spawn it at the location of the anchor.
- That anchor will continue watching for any need to respawn the item if its current instance goes missing.
- The actual instance of the item will stay loaded into the world until the room it is currently located in gets unloaded.

This logic is a bit complex, but it handles the use case of being able to carry items around the world without accidentally duplicating the item or losing it.

So in the context of a Game Cartridge quest item, it might get placed on our map by an NPC, then as we get closer to that room and it loads in, now we can have a dynamic icon on the map which will show where the item is in real time. This is helpful because we might set that item down for a bit to do something (keep in mind you can’t use your yo-yo or monkey bars when your hands are full). If we get too far away from the item and the room it's in unloads, then it will go back to the anchor point, but we can wind up in a state where the item is still spawned into the world and maybe we forgot where we set it down or we’re just wondering if it has respawned back to its anchor. Glancing at the map, you’ll be able to see exactly where you can find that quest item.

![img](https://i.kickstarter.com/assets/047/628/467/d521132ead94e8e31e97057039751f8c_original.webp?fit=scale-down&origin=ugc&q=92&v=1734714107&width=700&sig=dwzKYGfKlIgIv%2BH2z9jDw8dOvhHeFUPuauTZQcYtM4Q%3D)Here's a closeup view of the mini-map as Nemo carries around an important item, occasionally setting it aside to do something.

There is another quest item (I’ll keep it spoiler free here) that you’ll need to bring with you throughout the entirety of the domain as you make your way through the first time. I’m excited to show that off some more in a future update, but that was probably the biggest driver for wanting to get this dynamic map icon feature into the game. (If you want some spoilers about this particular quest line, check out the section on Gertie in [this update](https://diesoft.games/2024/04/26/nemo-monthly-update-22.html#the-guardians-of-slumberland-).)
 

## Dreamswept Plains Updates 💨

Seeing as this is the first domain, I think it’s fair to assume you’ve all seen this stuff. One thematic thing we’ve been wanting to do with this domain is give it a slight dreamlike sense of possibly being under water. One major detail we've added to help create that impression in a very subtle way are these new marine-themed clouds you’ll see floating through the sky:

![img](https://i.kickstarter.com/assets/047/628/492/ef086a86a08fdc5bbad07f91c2c04f45_original.png?fit=scale-down&origin=ugc&q=100&v=1734714340&width=700&sig=EdtDTqhODBM4VGavHdZGdqvYs1Iz2r9C5%2B1%2FUU1IXJ8%3D)The background of the Dreamswept Plains now features some clouds in the sky which resemble various marine life

There’s also a new item that you can pluck out of the ground (not limited to this domain, but this is where you’ll first spot it), a bubble!

![img](https://i.kickstarter.com/assets/047/628/517/2473e52a04d647dc1b77a6204c557640_original.webp?fit=scale-down&origin=ugc&q=92&v=1734714555&width=700&sig=MzSS322U8%2By0BSGaHpBuIKTrMmSbj5bj%2FW3mF%2BasK4E%3D)Nemo plucks some odd looking grass causing a bubble to pop out of the ground

It seems kind of silly at first because you can’t really interact with it other than to pop it with your yo-yo, but perhaps a later ability upgrade will allow you to do something with it? 🤔

There’s also another enemy in the works that belongs in the Dreamswept Plains, the Venus Clamtrap. It’s a bit of a mix of a clam and a Venus flytrap. Here’s a mockup sketch from João.

![img](https://i.kickstarter.com/assets/047/628/550/e377c258abdc7bc1929ae95a502e7f5d_original.png?fit=scale-down&origin=ugc&q=100&v=1734714843&width=700&sig=NSSZHOvIlOURpX57pN6HuaFDnES56zD4FEcXYNqD2Rs%3D)One of João's sketches for this enemy, this one has a bit of pirate theming for fun

This enemy has actually been done for a while, I just wasn't able to come up with a sprite that worked on my own, so I enlisted João's help and I really like how this one is looking now!

These are all pretty minor touches, but when combined with the Burrchin, Rock Lobster, and Captain Sweetbeard's pirate theming, the hope is that players might start to pick up on these slight aquatic themes in the Dreamswept Plains. It’s not important narratively or anything, it's just a small detail to help the world feel a bit more interesting and more like the product of a child’s imagination.
 

# Minor Spoilers Abound ❗🙈❗  



I also want to share some of the sprites that have been coming along in the Crystal Caverns, but I’ll tag these as spoilers because I imagine if you’ve been avoiding spoilers, you don’t know anything about this domain. You’ve probably seen these before (I talked a bit about them in [Update #25](https://diesoft.games/2024/07/26/nemo-monthly-update-25.html#crystal-caverns-enemies-and-gimmicks-)), but the sprites are all finished or very nearly ready.

In the Crystal Caverns, one of the primary gimmick focuses is toggling things with some crystal devices you’ll find throughout the domain. You can toggle them by hitting them, and they may have any number of side effects.

![img](https://i.kickstarter.com/assets/047/628/647/5f960123a32dc044ff55feb16be9fff1_original.webp?fit=scale-down&origin=ugc&q=92&v=1734715850&width=700&sig=uLrlGklniJm5YQc1s%2F8TuGMP1B%2BfPLsQGrtOk8LKVqA%3D)Nemo experimenting with this crystal device

Two of the common toggleable things you’ll find in this domain are toggleable hazards. These are some kind of mining devices which become very dangerous if activated. (These sprites are just about done, I just need to color them.)

![img](https://i.kickstarter.com/assets/047/628/703/bb7ea4f8f7629d42cb66049188ebec75_original.webp?fit=scale-down&origin=ugc&q=92&v=1734716416&width=700&sig=rUv9SaI3MBQI6FY%2BHIo00PAqPVn3WOSOQOB49PoYeF4%3D)Nemo navigates this dangerous, old mining equipment

Another is these dangle bars which can be retracted. You’ll only be able to dangle from these when they are extended.

![img](https://i.kickstarter.com/assets/047/628/779/731dfdf262f85b58099b8504d8bbc2e7_original.webp?fit=scale-down&origin=ugc&q=92&v=1734716972&width=700&sig=BbF8JWUQFJfZu2vDzlsu6jxerCI0Yo0c7DsrzSQTaf0%3D)Nemo must make precise pogo-bounces on these crystals to avoid the Oblivion

Crystals aren’t the only way to toggle the state of these. There are also the pluckable timers which will be active for a specific duration after being plucked.

![img](https://i.kickstarter.com/assets/047/628/834/c402cf2ea6aa49d446f3733272012c98_original.webp?fit=scale-down&origin=ugc&q=92&v=1734717472&width=700&sig=81K7hYmJnZCSk7zBMlnuDMxtR%2BXqkRpivamMbqR36ow%3D)Nemo with a perfectly timed jump to match the end of the toggle's timer to nab this Moon

The Crystal Caverns are far enough into the game that we can expect players that have made it here to understand the basics fairly well, so this is one of those areas where we can start introducing more complicated and dangerous gimmicks like these. We’re having a lot of fun toying with these gimmicks to create fun rooms to make your way through as you explore this domain, and these things are always so much more fun both to develop and to play through once the sprites start to finally take their proper shape.


# Back to Spoiler-Free ✅🐵✅  



## That’s it for now, see you in 2025! 👋

We’re entering the final stretch now. Thank you so much for following along, I can’t wait to get the game into your hands’ next year and let you explore Slumberland for yourselves. I hope all of you Sleepyheads have a wonderful holiday season! 🥂🍾 Until next year!

-Dave

![img](https://i.kickstarter.com/assets/047/420/227/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1732743698&width=700&sig=l1kTPA%2BKznjygiomcB03c5wT1yVJ0waa7dj8r%2BHoSPg%3D)
