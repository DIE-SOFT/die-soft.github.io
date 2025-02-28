---

title: Monthly Update 27
description: Valley of Silence, Achievements, and more!
image: /assets/images/devlog/2024-09-27-preview.png
---

# Monthly Update #27 🍂

Welcome back, Sleepyheads! It’s hard to believe it’s already the last Friday of September, but here we are. Similar to last month’s update, I’ve been trying to focus less on getting art assets finalized and focusing more on getting the entirety of the game blocked in. I’ve also been doing some not so exciting compilation time improvements, but I’ll try to focus on the fun and interesting stuff I’ve been working on this month.
 

## Achievements 🏆

This is something I meant to save for later as part of the work to release the game, but occasionally I’ll just start working on something because it’s caught my interest, or just because I’m working on the laptop and it’s easier to do something that’s more system design/programming centric. So building out the Achievements system was one of those things. For those unfamiliar, achievements (PlayStation uses the term “trophies” for the same idea) are just a way to occasionally acknowledge something the player has done or a milestone they’ve achieved in-game. This can be a fun way to engage players beyond a single playthrough of the game, as well as to reward players for going above and beyond the normal challenges the game offers in a standard playthrough.

![img](https://i.kickstarter.com/assets/046/648/902/6b715fb9c09ceb8c29d2c037782eef9c_original.png?fit=scale-down&origin=ugc&q=100&v=1727451972&width=700&sig=tGCs2NJGPJIE3XNU4Nw3rTv2yl0tIa9lkr8fpr%2BQUa0%3D)Overwatch has its own dedicated Achievements UI which allows "achievement hunters" to closely track how they're coming along with each challenge.

The plan for *Little Nemo* is to ship on Steam and Nintendo Switch. While Steam offers a helpful API to unlock achievements on their platform, Nintendo Switch doesn’t have any concept of achievements. So while we could just do a simple interface that leverages Steam to do heavy lifting of achievement tracking, that would mean we wouldn’t even have the option of achievements on the Switch. By building out a custom system for achievements which can interface with the Steam API (and possibly other achievements APIs if we port to other consoles) we then have the potential to show these achievements via an in-game interface and allow players on the Nintendo Switch to enjoy them as well (at the cost of building our own in-game UI for it).

I didn’t do any UI work for this yet, but I do now have an achievement system that will work independently on any platform, whether or not that system supports achievements. The system is relatively robust and allows us to to track singular event type achievements (eg. “You beat the game for the first time!”) as well as incrementing progress type achievements (eg. “You traveled a total distance of 10,000 meters in game”) with the option to show progress towards the achievement at specified intervals.

Additionally I started planning out all of the achievements I’d like to have available in the game. This is something that came up as a discussion point in the [Discord](https://discord.com/invite/9NymgSJAVp) server very recently as well. The goal with achievements in *Little Nemo* is to focus the most on achievements that celebrate something you did that might be a bit off the beaten path. Whether that’s completing a hidden side-quest, or doing things I expect most players won’t do. But I also want to be cautious to not reward things that would be too annoying to complete. I have to be considerate about the fact that there are players out there that will be trying to get all of the achievements in the game, so if there’s an achievement like “Pluck 1,000,000 radishes”, there are players that would do that to their own detriment. I think the list of achievements I currently have planned out strikes a good balance between all of these concerns.
 

## Crouching 🦆

This is probably something that seems silly to call out to talk about on its own, but it’s an interesting topic. In *Little Nemo*, the player can crouch by pressing the downward input. It doesn’t do much because you can’t walk while crouching, so until recently it was only useful to avoid projectiles or attacks coming from above. It was so naively implemented that your physics collider didn’t even reduce in size when crouching (only your hurtbox, the part of you that can get hurt by attacks, shrunk down when crouching).

![img](https://i.kickstarter.com/assets/046/649/042/07073eb52a700e426b55e1356f6d64fe_original.png?fit=scale-down&origin=ugc&q=100&v=1727452605&width=700&sig=mtSTy%2B4rogmc9LLTfmCs%2BNgrPy2oqX4NdpJx3Fs3thM%3D)Nemo crouches under a gumball to avoid getting hurt

As we started exploring the moving platforms in the game (especially the toy train platforms of Nightlight City), it became clear that it would be fun to introduce things you have to duck underneath while riding on a train. This of course meant shrinking the player’s collider from 2 tiles tall, down to only 1 tile tall. Sounds easy enough, but once you do that, it actually introduces a can of worms. If you can fit under something, but you can’t move while crouched, what happens if you get stuck under there?! For instance, in some Mario games in these scenarios you’re stuck crouching and have to crouch hop your way out, and in others you just get slowly ejected to the left or right.

![img](https://i.kickstarter.com/assets/046/649/128/7d3165914fc004b81ef6e17cc383ec42_original.webp?fit=scale-down&origin=ugc&q=92&v=1727452953&width=700&sig=cgXln8TGAp6UfuoLojVX6nEzBVdn0KeH0WzYmkw9VTY%3D)Mario getting ejected when being too large to fit in a small corridor in the original Super Mario Bros.

Ultimately, the solution I settled on is a bit more complicated, but I think handles the possible edge cases very nicely. Here’s the general idea: if you’re crouching and there’s something above you preventing you from standing upright, you’ll continue crouching even if you release the crouch input. As long as you’re still moving (whether that’s due to riding on something or just because you’re sliding on a slippery surface), you won’t be able to stand upright. Once you stop moving, however, you’re then able to stand upright, even though that means you’ll be clipping into a surface above you. Your collider will actually stay reduced in size, despite looking like you’re standing upright, and then once you get out of the tight space you’re in, your collider will snap back to full size.

![img](https://i.kickstarter.com/assets/046/649/230/15b3b197e70caebc7c4e17c0d5900532_original.webp?fit=scale-down&origin=ugc&q=92&v=1727453362&width=700&sig=%2Bgk%2BW6mq5IMPJaxWy5m6FXSD5Qaa6QjLIBJwOsfmJIM%3D)Colliders are visible here so you can see what happens if you somehow manage to get stuck in a tight space.



## A Few More Non-Spoiler Updates

The Pet Constellation art is all done, but is still in progress getting imported into the game so that I can share it with everyone. I was hoping that would be done for this update, but we’re still getting the constellations all set up correctly. Something to look forward to in the next update then!

Once that is all set, we’ll tackle the **Cat Guardian 🐈** rewards and then all of the Special Reward tier content in the game will be done.

Some of the other work I’ve been doing this month is trying to improve iteration and code compilation times. As the codebase for *Little Nemo* continues to grow, over time my ability to quickly iterate and test things drops. It’s become bad enough that I decided to spend some time trying to address it this month. It’s very boring work that involves just untangling and decoupling bits of the codebase, so I won’t bore you with the details.
 

### Timeline Update 🕰️

There’s not really much to report on the timeline this month as things have continued on the track I described in previous posts, but I do want to check in on this as usual.

This month I got the enemies and gimmicks grayboxed in for **❄️The Valley of Silence❄️** (more on that down below under the spoiler warning), which was the last bit of grayboxing of enemies we needed to complete. Since these are only grayboxed in, I still need to finish the art assets for these enemies, but it allows us to better flesh out the level design of these areas taking into account how these enemy encounters will influence the design and structure of these domains.

So we’re still on track for getting things finished up over the next few months so that we can prepare for a release next year.

### Early Build Access 💾

I got a new build out this month for those of you with access to the early builds. The original intention was to allow unfettered access to everything that was grayboxed in, but I did end up blocking access to some of the areas that were roughed because you could actually get stuck in them. But this current build does allow you to explore some new areas like Haunted Hollow and see the Palace Gate and some other interesting bits if you really go exploring and want to spoil yourself on it. I’ll be trying to get another build out this month that will allow you access to more of the Nightlight City stuff that’s been sketched in so you can play with the toy train platforms and other fun stuff that’s there.
 

# Spoilers Abound ❗🙈❗

Most of the updates this month were things I could share that were spoiler-free, but I also want to show off a bit of **❄️The Valley of Silence❄️** enemies and gimmicks you haven’t seen yet.

### Teddy Yeti

This cute stuffed cryptid just enjoys rolling snowballs around. The snowballs will roll along the ground bouncing off walls and damaging whoever they collide with so make sure to stay clear.

![img](https://i.kickstarter.com/assets/046/649/360/b3fceb040d23aa996b6640a154e1cb93_original.webp?fit=scale-down&origin=ugc&q=92&v=1727453975&width=700&sig=RaaXe%2BxFJyQKgjNZnY%2Bmhq3nNUX6bLULaSt1UParZZo%3D)Teddy Yeti is fairly large, but harmless if you avoid the snowballs.

### Snow Crab

This enemy is very similar to the Crystaceans found in the Crystal Caverns, employing an area of effect attack if you get too close. This enemy, however, has a weak point on top of it which can only be damaged by the pogostick. You’ll need to be careful to properly aim your pogostick attack because if you miss you’ll wound up stuck in the snow and vulnerable to their attack!

![img](https://i.kickstarter.com/assets/046/649/471/a11cdc095e193810c3f981e1ead93a5e_original.webp?fit=scale-down&origin=ugc&q=92&v=1727454308&width=700&sig=%2BMUE%2Fb4R37IvS0ZZzaZFMBRTf20nmwYVs8T2Q8NmirM%3D)Nemo misses a pogostick attack and winds up stuck in the snow next to the dangerous Snow Crab

### Brrrchin

How did a Burrchin wind up here in the Valley of Silence?! It seems to be having trouble acclimating to the frigid temperatures and the cold makes it’s spikes all the more dangerous because this version of the Burrchin will deal 3 damage instead of only 1. All the more reason to make sure you’ve collected some Lucky Coin Shards before exploring the Valley of Silence.

![img](https://i.kickstarter.com/assets/046/649/558/3db0141a5d5c0edeecf1c545b8d5ce75_original.webp?fit=scale-down&origin=ugc&q=92&v=1727454676&width=700&sig=MyT6wWBoj3pkA7UsGEE5ij9G3LIytAp44DQ%2FDBvndPo%3D)

### Icy Scarabiner

It looks like some of the Scarabiners have adapted to the icy cold. These Scarabiners won’t leave their shell behind when they’re destroyed, however. The low temperatures have caused their shell to be quite fragile, but the icy shards forming on their backs make them dangerous to the touch. These Scarabiners will just continue walking along whatever surface they’re on and will leave you alone as long as you can manage to steer clear of them.

![img](https://i.kickstarter.com/assets/046/649/598/28a2c4595e560dfb6634d3524df75efd_original.webp?fit=scale-down&origin=ugc&q=92&v=1727454938&width=700&sig=ldcsOY8kMa5nTSXjkdTVrGOKxrM2vuZJX4Gcx97dMuo%3D)Watch out for the Icy Scarabiner climbing around on surfaces!

### Icicles

This is a hazardous gimmick you’ll find throughout this domain. In some areas icicles will form, and if you try to pass underneath they could drop on your head. Although these falling icicles are quite dangerous, if you can manage to stand on top of one, you might be able to platform you way to otherwise inaccessible areas.

![img](https://i.kickstarter.com/assets/046/649/664/144aa743e3b5e15feae72870963eab4d_original.webp?fit=scale-down&origin=ugc&q=92&v=1727455265&width=700&sig=SNOQb%2Bq%2FTkJE%2Fmwkk%2BI4qaJwlJbMlEHMjebc7KSN7zw%3D)These sharp icicles will begin falling if you get too close!

### Ice Cubes

As with other areas, there are vegetables you can pluck out of the ground to use as a ranged weapon, but sometimes you’ll pull an ice cube out of the ground instead. These blocks can only survive a few hits before they crumble, but they’ll slide along the ground for a ways and bounce off of walls. You can even ride these similar to the Scarabiner shells, so perhaps you can use them to ride over some spikes or just toss it at enemies to take them out.

![img](https://i.kickstarter.com/assets/046/649/754/28b95d6ab81391da83f78634c4d3d055_original.webp?fit=scale-down&origin=ugc&q=92&v=1727455609&width=700&sig=KkuQMXbmZl9zCGlBkjXZB%2BWex6PN3oYl0JyFE%2BUHJO0%3D)Nemo plucking, tossing, and riding an Ice Cube

I’ve previously shared some images and videos of the other gimmicks you’ll find in this domain: the icy and snowy surfaces (icy surfaces are difficult to move on while snowy surfaces cause you to get stuck if you try pogosticking on them), but these are all of the enemies and gimmicks that I developed this month to finish rounding out the domain.  

# Back to Spoiler-Free ✅🐵✅

I ended up working on more somewhat “boring” (for people that aren’t me) and technically oriented stuff this month that is less fun to show off, but I hope you’re still having fun following along. You should make sure to join the [Discord](https://discord.com/invite/9NymgSJAVp) if you haven’t. Sometimes I share fun little things in there that don’t wind up in these posts, or I might just be talking about what I’m playing. This month I picked up a [MiSTer FPGA](https://mister-devel.github.io/MkDocs_MiSTer/) device and played through [Capcom’s *Nemo*](https://en.wikipedia.org/wiki/Nemo_(arcade_game)) on [my arcade cabinet](https://64.media.tumblr.com/a03d5d283148fe490cd80e54f1df32e6/tumblr_inline_otg0i6kBcK1qz9jbw_500.jpg) and streamed to the [DIE SOFT Twitch channel](https://www.twitch.tv/diesoftgames) (the [VOD](https://www.twitch.tv/videos/2256885716?t=0h8m45s) is still up if you want to see it).
 

## Kickstarter Friends 💚

Last year I believe I gave a shout-out to this hand-drawn Metroidvania, but their Kickstarter was not successfully funded. Now it looks like [Exil](https://www.kickstarter.com/projects/mys/exilgame) has returned with another Kickstarter campaign, so take a look and see if it’s a game you’d like to support.

[![img](https://i.kickstarter.com/assets/046/649/787/4314a5b1a94ec3eb4b559c9ce52558be_original.png?fit=scale-down&origin=ugc&q=100&v=1727455742&width=700&sig=A5mS7vOvlzu2MomKfWqP8wiGCit%2Bc%2F4GVrsgVWdn4OM%3D)](https://www.kickstarter.com/projects/mys/exilgame) Embark on an adventure through a mystical world full of magical creatures.

### That’s all for this month 👋

Once again, I really appreciate all of you that have read all the way to the end here. You Sleepyheads have made all of this possible, so I hope you’re still having fun following along with development. Come say “hi” in the [Discord](https://discord.com/invite/9NymgSJAVp), otherwise I’ll see you in one month’s time for another update!

-Dave

![img](https://i.kickstarter.com/assets/046/649/809/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1727455817&width=700&sig=xkFlyyoKzW%2BFlnx0hWvK9GdyWuphXGEQr8iglVXbxiU%3D)
