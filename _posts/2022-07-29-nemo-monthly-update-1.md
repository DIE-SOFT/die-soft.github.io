---
title: First Development Update
---
# First Development Update

It’s been about a month since the Kickstarter wrapped up, and I thought I’d give an update about how things are coming along. It’s been a short month because I took about a week off after getting everything that needed my immediate attention settled. The Kickstarter campaign was fairly exhausting and I wanted to make sure I was coming back into things feeling refreshed.

I was still doing a lot of Kickstarter related stuff this month though. We got the pledge manager all set up, so backers can fill out their [fulfillment survey](https://diesoft.pledgemanager.com/projects/little-nemo/) and anyone that missed the Kickstarter can still get in a [late pledge](https://diesoft.pledgemanager.com/projects/little-nemo/participate/). I’ve been exporting data from those survey results to make sure everyone has their Discord roles. If you never got your email with the fulfillment survey, you can use [this page](https://diesoft.pledgemanager.com/projects/little-nemo/) to resend the email.

In terms of actual development updates though, I have had about two full weeks this month to dive back into things. It’s nice getting to work on the game after spending so much time completely focused on just the Kickstarter. Most of my focus at the moment is working on my tooling. While the demo I shared with content creators was built using Unity’s scenes to author the content, the end goal is to use my own “Nemo Maker” that I’ve been building alongside the game content.

![img](https://ksr-ugc.imgix.net/assets/038/111/563/246e5453a623bda1a86c326283bd0d3c_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1659104191&gif-q=50&q=92&s=3c79b637aa6b92f68e4989764130fccd)

There are a few reasons I’ve decided to go this route even though it’s quite a bit more work:

- It allows me to have very fine-grained control of what the authored data looks like. In my case, I want the world to be human-readable JSON. This will make it very easy for people to mod the game and muck about with the world.
- By design this breaks everything up into rooms which are dynamically loaded instead of Unity scenes. So we can load-in the world around Nemo as needed, similar to how modern open-world video games handle things.
- It’s super quick and easy to go back and forth between building something and testing it in-game. And since I can use a controller with the editing tools, I don’t even have to swap back and forth from controller to keyboard & mouse.
- I don’t love how Unity’s tooling typically uses completely different code libraries from what is used at runtime. Since this tool *is* a Unity game, I can share core code with the game as needed.
- It’s a lot of fun to work on, and who knows, maybe someday I’ll get to expose this to players.
  

I’ve already put lots of work into this tooling system, but it still needs a bit more. So the goal is to get it into a state where I can use it to make a playable version of the first area of the game over the next couple of months, and then get that into the hands of Sleepwalkers to give it a spin.

Here’s some of what I’ve been working on lately: allowing for each room to have its own thematic styling. This will be important for creating distinct “zones” in the game. Since everything loads in around the player, we need to be able to have the tiles and backgrounds load in on-demand. Here you can see this working, albeit to an absurd degree where you can see the hard seams between rooms. These kinds of hard seams won’t be visible in the final game, as we’ll have some assets to “disguise” the transitions between zones.

![img](https://ksr-ugc.imgix.net/assets/038/111/574/98a75bb1970efb9153c8143f11c895cb_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1659104245&gif-q=50&q=92&s=3249146c1e144efb7cb2c253a1f35f70)

I’ve also been working on the UI which allows me to select the “edge type” between rooms. That doesn’t show off in GIFs very well, but it will be critical for building out the structure of the world by allowing me to define how the edges of rooms behave (eg. does it block the camera and player, or can we freely pass through, or is it a secret wall?)

Once these pieces get just a bit further along I’d like to do a quick streaming preview of this stuff for the Sleepwalkers. It’s not quite a Playtesting Livestream, but kind of an early preview of that. So if you backed at the Sleepwalker level or higher and haven’t joined the Discord server yet, now is a great time to do so, because that is where the Sleepwalker Playtesting Livestreams will be broadcast.

![img](https://ksr-ugc.imgix.net/assets/038/111/577/96839a028a684c4bc6bbf4add7f2d1fa_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1659104272&gif-q=50&lossless=true&s=3cd16b4b43a204e9f2d45faa5ef30350)



## Everyone’s been asking…

I am getting some conversations started about manufacturing physical goods (Switch cart, vinyl soundtrack, plushies, etc.), but it’s too early to report anything about that other than I can’t make any guarantees about any of them right now. For now just know that I am especially interested in producing physical Switch cartridges, but I just want to make sure any physical goods aren’t going to distract me too much from actually making the game. So my report on this topic right now is: I have nothing to report yet, and likely won’t make any announcements about it for some time.

## Streaming Schedule

I've been continuing to do somewhat impromptu streams both on Twitch and in the Discord. I'm trying to find a time that seems to work well for people to hang out so that I can schedule a weekly stream. If you have any thoughts on timing for that, I'd love to hear your feedback in the comments below or in Discord!

## Kickstarter Friends

I’ve found another amazing looking game that’s on Kickstarter right now, which I think you’re all gonna enjoy. I’m really struck by just how pretty it is, but it also looks like it’s just gonna be a really fun platformer:

![img](https://ksr-ugc.imgix.net/assets/038/111/590/4c605ce0166f9fb283475fb62fc5529a_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1659104347&gif-q=50&q=92&s=de5499d6dbe50ed714bd3e5aa4720217)



[Bat Boy](https://www.kickstarter.com/projects/xplusgames/bat-boy?ref=f50poy) is an 8-bit platformer-adventure, harkening back to the golden age of video-gaming of the early 90’s.

Join Bat Boy, the leader of a band of sentai sports-themed heroes as he and his chatty crow companion Garou, battle their way through the interdimensional realm of Stratoss on their way to liberate his fellow teammates from the mind control of the heinous Lord Vicious.

Utilize unique baseball bat attacks and skills to battle all manner of quirky enemies, traverse the many unique biomes that make up Stratoss and discover a host of weird and wonderful characters as you free your friends and confront the Lord Vicious in an epic showdown!

For more information, check out their [campaign here](https://www.kickstarter.com/projects/xplusgames/bat-boy?ref=f50poy)!

## Until Next Time!

That’s it for this time around. I’ll be aiming to give these kinds of updates monthly, so look out for the next one towards the end of August. These early ones might be a bit more tech focused as I finish up the authoring tools, but I also have lots of content that I’ll be working on over the next few months that I’ll want to share as well.  As always, I'd love to get your feedback on this update in the comments below! Thanks for reading, Sleepyheads ❤️

-Dave