---

title: Monthly Update 32
description: Blue Moons and Crystal Caverns
image: /assets/images/devlog/2025-02-28-preview.png
---

# Monthly Update #32 ⛄

The extreme winter weather continued this month, and I continued staying warm inside and working away diligently at *Little Nemo*. I hope you all had a wonderful month, and if you were getting similar weather, I hope you got to do some snow-shoeing and/or had plenty of hot chocolate! ☕❄️

For this month’s update, I’m going to give the same warning I did in last month’s: this update might be a bit more text heavy. As we get closer to the finish line, the things I’m working on tend to be harder to share in screenshots and videos. But of course I’ll get some fun new screenshots and videos for those of you that enjoy all the spoilers! 😁
 

## Playtesting 🎮

I mentioned last month that we were gonna do some playtesting, and I wanted to follow up and share how that went. We had about one hundred people playing through roughly the first hour or so of the game, and the feedback was extremely encouraging. Overall the game seemed to really resonate with playtesters, and they found some bugs we knew were there, as well as some new bugs we didn’t know about.

This was just the first bit of the game, and it helps give us an idea of what players' first impressions will be like when they pick up the game. You only get one chance at a first impression, so it's a crucial span to get just right. But of course, there are other systems and mechanics and interactions which only start to surface as you get further into the game and have access to more of the world. So we need to continue to do more rounds of playtesting. We’ll continue with the playtesters that helped with the first round, but as we inevitably lose a few players at each step, it would be good to get some more players involved. If you’re waiting for the game to be totally complete and fully ready, then this isn’t for you as the game will get tweaked and changed based on feedback, but otherwise if you are interested in helping to playtest the game and can commit to playing a few hours of the game over a period of about a week or two, please fill out this [playtester submission form](https://docs.google.com/forms/d/e/1FAIpQLSeIGt-kgtCN0ST8VcI6dvddFS2s_KmmlkTfIigQNnTqydXelw/viewform?usp=sharing). Please don’t share this link just yet, the official plan is to start spreading the word on Monday, but I wanted to give you all a head start, since we likely don’t need a lot of new playtesters so it might fill up fast.

Please keep in mind that if you do want to help playtest, I’ll ask that you sign an NDA before providing access to the game. For those of you with **💾 Early Builds Access**, you already have access to the game, and in fact will be using the same build, so you can continue to share feedback in the Sleepwalker channels and can feel free to play along with the current playtesting build (or you can get access to the old debug build with instructions I posted in the Sleepwalker channel if you want to check out the Observatory or other content not available to playtesters).

For this next round, I’ll be addressing some of the most critical bugs that have popped up, and polishing some of the other early areas out a bit and starting to give more access to more of the world. 
 

## Timeline Update 🕰️

I don’t really have anything new to share on this front. Production continues at a decent clip, but we’re still coordinating plans to figure out when it makes the most sense to release. In the meantime just stay tuned and keep following along with these updates.
 

## What’s new this month?! ✨🆕✨

So aside from working with playtesters, what have we been up to this month? This is kind of getting into the technical weeds, but a small fun detail I worked on this month was giving us the ability to have multiple Atlases available in the game at once.

*Wait, so what’s an Atlas?* An **Atlas** is essentially all of the data that describes Slumberland. It’s a JSON file which in turn references other JSON files (one for each **room**, which are each in turn composed of screen-sized **chunks**).

*So, why would we need more than one Atlas if it describes all of Slumberland?* There are some times when we want different versions of Slumberland. Currently there are two versions of Slumberland in the build that is up on Steam. There is the playtesting Atlas, which has specific portions strategically blocked off to limit what playtesters have access to. And then there is the production Atlas, which is essentially the release version (which can only be accessed with a debug code). Later we will likely have a demo Atlas as well. This is also handy for testing out specific tiny Atlases. Typically I do a lot of my own playtesting in Nemo Maker, but that has the drawback of not emulating the actual game in some ways (you have infinite health and can never die, and in fact can’t even return to your bedroom at all, and it’s difficult to test save data interactions). So being able to create a tiny version of Slumberland where I can test a particular interaction out as it would happen in the actual game, can be very helpful in some specific scenarios.

So mostly this just helps us juggle different versions of the Slumberland Atlas all in one build. This is kind of nice because it lets us do things like:

- In the current build, the default Atlas is the Playtesting Atlas.
- However if you unlock the debug settings, you can override which Atlas you’re using to use the production Atlas whenever you start a new game.
- Each game save is associated with a specific Atlas.
- So the custom save files that are available in the debug mode (such as to visit the Observatory) can specify that they want to use the production Atlas (or could even use their own slightly manipulated version of the Atlas as needed).

So that’s just a fun, little technical detail that builds on top of the existing tech of *Little Nemo*. It’ll mostly ultimately only help with the development process, but perhaps it will be relevant if the game develops any sort of a modding community. 😄
 

### Once in a Blue Moon 🔵

There are some minor mechanical spoilers in here, but this is stuff that will likely end up in the instruction manual anyways, so unless you’re a die-hard spoiler hater, feel free to read this section.

This next detail is a little bigger: I’m working on introducing a new type of collectible into the game. Well actually, it’s mostly done, all it really needs now is the accompanying UI to communicate how many have been collected (eg. X of Y collected per domain). Before I get into it, I’ll set the scene for this idea I’ve been kicking around in my head lately:

- I think it was when I was playing some *Banjo Kazooie* recently that I was thinking about how this game (and plenty of others like it) have a type of collectible that isn’t really represented in *Little Nemo*. That is, a collectible which is persistently collected (unlike the Candy and Moons which always respawn after you wake up), but is [fungible](https://www.merriam-webster.com/dictionary/fungible) and has no unique qualities to itself (unlike the Toys, PJs, Little Buddies, Music Tracks, and Artbook unlocks which each give you a specific instance of that reward). We do have the Lucky Coin Shards which meet this criteria, but importantly, we’re limited to having 12 of those in the world, and I’m thinking more in terms of something that can be placed around Slumberland a bit more liberally.
- As I was watching some footage of playtesters that were kind enough to record footage for me of their playthroughs, I was struck with how hard people would try to get the Moons. There’s one early in the Dreamswept Plains that is just out of reach, and while you can get it if you’re persistent enough, it’s mostly there to help teach the idea that you don’t need to, and sometimes can’t, get everything right now. On the one hand, it’s great to see that Moons are enticing enough that people will try very hard to get them, but on the other, I am worried about a slight sense of disappointment later on when players realize those Moons are just a currency. Getting that Moon didn’t improve their *completion rate*.

So with these things in mind, I started to consider, what if we had **Blue Moons**? These would be very similar to the regular Moons (they still help fill your Moon Meter) but with the important distinction: *each one can only be collected once*. If you come back later after you’ve died or otherwise reset the world state, it will be replaced with a regular Moon. And we can also put these on your map, so if you can’t get it right now, you’ll know where to come back for it later.

Okay, that’s kind of interesting, it’s fun to have collectibles like this, but it’s also important for it to help progress some goal you have. So what would they do…

**A quick aside:**
I have also been thinking a lot about fast-travel between beds lately (because many of the playtesters brought this up, asking if we’d be able to fast-travel). In general the way I’m thinking about fast-traveling is such:

- I want the world to always be fun to navigate and not to feel like a chore to backtrack through areas you’ve already been. It should be fun to revisit older areas with newer abilities and find new secrets.
- I’ve also designed the world so that it wraps upon itself horizontally to help reduce one of the major pain points of getting stuck in the “corner” of a world map and needing to get to the other side (but of course, there will always be a furthest away point you might want to be headed for).
- But ultimately I appreciate that eventually players will probably be expecting to have the ability to fast-travel between beds that they’ve already reached. And as you get further into the game and start doing more and more backtracking, especially as you’re looking for all of the secrets you missed, fast-traveling is the sort of thing that will probably be somewhat essential.
- So if we do want to eventually introduce bed-fast-traveling to players, it should be after they’ve hit some point where we know that they’ve already at least explored much of the world. When would that be? How do you give this ability to players? Does Flip just give them something that unlocks it (eg. *Dark Souls*’ Lordvessel item) at some mid-way-ish point of the game?

So my goal has been to push back on fast-travel as much as possible (so that we can find that breaking point where backtracking is not fun), while keeping the general design of how it would work in my head and keeping an eye out for how it would best be introduced.

And so it was with all of that context that I was speaking with Rygar and Cid about “what would be a good reward for collecting Blue Moons?” when Cid had a great idea that I think ties this all together nicely:

Once a player collects a certain threshold of the Blue Moons in a given domain, that would unlock fast-travel to any of the beds they have reached in that domain. That can be fine tuned (is it some fixed number of Blue Moons, or is it say half of the Blue Moons in a domain?) but I think the general idea works really well because it does two things together at once that I wanted to do:

- Give the Blue Moons a really great reward that makes it feel worth your while to go out of your way to pick one up.
- Allow fast-travel to be unlocked in such a way that players still need to explore the world a fair amount before they can fast-travel (and in fact, making it work per-domain does that even better than I had initially envisioned).

Cid said that this idea was inspired by how fast-travel/flight is unlocked in new areas in *Final Fantasy XIV*. I don’t think I’ve played that game since before Flight was even an option, so it just goes to show how it’s nice to be able to bounce ideas off of other people that have different gaming contexts to lift ideas from.

Normally, introducing a new collectible like this would be a silly idea this late in the game, but all of the things needed to make it happen were already in the game such that it was easy to throw this all together over a weekend as a proof-of-concept. So now all that’s left is making sure it’s easy for players to see how many Blue Moons they’ve collected in each domain, and how many there are total (that aspect was actually the most difficult part because it required slight adjustments to the Atlas data structure so that it’s easy to “find” specific types of items such as Blue Moons in the world so we can count them and know which domain they’re in).

So that’s the general idea for those wondering about the plan for fast-travel. This isn’t definitely going to happen like this, but I like how this is all looking, and we’ll get a better sense of how it all feels shortly as more and more of the world is fully playable.

And if you’re wondering, these are indeed just recolored Moons, with some extra particle effects (I will likely add some more as well, I want them to feel appropriately special).

![img](https://i.kickstarter.com/assets/048/349/844/59d88be53c9a7bf98f9e80ce3dff77d6_original.webp?fit=scale-down&origin=ugc&q=92&v=1740765759&width=700&sig=fABgcrTUcUk96pRdjJVIAI7%2FzZlWRnXdEcbslKieaVo%3D)The Blue Moons each can only be collected once. I wonder if something amazing happens if you collect every single one…

Okay, now for some real spoilers…
 

# Spoilers Abound ❗🙈❗  

Okay, so I talked a lot about the Atlas stuff and the Blue Moons, because they are fun to talk about, but what I have actually been spending most of my time on this month is finishing up the…


## ✨Crystal Caverns✨

The enemies and gimmicks still needed some polishing at the start of this month and we had lots of ideas on how they interact in fun ways that we needed to get down in NemoMaker and all assembled together into a fun domain. We’ve got a really great first pass done. Here’s a look at what the map looks like right now:

![img](https://i.kickstarter.com/assets/048/349/894/28da515ed6015fb0e2107382d47aaef6_original.png?fit=scale-down&origin=ugc&q=100&v=1740765919&width=700&sig=OhCH8N6XGUATXP0iucLEy5a5G9iVg7lLZBAOPySMXtw%3D) Here's a look at the map of the entire domain.

It’s somewhat similar to the structure of Nightlight City in that its major structure forms a large loop, but we have more branching off happening in other directions, and less of the shortcut-unlocking style of Nightlight City. And rather than being on a photo hunt, this domain will require that you battle a boss to get Oliver’s scepter back. I’m not going to show that off though since I’m still pushing back work on bosses in favor of getting the world fully assembled, so we’re just gonna stick to showing the rest of the domain.

So two updates ago in [Update #30](https://diesoft.games/2024/12/20/nemo-monthly-update-30.html), I posted about how the sprites for some of the Crystal Caverns gimmicks were coming along, but now I can show off much more.

A relatively simple gimmick that has become a bigger part of the Crystal Caverns than I originally anticipated is **Breakable Blocks**.

![img](https://i.kickstarter.com/assets/048/349/951/0ea28983fca90e3ee558b320492fdfb1_original.webp?fit=scale-down&origin=ugc&q=92&v=1740766184&width=700&sig=bmi0oQwtvQA31kpPdj1VxAcPH1d8x5jLw08ZN2UMr5E%3D)Break these blocks if they're in your way, but watch your head, Nemo!

They just get in your way and need to be smashed with your Yo-Yo or Pogostick. You have to be careful as they can fall on your head and do a good bit of damage. The Crystal Caverns used to be mined, so “digging” your way through rocks occasionally is thematically relevant.

And we also decided to add some **Bomb Blocks** that make interacting with the breakable blocks more interesting.

![img](https://i.kickstarter.com/assets/048/349/996/d09f8b332ce807ce4b002636fd14a059_original.webp?fit=scale-down&origin=ugc&q=92&v=1740766573&width=700&sig=CxYZbRl95sprkUY8om57EIhV2yI0OOisg8edhflyZ88%3D)Be VERY cautious around these bomb blocks. They explode almost immediately after they're hit.

All of the Scarabiner enemies (Dizzy, Crystal and Flying) have been polished up and are a lot of fun to interact with. Previously they would continue walking around on surfaces like the Tiredactyl…

![img](https://i.kickstarter.com/assets/048/350/048/5373c339937b9f8b5313effe56e76b38_original.webp?fit=scale-down&origin=ugc&q=92&v=1740766860&width=700&sig=dZvHpc%2FXWoailWjEDtA%2B9Yd825c6%2BNW8PUHI46zFksE%3D)Here's a Tiredactyl for reference. Scarabiners used to move along surfaces like this.

But we found that just wasn’t as fun and interesting and they could get themselves into some situations that were unfun. So instead they will now just restrict themselves to whatever surface they are currently on:

![img](https://i.kickstarter.com/assets/048/350/096/552cf9806c237bad8d87b29e7603da0a_original.webp?fit=scale-down&origin=ugc&q=92&v=1740767131&width=700&sig=zgvEB3K9%2BPjPo2hnq48PFTfzbe%2FqgXGSW%2Fh9VjTxJQ0%3D)Here you can see Scarabiners simply patrol on whatever surface they're currently on instead of crawling around it.

And they have a much better "tell" when they’re about to flip onto their backs and attack you, making them feel much more fair.

The Crystal Scarabiners similarly stick to one surface now, but now you can see what their area of effect attack looks like. You’ll need to be careful with these as their default damage amount is THREE damage. That means if you come into the Crystal Caverns too early before you’ve collected a Lucky Coin, these enemies will kill you in one hit (you can also wear your default PJs which have the ability of preventing you from dying in a single hit).

![img](https://i.kickstarter.com/assets/048/350/212/98082ac9b19158db38b730dd11ceed78_original.webp?fit=scale-down&origin=ugc&q=92&v=1740767849&width=700&sig=sPgp%2BhWnFFrUYcf34DsDCunzTNO7ywRcOjcdD4748SI%3D)The Crystal Scarabiners have an AoE attack that does a LOT of damage. Tread lightly around these enemies.

You can’t pick these enemies up like you can the Dizzy Scarabiners on account of their spikey protrusions, but if you pogostick on their bellies, you’ll be able to shatter the crystals off of them, revealing that they’re really just Dizzy Scarabiners underneath all of that crystal growth.

The Flying Scarabiners haven’t needed to change at all. They are a really simple concept (almost as much of a platform as they are an enemy, but it is possible for them to die) that just makes for some fun interactions. So I just thought I’d share how they’re looking with their somewhat iridescent shells.

![img](https://i.kickstarter.com/assets/048/350/233/f1f3be1a2dc0735fac6e18b73889a9f6_original.webp?fit=scale-down&origin=ugc&q=92&v=1740768077&width=700&sig=pNycMwkALYHz%2Fv4Mtb17qNZn%2B%2Bl1sj0yWM%2BueI8ezA0%3D)The Flying Scarabiners either hover in place, or patrol back and forth, but they can't support much weight so they'll slowly fall if you're standing on their backs.

These enemies come together with all the gimmicks I’ve previously talked about to make for some really cool encounters. I think this area has turned out to be a lot of fun so I’m really excited for y’all to get to play it.

![img](https://i.kickstarter.com/assets/048/350/287/bf2e9fbf6e9610d96ac30072bfa1ae54_original.webp?fit=scale-down&origin=ugc&q=92&v=1740768533&width=700&sig=xNHY9HTtQ%2BgqRjtcNixSJeruh0qXbx9suYNsn0u4WZg%3D)I think you will all really enjoy exploring this domain!


# Back to Spoiler-Free ✅🐵✅

Okay, that’s enough spoiler content for this month.
 

## Kickstarter Friends 💚

As I often do, I want to take a moment to share some other Kickstarter campaigns that might interest you as a backer of our *Little Nemo*.


### Broken Shell 🐚

The cute and cozy hand-drawn puzzle adventure [Broken Shell](https://www.kickstarter.com/projects/foggystudio/broken-shell-a-cute-and-cozy-hand-drawn-puzzle-adventure) just launched their Kickstarter this month. They’ve already met their goal, but that’s no reason not to show support if this is a game you’re interested in.

![img](https://i.kickstarter.com/assets/048/349/762/e766b12ea8ed85a445d52bb9b85ff0f8_original.jpg?fit=scale-down&origin=ugc&q=92&v=1740765262&width=700&sig=0xw64d5EOw8s0BMtPgDAsK%2BDDRvgWJBPcs4A6Kd8zwQ%3D)

*Broken Shell is a cozy, **hand-drawn puzzle adventure** that takes players on an **heartwarming journey** with Mr. and Mrs. Hermit, a crab couple whose peaceful home has been devastated by human expansion. As they navigate love, loss, and hope, players will help them solve meaningful puzzles and overcome challenges to find a new home and rebuild their life together.*
 

### Tails of Fate 🦊

Here’s another one that might interest you if your interest is more specifically in Metroidvania games. [Tails of Fate](https://www.kickstarter.com/projects/tailsoffate/tails-of-fate) has some really fantastic pixel art animations and is definitely worth checking out. As with Broken Shell, they’ve already met their goal, but that’s no reason not to show your support. Take a look!

![img](https://i.kickstarter.com/assets/048/349/767/023ba73c2fb9bd3b5e217419b959ac4b_original.png?fit=scale-down&origin=ugc&q=100&v=1740765293&width=700&sig=Ux8x8i8mgEKE9uMTCmW%2FEiDi%2BYLDRQ0E0y0bI3iFW6k%3D)

*Tails of Fate is a 2D action-adventure Metroidvania that combines old-school RPG charm with modern, dynamic combat. Fulfill this tale, as darkness swarms the fantasy lands of Fauna. Venture epic kingdoms and treacherous dungeons in a 2D action platformer, with Metroidvania elements in a hand-crafted pixel art world filled with souls-like boss fights, dungeon platforming, and dynamic enemy combat design*
 

## That’s all for now! 👋

As always, thank you so much for following along. It always feels great to hear from people that they follow along with these updates and enjoy watching the game come together. If you’ve made it all the way down here, thank you. It means a lot. ❤️

Enjoy the last day of February and I’ll see you again at the end of March!

-Dave

![img](https://i.kickstarter.com/assets/048/349/775/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1740765356&width=700&sig=a0KMgDpCp8yWWEdORQrDilNvJeLtIc%2FrJ7hOuR6zsYA%3D)
