---

title: Monthly Update 39
description: Behind-the-scenes making of Nemo's PJs
image: /assets/images/devlog/2025-09-26-preview.png
---

# Monthly Update #39 🍁

Welcome back, Sleepyheads! It’s the last Friday of September and we’re fully into the autumn season now. I’m lucky to be in an area that is beautiful as the leaves turn, so as much as I miss summer, I’m not gonna complain.

And speaking of the end of September, just a quick reminder: the late pledges will be closing on September 30 and we’ll be **locking in all of your pledge info**. So that means you’ll want to make sure your “Credited as…” name and which platform you’ll receive the game on are all set on [Pledge Manager](https://diesoft.pledgemanager.com/projects/little-nemo/). If you missed my last update about all that, make sure to give it a read [here](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/4471404).

And another important announcement ICYMI: **we’ll be doing another round of playtesting** a week from next Monday. This one will cover the middle portion of the game and I’m estimating it to be about 3 - 5 hours of gameplay that will be covered. If you are NOT already a part of our playtesting group and would like to be, please sign up [here](https://docs.google.com/forms/d/1B0Lc12ziqH4i15YCeV33dl4uzG5ljpqzZdoKLlQBfzE/viewform). I just ask that you only sign up if you’re able to commit a few hours to play through, and then a bit more time to give feedback based on what you played. You’ll have two weeks to play through and will receive a feedback form during that time, but I also encourage posting feedback and bugs into our Discord playtesting channels which I ask any playtesters to join. And if you’re already a playtester and now someone that you think would be a great fit, please forward that link on to them. It’s publicly available for anyone to apply!

Okay, so before I get into it here, I just want to mention there are some minor spoilers in here where I’ll be discussing the specifics of some of the PJs you can acquire, but unless you’re on a *very* strict no-spoilers diet, I think this will be fine.


# More Behind the Scenes: Making PJs

Everyone seemed to enjoy seeing more about the behind-the-scenes process stuff I shared in last month’s [making an enemy](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/4471329) update. So I thought I would continue with something similar this month and show what goes into making a pair of Nemo’s pajamas.


### **About Nemo's PJs**

In *Little Nemo and the Guardians of Slumberland*, PJs are one of the major upgrade items you can find or purchase throughout Slumberland. Each pair is unique and provides a passive buff as well as a new color scheme for Nemo. You can swap out which PJs you have equipped at any dresser (so when you’re back in your bedroom is a great time to reevaluate which PJs you should be wearing).

In terms of the *power level* of the buff the pajamas provide, the goal is for all PJs to feel equally useful and balanced, while ensuring each buff is completely distinct from any other. And in terms of how I think about the PJ buffs in terms of how they compare to other major upgrade items, it’s something like this:

- Toys grant entirely new abilities that are transformative and affect combat and traversability. Used as a gating mechanic.
- Little Buddies are much less powerful abilities, but should be very unique abilities unlike any others you have. No parts of the map should be gated by having these, but some areas or lore might be soft-gated by them.
- PJs are like Little Buddies in that they are not transformative the way Toys are, but unlike Buddies, their buffs should enhance some existing ability you already have in some worthwhile way.

Okay, so with that context in mind, let’s talk about how I create a specific pair of PJs. Specifically, we’ll go through the process I went through in making the Dino PJs.

I want each Guardian to have a pair of PJs that matches them, and since there is a Dinosaur-themed Guardian, that means we will have the opportunity to get some Dino PJs at some point in the game. So the first thing to do is to pin down a visual identity for these PJs…

### **The PJ’s Look 🎨**

PJs take advantage of the dynamic sprite re-coloring system I’ve built for *Little Nemo* (read more about that [here](https://diesoft.games/2022/06/13/nemo-art-pipeline.html)), so we need to come up with a palette that somewhat matches Gertie’s look.

Since Gertie is herself using the dynamic sprite coloring system, let’s first just see what happens if Nemo simply uses Gertie’s color scheme when wearing the Dino PJs.

![img](https://i.kickstarter.com/assets/050/996/174/f3a5cd8b57e039511f2653e9248bea4c_original.webp?fit=scale-down&origin=ugc&q=92&v=1758892475&width=700&sig=p9A0I6ZD1W8oqC8O7%2FfGwsTDSu0GJEe8wA4n1lPeXe0%3D)Nemo simply using Gertie's color scheme directly with no modifications. Not quite right.

Okay, that doesn’t work because we’re using Gertie’s skin tone and the hair color is a bit dark and desaturated, but the color of the pajamas is a good start. So we’ll make a new Gradient Map based on that as a starting point and start making some adjustments.

![img](https://i.kickstarter.com/assets/050/996/184/3b45948a4a437aeefc3e44e47bff7e59_original.png?fit=scale-down&origin=ugc&q=100&v=1758892524&width=700&sig=O6dtx9wa0yFlgN%2FzmLbFxxAFXQIpiL2gjEBEIdQEnj4%3D)A color scheme is a series of gradients that our shader uses to re-color the sprite as needed.

Something we’ll need to keep in mind during this part of design is we want each pair of PJs to be very visually distinct. Since I know Nemo will also have access to Frog PJs, and I expect these two to both be primarily green, then I might bring those PJs up as well and do some side-by-sides to make sure they’re sufficiently different from one another.

![img](https://i.kickstarter.com/assets/050/996/213/2571767c8e146aa72870573216d75e54_original.webp?fit=scale-down&origin=ugc&q=92&v=1758892687&width=700&sig=OsKYPuPb%2FPcBw130PWcmDoPMwXvuPf2dAmCoC7IzWLg%3D)A side-by-side of the Frog PJs next to the Dino PJs so I can make sure they feel visually distinct enough despite both being primarily green.

And after we’ve got something that looks nice, we’ll also just make sure that we still like it in a variety of lighting conditions. And if that all looks good, we’ve got the look down!

![img](https://i.kickstarter.com/assets/050/996/441/e1ab062dfc9edcff9dac6458828dcaab_original.webp?fit=scale-down&origin=ugc&q=92&v=1758894009&width=700&sig=uZy6oQ97ixBowgSlcHJj5CmBhx2mRfA%2FgrEStFlEPeg%3D)And here's how the PJs are looking in a variety of lighting and background contexts.

### **The PJ’s Ability Buff 💪**

Now I need to design a buff for these PJs. I have a PJ doc with all the PJs in there that have already been designed, so I can go in there and see where there’s room for a new ability buff. Some PJs will buff Nemo’s innate abilities (for example, Nemo can of course innately collect candy by walking over it, but the Sweet Tooth PJs allow candy to be pulled towards Nemo from a distance) and some will buff the abilities gained from new Toys (the Yo-Yo Master PJs for instance will allow you hold the attack button down to keep your yo-yo out when you attack).

So while working on the Dino PJs, one of the abilities that had no buff was the Bubble Wand. This toy grants you the ability to create a protective bubble around yourself which will protect you for one hit. Since you can’t move at all while bubbled, there’s some room to make this even more powerful for players that like strong defensive options.

Meanwhile, there was another thought that had been bouncing around my brain at some point, which was a) how much I like the Tanooki suit’s ability that allows Mario to turn into a statue in *Super Mario Bros. 3* and b) how that is actually a lot like the Bubble Wand’s ability. So with these things in mind, I decided a good ability for the Dino PJs would be to upgrade your Bubble Wand ability with the ability to turn into a statue, making you completely impervious to enemy attacks (instead of just a single attack). That kind of ability buff feels in line with the level of power that other PJs have and also is just kind of a fun nod to a game I love.

So now we’ve got the buff designed and we just need to actually make it all work.

### **Engineering the PJs 🛠️**

So let’s get into the details of everything I need to do to make these PJs actually function. There’s a step that I already did earlier, which is to add an entry to our PajamaType enum for our Dino PJs. And when we were working on the color scheme, we also would have made sure to wire up PajamaType.Dino with the color scheme we developed.

Since this is a modification of an existing ability, we’ll need to do two things: 1) allow for the Bubble Wand to also work in such a way that it will no longer pop when hit and 2) Ensure Nemo’s Animator knows that we should be using this version of the bubble ability because we’ll need an entirely different animation (and speaking of, we’re gonna need to draw a statue sprite for this animation).

Adding this feature to the bubble ability is relatively easy: we’ll create a StatueDefense component that we can tag the player entity with when they have this buff enabled, and it will piggyback on the existing Defense logic that the Bubble Wand's default ability uses.

![img](https://i.kickstarter.com/assets/050/996/495/3e26a1b1b0f66e252f6d44f21f974120_original.png?fit=scale-down&origin=ugc&q=100&v=1758894333&width=700&sig=E6jTJTjjs8ZeY4p87vsMsV6d3aA1ngcjU3peYB5tSMU%3D)Here's a look at the system that piggybacks on the existing defend system and instead handles the statue logic

I only include that picture so you can see that it's not too much logic. This system is essentially just doing a few small things:

- Recess the player when becoming a statue (so we appear behind enemies instead of in front as we normally do.
- Remove the player's AITarget component (this will prevent enemies not just from hurting us, but from even trying to attack us)
- Make the player completely invulnerable instead of relying on the ArmorBox we normally use (which would get popped if hit)
- Emit an effect so that we can get some particles and a sound effect happening anytime we transform into or out of statue form.

For Nemo’s Animator, the bubble wand animation is controlled using our animationState parameter, and there is an integer value that corresponds with a defensive animation. So we’ll just add a new integer value for this buffed version of the defensive animation and make sure our animation system handles that based on the boolean we added to the Defense component above.

![img](https://i.kickstarter.com/assets/050/996/607/9fc1f86875571e345a7e068374341311_original.png?fit=scale-down&origin=ugc&q=100&v=1758894870&width=700&sig=uk88w7Agj5uyoTZhjav%2F2RWq1J7hNmELt1pKFVxMmXg%3D)Nemo's Animator now just has a single new state it can enter as highlighted here. We'll enter this state anytime our animationState parameter matches the integer value that corresponds with our new statue animation.

We’re almost there! Let’s draw that Dino Statue that Nemo will turn into. This should be easy because it’s only a single frame and doesn’t need to be animated. I got João to help out and do some sketches for what this might look like first

![img](https://i.kickstarter.com/assets/050/996/633/9a0036dba47ebc416316fbc607fb7776_original.png?fit=scale-down&origin=ugc&q=100&v=1758894978&width=700&sig=sJliTa94ZbTQbs6AfAUTIM5M9n8scP0XXSFJxv7rm3M%3D)Some very cute sketches from João depicting Nemo as a dino statue

But they weren’t quite what I was after. I really wanted some kind of a staff in Nemo’s hand too. Something about the staff that the Mario statue holds in *SMB3* just sticks with me in a way that it wouldn’t feel right without something similar. Cid had the great idea to use a crossing guard sign, which is thematically fitting since the Dino PJs will be acquired in Nightlight City. So with that help from Cid and João, I came up with this sketch.

![img](https://i.kickstarter.com/assets/050/996/693/7b68b241f5eeb3acb7d25750b6eb031a_original.png?fit=scale-down&origin=ugc&q=100&v=1758895195&width=700&sig=%2FfQEs0ISKbd9fy3vYmTgOEsXot%2F7eBMLY%2FvQYAKHazg%3D)My attempt at combining the ideas I liked into one dino statue concept sketch

Since I'm happy with this one, now I’ll draw a more finalized version of the sprite, bring it into Unity and make sure those new animations for Nemo use the statue sprite. And then we have a new pair of working PJs. And here they are:

![img](https://i.kickstarter.com/assets/050/996/741/741e190d656d54e87f358055427026d7_original.webp?fit=scale-down&origin=ugc&q=92&v=1758895414&width=700&sig=DQdugP4EzgX6VFqcnRJWyBuJD8i1nVgoU3O%2BotQJlM0%3D)The Dino PJs in action! I'll probably continue making minor tweaks, I don't love the transformation smoke effect right now for instance, but it's all working.

And that is a full look at how I’ve made a pair of PJs for Nemo from start to finish! Getting these PJs to the player is simply a matter of drawing a dresser into the world and selecting the PajamaType.Dino enum option, or making it available by using a simple macro via the dialogue system (if we’re purchasing them from an NPC). But I won’t say too much more about that, you’ll have to find these PJs in the game yourself when you play! 


# What I worked on this Month 💪

And as usual, while a lot of what I worked on can’t be shared now, there are a few new things that I want to show off. And I think these things are all fairly spoiler free. This is all stuff you’ll discover even just by playing the demo, so the same warning as above stands, unless your spoiler-free diet is *very* strict, I think you’ll be fine to read along.


## Lucky Coins UI 🪙

This is something I’ve talked a bit about before and I think I even showed off some mock-ups a month or two ago, but the Lucky Coins finally have a proper UI presence in the game. This means you can always see how many Lucky Coin Shards you have on the Status Screen:

![img](https://i.kickstarter.com/assets/050/996/914/7f8478b1f8e9ba4ac1aaee220db67f92_original.webp?fit=scale-down&origin=ugc&q=92&v=1758896012&width=700&sig=T7eKZ1wqyiWfE35vMJ9WYNwLdMxK8zlwXxkgcquRvLo%3D)The status screen showing a player with 5 shards, 4 to complete the wooden lucky coin and 1 piece of the silver coin. 

And we also now have an announcement when you collect a shard, as well as one for when you collect four to form a new Coin, along with a fun, little flourish showing it off.

![img](https://i.kickstarter.com/assets/050/997/063/acc258ab2984e1124f944ec2230764e8_original.webp?fit=scale-down&origin=ugc&q=92&v=1758896511&width=700&sig=NWWAeMqQktJXtwppMnKViy8l%2F6uqCRwTSsf%2Bv%2F4HbRY%3D)Nemo collecting a fourth coin shard and completing the first of three Lucky Coins.

I had to do a little bit of cleanup and refactoring of my announcement logic while I did this because there were some other item collection announcements that needed to be made which we didn’t have before. Now you’ll get proper announcements when collecting Music Track Cassettes, Artbook Page Unlocks, and Blue Moons (including a different announcement when you collect enough to have unlocked Fast Travel for that domain).


## Powerline to the Professor 📞

Last month I mentioned this, but it wasn’t in any state to actually show off, so I thought I’d do a follow-up since this is all done now. Throughout Slumberland you’ll find these Kiosks where you can get a free tip (just something simple you might not already know) or you can pay for guidance help if you’re stuck or even buy a secret tip.

![img](https://i.kickstarter.com/assets/050/997/135/928f488fa5861d6ca8a4920f0b9c28a5_original.webp?fit=scale-down&origin=ugc&q=92&v=1758896796&width=700&sig=dRrhIXmMLHMCXZ2iI3RZbP5BKK0tW7xzfxemATFFdt4%3D)If you find any of these kiosks in Slumberland, make sure to check them out. Each one gives you a free tip and the opportunity buy secrets or get help if you're stuck.

## Attract Mode 📺

I added the “attract mode” to the main menu earlier this year, and I believe I shared it back then. This is where we’ll be showing off an intro animation to help set the scene if you don’t press anything while sitting on the main menu. Previously it just faded to black and played a gameplay trailer. But I decided it would be more fun if we instead made it look like the attract mode is playing on the TV in Nemo’s bedroom, and also I’ve started work on editing together the final video that will play here, incorporating the fully animated bits. Here’s a quick look at it:

![img](https://i.kickstarter.com/assets/050/997/208/e223541753063e30d18f38997edf6a7c_original.webp?fit=scale-down&origin=ugc&q=92&v=1758897069&width=700&sig=yjm7TNxBG4kEm36hfU1BBhjcMHiB1x2vxjODToq%2BbpY%3D)The new transition into the attract mode video zooms in on Nemo's TV.

So it’s been a very busy month, as I’ve also been working on lots of hidden stuff that is either too mundane to show or is top secret, but we’re on track to get things playtested to make sure the game is as fun as it can be.


# That’s it for this month 👋

As always, thank you to all of you Sleepyheads that read all the way to the bottom here and chime in with supportive comments, questions, or suggestions for other topics to cover in these updates. Thank you, and I’ll see you all again in another month (if I don’t see you before then in the Discord, which you should join if you haven’t already).

-Dave

![img](https://i.kickstarter.com/assets/050/997/180/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1758896952&width=700&sig=YBmLXcBimhZI9ULLhzynq6iOZJVADuDOX%2FnmPpvHBQY%3D)
