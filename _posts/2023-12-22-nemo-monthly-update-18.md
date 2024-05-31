---

title: Monthly Update 18
description: A look at some Mushroom Marsh sketches, a new boss, and changes to the candy economy.
image: /assets/images/devlog/2023-12-22-preview.png
---

# Monthly Update 18 

❄️ Happy Holidays, Sleepyheads! ❄️ I can’t believe we’re about to close out 2023 already! According to our original plans, we would have shipped the game by now. I just want to let you all know that I appreciate your patience as work on the game continues into next year. I also hope that you’ll give me a bit more time to make sure I have all my ducks in a row before I give another update on the timeline. Though I did want to talk a bit more generally about the timeline and development of the game:

The past few months I’ve been trying to focus primarily on fleshing out the various dream domain environments in the world of Slumberland. I’m very happy with the work I’ve accomplished getting the environments, their lighting, gimmicks, and tilesets together for almost all of the domains in the game (there are still two more to tackle out of the nine total), but I’m not completely happy with how long it took me to complete art assets. So to that end, I’ve decided to get some help with the art. I will likely continue doing all or at least most of the character animations, but just even having some help with various decorations that are needed to help make the world come alive will be a big boon.

Before I show that off I should tag this with a spoiler warning!



# Spoilers Abound ❗🙈❗



Here’s a quick peek at some sketches that João came up with based on some prompts for decorations that I wanted in the Mushroom Marsh:

![img](https://i.kickstarter.com/assets/043/450/800/e62918476b8887c28bb4789eb5cfdbeb_original.png?fit=scale-down&origin=ugc&width=700&sig=xP4N9j9HNh5c6aHDWiGWtUFiW%2B7fF8fdxwYfM0qs1QU%3D)João’s sketches of the mushrooms which are the source of the gunk you’ll find in the marsh.

I think he’s done a great job of immediately understanding the game’s cute atmosphere and finding a good way to make something somewhat “gross” in this setting. I showed off the gunk in an [earlier update](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3893024).

![img](https://i.kickstarter.com/assets/043/450/807/5254882174625cee74f68c22ade2b86a_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=MelBSdAIU8zCW3vkRuNQwISGjpmp9CNhEsV8j42hc5s%3D)The gunk which hampers movement shown off in an earlier update.

And here are sketches for some less important details, just some decorational “trees” to go a little closer in the background:

![img](https://i.kickstarter.com/assets/043/450/812/8253b9a4033e17df64c2cae5d211798d_original.png?fit=scale-down&origin=ugc&width=700&sig=SZx27xbi4WWKDd%2BvGqpzbloou6RmdIw19t0jeyBIoTk%3D)João’s sketches of what “trees” look like in a mushroom forest.

The mushrooms you can see in the distant background of the mushroom marsh are mostly massive stalks that rise far above Nemo and mostly block out the sun, but I wanted to have some smaller “trees”  closer to midground.

This sort of set dressing will help liven up the world of Slumberland. João has also done a great job of taking these sketches and demonstrating being able to render out finalized assets that match the existing look of Slumberland. I’m really excited to be working with him more in the new year.



## Continuing Development into the New Year 💪

So my goal with bringing João on board is to be able to speed up development by reducing my art load. But we still have plenty of work to do: bosses and enemies to design and implement as well as completing the geography of the world (typically when I show off the environments I’ve created, I just have a few rooms exploring general platforming ideas that will appear there).

So a lot of this month was also spent trying to hone in on *exactly* what work is left to do so that I can get a much better idea of how long it will take to complete. So while many of my lists have been a bit more open-ended, I’m trying to lock everything down now. I’ve gone through all my design docs and made sure to coalesce all the Pajama, Little Buddy and NPC ideas into finalized lists.

The other big thing that I’m trying to crystalize so I can better understand my timeline is the path to getting the entire world “down on paper” so to speak. I’m working towards greyboxing out the entirety of Slumberland, complete with placeholders for every major interaction that is available for the player. This will help me start to better understand how the different pathways through the world actually play out and feel from a player’s perspective. The world of Slumberland is very open: for instance, the first domain connects to almost every other domain in the world. It will be important to feel out how these different pathways feel when explored at different times and in different orders.



## New Boss Implemented 👹

While much of this month has been focusing on bigger picture / roadmapping / planning, I also always need to make sure to balance that kind of work with getting more concrete work done on the game. This month I was focused on developing a new boss fight. I can’t show it off yet as the art is all placeholder so it looks quite bad, I’ll show off a line-art animation for an idle pose of this boss:

![img](https://i.kickstarter.com/assets/043/450/824/782c859e5c468d7da26b4226833281bd_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=QXsqypnfGwOBwyKc%2BXtTbAzIzdrQX%2BzHHAnol2vUh7Q%3D)This mysterious figure is attempting to save Slumberland without Nemo’s help. They're not quite ready to show off yet, so just a line-art animation for now.

This boss is a bit different from the other nightmare creatures like the Rocktopus and Cordysect Queen you’ve seen so far. This is a denizen of Slumberland that has not succumbed to the Oblivion and simply seems to hold a grudge against Nemo.

The general design has been heavily inspired by other “frenemy” characters such as Protoman (*MegaMan*), Hornet (*Hollow Knight*), and Rufio (*Hook*). I tend to dislike when these types of characters are introduced in games and you do all-out battle with them when they are ultimately a friendly character. So to try to improve on that type of encounter, this boss is designed to showcase the Bubble Wand Toy which you’ll collect in the domain where you find this boss. This toy allows you to protect yourself in a giant bubble that can protect you from a single hit. Any time you attempt to directly attack this boss with your yo-yo, your attack will be deftly parried. You’ll need to make use of your Bubble Wand to disarm the boss rather than engaging in direct violence against them.



## Changes to the Core “Death” & Economy Systems 🍬

Something I’ve been wanting to do for a bit, but first wanted to spend some time thinking about and designing around before addressing, is that the game could be a bit too punishing about how and when it wipes out your candy and moons that you’ve collected. Previously, *any time* you returned to the waking world, all “ephemeral” world state would be reset, including your health, candy, and moons. This was punishing players without them even realizing it (because in the summer demo build there was not much to spend candy on yet). The original reasoning behind that was that I wanted to prevent “farming” resources by entering and exiting Slumberland repeatedly (say right next to a secret room full of candy), so I would wipe those anytime we woke up, whether we used a bed to do so or not.

I realized I was conflating some things though. Because we serialize all of the ephemeral game state (which includes which enemies have been defeated and which items have been collected), we can simply persist that state when we wake up, so when we return to Slumberland, it will be in the same state it was before, so you can prevent “farming” of resources.

So the way this works now is that whenever you use a bed to wake yourself up, it won’t affect your game state at all. You won’t heal, or lose candies, and enemies won’t respawn in Slumberland. But “death”, or being forcefully awoken by taking too much damage, will still reset all this ephemeral world state and your health, candy, and moons.

![img](https://i.kickstarter.com/assets/043/450/835/b02c935606ea2f91224238aa6ce4aee0_original.png?fit=scale-down&origin=ugc&width=700&sig=G%2BB5xY9%2FGewcsmLoXhvvfj4cB6qZAdURc67%2FWXjc8Ac%3D)Nemo being forcibly awoken from Slumberland after taking too much damage

There is still the problem of “death” being a bit too punishing though. The way I plan to address that is with an NPC that will allow you to reclaim some of the resources you lost due to being forcibly awoken. I’ll get more into those details in a later update when I implement that character.

I look forward to seeing how these tweaks feel for players when I make a new build for backers who have early build access (along with more content and opportunities to spend candy). It’s not ready yet, but is something I plan to be aiming to get out along with loads of new content in the build early next year.



## Kickstarter Friends 💚

I know I mentioned this Kickstarter last month, but it wasn’t launched yet, and now it only has 6 days left and is very close to reaching its goal: [**Dewborne Dawn**](https://www.kickstarter.com/projects/dewbornedawn/dewborne-dawn-an-action-adventure-metroidvania) looks very promising, so go check out their Kickstarter campaign and consider helping them meet their funding goal in the final few days!

![img](https://i.kickstarter.com/assets/043/450/855/91c20f9841ac48906943dcb4cc2030b5_original.png?fit=scale-down&origin=ugc&width=700&sig=fn2UzzjBJDvhGCkzVE5m1eSWnGEF%2FN5XtK7%2BUgiwDZ0%3D)Check out Dewborne Dawn's Kickstarter campaign ending in 6 days



## Until Next Year! 🍾

I hope you all have a wonderful holiday season and a very happy new year. I’ll be back next month in 2024 with another update. Please leave feedback in the comments below or come join the [Discord](https://discord.com/invite/9NymgSJAVp) server if you haven't already. Thank you again for following along and for your patience with delays. ❤️

-Dave

![img](https://i.kickstarter.com/assets/043/450/881/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&width=700&sig=KxvrQCAHEtYgEsfGnH9LMY3EZCKIda3ZHfviDfhRAY0%3D)
