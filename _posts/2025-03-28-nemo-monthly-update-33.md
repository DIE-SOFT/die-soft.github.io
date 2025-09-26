---

title: Monthly Update 33
description: Playtesting and Valley of Silence
image: /assets/images/devlog/2025-03-28-preview.png
---

# Monthly Update #33 🍃

Welcome back, Sleepyheads! We’ve actually been getting some fairly nice weather for March here in my neck of the woods. The snow has all melted away and it’s nice to be able to see the grass once again. I haven't been out much enjoying the weather because it’s still quite chilly, and I’ve been staying hard at work. As I mentioned previously, this year is gonna keep me very busy as I get *Little Nemo* across the finish line. But I look forward to some more pleasant outdoor temperatures because it’s helpful for me to be able to take afternoon breaks with an walk outside now and then.

I’ve also been keeping earlier hours more recently (often up well before sunrise) which I think has been helping my productivity. I don’t want to make it sound like it’s just me working on the game because I have some amazing people helping out (especially Cid with narrative/dialogue help and Rygar with level design help), but I am an extreme bottleneck being the only one able to work on most aspects of the game. So feeling like I have a good routine for putting in extra hours so far this year is definitely helping to keep things going at a good clip.

Okay, you are probably here to read specifically about *Little Nemo*. So let’s chat a bit about the timeline to launch…
 

## Timeline Update 🕰️

This month I’ve been trying to make sure we have some marketing partners to help us come up with and execute on a marketing plan around the game’s launch. That’s not gone quite as smoothly as it looked like it might, so that’s an ongoing project for now. I did learn a lot of good tips and ways to think about this stuff just from talking to some folks in this space though.

I think we are honing in on our rough target date, but it’s not firm enough to share with you all yet. The one thing that has started to crystallize as a problem with our current timeline though is Switch porting. And this is something I wanted to speak frankly about and hear your feedback on the subject. Previously, I had been anticipating to launch the PC and Switch versions of the game at the same time, but more recently, I’ve been considering de-coupling these two releases. 

It’s becoming more clear just how big of an impact the Switch port makes on the timeline, both in terms of when the launch happens, and also how *flexible* that launch target can be. To give a quick breakdown, here are the major points of consideration for the Switch release that make me want to de-couple it from the PC release (in rough hierarchical order of importance):

- The launch date would be subject to Nintendo’s approval of the game, which can often take longer than originally anticipated. To prevent missing a launch target, you’d need to give yourself a large buffer of time to have the game in Nintendo's hands ahead of the desired launch window. This also means the exact date needs to be locked in and cannot be flexible, and flexible release date targeting is something I’m discovering could be quite beneficial.
- There are some performance concerns on Switch that will take some time to address. While fixing these would improve performance on PC as well, these would mostly only be noticeable for players that are on hardware less powerful than a Steam Deck, so they aren’t essential improvements on PC.
- Shipping updates for the Switch release will be much slower, and as with the game’s release date, will depend a lot on Nintendo’s timeliness. This helps incentivize releasing on PC first, where updates can be rapidly pushed as needed, and then helps ensure the version released for Switch is “battle-tested”.
- While we should have more questions answered next week in Nintendo’s Switch 2 Direct, there are currently some open questions about how a Switch game will fare on the Switch 2. I’m sure many of you that are interested in the Switch release will also want to know how *Little Nemo* will play on the Switch 2, and I can’t answer those questions yet. I’d like to ship the Switch port such that it would be fully ready to take advantage of the new console as much as possible, but there are just a lot of unknowns around that currently.
- There are some features I’d like for the Switch port that are not needed for the PC release (notably trophies/achievements, which does not have system support on the Switch so would need custom UI).

With all those things in mind, I think you can see how it has a fairly significant impact on the timeline. So I’d like to get feedback from those of you that were planning to get the game on Switch: how do you feel about the idea of the Switch port’s release date being after the PC release date? Please leave your thoughts in the comments down below, or hop in the [Discord](https://discord.com/invite/9NymgSJAVp) to share your thoughts. Ultimately the Switch release will happen when it can, so it's more a question of "how sad would you be to see players on another platform able to play the game when you still have to wait a bit (even if it meant a better day 1 experience for you)?". Also keep in mind, you are not yet locked into your choice of platform. So if this does happen, and that means you’d prefer to get the game on Steam or itch.io, you’ll be able to change the platform for which you’ll receive your game code. (And if you’re looking for the link where you managed your pledge details, you can find it [here](https://diesoft.pledgemanager.com/projects/little-nemo/).)

Okay, that’s enough about the timeline, let’s get into the fun production updates on cool stuff I worked on this month. If you’re avoiding spoilers, you’ll want to look away…
 

# Spoilers Abound ❗🙈❗  

So what did we work on this month? There were two major focal points: the first was making sure the first ~3 domains of the game were polished up enough to be ready for some proper playtesting (along with almost every other domain at least roughly ready enough that playtesters could peek into it). And the second focus has been getting the Valley of Silence sprites and level design all finished up. So let’s dig into both of these points:
 

## Round 2 of Playtesting 🎮

The biggest task that needed to be done for this second round of playtesting was the level design polish for **🍄Mushroom Marsh🍄**. It’s still not quite in its final form, but it needed to be good enough that I can get a sense of what’s fun/how the general layout works/how well players can understand and navigate the space/etc. So unless you’re a playtester or a Sleepwalker with **💾Early Builds Access**, I can’t easily show you how that turned out. But I can show you some examples of all the visual polish that I did for this domain:

![img](https://i.kickstarter.com/assets/048/698/168/8352ea229ab3847d1c35dcb7abbc26cc_original.webp?fit=scale-down&origin=ugc&q=92&v=1743168938&width=700&sig=H4599FxHP6zmIGU5pTCEYV8L7uESTtCvnoD8Jm%2B9HFM%3D)Wilfred stuck in his frog form

Although the players can’t yet rescue this domain's Guardian in the current playtest build, they at least needed to be able to meet him stuck in his animal form. This was a fun one to animate because I’ve been thinking about it for some time now. Those of you familiar with it might spot the inspiration I’ve taken from *Calvin & Hobbes* with this one.

There were also some tiles completely missing from this domain, specifically the block tiles that I have in every domain which are just alternate tiles for the default world collision geometry (they're simpler and don't blend together). João had already made some concept sketches for these, so they had just been waiting to get finalized. These block tiles are made up mostly of little stone frog statues, logs, and stones.

![img](https://i.kickstarter.com/assets/048/698/178/581b2cf2bf0d0bd19942ad36450cdc36_original.png?fit=scale-down&origin=ugc&q=100&v=1743169008&width=700&sig=WeJEYSFB98Ool1ZAXceJH0TRXqXDeqYrHwI6E%2FMVkXg%3D)It's a bit dark in the Marsh, but you can see here some of the alternate tiles and the new background "wall" tiles.

I also wasn’t quite happy with the look of the background "wall" tiles that we had for this domain, so I tried a new approach. These new ones are more of a barky/woody texture (rather than stone as they were), and the mushroom decorations are much less noisy in these tiles. I’m really happy with how big of an upgrade these are over the old.

It wasn’t just Mushroom Marsh though, there was also some polish needed in **🍭Gumdrop Gardens🍭**. Jules, the Guardian of this domain, was almost completely lacking in dialogue. And now you can have a proper conversation with her after returning her scepter, and she has a very beautiful “Wish” memory to help you dispel the Oblivion in Gumdrop Gardens.

![img](https://i.kickstarter.com/assets/048/698/205/4c7c4e4c491c157cef902771ec1b6ef9_original.png?fit=scale-down&origin=ugc&q=100&v=1743169142&width=700&sig=T4132NHn0pdaNY6JNWT1TVjs62ulZKT2QEKX%2FR7GzAE%3D)Jules gets a bit obsessive about her work as Guardian of Gumdrop Gardens.

I also tried improving the visibility of the hazard tiles in this domain by utilizing the game’s outline system to help highlight them. This has had mixed success (better than before, but still not quite good enough), so I’ll probably need to do just a bit more polish on this tileset to help improve its visibility.

![img](https://i.kickstarter.com/assets/048/698/210/bc14e357dc8f13c632ad31ccfae7d02f_original.webp?fit=scale-down&origin=ugc&q=92&v=1743169188&width=700&sig=uI4mlIpQUKdZVEL90kw5aWqvxMgx1le3UoqXeX6KnBU%3D)The hazard tiles in Gumdrop Gardens now have an outline to help draw attention.

This domain also needed some rooms fleshed out a bit more (now there are some new rooms taking advantage of how fun it can be to hop around on walls with the honey), but not quite as much as the Mushroom Marsh. (Although post-playtest, we’ll probably need to continue tweaking this domain’s level design as I think the difficulty spike here was a bit much for most playtesters).

And aside from focusing on those two domains, there were tons of other little things that were implemented because they came up as addressable concerns from the first round of playtesting. Rapid fire improvements time:

### Blue Moons

I talked about these last month, now they’re collectible in the game! They don’t yet unlock fast-travel, but they function correctly (you can collect them a single time, and if you return later after being woken up, they’ll be replaced with a standard yellow moon).

![img](https://i.kickstarter.com/assets/048/698/222/e6322c4fdc7055610c0ad9f7bbe65158_original.webp?fit=scale-down&origin=ugc&q=92&v=1743169285&width=700&sig=b8DQh4kw5ZB8xaNnvdjI7SJHTyB%2BeCahLmHBRxWvPCQ%3D)Blue Moons are a rarer form the Moons you can find in Slumberland

### New Map Icons and Button Prompts

One of the reasons watching people play is so helpful is I often spot things I can improve without players directly mentioning them. One of those things that came up while watching videos of playtesters from the first round is how the map icons could be improved. Take a look at how the map screen is looking now:

![img](https://i.kickstarter.com/assets/048/698/226/c0db2283a2a57d83ac018245ced66ef1_original.png?fit=scale-down&origin=ugc&q=100&v=1743169330&width=700&sig=1dCPLH0SytqlojYwtm06fahmenr77YjjPJ88WiLCN3o%3D)The map legend has many more icons now and there is a helpful note explaining how to pan and zoom the map.

There are a ton of other little things not worth mentioning that went into this month’s build for round 2 of playtesting, and I think ultimately it came together nicely. It seems that once again the response has been very positive, and more importantly, it has resulted in some very clear and actionable things for me to polish up for the next build.

Okay, onto the other major thing I’ve been working on this month…
 

### ❄️Valley of Silence ❄️

Lots of spoilers for you in here as I finished up some fun sprites that I want to show off. First off, meet Teddy Yeti:

![img](https://i.kickstarter.com/assets/048/698/243/1491d0fdbe29380cad4c3f3a9d9c7534_original.webp?fit=scale-down&origin=ugc&q=92&v=1743169391&width=700&sig=BN1cE%2BU2QGhI19D8yyQQw7AS8TWWngoB2kzHmUB7rdg%3D)Teddy Yeti just making and rolling some snowballs

This is a very simple “enemy”. He just has fun rolling snowballs around. He won’t even attack you, but if those snowballs hit you, you will take a lot of damage! You can hit him with your yo-yo a few times to dispatch him, but who could be so cruel!

![img](https://i.kickstarter.com/assets/048/698/258/42c51078274fd02d4905dc5c07e613a3_original.webp?fit=scale-down&origin=ugc&q=92&v=1743169437&width=700&sig=%2BTjNTRiPbkrkiD5L%2B54cwT8sQcVoVh%2FcZRktaEOXy9s%3D)Nemo, how could you?!

We’ve also got the new Snowcrab enemy. This is a fast little critter that will just run back and forth looking for someone to hit with its icy slam attack.

![img](https://i.kickstarter.com/assets/048/698/261/5511190f92a3b01dba007e55321e9884_original.webp?fit=scale-down&origin=ugc&q=92&v=1743169471&width=700&sig=xODR19%2FiWdhyEdNAVaLhSmkL3lBEQ2d8rkIYxIOIaT4%3D)The Snowcrab's attack covers a large area and comes out relatively fast. Be VERY cautious if you venture into the Valley of Silence early!

It’s fully armored too, so your Yo-Yo is completely ineffective against it. It looks like it might have a weak point on its head though. If only you had something that could attack downwards… 🤔

We’ve also got the sprites finished up for the Icicles. There are a few variations so each time it respawns, it’ll come back with a random icicle formation.

![img](https://i.kickstarter.com/assets/048/698/270/0bdaa324ab3fa4325670860359d2d374_original.webp?fit=scale-down&origin=ugc&q=92&v=1743169559&width=700&sig=iDX3VXHm%2FwpypVo%2Fh3I1hZF8x2oDLRR7SwHt7b44EDc%3D)Icicles falling as Nemo runs past

The icicles will fall as you start to approach them. You can stand on top of them, but it's probably best to just avoid them as best you can. As with everything else unique to this domain, it dishes out a lot of damage if it hits you.

This domain has been exciting to work on as it’s the area where you’ll likely get the final Toy upgrade (assuming you're following the "golden path" though that's not definitely the case). That means we can build a lot of the challenges around the expectation that you’ll have an arsenal of toys at your disposal.

I don't usually share gameplay snippets because I can't embed videos into Kickstarter updates, but I figured I'd just put an unlisted video on YouTube to show a bit of this off. So here's a very short snippet of [Valley of Silence gameplay](https://www.youtube.com/watch?v=P4q4SFHZppQ).

So as you can see, you can expect this domain to get pretty difficult, but hopefully by this point you've gotten fairly good at the game. And if you press on, this is likely the final Guardian you'll be rescuing! Next stop: visiting King Morpheus to save Slumberland!
 

# Back to Spoiler-Free ✅🐵✅  

  

## That’s it for this month! 👋

Thanks so much for following along. And again, if you are planning to play *Little Nemo* on the Switch, please share your thoughts on what I discussed above about potentially launching it after the PC release. And even if you’re not, please chime in. If you’re following along with these monthly updates, I’d love to hear from you! Leave a comment or come hang out with us in the [Discord](https://discord.com/invite/9NymgSJAVp)!

I hope you all have had a wonderful March, and you’ll hear from me again as always at the end of next month! Thanks for reading, Sleepyheads.

-Dave

![img](https://i.kickstarter.com/assets/048/698/389/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1743170179&width=700&sig=HqpJ44YbqJQZi%2FiYmAIkcHCV7q35lkRv71Q2yhLy%2Bto%3D)
