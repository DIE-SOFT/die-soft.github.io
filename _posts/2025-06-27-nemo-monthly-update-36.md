---

title: Monthly Update 36
description: Release target announced and a look at Slumberland's secrets.
image: /assets/images/devlog/2025-06-27-preview.png
---

# Monthly Update #36 🌞

Hello, Sleepyheads! Thanks for coming back for another devlog update for *Little Nemo*. We had a **ton** of excitement this month in the gaming sphere, both in terms of news and new releases. But most relevant for our discussion of course, was the new trailer we debuted as part of the [MIX Summer Game Showcase](https://www.youtube.com/watch?v=hyRhu8kWv2E). If you haven’t already seen it, make sure to give [our new trailer](https://www.youtube.com/watch?v=F9w7DjuZl3E) a watch, unless you’re avoiding all spoilers (this trailer briefly shows off almost *every* domain):

![img](https://i.kickstarter.com/assets/049/841/475/569bcb2d2ed1b92d5dbec24606d2d776_original.png?fit=scale-down&origin=ugc&q=100&v=1751044110&width=700&sig=QnTBKHPqr3kuQhPSehuyHZM%2BAWDNFozdaitAkFd7GHE%3D)

But if you want the short of it and missed [last month’s update](https://diesoft.games/2025/05/30/nemo-monthly-update-35.html) (where I go into all of this in great detail), I won’t bury the lede:
*Little Nemo and the Guardians of Slumberland* will be coming to Steam and [itch.io](http://itch.io/) in **Q1 2026** with the Nintendo Switch release following shortly after.

And since we now have a clear timeline ahead of us, I am going to stop doing the **Timeline Update** 🕰️ every month as I was doing, though of course I will touch on anything relevant to that discussion as things come up.

One other thing to note from our new trailer: the [time-limited demo](https://store.steampowered.com/app/2074630/Little_Nemo_and_the_Guardians_of_Slumberland/). The plan is for it to be up for all of June, so that only gives you a few days to try it out if you haven’t already. The demo will come back again before launch, and I’ll let you all know when that will be happening again.

So this month, before I show off a bit of what I’ve been working on, I thought it would be cool to do a short look at a specific topic, something I want to do regularly as the day-to-day work I’m doing starts to get a little less exciting to show off. Luckily there is tons of stuff I’ve already done that maybe I have neglected to show off sufficiently. So this month we’re gonna check out:
 

## The Secrets of Slumberland 🤫

One of the most fun things to work on when I’m doing level design, is hiding secrets in the game. I thought I would take some time to talk about how I approach designing them, as well as the bigger picture systems in place to help ensure they’re a fun aspect of the game.

Don’t worry too much about spoilers here, I’m not sharing anything that you wouldn’t have already encountered in the demo portion of the game.
 

### The Internal Logic of Secrets 🔎

One thing I try to be cognizant of is the “hit every wall” problem that can arise in games with secret rooms hidden behind walls. In my opinion, a good secret is found because the player notices something, or can just feel that there’s a secret there. So my goal is to help players understand that the secrets aren’t just random breakable walls and that there is an underlying logic to them, or at the very least there are hints. So the best way I can help the player find secrets is to give them the right clues and to craft the secrets in a sensible way and help them understand that they should be “keeping an eye out” for secrets rather than just assuming they could be anywhere. If a player is just using the yo-yo on every wall to *test* it, then that’s a failure on my part (and besides, secrets should have varying methods of being hidden).

So with that general philosophy explained, here are some of the ways I try to help create a consistent internal *logic* for the secrets:

- **Universal Hints**: This is something that isn’t actually implemented yet, so it’s not in the demo, but there will be a subtle visual indicator somewhere nearby every secret. You won’t know what it is the first time you see it, but after enough exposure, the hope is you’ll learn to understand it indicates that there’s a secret nearby. Once you know that, you’ll then need to have a keen eye to spot these indicators, and then also from there deduce a) where exactly is this secret and how does it function, and b) is this even something I can get yet or does it perhaps require a toy I don’t yet have.
- **Geographic Hints**: These are, I think, the more important and subtle clues that players will (often perhaps subconsciously) notice and think “is there a secret here?” This can be a conspicuous shape of the terrain that begs questions, or can be subtle hints from the tiling system that imply the existence, or lack thereof, of tiles on the other side of what appears to be a solid wall.
- **Unique Hints**: These kinds of hints will be dependent on the context. These are generally bespoke things that are designed to draw your attention or show you something in a relatively “innocent” way so as not to be too obvious.
- **Map Hints**: Because the world is built up of screen-sized chunks, sometimes there are conspicuous “holes” in the map, and those will often contain secret rooms. This is something I’ve always loved since playing the original *The Legend of Zelda* which used this hint technique, and then was later also used by *The Binding of Isaac*.

I want to show off the *geographic hints* and *unique hints* by showing how I designed what is arguably the first secret in the game. Technically, it’s more like the fourth or fifth secret you encounter, but this is what players will likely think is the first secret and it’s one that I’m going out of my way to help players find (I would say probably more than half of players that I watch play are able to spot it, which is a good range I think).

![img](https://i.kickstarter.com/assets/049/841/523/eeab811a3042deb579a6ecd52e25f612_original.png?fit=scale-down&origin=ugc&q=100&v=1751044346&width=700&sig=BkQDE4KSyIh86hIG1e6qXpJgBQD%2FEzWGhocCUoGheSY%3D)The way our wall-tiles work leave a subtle hint here

The wall on the right here can be walked through to find a secret room. The first clue is that some of the tiles have stones in them. Why are there stones there and not in the tiles above them? I don’t expect players to already innately understand how the tiling rules in this domain work, but it should *feel off*. Specifically what’s happening is that there are no tiles to the right where the blue arrows are, which causes the tiling rules to use the tile with stones on it. Above where you see the red arrow, there are tiles to the right, so the standard filler tile is used. This is one of the ways in which I’ll try to give *geographic hints*.

The next hint you’ll get when you pluck these candy out of the ground:

![img](https://i.kickstarter.com/assets/049/841/526/49dc6c1b60b74b695807d10cb844a7e8_original.webp?fit=scale-down&origin=ugc&q=92&v=1751044359&width=700&sig=7sMBDLJv5j1AmvSEv88Yl6Tp%2B64vDQy3Pa%2BpODLuJB4%3D)

When Nemo plucks this, the candy will scatter about, and some of it will wind up behind the wall. Most players will either a) see what has happened and realize something is funky, or b) just instinctually chase the candy into the wall. This is an example of a *unique hint* where I’ve specifically designed the room to give you the hint when you pluck this grass.

**Fun side-note**: I’ve watched many players chase candy into the wall, and then immediately come right back out and not even notice that they walked into the wall a bit. It’s subtler than you’d think for plenty of players.

The candy going behind the wall is the thing that is supposed to make the secret very clear, but the hope is that players will internalize some of the subtler details about this secret encounter so they start to learn this *logic* of the world’s secrets.

And just on the other side of the wall of this same room, we actually have a very similar secret, but this time it’s a bit tricker.

![img](https://i.kickstarter.com/assets/049/841/531/0480b528267d8e17f8eb68bedd90ee15_original.png?fit=scale-down&origin=ugc&q=100&v=1751044380&width=700&sig=pD9MciAHUQQETyG0UI%2Fpy8K3G5zyn909c8q2xE4MOw8%3D)More conspicuous tiles on the left

Do you see it? Most players that find that first secret seem to *notice* this and will attempt to walk through the wall. But you can’t actually get this secret yet. I wanted this wall to stand out as suspicious, so hopefully it’s in the back of the players mind. In the screen above, we later learn how the Yo-Yo can break some blocks, perhaps that could also be useful down here… 🤔

As you explore more of the map, you might also notice that this chunk to the left forms a suspicious *hole* in the map. That is one of the more subtle hints that will hopefully remind you to come back to this later on in your adventure.
 

### Gotta Catch ‘Em All 

One standard feature of metroidvania games is *completion percentage*. This is just a way to let the player know “yup, you found every secret in the game.” Maybe it’s tied to map exploration percentage, or item collection percentage, or some combination of both, but either way, plenty of players will feel *compelled* to find *everything*. And since you want the secrets sufficiently hidden so that they feel rewarding to find, you risk making the chase for 100% feeling annoying or even impossible.

So with that in mind, there is a Little Buddy in the game called B.O.B. It’s a little robot that will alert you to any nearby secrets you haven’t already found. You won’t be able to get it until fairly late in the game, and you’ll need to go out of your way to do so, but if you do, you’ll have a Little Buddy that helps you hunt down secrets that you missed earlier.

![img](https://i.kickstarter.com/assets/049/841/537/4b87b875c7881f2553ab72eb41c6bff4_original.png?fit=scale-down&origin=ugc&q=100&v=1751044427&width=700&sig=BD2AckQMspZlhf0W5oLIoBv49D4tkoKuRAkjkckEffg%3D)B.O.B. alerting Nemo to this secret

B.O.B. represents kind of the final big *hint* the game offers. He will essentially mimic the *universal hints* that you’ll learn to spot in the game, but without risking being so subtle as to be missed.
 

### Where to Put Secrets 📌

Another major aspect of the secrets to touch on is simply how to decide where they go. There are cases where I have a very specific item I want a player to find at a particular time and place. Oddly enough, these tend to be both the easiest to find secrets (the room mentioned above, finding your first Little Buddy, etc.), as well as the most difficult to find (secrets left behind for speed running and/or subsequent runs that are intended to be as difficult to find as possible). But in most cases, I’m simply designing a room/platforming challenge, and I'll realize a fun way to incorporate a secret into what I’ve built. Often in these cases, I’ll just create an empty secret room with the intention of later deciding what kind of reward will be in there. These tend to just be single chunk, dead-end rooms rather than elaborate shortcuts. I’ll typically populate them with a collectible like a Blue Moon, a Lucky Coin Shard, a Music Track, etc.
 

### A Miserable Pile of Secrets 🍷

Ultimately I want the world of Slumberland to feel filled to the brim with secrets, but they also need to be sufficiently engaging and hinted at to different degrees so that players feel like they can always come back to an area later on and find plenty more secrets within. I’m pretty happy with the amount and quality of secrets in there now, but I will probably keep adding and refining these right up until the game ships.

Okay, well that’s probably more than enough talk about the secrets in *Little Nemo*. I’m not gonna go into great detail, but I thought I’d chat a bit about what I worked on this month:
 

## Things we worked on this month ⚒️  

### Fast Travel

The fast travel feature I mentioned in last month’s update is now functional, although Blue Moons don’t actually unlock beds in a domain for fast travel yet (you need debug features to enable it). I finished this up so that we could easily jump around the world in a full build of the game, which makes it a bit easier to record footage instead of needing a bunch of different save files that are at different parts of the world. So now it just needs some more UI polish and I need to wire up logic to unlock per-domain fast travel as you collect enough Blue Moons in each domain.
 

### Marketing Stuff

As I think I mentioned in my last update, one of the reasons the date is a bit later than most hoped is so that I can build up our followings on social media to help get the word out about the game. So this month, in addition to the MIX showcase, I’ve been trying to publish lots of gameplay snippets to various social channels. If you want to support the game by getting the word out, please follow us and help our posts spread with likes/reposts/etc. You can find us on the following platforms:

- [Bluesky](https://bsky.app/profile/diesoft.games)
- [Twitter](https://x.com/diesoftgames)
- [TikTok](https://www.tiktok.com/@diesoftgames)
- [YouTube](https://www.youtube.com/@diesoftgames)
- [Instagram](https://www.instagram.com/diesoft_games/)
- [Steam Community](https://steamcommunity.com/app/2074630/discussions/)
- [Discord](https://discord.com/invite/9NymgSJAVp)

Most of these platforms have been fairly neglected until now as I’ve been more focused on development, so I appreciate any support on any of these platforms that you like to use. 🙌
 

# Minor Spoilers Ahead ❗🙈❗  



### Bosses

And of course the biggest outstanding production task is completing the rest of the bosses. This month I’ve been working on finishing up the Cordysect Queen. I actually first made this boss very early on (it was briefly featured in our [Kickstarter trailer](https://www.youtube.com/watch?v=xMPLnm_hSw8)) and I think it was the first boss that was designed, possibly even pre-dating the Rocktopus if I recall correctly. But I ended up back-burner’ing it after getting some preliminary animations done.

![img](https://i.kickstarter.com/assets/049/841/555/616e7bd463d78056544b5dbf957ca357_original.png?fit=scale-down&origin=ugc&q=100&v=1751044569&width=700&sig=G0MRDtlIgUMN2OVdiBLaRmZ0JPaM39PLq9tjshOsT1s%3D)And old screenshot of the Cordysect Queen featuring some Mushroom Marsh concept sketches in the background

It’s actually been a fairly tricky boss to design, but it’s finally coming around. I’m not going to share any screencaps just yet (the visual design remains the same), but I’ll just describe that this boss will explore the use of the Pogo Stick as that is the toy you’ll find in Mushroom Marsh. This boss could probably make for a fun deep dive on its own because the way I animate it is quite unique (it is using a GameObject hierarchy of sprites to create a faux-skeletal animation setup, but each sprite component is independently animated with a boil and the animator updates on the twos to help it look consistent with the game’s other sprite animations). So give me a holler if this sounds interesting to you!

And aside from that, I also got the boss of the Crystal Caverns into a good place where it’s fully prototyped out and just needs some polish. I don’t want to share any visuals yet because it’ll undersell it since the sprites are just sketched in at the moment. This boss is very inspired the boss archetype you see in the final boss fight of SteamWorld Dig: a central machine with vulnerable nodes in the outer perimeter of the room which must be damaged to expose and make vulnerable the machine’s core. This is perfect for exploring use of the Grapple Yo-Yo which you’ll find in this domain. I look forward to showing off some footage from this boss fight once it’s a bit more visually appealing. (If you really want to see some grayboxed footage of it, ask me in the Discord and I’ll share it!)
 

# Back to Spoiler-Free ✅🐵✅  



One of the things you start to bump into this late into a project this large is code compilation inefficiencies, so one of the other things I worked on this month was simply making sure I had a good code domain where I could work on prototyping out boss behaviors, without needing to also re-compile unrelated code domains. The code related to how my enemy AI works is actually some of my most poorly managed code, meaning it tends to want to re-compile a lot with any small change. So getting squared away so that I can more rapidly prototype the boss' behaviors was some time well spent early on this month. You’d be surprised with just how distracting it can be if anytime you need to recompile (which you often need to do to make sure code completion is working as needed) Unity takes a minute or so to make that happen. 😔⌚

So that all might not sound like much, but the work on bosses is fairly complex and time consuming, so between that and marketing, that ate up just about all of my time this month 😲 Time flies when you’re having fun making a game! 😅
 

## Kickstarter Friends 💚

Okay, here’s one I spotted on the [Wholesome Direct](https://www.youtube.com/watch?v=D4ZRXGcmDlM) that happened earlier this month: [Ambroise Niflette & the Gleaned Bell](https://www.kickstarter.com/projects/topotes/ambroise-niflette-and-the-gleaned-bell). I’m just kind of blown away by how gorgeous and adorable these stop-motion graphics are. I am fairly sure this is all rendered in-engine, but it looks so good it almost looks like they somehow did the whole thing in actual stop motion and then somehow made it interactive. Definitely go take a peek at their Kickstarter which is live now for a few more days!

![img](https://i.kickstarter.com/assets/049/841/567/8ed34cc0bfb231714e8f28b2d23d812b_original.png?fit=scale-down&origin=ugc&q=100&v=1751044615&width=700&sig=HRpUW8ZfpsGzE4DWSXqfJXJrC0LTgd0Zy0witbUdHmo%3D)

*You'll follow the story of **Ambroise Niflette**, a renowned young detective who's been called in to solve the mystery that set the small village of Touvoir-en-Thym-et-Pomme abuzz: **the theft of the church bell**.*

*Without the bell, time seems frozen, making it impossible for the villagers to celebrate their annual event: **the thyme and apple festival**! Niflette must lead the investigation in a village where **secrets** and **deception** reign supreme...*

*In this **3D investigation game**, inspired by **miniatures and stop-motion**, the player must gather information by chatting with local residents, wandering the rural village of Touvoir to discover its secrets, use their notebook to reveal contradictions, and finally, unmask the culprit and find the bell!*
 

### That’s it for now! 👋

Another month comes to a close, and another month closer to *Little Nemo’s* release. I hope you all enjoyed the breakdown of how I think about designing secrets in the game, and if you have suggestions for other topics you’d like to see me cover along these lines, just leave me a comment down below, or leave feedback in the [Discord](https://discord.com/invite/9NymgSJAVp) server.

Thanks so much for reading, and I’ll catch you all next month!

-Dave
