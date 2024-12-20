---

title: Monthly Update 25
description: Crystal Caverns Gimmicks and NPC Set Pieces
image: /assets/images/devlog/2024-07-26-preview.png
---

## Monthly Update #25 😎

Welcome back, Sleepyheads! This month has breezed past as I got a bit of vacation time in and got to see friends and family, so this update might not be quite as long as some others, but I do want to show off some really cool stuff we’ve worked on and touch on how things are coming along.
 

## Timeline 🕰️

I’ll put this at the top because all of the updates are going to be very spoilery this month. There are lots of NPC details, but also some gameplay mechanics spoilers. If you're skipping over the spoilers though, I recommend scrolling to the bottom to check out some of the Kickstarter campaigns I linked to because they all look great.

In our May update, I broke down three areas that I see as the major things that need to get wrapped up:

- level/world design that remains
- enemy and boss implementations that remain
- environment design for the last two domains

The level and world design still has plenty of work, and is one that tends to get pushed back because I like to make sure the environments are fully fleshed out with all the gimmicks available before we really focus in on and hone the gameplay-identity of a domain. Right now the level-design for the **Mushroom Marsh🍄** is being finely honed in on with later domains blocked in and needing that fine detail work.

For enemy and boss implementations, the bosses are something I will probably tackle later, and I’m focusing mostly on enemies (and gimmicks alongside them) because those heavily inform the gameplay identity of the domain they appear in. And that in turn informs how the boss should play. This month I’ve been working on the **Crystal Caverns✨** enemies (more on that below), but we still need to get them grayboxed in for the **Nightlight City💡** and **Valley of Silence❄️** domains.

The third point of the environment design we’ve almost finished. This month we got the Crystal Caverns background polished up and finalized and now just need to do some work on the tilesets. The **Nightlight City💡** environment art, which you might have seen sketches of in last month’s update, is in the process of getting cleaned up and colored. This is still in progress, but it’s nearly wrapped up.

So generally speaking, we’re focused on getting the last of the enemies and gimmicks grayboxed, building “levels” that find the most fun with those mechanics, and then finally tackling the bosses that remain.

Okay, so with that context set, let’s take a look at what got done this month!
 

# Spoilers Abound ❗🙈❗  

## The Palace Gate 🔒

So this was a fun one to finally get in the game. I actually worked on most of the logic for this a couple months ago (I’m often working on stuff that I can’t share here because there’s nothing really interesting to actually “show”) but now it has all the sprites and animation it needs. The Palace Gate is the thing/place in the game that represents your ultimate goal as you make your way through the game. If you’ve played *Super Metroid* before, it’s akin to the statue depicting the bosses you need to defeat to reach the end-game area.

![img](https://i.kickstarter.com/assets/045/857/708/13ff75dced87e8f7ba8df098b79ee03a_original.png?fit=scale-down&origin=ugc&q=100&v=1722001535&width=700&sig=TLlLD%2FzheWFI7girdafq6aid0wk8Gxe%2Bp8ziwW4c9vg%3D)You can see your progress rescuing the Guardians, and until you've rescued them all, this large gate remains locked

You’ll be gently guided here quite early in the game (there’s a path to the Palace Gate from **Gumdrop Gardens🍭**) and it helps establish that your goal is to enlist the help of seven Guardians of Slumberland to gain access to the Palace to find out what happened to King Morpheus.

![img](https://i.kickstarter.com/assets/045/857/725/1b14dbcb08d953fd6f0e35a1fd54c1c2_original.png?fit=scale-down&origin=ugc&q=100&v=1722001662&width=700&sig=oBliVvAts7tTXKK%2FwPwXKU18%2Bxm2jybO5tmfi4nw34g%3D)A screencap of a similar "gate" in Super Metroid which inspired this design. All four bosses must be defeated to advance.

Having a progress gate like this does a few things for us:

- It reinforces the players overarching goal, which they’ve only otherwise been introduced to in dialogue. It gives us a physical thing in the world that the player can see which helps with their understanding of why they're doing the what they're doing.
- It prevents immediate access, allowing us to have an end-game area designed around having **all** of the abilities (unless someone were to find a very well hidden back entrance into the Palace 🤔).
- And finally, it gives us a moment of awe when we’ve rescued all the Guardians and arrive at the Palace Gate.

![img](https://i.kickstarter.com/assets/045/857/926/80d57066b35770aa1cbc6fadb7dd6e1b_original.webp?fit=scale-down&origin=ugc&q=92&v=1722002915&width=700&sig=dLH61I766AX8Grhr4Ys34KXCcBNijY3ghfpY1db%2BZPk%3D)Nemo opening the Palace Gate after rescuing all of the Guardians of Slumberland

## Crystal Caverns Enemies and Gimmicks ✨

This is all sketched in for now, but I wanted to talk about the general gameplay ideas for the Crystal Caverns and show off what’s been grayboxed in already.

Our central ideas revolve around toggles. This is a generic idea that is already used in various places throughout Slumberland (gates are toggles for instance), and simply refers to things which we can turn OFF and ON. In this area we’re extending it to hazards and navigable terrain that can be toggled, as well as interesting ways to toggle them.

Here are a few ideas and how they interact:

- **Crystal Toggles**: these will toggle their on/off state anytime they are hit by something.
- **Toggleable Hazards**: terrain that will cause damage to anyone touching it when it is turned on.
- **Scarabiner Shells**: these are shells that come from some of the enemies in this area. They behave a lot like the shells in Super Mario Bros (you can throw them and they’ll continue moving and bouncing off of walls and objects) but you can also ride them.

![img](https://i.kickstarter.com/assets/045/858/063/af4f34d987790543a6e778a242352bd0_original.webp?fit=scale-down&origin=ugc&q=92&v=1722003742&width=700&sig=Ata2Qyb22bdRkjFTUfrZwSGKViH2TaLcQr9xzCnf4hk%3D)A quick example of the sorts of interactions we can achieve with these gimmicks

But there are other gimmicks to combine with these. For example, here is a **Timer Toggle** (which you can pluck out of the ground to make something toggled on for a short period of time) combined with **Toggleable Monkey Bars**. You’ll have to move fast to make it!

![img](https://i.kickstarter.com/assets/045/858/383/d247d3e183e678b3a9ac98338645973b_original.webp?fit=scale-down&origin=ugc&q=92&v=1722005636&width=700&sig=E6hbTz%2FcjFXtsrHfYe4PdKynQtLRtSiJADn5k3VkYDg%3D)This timer toggle has visible and audible indicators of the remaining time before it turns off.

These will combine with a few other ideas, and seeing as you’ll find the **Grapple Yo-Yo** in this domain, you can expect to see some explorations of how these toggle ideas interact with the **Grapple Rings**.

Most of the enemies in this area are various forms of the Scarabiner (the Dizzy, Crystal, and Flying Scarabiners), which is a beetle that has grown out of a design idea that appeared in the original Kickstarter campaign as the Dizzy Beetle, but wasn’t quite fun or right for the Dreamswept Plains (which is where it was originally planned to appear).

![img](https://i.kickstarter.com/assets/045/858/414/b602237ec27c0d0329e1f46bcfa29d4d_original.png?fit=scale-down&origin=ugc&q=100&v=1722005792&width=700&sig=e%2B3qxbqvhEEeCgn0wcU702wWcRUNVX%2F4D6kJ3q0Lw4g%3D)Here's the image that appeared in the Kickstarter.

The original idea for this was an enemy that hovered and then dive-bombed the player, but it wasn't very fun. So this visual idea has been reworked for use in the **Crystal Caverns✨**.
 

## NPCs and Set Pieces 🖼️

I showed off some of the set pieces we were working on in our update from two months ago, but we’ve been getting all of those actually imported into the game and we have almost all of our NPCs actually available in the game with some placeholder art sketched in until we get the art all finalized.

Here are some of João’s sketches of the Set Pieces accompanying each of the Guardians that we haven’t already seen:

![img](https://i.kickstarter.com/assets/045/858/462/a256a2864aef2971b7625f2c2424de6f_original.png?fit=scale-down&origin=ugc&q=100&v=1722006088&width=700&sig=TLfS89XT92%2B%2F4AkajY6iMo2FF21Yr4L6ueetNdSGMX8%3D)Set Piece Sketch for Jules, Guardian of Gumdrop Gardens

![img](https://i.kickstarter.com/assets/045/858/472/a6f9a33a0860a5e9e355946a89b8e2ee_original.png?fit=scale-down&origin=ugc&q=100&v=1722006190&width=700&sig=c11Khi7nw6%2BUzlw1WUua4Gap2al02vgH2gfdAygiqXs%3D)Set Piece Sketch for Wilfred, Guardian of Mushroom Marsh

![img](https://i.kickstarter.com/assets/045/858/474/17279b90d18fdc8b9e5d38e64190e347_original.png?fit=scale-down&origin=ugc&q=100&v=1722006206&width=700&sig=9oM7qmdjzL8hHkdB2A%2FlTApLkQzm6Cwj4NK16NZP5fQ%3D)Set Piece Sketch for Alex, Guardian of Haunted Hollows.

![img](https://i.kickstarter.com/assets/045/858/483/2c9964c7ce83b24029db07a6ac754096_original.png?fit=scale-down&origin=ugc&q=100&v=1722006240&width=700&sig=gmU3%2FrLg8zOJpB249vrklf1sRJo6XCSc0cqYCcQBE8Y%3D)Set Piece Sketch for Oliver, Guardian of Crystal Caverns

![img](https://i.kickstarter.com/assets/045/858/485/51a47f61bc220747a4a2cc1125d4ebd2_original.png?fit=scale-down&origin=ugc&q=100&v=1722006254&width=700&sig=91E%2FAul9aBu0NWG%2BPUOuP%2F%2BnrjaMxunTg3rIPlLWIkA%3D)Set Piece Sketch for Gertie, Guardian of Nightlight City

![img](https://i.kickstarter.com/assets/045/858/488/f6c9a8f40d76182ef5eba5c67c928839_original.png?fit=scale-down&origin=ugc&q=100&v=1722006272&width=700&sig=HHToDdgz5XnMh27qdGEiTH8nKlxnedEnRe%2BEpLcMI0A%3D)Set Piece Sketch for Winsor, Guardian of the Valley of Silence

These help anchor the characters into the world and also tell us a little about each of the Guardians' personalities.

I previously showed off a bit of the art for two important NPCs, Bon-Bon and Captain Sweetbeard, but those two are finally in the game and functional in a first-pass. I don’t want to spoil too much about Bon-Bon because I think that’s a fun and mysterious character, so here’s just a quick peek at Nemo interacting with Sweetbeard with some placeholder dialogue just to show generally how things work with this character.

![img](https://i.kickstarter.com/assets/045/858/597/d8247394eca6eed6baa897180bc72d9d_original.webp?fit=scale-down&origin=ugc&q=92&v=1722007070&width=700&sig=uwwAIw9I%2FUXNFVT7UGS%2BxEwfC7QI65btMKvhlt%2F8FA0%3D)Captain Sweetbeard's dialogue logic for storing and retrieving candy with him is all in place with this first pass.

Captain Sweetbeard will "help" you out by collecting any candy that you drop when you wake up. Of course he takes a steep cut for himself, but he'll hold on to the rest for you to come collect when needed. And you can even safely store some candy with him if you're worried about losing it. Players will find Sweetbeard in the first domain if they start exploring a bit more. Until we meet Sweetbeard, we might think we've lost all of our candy anytime we've been woken up, but he's been holding onto our portion of it for us.
 

# Back to Spoiler-Free ✅🐵✅  

Okay if you skipped over the spoilers, there’s not too much else to share about Nemo progress, but I do want to point you towards a few Kickstarter video game campaigns that are ongoing right now and could use your support:

## Kickstarter Friends 💚  

### [Sunset Hills](https://www.kickstarter.com/projects/cottongame/sunset-hills-a-wholesome-hand-drawn-puzzle-adventure)

This is a beautifully hand-drawn and wholesome game. While they’ve met their funding goal, I would love to see this game get a bit more love before the campaign **wraps up in just a day or two!**

![img](https://i.kickstarter.com/assets/045/858/680/90bb1eafc860d27f0102d168047e60fc_original.png?fit=scale-down&origin=ugc&q=100&v=1722007621&width=700&sig=4PBi6SJ1BYvquwBGkSE00rfycOTIroetU2fJlB4s5aY%3D)

In Sunset Hills, players join Nico, a former soldier, on a heartfelt journey through a beautifully illustrated, Victorian-inspired world. Explore unique cities, solve intricate puzzles, and uncover mysteries, all while enjoying the company of adorable puppies.
 

### [Tiny Garden](https://www.kickstarter.com/projects/aonorte/tiny-garden-build-your-own-magical-garden-inside-a-90s-toy)

Well if the throwback toy nostalgia of *Little Nemo* pulled you in at all, you probably should take a look at this unique take on a farming sim. It just looks so adorable and fun.

![img](https://i.kickstarter.com/assets/045/858/713/84a3ad0ab958b03f6c1d8c89b6a99a6b_original.jpg?fit=scale-down&origin=ugc&q=92&v=1722007790&width=700&sig=4teSZAIuHzpksnaW22r0ZFCoHXbLPSrS%2FMSQKR4rdYQ%3D)

Tiny Garden is a **tiny farming and easy-going strategy game** inside a tiny toy from the 90s. Plant, grow, and trade your vegetables for new plants and items to customize your toy set.
 

### [koROBO](https://www.kickstarter.com/projects/tinywonderstudio/korobo)

Fans of Chibi-Robo should definitely check this one out. It looks like a cute and wholesome adventure from some of the original team that worked on Chibi-Robo!

![img](https://i.kickstarter.com/assets/045/858/740/7a6e7adaf6bd3beb97f370050d716393_original.png?fit=scale-down&origin=ugc&q=100&v=1722007960&width=700&sig=%2B9CBn1kwpxtlLihcKIOyWmZ5Q9Kl1xuBzFi0fIl0%2Bsc%3D)

Traverse around the family home, clean up mess, and solve problems wherever you find them—a big ask for such a tiny hero! Be careful, though! koROBO’s battery is limited, and performing tasks will drain it even faster.
 

## That’s all for this month! 👋

Well it was a short month, but I think despite that we still made some great progress. Thank you so much for reading and following along. I hope all of you Sleepyheads have been having a great summer so far, and we’ll see you next month!

\- Dave

![img](https://i.kickstarter.com/assets/045/858/744/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1722008002&width=700&sig=ybeuw31JATVAGMDu43qmjrzhPjjZ4UU%2FQE%2FEYMLChQw%3D)
