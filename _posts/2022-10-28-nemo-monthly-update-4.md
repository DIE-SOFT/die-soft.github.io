---
title: Monthly Update 4
---
# Monthly Update 4

*(Note: Originally posted [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3649034))*

Happy Halloween, Sleepyheads! **👻** I wish I could have worked on some fun spooky stuff to show y’all this month, but I’m trying to stick to the plan. In [last month’s update](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3622667), I laid out a very optimistic list of what I wanted to do this month, understanding that I likely wouldn’t get it all done. Though I didn’t do *all* of it, I got the most important things wrapped up: there is now a playtest build available on Steam for anyone that backed *Little Nemo* at the Sleepwalker tier or above (this is the “💾 Early Builds Access” reward).'

## How to get Early Builds Access

1. First, you’ll need to make sure you have the “Early Builds Access” reward at the tier you backed (if you didn’t, you can increase your pledge if you’d like to help provide feedback with these early builds). You can see the reward tiers [here](https://diesoft.pledgemanager.com/projects/little-nemo/participate/).
2. Then you’ll have to make sure you’ve filled out the fulfillment survey on  Pledge Manager. If you didn’t yet receive the email invite (those all went out a couple of months ago), you can [re-request the invite be sent](https://diesoft.pledgemanager.com/projects/little-nemo/).
3. On your Pledge Manager [order summary page](https://diesoft.pledgemanager.com/projects/little-nemo/summary/), click the “Claim my codes” button on the right side of the page.
4. In Steam, at the bottom left corner of the application, click the “+ Add a game” button, select “Activate a product on Steam…”, and enter the code you redeemed from Pledge Manager.
   

Some quick notes about this build: there’s almost no content in there right now. This build was mostly for me to get a feel for uploading a build to Steam, see how it runs on peoples’ computers, and find any bugs that pop up from the get go. Make sure to keep an eye out for updates as I’ll be working on bringing in the content that was in the Kickstarter private demo, and then some. If you’re not already in the [Discord](https://discord.com/invite/9NymgSJAVp), please join so you can share your feedback in the #sleepwalker-feedback channel (please note, you need the Sleepwalker or Guardian roles to access that channel, so just ping Dave, that's me 👋, in the Discord if you should have access and don’t yet). Thanks to all the Sleepwalkers and Guardians for your support and for testing out these early builds. It’ll be a huge boon to have y’all scouting for issues and helping identify stuff that needs tweaking. ❤️

## Progress for this Month 🎃

So figuring out how to get squared away with builds on Steam without having a store presence ready yet for *Little Nemo* was one of the big tasks I was happy to wrap up this month. But of course there’s plenty more I finished up. And here’s what is inarguably one of the most critical, and most requested features that kept popping up from the Kickstarter private demo:

![img](https://ksr-ugc.imgix.net/assets/039/060/406/8bbd1dbf9e0e0d3240205a3cb8416fa7_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1666965912&gif-q=50&q=92&s=735b293387db6bde22cb9bfb461705dd)

You can now pet the cat. 😻

The cat sound effects aren’t in there yet, but I’m happy with the animation for Nemo. Since backers at the Cat Guardian tier will eventually have their cats in the game, this minor feature was a *must*. Once our Guardian backers’ cats start getting put into the game, there will be a special menu option (available to everyone) to choose from the list of Cat Guardians. When you select a cat, the cat sprite/color scheme/sound effects/Leo wall poster will all be swapped out to represent the selected cat. I’m really looking forward to getting photo references from all the Cat Guardians and implementing this (hopefully sometime maybe early next year?)

The Pajama and Little Buddy systems are now fully functional:

![img](https://ksr-ugc.imgix.net/assets/039/060/415/7b972ddfa2b864826bdba1fc9b0712f9_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1666965969&gif-q=50&q=92&s=071975a6c8f444aed71ae9a1e96ffd42)Here's Nemo swapping out the currently equipped PJs and Little Buddy while in the bedroom

Right now there are only six PJs and two Little Buddies completed, but the UI and flow for acquiring new ones have been fleshed out. The Little Buddy system was a bit tricky to polish up because it required pathfinding, which can get fairly complex in a platformer environment. This is why you’ll often see familiars/buddies in games float around near the player, able to clip through walls. But I want the buddies to tag along and jump around with Nemo moving in a similar way. Here’s a peek at the pathfinding logic with some pathing gizmos turned on:

![img](https://ksr-ugc.imgix.net/assets/039/060/427/8a77e2939c4cc33b9c73e854de54e166_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1666966016&gif-q=50&q=92&s=e5ea044d3d7c623ccb2e019ab1107673)Here the red line represents the path BOB is taking through the world to follow Nemo.

I also polished up the dialogue UI a bit and added a lip-syncing feature. This is something I knew I kind of wanted, but just hadn’t had time to tackle just yet. Here you can see Flip’s mouth and eyes controlled by the dialogue as it is read. The sound effects have also been overhauled a bit, so I’ve uploaded this [as a video](https://www.youtube.com/watch?v=nd5Bjf7_eF8).

And then some other things I worked on in rapid fire that aren’t as fun to show off:

- The save system continues to be improved and now saves your map exploration data appropriately, as well as immediately auto-saving anytime you pick up a major upgrade item.
- I have a good storyboard for a narrative flow “cutscene” of sorts for when Nemo rescues a Guardian. It’s not ready to show off yet, but I hope to get this into the demo soon.
- I’m continuing to clean up the In-Between (an area that appears as a seam between different thematic zones in Slumberland), so next month I hope to have some good footage of it to show off.
- And otherwise lots of tweaks to the demo content as I polish it based on feedback.
  

## What’s up Next Month?! 🍂

I have some in-progress tasks to finish up, but I’m trying to stay focused on the task of getting a very polished piece of the early game wrapped up and in the hands of Sleepwalkers to poke holes in it. The goal here is to get a good build that I could possibly use as a limited time demo to kick off Little Nemo’s Steam store presence/wishlist campaign sometime this winter.

- Continue polish of demo content
- Finish cleaning up the In-Between
- Get a bit of Mushroom Marsh playable just to give a taste of it
- More enemy types and “gimmicks” for each zone
- Squash bugs in the early builds as Sleepwalkers spot them.
  

So if all goes well I’ll update the early build over the next week or so, so that there’s actually a bit of content to explore in there, and then continue polishing it and working towards having something that feels “demo ready” by the end of the month.

So that’s it for this month! Thanks for reading to the bottom, and as always, please let me know what you enjoyed or would like to hear more about in the comments below, or join us in the [Discord server](https://discord.com/invite/9NymgSJAVp). 💚

Until next month!

-Dave
