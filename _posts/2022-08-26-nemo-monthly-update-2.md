---
title: Monthly Update 2
---
# Monthly Update 2

*(Note: Originally posted [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3592827))*

Welcome back, Sleepyheads. We’ve already wrapped up our second month since the Kickstarter concluded, so it’s time for another *development update*! 🎉

But before I get into what I’ve been working on, just a reminder that pre-orders are available [**via PledgeManager**](https://diesoft.pledgemanager.com/projects/little-nemo/participate/), and also there are still lots of you that haven’t filled out your [**backer surveys**](https://diesoft.pledgemanager.com/projects/little-nemo/) yet. Please make sure to get that filled out soon so you don’t forget. When it comes time for fulfillment, I’ll only be able to fulfill your order if you’ve filled out your survey! Of course there'll be other reminders, but best to take care of it now 😊

This past month I’ve been continuing to work on the authoring tooling (this is a "game" I use to build and test the world of Slumberland, I usually just refer to it as *NemoMaker*). It just needs a bit more work before it’s in a place where I can use it to build the early parts of the game for a Sleepwalker test build. If you didn’t read the [**previous update**](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3569416), check it out as I go into some details about why I’m building my own custom tooling for *Little Nemo*.

# This Month’s Progress Breakdown

The *chunk* (screen-sized pieces of the game world) *edges* (where two chunks meet) can now be adjusted so that they can be open, closed, or secret. Previously I was setting up all these edge chunks manually (dragging around edge colliders to be in just the right spot was pretty annoying), but now in NemoMaker, they will automatically appear at all edges around a room and I can edit them where they touch another room. Whether the chunk edge is open or closed will also affect which chunks are loaded in around the player. A chunk edge being closed effectively means you can’t get through there, so we do some simple path-finding to only load in nearby chunks which the player can actually reach. And a secret chunk edge is similar to open, but the camera won't pass through until the player does, to help disguise that there is something on the other side.

![img](https://ksr-ugc.imgix.net/assets/038/399/069/1b81097212d7be4cd2f13abdb18742c2_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1661525207&gif-q=50&q=92&s=c598905b643a9e3ee8f0edc4142d792e)Here you can see how the chunk edge style will affect how the camera interacts with the edges of chunks

I've also implemented the ability to use different *draw styles* for different swatches. This allows me to draw large rectangles all at once for the basic collider tiles, horizontal lines for the pass-thru platform tiles, vertical lines for decorational pillars, or 2x2 areas for compound tiles (larger tiles are actually just a collection of multiple tiles). I was previously just free-hand drawing in where the tiles went, which is very painstaking, so this will make it much more fun and easy to draw the world in as I go.

![img](https://ksr-ugc.imgix.net/assets/038/399/085/3ed4a1d64de5fd387442aed32540b509_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1661525303&gif-q=50&q=92&s=590c59ccefea39d7c5501e25fe2edd96)Here you can see how the pass-thru tiles use a horizontal line draw style, but the background wall uses a rectangular draw style

A critical part of all of this is being able to actually use the world that is built in NemoMaker within the actual game, so I’ve got that all working now (previous builds used standard Unity scenes for loading in Slumberland content). Beds can be placed in NemoMaker and then used as checkpoints/spawn-points in the game. NemoMaker shares the same playback logic as the game to make sure the world is being properly loaded in around the player.

![img](https://ksr-ugc.imgix.net/assets/038/399/101/a506652984ce77fdaf217647aa124358_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1661525383&gif-q=50&q=92&s=4d41679dbfc3ef5b3ebd567af2ec70a7)Here’s a sped-up editor view of the rooms loading in around the player to create a seamless world

I’ve also been continuing to make some content, though not as much since I’ve mostly been focused on NemoMaker. But I did introduce the concept of an in-between zone that appears as a sort of palette cleanser when transitioning from one zone to another in Slumberland. This gives the music time to wind down before we start playing the music for the new zone the player is entering.

And I’ve been working on lots of tiles for the Gumdrop Gardens as well. You might have noticed it was a little sparse before with just the standard collision tiles, but I’ve fleshed out the tile palette for this zone quite a bit.

![img](https://ksr-ugc.imgix.net/assets/038/399/111/3c450ffc42f482e4f0c51f2e7176e583_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1661525449&gif-q=50&q=92&s=e27c541af61a7e49a9f8429a16e56b60)

Here’s a WIP version of the in-between zone you’ll encounter when going from one zone to another

And a fun detail you can see here is the footstep effect changes when walking through the in-between zone. I have a fairly well fleshed out system for effects emission that I haven’t shared too much about, but essentially any surface can opt in to emit effects on behalf of an entity, and a tilemap emitter can check which tile that effect is coming from and adjust to use the appropriate effect. So when running on these rainbow tiles from the in-between, we can emit the sparkle footsteps instead (and similarly for turnaround, jump, and landing effects).

We also have some amazing new sound effects for the menus now, courtesy of Jonathan Baken, who is handling all of the sound effects for the game. Check them out in this [quick video showcase](https://www.youtube.com/watch?v=Jj4s-uDHQAI).

# Sleepwalker Stream!

I’m going to show off some of some of this stuff in more detail in a Sleepwalker stream next week on **Thursday, September 1st** at **2pm** (**EDT**). While this isn’t quite playtesting, it gives me an opportunity to test out the Sleepwalker only channels for streaming and show off some of the progress, in more depth, to the biggest supporters. If you backed at the Sleepwalker tier or higher, you can join our [**Discord**](https://discord.com/invite/9NymgSJAVp) to take part in the stream.

![img](https://ksr-ugc.imgix.net/assets/038/399/133/96839a028a684c4bc6bbf4add7f2d1fa_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1661525595&gif-q=50&lossless=true&s=8ebf66608537a711cb2cbf1f87ad449b)



# What am I working on next month?

NemoMaker is just about in a good enough state for me to build the Sleepwalker early demo build, but there are a few things I need to wrap up first. The UI needs a bit of work so that I can add lots more swatches (you can see it’s a bit bare bones for now). I’ll also need a property inspector panel as some items that can be placed will have options that can’t be expressed simply by its position and bounds in the world.

And very critically: I need to develop the map system. Because the world is expressed in terms of screen-sized chunks, and there is a traversibility matrix that describes the style of edges between the chunks, it should be relatively straight-forward to develop a map system from here. It will be a good chunk of UI work though, as I have only developed the look and feel of the map so far (what was in the streamer demo was fake static map content). I’m considering the map as a requirement for the first build for Sleepwalkers.

Then content-wise, there’s plenty to work on for the early build. I have some gimmicks to develop and flesh out, such as “sticky blocks” that can be found in the Gumdrop Gardens. And I need to do a bunch of work on the environment tiles/lighting/background/etc. for the Mushroom Marsh. The plan for the early build is that it will primarily take place in the Dreamswept Plains, but we'll take the player into the Gumdrop Gardens and the Mushroom Marsh at least for a bit, to give a greater sense of how it feels to explore a larger world. That’s something that we just weren’t able to capture in the tiny-scale of the streamer demo.

Another fun thing I’m working on is the UI for a banner that displays the zone name whenever you enter a new zone. I love the zone name animation in Sonic Mania, so that is a big inspiration for this, although it needs to not get too in-your-face since it will happen while the player is still in control (since zone changes are seamless). Here’s a quick static mockup of an idea I’m toying with to give you an idea (looking to incorporate that foil sticker aesthetic and lots of bright colors in this one):

![img](https://ksr-ugc.imgix.net/assets/038/399/153/ea959b75d8ff84255b69a4e63c424363_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1661525719&gif-q=50&lossless=true&s=7cc3529b0eb099a635b563716591bd79)

# Kickstarter Friends

This month, the game I want to highlight isn’t quite ready yet for Kickstarter launch, but should be launching in the very near future. I’m super excited for [**Dono’s Tale**](https://www.kickstarter.com/projects/superitemstudios/donos-tale) and will be streaming a playthrough of the demo on **Saturday, September 3rd** at noon **12pm** (**EDT**) on [**Twitch**](https://www.twitch.tv/diesoftgames). In the meantime, you should follow their [**Kickstarter**](https://www.kickstarter.com/projects/superitemstudios/donos-tale) to be notified as soon as it launches, or check out their [**Twitter**](https://twitter.com/DonosTale).

![img](https://ksr-ugc.imgix.net/assets/038/399/163/a04548bec926bc5902d0dcd69da28d08_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1661525794&gif-q=50&lossless=true&s=2cfe4155dfe8d0be59704d37e53e82af)



Relive the glory days of the 16 and 32-bit era in Dono's Tale. A super cute and colorful platformer about a hungry little dragon! Jump, dash, climb, and shoot your way through detailed and colorful worlds in order to get back your precious fruit!

# That’s all for now

That’ll do it for this month’s update. I really appreciate that you made it all the way down here. As always, please leave comments to help give feedback about the update. What did you like about it, what else would you like to hear about, etc. And if you’d like to interact more directly, please hop into our [**Discord** ](https://discord.com/invite/9NymgSJAVp)and say hello!

And I’ll close out with a recap of upcoming streams:

-  *Thursday, September 1st at 2pm (EDT)*: Sleepwalker-only Stream in [**Discord**](https://discord.com/invite/9NymgSJAVp) showing off NemoMaker in-depth
-  *Saturday, September 3rd at noon 12pm (EDT)*: Public [**Twitch**](https://www.twitch.tv/diesoftgames) stream playthrough of the [**Dono’s Tale**](https://www.kickstarter.com/projects/superitemstudios/donos-tale) demo.

That’s all from me. Thank you, Sleepyheads ❤️ and see you in the next one! 😁

-Dave