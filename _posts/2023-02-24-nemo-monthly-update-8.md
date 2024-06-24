---
title: Monthly Update 8
---
# Monthly Update 8

*(Note: Originally posted [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3741472))*

Welcome back to another *Sleepyheads-only* monthly update! 😊 First off, I want to follow up on my notice from last month that I would be closing pre-orders for special tier rewards. Those are now closed (but you can still pre-order at the $60 USD and below tiers on [Pledge Manager](https://diesoft.pledgemanager.com/projects/little-nemo/participate/)) and I’ve sent invitations for all of you **Sleepwalkers** and **Guardians** with **special tier rewards**. If you haven’t already filled out that form, please do so ASAP so I can get to work on getting all of your rewards into the game. And if you didn’t see the email, you can always ping me via [Discord](https://discord.com/invite/9NymgSJAVp) so that I can make sure it finds its way to you.

With that out of the way, let's get into some of the stuff I've been working on this month:



## Map Updates 🗺️

There are a couple of fun things I’ve been working on this month, but definitely the most time-consuming (and probably the most interesting) is the map improvements. The map had been lacking in icons other than those for the player and beds, so I went ahead and got collectible/boss/NPC icons in there (which luckily was relatively simple)

![img](https://i.kickstarter.com/assets/040/052/419/1f45f706f87914562aedb64fbc98d18d_original.png?fit=scale-down&origin=ugc&width=700&sig=kRk9uqTA8TvoimXN%2BguMEBbQqrPR4EzpDVxTWdU3UZM%3D)

But there’s something else that I’ve been meaning to do with the maps, which was a bit more complicated: providing details about the *edges* between rooms. Right now they simply render as solid edges, open edges, or secret edges. But there’s actually quite a bit more information to convey: is the way blocked by something that requires a toy to overcome, is the path one-way, or perhaps it’s blocked by Oblivion that will be dissipated once you save that area’s Guardian?

To take a step back: this is not information that is strictly required of a map. Games will often forgo this kind of detailed info in a map and require the player to remember those details. There’s a case to be made for doing so: you could argue that it’s less hand-holding and more engaging for the player. But in my experience, I simply enjoy a map that provides lots of tools to help me decide where to go next, without requiring me to remember a particular path was one-way or temporarily inaccessible. So my goal with the map is to provide all the relevant information to the player, and let them focus on using that to get to where they want to go in the world.

So to do that, I’ve fleshed out the data that gets stored about room edges, so that we can have arbitrary data stored alongside the edge type. So for instance, now I can describe that an edge requires the Yo-Yo to get through, and it will render on the map as inaccessible until the Yo-Yo is acquired.

![img](https://i.kickstarter.com/assets/040/052/423/2d564c08e44f786302b1fa62f65521ee_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=0Z2mVZ5I8cWOHMQaXSYf8JzNKXOPdMvQfMnDGSEj6Ic%3D)Here the player is encountering an edge that is impassable without the Yo-Yo

Similarly, I can set that an edge is gated, and give it the instance GUID of the gate so that it will be clear on the map that you cannot go through until you’ve opened the gate.

![img](https://i.kickstarter.com/assets/040/052/440/0248540f8fe1c2e22bbcb87aed35fe83_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=lbwGuHvdoxOWQD%2F8jg5e1iqfFi70cwHeNkH2gjziMRQ%3D)And here you can see the locked edge is visible on the map until the gate blocking it is opened

Previously there were a lot of the “explore indicators” for edges which you couldn’t actually get through yet, and it made things a little confusing about where to explore next, so I’m happy to finally start getting this better solved so that the map is more explicit about where you can go or where you maybe should go next. One other minor detail I want to improve is the “explore indicator” icon. Currently it is “???” with the intent being that you don’t know what is there, but it seems common to expect that to mean “secret”, which it doesn’t (actually quite the opposite, typically secrets won’t show up on the map until after you’ve found them). I do want that icon to be very eye-catching so it’s clear what your options are for exploring next, but perhaps something a little more subtle.

And that’s it for non-spoiler updates. If you don’t mind being spoiled on more critical details, continue reading, otherwise thank you for checking in! 😄



## Spoilers Abound ❗🙈❗ New Toy! 🪀 

Almost all of the toys you can collect in Little Nemo are already mostly or at least partially implemented, but the Cape is something that I hadn’t touched since prototyping it very early on. This is getting into heavy spoiler territory because I’m going to talk a bit about the function of this toy and when you acquire it.

The cape is intended to typically be the last toy Nemo collects. It’s quite powerful because it provides a sort of double jump. Though double jumps are probably the most anticipated ability upgrade in Metroidvanias (if you don’t start with it from the get-go), I find them to be a bit boring. So I wanted something a bit more interesting, so this cape behaves more like an air dodge (a la Super Smash Bros.). So you can use it in any 8 directions or neutrally in the air to avoid attacks, or simply to gain height when used in one of the upward directions.

If you’re familiar with Super Smash Bros.’ air dodge, then you might be aware of wave-dashing. This is when you jump, and then immediately air dodge downwards to the left or right towards the ground. When you hit the ground, you’ll keep that momentum that you had from the air dodge. This is one of the *hidden* abilities of the cape that you can use for some game-breaking mobility.

![img](https://i.kickstarter.com/assets/040/052/453/ab5fa3aac3433940bb4e2164fbce851a_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=WWec5cN671eIUQR3H2Mvh932EzoKFdtvGR2cL8hILgg%3D)Here is the cape (without any animations implemented) being used to perform a wavedash and wavedash jump for extra speed and distance

Techniques such as this won’t ever be required by the game, but they’ll allow you to play the game quite a bit differently and do sequence breaks both intended and likely unintended as well. I plan to ensure there is some kind of sequence break to help the player get the cape early, since the added mobility will surely be very fun for anyone trying to speedrun, or even just playing through on a second or third playthrough.

The cape has a secondary ability allowing for a Super Mario World inspired slow fall. This is relatively straight-forward, but by holding the jump button while falling, your cape will deploy and allow you to fall at a much reduced rate.

![img](https://i.kickstarter.com/assets/040/052/455/50272f497e7576f24376c0017f8f6f49_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=%2FDhRTloza39F90zzPy%2Fo%2BvZY%2BA6Ynqsmshf33Q%2Fgkgw%3D)Here’s an early peek at the animation for the deploy and free-fall cape animations. Don’t expect the cape to stay red, the color will depend on which PJs you have selected for Nemo.

In general, I’m really happy with how quickly and easily this toy ability came together. I’ve immediately become hooked on using the wavedash jump to move through the world more quickly. 🦔💙 I still have some work to do finalizing the air dodge animation, but it’s nearly ready. Perhaps I’ll show it all off next month.



## A Fun Audio/Visual Effect ✨

I just finished working on a fun feature that came about when chatting with Jonathan Baken about the SFX for the game. He had the idea to have the Oblivion make a sound as you get closer to it.

![img](https://i.kickstarter.com/assets/040/052/460/fb36b65ef4fadb5df8ec0111a3bf4cd4_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=prUt8Mvc2%2BhLFN0dffd5n44eyjaiTQEcF0tjB0eu2dU%3D)

You can’t hear it of course in this gif, but the music dims and the “buzzing” of the Oblivion gets louder along with the color correction you can see happening anytime you approach Oblivion

I really like this kind of detail because Oblivion is so central to the narrative of *Little Nemo and the Guardians of Slumberland*. Anything we can do to make it seem scarier and more imposing is time well spent.

These are also the sorts of features that take advantage of a lot of the front-loading of work I’ve done. So for instance, this leverages the [LUT](https://www.adorama.com/alc/what-is-lut-color-grading) transition system, the audio manager’s scheme transitioning, and a new feature added to the physics system allowing us to gauge the distance between two colliders. It all comes together to make the effect more fun and interesting than if we just had a sound effect.



## Camera Updates 🎥

One last thing I’ve been working on this month is overhauling the camera. It’s not quite ready to show off yet, but I thought I’d share what I’m trying to accomplish. There are two major failings of the camera at the moment: 1) I can’t have soft camera edges which the player can jump through but the camera cannot (eg. the top of the screen in most Mario levels) and 2) the logic for getting around corners sometimes results in rapid movement that feels unnatural and awkward. I’ve just about got all of these things working in a manner I like now, but I just have a bit more tweaking to do. I may not even show it off when it’s done because ultimately I’ll consider it most successful if you don’t notice it. There is one feature-add that I’m including which maybe I’ll show off later: looking up and down. I generally try to make sure the camera is looking ahead appropriately, but there will sometimes be cases where the player wants to specifically control looking up or down just a bit, so I want to make that feature available.



## Until Next Month! 👋

Okay, that’s all for this months’ update. If you made it all the way down here, thanks so much for reading 😊

-Dave