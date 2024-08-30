---

title: Monthly Update 21
description: Nightlight City, Lucky Coins, and Mushroom Marsh enemies
image: /assets/images/devlog/2024-03-29-preview.png
---

# Monthly Update #21🌱

Welcome back, Sleepyheads! It’s time for another monthly update on the progress of *Little Nemo and the Guardians of Slumberland*. So let’s take a peek at some of the fun stuff we’ve been up to this March. 🌱

# Spoilers Abound ❗🙈❗

We’re gonna jump right into spoiler territory, so if you don’t wanna see concept art sketches for a dream domain or some details about a new Little Buddy, avert your eyes.

## Welcome to 💡Nightlight City💡

Last month I showed you some the early sketches for the Crystal Cavern, and this time I wanted to talk a bit about our city domain. This domain was firstly inspired by Winsor McCay’s common setting of early 20th century New York City, which you might be familiar with when Nemo’s bed whisks him out of his bedroom and out into the city:

![img](https://i.kickstarter.com/assets/044/515/478/bee77aa519346ead11543773181f1af0_original.jpg?fit=scale-down&origin=ugc&q=92&width=700&sig=dwNY8VJL%2FQsq%2BNq3Gs70NpYF%2FGnqE6gJjoweoBWb1XM%3D)Nemo’s bed goes for a walk in this original “Little Nemo” comic strip

Our take on *Little Nemo* is set in the latter half of the 20th century though (there’s no specific date for when it takes place, but the 80s and 90s references in Nemo’s bedroom and Slumberland will definitely make it feel of a certain era), so I wanted this domain to have a bit of an anachronistic mix of early 20th century with futuristic city visions.

![img](https://i.kickstarter.com/assets/044/515/483/c578737ee19daa55a59cc3670811d4c5_original.png?fit=scale-down&origin=ugc&width=700&sig=IJKXvMQvTDOi5032dLhMqyVNv%2FnmSnmUxxe039f6WAQ%3D)Concept sketch exploring color and mood for Nightlight City

João’s has sketched some really fun details as well, and I’ll save most of it for when it’s actually finalized and built on in the game as a proper environment, but here’s an example of how the designs take the early 20th century style and apply some child-like whimsy to it as:

![img](https://i.kickstarter.com/assets/044/515/490/77928548de00355af60f58682ff2d30e_original.png?fit=scale-down&origin=ugc&width=700&sig=cWsd13bSFZscr9sRJSjegzu3iKs%2FqaM0QYM6Ai9XUHY%3D)The buildings in the background of Nightlight City incorporate a lot of the common visual motifs seen in the rest of the game, in fun and silly ways.

In Nightlight City we’ll find a new character I haven’t mentioned before, Silas (aka the Professor). Silas is a little bit older, and is a hardware hacker capable of building some pretty cool stuff. From talking with Silas we’ll find out a bit about this area’s Guardian, Gertie, and how she’s gone missing. Perhaps if we provide Silas the right parts, he could build us a new Little Buddy…

![img](https://i.kickstarter.com/assets/044/515/493/da3cfb988222503f4f1bf43b97faca78_original.png?fit=scale-down&origin=ugc&width=700&sig=aG35bpM0XY6ZOp%2FRo8siTEXR8rP6yI5s2oSgLWWvwMQ%3D)Concept sketch of Silas, aka the Professor

And while exploring Nightlight City, we’ll primarily be exploring gimmicks related to moving platforms. This month I’ve been doing some fixes in the physics system to ensure how we interact with moving platforms feels and works perfectly.

![img](https://i.kickstarter.com/assets/044/515/551/539db8cf88d0cd4930f40611eec470f1_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=KSPsao6cFKfRbZ4gvD%2B6Wp0qkmofYWbhZBLJGYJwMCc%3D)Here’s me toying with some bouncing platforms Nemo needs to use to cross a hazard.

Getting “physics” right in a platformer is one of those things that can be very tricky because you need a certain level of predictability that is modeled after more normal physics, but you often need to create special scenarios to make things feel like you’d expect for a 2D platformer.

### A Quick Nerding Out About Game Physics Aside:

In the case of these moving platforms for example: you can see that they impart a bit of backwards momentum to Nemo. So anytime you’re on a surface that is moving, you will move along with it, and when you leave that surface, you’ll continue in that direction with the expected momentum. This makes things feel great when you just walk off the side of a moving platform. But when you jump, pass through (down + jump), or pogostick off of moving objects, we want different behaviors for each of these. In the case of jumping for instance: if we’re traveling downwards, we’ll simply cancel out any downwards momentum imparted from the moving surface as soon as we jump (resulting in the expected standard jump height), but if the surface is pushing up upwards, we’ll take on some portion of that momentum (resulting in a higher, boosted jump).

So expect fun and challenging platforming in Nightlight City. Some of these ideas may get incorporated into earlier domains possibly and later domains definitely, but this domain will focus on them as its primary gimmick exploration.

### New Toy Acquired!

In Nightlight City, we’ll find the Cape toy. I won’t go into detail here since I’ve already shown it off in older posts [here](https://diesoft.games/2023/02/24/nemo-monthly-update-8.html) and [here](https://diesoft.games/2023/03/31/nemo-monthly-update-9.html), but it allows you to slow-fall as well as do a 9-way directional air dodge which can be used as a sort of double jump. In those posts I just linked, I also show off how you can use the cape to do a sort of wavedash for a speed boost, so you should check those out.
 

## Lucky Coins 🪙

Something I haven’t touched on much, if at all, is **health**. If you’re used to most other Metroidvania games, it might seem a bit odd that Nemo only has 3 hearts, with no way to expand that amount. Though thinking about it more as a platformer, the 3 heart maximum feels more appropriate. The goals of our health system are:

- Keep damage numbers as small integers,
- and allow for damage-reduction progression,
- but without making early enemies meaningless when returning to earlier domains after you’ve progressed.

So in *Little Nemo*, you will only ever have 3 hearts, and all attacks will always deal a minimum of 1 damage (you can never mitigate an attack down to zero damage). This means a humble Burrchin from the Dreamswept Plains could wake you up in three hits, even if you have full damage mitigation. But later game enemies can deal 3 damage in a single hit, which allows us to make exploration of those areas possible, but very dangerous until you’ve acquired some damage mitigation.

So how do you get damage mitigation? Well, perhaps you noticed a conspicuously empty portion of the status screen? That’s where your Lucky Coin collection will soon go.

![img](https://i.kickstarter.com/assets/044/515/587/436a82f03cd44f873510b04bfb68d001_original.png?fit=scale-down&origin=ugc&width=700&sig=flC2IPMtOP1uTaytpVTH9E%2BaEmoC1fWXw%2BfA4NqdF2I%3D)Mockup of Lucky Coin UI on the Status Screen

Lucky Coins each bestow 1 damage mitigation and, you can collect 3 of them in total. You’ll find them in pieces, so each time you manage to find 4 pieces, you’ll get another level of damage mitigation. So once you’ve got your first coin, now enemies that previously dealt 2 damage, will only deal 1.

The general structure of enemy damage in each domain is:

- **Dreamswept Plains, Gumdrop Gardens, Mushroom Marsh**: 1 - 2 damage from enemies
- **Haunted Hollow, Crystal Caverns, Nightlight City**: 2 - 3 damage from enemies
- **Valley of Silence, Palace, [redacted]**: 3 - 4 damage from enemies

(NOTE: [redacted] refers to the domain I've mentioned before that I won't be spoiling)

So here’s an example of how this system is intended to manifest choices for the player:
Early on, you’ll likely find an entrance to the ❄️**Valley of Silence❄️** from the ☁️**Dreamswept Plains☁️**. This is intended to be a domain you'll tackle much later, and that will be reinforced when you find that the enemies there wake you up in a single hit. If you’d like to push those limits though, perhaps you’ll find something interesting in there that you’ll appreciate getting earlier than normally expected, or you can take it easy and just wait to go there after you’ve collected some **Lucky Coins** to make it more manageable.
 

## Communicating Damage 💬

I also made a minor UI change this month in addition to implementing this damage mitigation system: when you take damage, you’ll see how much the attack hit for. This might seem kind of silly and redundant, but I think it’s important to communicate when enemies are dealing more damage than you might anticipate. This becomes especially relevant if you’re wearing the default PJs which prevent you from being killed in a single hit if you’re at full health. With these on, I want it to be clear when a player is “saved” by the PJs, and this little bit of UI helps with that.

![img](https://i.kickstarter.com/assets/044/515/630/8bb6430e1b9a2ed4fcc2f4d291a56e12_original.png?fit=scale-down&origin=ugc&width=700&sig=wn3Uc0vIaO9yljDZO1fYj%2B%2BxKn31AStx6vOprn7zFwE%3D)Nemo taking double damage from the scary Gelatonne enemies in Gumdrop Gardens

## My Alien Monster 👹

When I showed this Little Buddy off briefly last month, it was all grayboxed, but functioning, so I just wanted to follow-up on this one so you can see as it progresses. We’ve got some line-art sketches in and I’ve been finding the exact scale for the sprites, and then it’ll just need to get properly inked, shaded, and colored.

![img](https://i.kickstarter.com/assets/044/515/644/f9741e299c7b4117b2dd596a048353ac_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=s0jl0at8En0TpnvEcGgjzL3qInfFZjEdcGbSo1hQCHU%3D)My Alien Monster following Nemo and eating some Burrchins 😋

## Turret-type Enemies and the Metronome 🕰️

I was working a lot on the enemies for the Mushroom Marsh this month, and there are a lot of turret-type enemies in this domain (that is, they fire some kind of projectile at Nemo). We already have enemies like that in the Gumdrop Gardens with the Bubblegum Machines that fire gumballs at you. But I wasn’t super happy with their implementation. The first pass at how to implement a firing pattern was just to have a local timer for each turret, which starts counting whenever that enemy gets spawned (which means each turret will fire based on some function of where it is placed and making it very difficult to impossible for turrets to coordinate in their firing timings). I wasn’t sure if this would be preferable vs some kind of a global timer because there are pros and cons to each, but ultimately having unique timers makes their firing feel a bit random despite being at regular intervals with itself.

So I built a metronome. This is just something that ticks at a specified BPM (I set it to 60 BPM for my default so that it will count a beat once per second). Importantly though, we can ask this metronome to tell us when every nth beat fires, or even every nth half, quarter (etc.) beat, as well as an offset of n beats. The result is that we can still specify our firing interval, but it will be coordinated on a global beat, which then allows us to have turrets “coordinate” attacks.

![img](https://i.kickstarter.com/assets/044/515/661/e4f7860968c15efd30de8f68deeb7547_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=z%2BifdxNYVKyB7GTJVAXFBo1VT9zgTikl3McEefbl5Yk%3D)This is a quickly contrived example which, though a bit mean, shows how turrets can leverage the metronome to coordinate and form firing patterns. These turrets are firing every 8th quarter beat, with offsets of 0, 1, 2, and 3.

In most scenarios, we will not be doing something like the above demonstration, but I’ve found just having turrets all firing at the same interval makes everything feel a little better and more predictable and just makes them a more fun enemy/hazard to engage with.

![img](https://i.kickstarter.com/assets/044/515/669/d130134e54e982de3511dd02538c2a20_original.png?fit=scale-down&origin=ugc&width=700&sig=X2wBHiRJPiChr33KIwOiRDggLs0Fh6oHMZpCwoMxGGw%3D)João’s concept sketch for the Mushroom Mortars that will fire spores at you.

We’re not limited to turrets for taking advantage of this metronome though. Another new enemy in the Mushroom Marsh is the Ramblecap. It’s the Marsh’s equivalent to the Burrchin (intended to be a relatively easy to dispatch enemy that isn’t much of a problem on its own), but it will occasionally get up and walk a short distance before sitting back down.

![img](https://i.kickstarter.com/assets/044/515/701/2058232c28bd667c2d46f44e3abb9be5_original.png?fit=scale-down&origin=ugc&width=700&sig=q3biOMJM1xjzf0bmDYXq58D3kLyWfG%2BCB81GBUFMNxI%3D)João’s concept sketch for the Ramblecap

Previously this would have been a unique timer similar to the turrets, but it just adds a bit of fun if any and all mushrooms on screen get up and move about at the same time.

![img](https://i.kickstarter.com/assets/044/515/705/e2466ad90e74799301c0c7654b6728c5_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=H7L8FjshXpeZTgS7lIUXchW4KsQ4WtNBYtbxiXSbwJ4%3D)A bunch of Ramblecaps with placeholder sprites all getting up to move at the same time.

And the above animation also shows off another new thing I introduced this month…

### Another Quick Aside to Nerd Out About Implementation Details:

We now have a concept of **orientation** for entities, which is one of the four cardinal directions. This allows us to stick things to walls and ceilings, while still taking advantage of existing systems. For example, the Ramblecaps have an extremely simple StateMachine, they are either Sitting or Walking, but when they’re walking they will have the MoveForward, TurnaroundAtLedge, and TurnaroundAtWall components. Which way “forward” is and what a “ledge” is can be informed by the orientation of the entity. We also use this for our turrets in the Mushroom Marsh so that they can be growing off of walls and ceilings, and the way in which they fire can respect their orientation.
 

## Timeline to Launch

Continuing with my trend of touching on this each month, I wanna update you all on where I’m at in my plans for the timeline. My current timeline for getting all the content into the game was to have that done early summer. I knew that was a bit aggressive, but as we get closer it becomes much more clear that the summer goal isn’t feasible. Once we do get all of the content into the game, I will need quite a bit of time to do a lot of post-production work. There’s a lot that goes into just the release phase of a game: at the bare minimum it needs to be QA’d with lots of bug fixing, there’s the work of porting to Switch (which is essentially performance and optimization work to target a less powerful device), and there will need to be a lot of coordinating and planning as part of the marketing of the game so that when it does launch there will be plenty of people out there ready to check it out. And we’re trying to do all of this without the help of a publisher, which means I need to be very conservative with my approximations about how much time all of that will take since I don’t have the experience of having done all of that yet. So ultimately that means, if we’re not going to get all of the content into the game by early summer, the likelihood of getting the game out this year drops quite a bit. It’s not out of the question: I could possibly target a more aggressive post-production phase as well, but I don’t want to botch the launch, so ideally I have plenty of time with a “finished” game to iron out any and all issues all while still having time to focus on marketing the game.

So I’m still not ready to give you a date yet, and it will still be a bit longer before I can, but I hope this helps paint the picture of how I’m thinking about the full timeline to launch. In the meantime, I’m still just going full speed ahead on enemy and boss designs to get the entirety of Slumberland populated and playable.

I'm sorry I can't share a date yet, and that it's still a ways out. I know if you're reading this far into the post you're probably really excited for the game. Just know that I am probably more excited than anyone for the game to be released and I'm working every day to get the best possible realization of this project into your hands as soon as I can.
 

## That’s all for this month! 👋

Once again, thank you for making it all the way down to the bottom of what ended up being another fairly long post. And also a quick plug to join the [Discord](https://discord.com/invite/9NymgSJAVp) if you haven’t already, it’s great to be able to get direct feedback/questions/conversations with all of you Sleepyheads.

Until next month!

-Dave
