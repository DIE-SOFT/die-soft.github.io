---
title: Monthly Update 6
---
# Monthly Update 6

*(Note: Originally posted [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3695144))*

Happy Holidays! 🥂❄️ I’m posting the monthly update a little early again because I’ll be trying to take next week off to celebrate and just get recharged so I can head into the new year with the vigor it’s gonna take to get this game finished up in 2023. 💪

I hope everyone reading this has a cheery and happy holiday season!

##  Progress for this Month❄️

For the Sleepwalkers and Guardians reading this update: there’s a new build that I just uploaded to Steam yesterday, so you’ll be able to check this stuff out first-hand if you’d like. (If you have the “Early Access Builds 💾" reward tier and don’t have access to that yet, hop into the [Discord ](https://discord.com/invite/9NymgSJAVp)and ping me, or just head to our [Pledge Manager page](https://diesoft.pledgemanager.com/projects/little-nemo/) and enter the email address associated with your Kickstarter account).

First off, I’ll show off the improvements I made to the **Rocktopus fight** since, while it feels like a bunch of little things, I think they all add up to make this fight feel more impactful and fun. I’ll just list out all the things that changed with the first boss fight:

![img](https://i.kickstarter.com/assets/039/521/235/44bea7b9cb329b07eb854e8baca5e319_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=IDtJHH%2F6RvY%2BM0doa6TVMhH91tX%2FdHLXUzMkwk4wKoU%3D)Here’s a quick look at the boss fight ending which shows many of the new tweaks I’ll detail below.

- I've put some attention into the **hit effects** when you damage the Rocktopus. There is now a system in place so the dynamic sprite recoloring system can be leveraged to temporarily change something’s color scheme. So the Rocktopus can change to a reddish color scheme to better indicate that you’ve hurt it. I’ve also added a bit of hit-pause (when the game pauses for a fraction of a second) and screenshake to the hit effect. And I drew some new effect sprites for this hit effect which I much prefer over the old ones. These improvements also apply to other enemies and objects as appropriate.
- The Rocktopus now has a proper **death animation** which has it being overcome with Oblivion before dissipating and leaving behind the octopus plushie that had been taken over by Oblivion. This octopus plushie will toss you the scepter you need to save Minerva, the Guardian of the Dreamswept Plains. All of this will be relevant for future boss fights as well, as they will often tend to follow this formula. Also, the plushie will always remain here so you can give it a pet as you pass by.
- I made some technical **improvements to the audio and lighting systems** which allow for things to “return to normal” after you beat the Rocktopus. These are even more subtle touches, but I think go a long way: essentially now the darker lighting scheme for the boss fight will transition back to normal after the boss is defeated, and the standard music will start back up as well. This will all just make it more clear that the boss hasn’t respawned when you come back through later, and also just helps to make the victory more impactful.
- Finally I’ve made some **difficulty adjustments** to this fight I’ve known were needed since first seeing people playtest this. Tentacle hitboxes come out slower, the swiping attacks are a more linear speed so they can be more easily avoided, and the meanest attack patterns don’t happen in the default version of the boss fight now. Additionally, since recently adding ducking, this is one of the few use cases where ducking is useful because you can duck under the stabby attacks that come from above.
- And finally, fixed one minor nagging thing: when damaging the Rocktopus, the **tentacles retract** into the ground with a quick animation instead of just disappearing. This was much more annoying to get working than you might think, but it was really bugging me.

![img](https://i.kickstarter.com/assets/039/521/238/a66f622b78f9463c282aa3e71ea90ac2_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=PTHPBGlEZIpwiLaL49WN0lolMBypOSMRy3dSz6YPZLQ%3D)Here’s some of those new hit effects developed while working on the boss, applied to a standard enemy and breakable objects such as this moon.

After defeating the Rocktopus and getting Minerva’s Scepter, I now have a first pass for the general flow of **rescuing a Guardian** in place. The current build has Minerva 🦉 in the Dreamswept Plains, and you’ll be able to bring the Scepter to her to transform her back into her human form. This triggers a “cutscene” of sorts (it’s still a work in progress), but the idea here is to just give the player a moment to relax and provide a bit of narrative context. Some players, such as myself, often just want to get back into the thick of it, so these are all skippable (though there’s no UI to help indicate this just yet).

![img](https://i.kickstarter.com/assets/039/521/244/0b7a90821aadcb18167bb4c64f477ad5_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=CH7TpDOBA2jMd7ddT%2BVtSU5r%2FOzZHN7HIJ7vGs2FFA8%3D)Here’s a truncated look at rescuing Minerva and dispelling the Oblivion from the Dreamswept Plains. The bulk of this scene is cut from this gif just to keep it short enough.

Rescuing Minerva will allow her to help you remember the dream of the Dreamswept Plains, which will dispel the Oblivion in this area. This is part of the general flow of each area which allows you to reach new areas or find new secrets after the Oblivion has been dispelled in that part of Slumberland. In this case, the room immediately after the Rocktopus fight is blocked off with Oblivion, and after bringing the scepter to Minerva, you’ll be able to progress there to get the Yo-Yo. There are some other secrets hidden throughout the start of the game which you’ll be able to find only after the Oblivion is gone, so keep your eyes peeled. 👀

![img](https://i.kickstarter.com/assets/039/521/250/507bd548089c368eab45d852d5c58b23_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=iVIuF3oYaVM8D1CMESnSJcLMAfYLcDX7XCoMgWnbVLM%3D)A quick look at the finalized In-Between assets. Sparkly ✨

This month I also wrapped up the assets for the In-Between enough to show it off in a much more finalized state. This was just a matter of finding a styling I liked and re-drawing some of the assets. The central background object became the moon. You’ll find that the moon is an important motif throughout the game. I wonder what that’s about…? 🤔

## What’s Next? ⛄

The plan for January is to get this build into the hands of some content creators so that they can help build some buzz for the launch of a Steam Store presence! 🎉 If you know any content creators that would be appropriate (or if you are one!) then please share [this link for the form](https://docs.google.com/forms/d/1vIkKePDog4gC6fK-zvIMSKhmPAaqk4g7aqUgvIoc6kY/) to get an early build of the game. This boss fight and Guardian rescue work I’ve done was some of the most critical stuff I really wanted to get in there, but I still need to polish things up a bit and flesh out the content in the areas after you get the Yo-Yo. So I’ll be focusing and getting that all finished up and launching the Steam Store for *Little Nemo* so that people can wishlist the game. I’ll also be asking all of you to please help get the word out, so I may do a Kickstarter update just for that in addition to the usual monthly update.

There are some things that I didn’t get to and likely will not make it into this demo (I wanted to explore more enemy types and gimmicks for the Gumdrop Gardens to give a sense of how each area is unique), so I’ll probably dig into that once things are settled with the Steam Store presence launch.

## Kickstarter Update Visibility

Just one thing I wanted to give a heads up about: though I’ve been publishing all of these updates publicly, I will likely start making them backer-only in the new year. This is mostly just so that I can continue to share things with all of you Sleepyheads, but still have content that is not yet public so as to save things for bigger reveals and keep from spoiling people on stuff too early. Please let me know if you have thoughts in general about the content that I might be spoiling in future updates. Should I mark things as spoilers, have separate technical and content updates, simply not share spoilers past a certain point? What do you think?

As always, thanks for reading through all of this. Please make sure to leave any feedback you have down in the comments below, or hop into the [Discord](https://discord.com/invite/9NymgSJAVp). I hope all of you Sleepyheads have an absolutely wonderful holiday season, and I’ll talk to you all again in the new year! ❤️

-Dave
