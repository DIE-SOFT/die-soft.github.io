---
title: Monthly Update 3
---
# Monthly Update 3

*(Note: Originally posted [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3622667))*

Wow, can you believe we’re wrapping up our third month post-Kickstarter?! It’s been a productive month, and if you've been following along, you’ll see I stayed focused on the things I mentioned I’d be working on in last month’s updates without too many surprises. But let’s get into it:

## Progress for this Month

I wrapped up the final major features I needed for NemoMaker to be properly useful. I won’t get too into that since I chatted a lot about these tools at length in the last two updates, but the major bits of functionality I completed were being able to stack swatches into what I call “books” of thematically corelated swatches (this just allows me to make many more swatches available and I also finished up dpad navigation to make it much easier for me to change swatches when authoring with a controller), and also a property panel so that I can use to update custom properties for swatches, prefabs, and also setting which upgrades Nemo currently has (super helpful for testing). I’ve also just been importing lots of my prefabs into this context so that I can easily just “paint” them into place and it’s been really fun working with all the tools now that they've come together.

So with that in a good place, I’ve also been working on some of the core features that I wasn’t able to have ready in time for the closed-demo for the Kickstarter campaign. In that demo, the map and status screens were semi-interactive placeholders. The map didn’t even show a map at all related to the demo area. There were also no Pajama or Little Buddy upgrades available, and the upgrade flow when you picked up a new toy left a lot to be desired. I’ve been addressing all of that and those features are all just about ready to get incorporated into an early Sleepwalker alpha build to share soon.

![img](https://ksr-ugc.imgix.net/assets/038/758/043/d710971773f3176a5aec8fa87d24a95e_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1664554018&gif-q=50&q=92&s=dce29f8494662efe9245af44ea6ffc9c)A time-lapse of the map expanding as Nemo explores Slumberland

This is our first pass at the world map. It is dynamically built from the Atlas data (the Atlas simply being the world that is built in the *NemoMaker* tooling). It handles hiding secret walls until they’re discovered, displaying major items such as beds and where you found upgrades, and it tracks which rooms you've been to, and even which individual chunks of a room you’ve visited. And any open edges of the map are highlighted with “???” to help draw your attention to areas you likely should be heading to.

There’s still a bit more functionality to add in terms of displaying toy gates (boundaries which either have an explicit or soft requirement of a certain toy upgrade to get past them) and perhaps other minor features, but the heart of the map work is done now.

And here’s a look at the improved flow for picking up major upgrades (Toys, Pajamas, and Little Buddies now use this flow):

![img](https://ksr-ugc.imgix.net/assets/038/758/063/06bd6a71d8d25e2ee93d67bd46085528_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1664554112&gif-q=50&q=92&s=de532435eaeb8fbbafe0cbe3d7d7a090)

Here I’m using NemoMaker to show off what happens when Nemo collects a new toy upgrade.

You may recognize that banner as the design I showed last month that I wanted to use for displaying the name of a zone you’re entering, and that’s because I finished up that work, and then decided this UI would be great for any kind of messaging like this. I also polished up the effect when you get the toy, and then critically *it now takes you directly to the status screen to give you the details about the toy you just acquired*. This was the feature I wanted in the earlier demo but didn’t have time for. So now when collecting a new upgrade, you'll see a simple explanation for how it works/what it does, and then that may be coupled a minor challenge that forces you to learn to use it (a la how *Metroid* forces you to immediately use the Morph ball as soon as you acquire it).

This same animation and status screen flow is also used when you acquire new Pajamas or Little Buddies. I just wrapped up getting all of that UI and the save data functional for when those upgrades are acquired, but I’m still putting the finishing touches on the Pajama buffs and actually spawning in the Little Buddy you currently have selected. So expect to see those features functional in the next update.

And here’s a peek at a [new track for the Gumdrop Gardens](https://youtu.be/Nxl4XxBXcB4) that Peter Berkman just wrapped up. This is likely the first area you’ll reach after the introductory Dreamswept Plains, and it’s a very light-hearted, fun, and adventurous vibe.

There are also a few small things I worked on this month that I'm gonna hold off to share until they're a little bit further along. I've made some fun improvements to the dialogue system I look forward to showing off some more in next month's update and in the demo for Sleepwalkers. 

## What’s up Next?!

For this next month, I’m going to hustle to try to get a build in the hands of Sleepwalkers. This might be a little slow because there’s work to do both for engineering, new assets, and figuring out how to best distribute a build. But I’d like to get that done this month so I can start getting feedback and have a build that starts to better show off what the gameplay of *Little Nemo* feels like.

So that work will include:

- Wrapping up Pajamas and Little Buddies by getting functional logic in there for a few pairs of PJs and a couple of Little Buddies for the players to find.
- Flesh out the flow for rescuing a Guardian (in this first area you’ll rescue a cute Owl-themed Guardian).
- Explore moving from itch.io to Steam for alpha distribution.
- Flesh out the Mushroom Marsh a lot more (I’d like this to be available in the demo, but it still needs lots of environmental tilesets)
- And adding more enemies. The goal is for each zone to have unique enemies, though in this demo we’ll probably re-use some since you’ll mostly be spending your time in the Dreamswept Plains for the bulk of what’s there.
- Make major changes to the layout of what you saw in the Dreamswept Plains from the earlier demo.

So that’s a good chunk of work, but I’ve been going at a pace I’m fairly happy with and while I likely won’t accomplish *all* of that, I’m hopeful I can do enough to get a build put together and start getting it into Sleepwalkers’ hands.

## Kickstarter Friends

I don’t have any Kickstarter campaigns to share this month, but the [Dono’s Tale Kickstarter](https://www.kickstarter.com/projects/superitemstudios/donos-tale) I shared last month is currently live on Kickstarter, so you should check that out, and also just reminder for you to consider going into Kickstarter’s [video games category](https://www.kickstarter.com/discover/advanced?category_id=35&sort=magic) and finding and supporting a game that catches your eye. Your support as a backer is invaluable to independent video game creators ❤️

That’s all for this month. As always, please leave feedback in the comments below, or in our [Discord](https://discord.com/invite/9NymgSJAVp). Thanks for reading, Sleepyheads! ✨🙌✨

-Dave