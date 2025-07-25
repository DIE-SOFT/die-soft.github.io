---

title: Monthly Update 31
description: Some new NPC features and a look at the enemies of Nightlight City
image: /assets/images/devlog/2025-01-31-preview.png
---

# Monthly Update #31 ❄️

The new year is already well underway and things are shaping up nicely! It’s been very snowy and cold all month where I am, but that’s been great for someone that’s just trying to focus on getting a game wrapped up. I think I’ve set a great pace this month and so I just wanna share with you all some of what I’ve been up to.

Also just a heads up, this post might be a bit more text heavy and lean more on static images. A lot of the screenshot capture and conversion to web-compatible formats takes a good chunk of time, and I’m busier than ever now. But I will still try to make sure you know what fun stuff I’m working on.


## Timeline Update 🕰️

This month I’ve been getting some help from team member Char in plotting out a schedule for finishing up production. We have a list of all the work that needs to happen and we’re trying to gauge how long it’s going to take, as well as talking to people about getting some marketing help towards release. We have an idea of when we *think* the game can ship, but it will require coordinating on these fronts, so I’m not ready to share a date. As we do get closer to being able to share a date, please keep in mind that these updates are private to Kickstarter backers only, so with news like that, I will probably ask you all to keep that a secret to help us make a big surprise announcement to the public when the time comes. 🤫😄

## Playtesting 🎮

Another front which Char has been helping with is coordinating a playtest! We’re just starting our first round this coming week in which we will have some people that haven’t played the game before and get their thoughts on the first hour or so of the game. From there, we’ll continue getting their input on specific chunks of the game with each round of playtesting. This will help us find bugs as well as anything that isn’t particularly fun in those areas. If you missed our announcements, but are interested in playtesting, please reach out! We will be doing more rounds of playtesting, so we’ll likely be able to get you into those as other playtesters inevitably fall off through the process. Please keep in mind though, if you’re super excited for the game and don’t want to spoil anything, I recommend NOT being a part of the playtest. This won’t be the final version of the game we’ll be playtesting over the next few weeks and months (the whole point is to find things that need to change after all), so just hold out if you’re excited to play the final 1.0 launch on release.

Before the current build was ready or playtesting however, there were a few areas I new could use some improvement, so I've been addressing some of those…
 

## New Conversation Available! 💬

One concern I had with the current state of the game was that the indicator for when an NPC has a new conversation available was simply not noticeable enough. After rescuing Minerva, you can speak with her again to spend some candy on a pair of Pajamas, but a lot of players simply ignored that, and I think that was at least partially due to just not noticing that she was asking you to talk to her again. So I decided to do some quick tweaks of the UI for this.

![img](https://i.kickstarter.com/assets/048/019/676/06f9bae7d5c80fd06eaacf494ecbdb5e_original.webp?fit=scale-down&origin=ugc&q=92&v=1738341910&width=700&sig=libNyJSwOIb4eDoM7Twlyf4qg5oO4Xo%2FjL1TBWv6xjk%3D)Minerva wants to talk to Nemo!

I approached this from two angles, the first was to make the graphic larger and more prominent. Before it was a simple “!” with minimal animation. It’s now both easier to spot, but also more clear that it’s indicating there is a conversation to be had.

The second change visible above was giving these NPCs the *DrawAttention* tag. This was only being used in a few other places before, but essentially it just changes the color of their outline. It’s not quite as strong as the outline when you’re next to them and pressing the button will start the conversation, but strong enough to make them pop out a bit more (see Nemo's transparent white outline to compare against how it used to look without the *DrawAttention* tag).
 

## Dialogue Skip 🙉

Related to conversations, another thing that I have wanted to do for a while, but the upcoming playtesting gave me the impetus to finally finish is dialogue skipping. Early on this was a feature we offered, but all it did was simply close whatever dialogue window was open. This became an issue when I introduced the ability for Nemo to make choices in a dialogue window. If we require a choice input from the user, we can’t necessarily skip past that. So I simply disabled skipping, intending to come back to it eventually. I knew there was a lot I could do to improve it over what used to be there, so here are the features I introduced:

- Pressing the UI Confirm button will advance text as per normal, showing all of the animations of the chat bubble popping up, swapping which speaker is active, reading out the text, etc. But pressing the UI Cancel button should instead *immediately* show the next line of dialogue, entirely bypassing these animations. This is a trick I noticed *Breath of the Wild* was doing, and as someone that likes to read dialogue very quickly, I *really* appreciated it.
- Holding the UI Skip button should display a “Hold to Skip” prompt and skip to either the end of the conversation or to the next time the player needs to make a choice once it’s been held for one second or so. Importantly, when skipping to the end, we should NOT close the dialogue window. Even though the player skipped, they might want to take advantage of the dialogue window’s ability to scroll to read some or all of what was said up above. So after skipping, another input is required to close the window.

Both of these features mostly just rely on ensuring my dialogue playback code appropriately handles canceling any of the animations we’re doing (skipping is essentially just canceling/preventing all animations).

![img](https://i.kickstarter.com/assets/048/019/710/8b38a0298812b8f59b028f505c19a763_original.png?fit=scale-down&origin=ugc&q=100&v=1738342146&width=700&sig=pGE1Th0r%2Bq4oW%2FTU4%2BMRmO%2BMJqgNukL5TNtvbkrxqlI%3D)Hold to Skip prompt is visible in the top right if you press the UI Skip button (the default input is the top face button on a gamepad)

This is especially helpful when I’m testing the game, so I’m happy to have it back finally 😄
 

## Flip Teleport 🎱

Another small detail that had kind of popped up was the way in which Flip is following along with the player. She appears all over, and the idea is that she’s traveling from place to place and meeting you in those places. But I think the lack of some kind of animation after her conversations made it feel slightly awkward, almost like there are multiple copies of her. This was something we discussed early on in the game’s development, and I had left it as is because I wanted to avoid opening the can of worms of trying to get Flip to be able to walk off-screen in the appropriate direction from any given place in the world. Something like the Mega Man style zip into the air would be ideal, but obviously thematically very odd here.

I was watching someone play and they said, referring to Flip: “man, she’s everywhere” in a way that just indicated we’re drawing too much bad attention to the fact that she is literally just everywhere, instead of trying to at least provide some way to help the player believe she’s *traveling* to these different locations. So I had an idea for an animation to help convey that:

![img](https://i.kickstarter.com/assets/048/019/729/f07f3b9b492507a46357ff29ddb71946_original.webp?fit=scale-down&origin=ugc&q=92&v=1738342251&width=700&sig=S5g2k26MbeJyIDP8CjurrsK2Jt9pkdAgNotEI9Mv%2BGM%3D)Flip using her 8-ball to teleport to wherever you'll find her next.

It’s a relatively minor thing. We now simply have a command we can call in our dialogue scripts that will tell Flip to teleport away (either left or right) after finishing the conversation. But I think it does a good bit of work in helping to make it feel like she’s traveling around Slumberland and we’re meeting up with her at various locations.

These are the sorts of little tweaks I hope to identify as being needed as we get into our playtesting, I just wanted to get ahead of these since I already had identified them as minor issues from previously watching people play the game.

Okay, and onto some spoilery stuff I’ve been working on…  

# Spoilers Abound ❗🙈❗



I made a big push this month to finish up **💡Nightlight City💡** so that it is fully playable and fun. There are still more sprites I need to finish cleaning up, but I can share some fun stuff. The thing that’s harder to convey is all of the level design that was done in this domain this month. So I’ll just show you a map of the area and talk a bit about it.

![img](https://i.kickstarter.com/assets/048/019/749/7bc1b3b6d1483be4f6faf903a3f6fd09_original.png?fit=scale-down&origin=ugc&q=100&v=1738342353&width=700&sig=b4FL7qalahMH6r2v2AA81N81eBmAdBTzQZZazj%2F0k84%3D)The map of Nightlight City as seen from NemoMaker

The bulk of the upper portion is the part of the city you’ll progress through as you attempt to rescue this domain's Guardian. If you want the full spoilers for this area, I’ll talk a bit about this portion in the next paragraph:

In this upper area, Silas has tasked you with taking photos of a dinosaur that’s been spotted in the City (I wrote about this in a previous update when introducing the idea of [Quests](https://diesoft.games/2024/08/30/nemo-monthly-update-26.html#silas-photo-hunt-)). He wants three photographs, so you’ll need to carry a camera around with you as you make your way through. If you lose the camera, you’ll need to go back to Silas to pick up a new one, so this area has been designed to loop around on itself with shortcuts you can open up as you progress. You’re using the same bed for most of your time in this upper portion of the domain, so that if you are woken up, you'll be near Silas to get a replacement camera.

Once you rescue the Guardian and clear the Oblivion in this domain, you’ll be able to access the lower areas of the domain and head into the sewers. The lower right portion of the map is a very dark area that gives you an attempt to take advantage of the Little Buddy Lampet if you’ve found it by now.

The upper part of the sewers aren’t too dark…

![img](https://i.kickstarter.com/assets/048/019/783/6f8e442eeb0a0edb7f3a19677fdcbed5_original.png?fit=scale-down&origin=ugc&q=100&v=1738342489&width=700&sig=zdnI40p2XdUaoV1pJSHPlnoq2jchwj2Vy0SpKMilJBQ%3D)The upper Sewers aren't fully dark, but certainly a bit dimmer than above-ground Nightlight City.

…but as you go deeper, I recommend bringing a light source!

![img](https://i.kickstarter.com/assets/048/019/789/d35f4ef3830ed700a56a0b5d5f5b9b84_original.png?fit=scale-down&origin=ugc&q=100&v=1738342527&width=700&sig=HMZKFvQiY7vcUrjjGGMXf1LhexBGUiBZc7ZSLoj3KRg%3D)The lower sewers area is completely dark.

You can kind of get by with the lights on the floor and the few lamps you might find, but it’s certainly treacherous. However, if you brave this part of the map, you’ll discover a new, and very powerful toy: the Cape. And once you have the Cape, there will be plenty of new areas you’ll be able to access, including another sewer portion of Nightlight City, or you can push forward and into **❄️The Valley of Silence❄️**.

I also just wanted to show off some of the animations for **LumenBot** and **MechaDino** that I worked on this month so that you can see how they’re coming along. I described a bit about their behaviors in an [earlier update](https://diesoft.games/2024/08/30/nemo-monthly-update-26.html#nightlight-city-enemies-) which you can check out if you wanna hear more about them.

![img](https://i.kickstarter.com/assets/048/019/807/07ebc7c98c769e1c15c7df6fe291ccb1_original.webp?fit=scale-down&origin=ugc&q=92&v=1738342623&width=700&sig=jFJ2PqoSD9eOnMXUvI5Z6n2uD09wxNoAUJUrJMbmhBY%3D)Here's LumenBot's walk cycle so you can get a look at this lil guy

![img](https://i.kickstarter.com/assets/048/019/933/f8cbe58a21784f476bed0689ec369ef2_original.webp?fit=scale-down&origin=ugc&q=92&v=1738343234&width=700&sig=bENOtJ52fLkLWt1X%2B%2Fy4ablFYqgpJG9i51ErtqmVE2Y%3D)MechaDino will fire a beam of electricity out of it's mouth if it spots you in front of it, but you can pluck out its key to shut it down.

One other fun detail, I happened to work on unrelated to any of this stuff, but I’ll just share because I had already captured some video of it:

![img](https://i.kickstarter.com/assets/048/019/822/920367173cdbd2991de6f093a8d3d2a3_original.webp?fit=scale-down&origin=ugc&q=92&v=1738342685&width=700&sig=eN8e31NthezX08r2Dens3J18VlXXI1%2FjTGoJj2U1A0s%3D)The Valley of Silence features some cute penguins

Unfortunately you’re not getting the audio here (the penguins make little honking sounds occasionally that’s very cute, you can see the video with sound [here](https://bsky.app/profile/diesoft.games/post/3lfakafp3b224)), but these are some of the penguins you’ll find in the Valley of Silence. They’re not enemies or anything, they’re just chillin'. They’ll make more sense when you meet the Guardian of this domain, but for now I just wanted to show off their sprites / animations which I’m pretty happy with 😊.
 

# Back to Spoiler-Free ✅🐵✅



So this month has been lots of sprite polish, level design, and some mechanical/feature set polish. A bit of everything I suppose, but it was very productive. I think I’ve set a good pace for myself, which is on track for where I need to finish things up soon.
 

## Until Next Month! 👋

Thank you once again for following along! It is very encouraging when I see that people are reading these and enjoying the updates. As we start to get closer to wrapping up production, these might become less exciting as the things I’m working on become more about releasing the game, but I still have some exciting stuff to finish up that I’ll share in the upcoming updates. See you in February!

-Dave

![img](https://i.kickstarter.com/assets/048/019/848/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1738342814&width=700&sig=iS8kuuz2qHzcdCnBeYIvaughLbwk6ijWBycZ1rCzcaM%3D)
