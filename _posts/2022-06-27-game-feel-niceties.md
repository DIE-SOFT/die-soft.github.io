---

title: Game Feel Niceties
description: Taking a look at things like Coyote Time and Collider Squeeze
image: /assets/images/devlog/2022-06-27-preview.png

---

# Game Feel Niceties

Welcome to another update! Before I get into the devlog, I wanna share some updates:

![img](https://i.kickstarter.com/assets/037/778/884/40654f7ed2d43940abf079486e68f868_original.png?fit=scale-down&origin=ugc&width=700&sig=2azg%2FSNdP4x9vtTVjydcbJ404twoabxMPwD9FvIkd7A%3D)

*We successfully collected enough moons to unlock* ***Reward #1: the Design Stream***. I’ve scheduled that for this **Wednesday at 11am EDT**. It will probably go to roughly 1pm EDT, but I’m hoping we’ll get lots of questions to answer and if we run over, I’m happy to keep talking game design/game dev. I’ll be streaming from our [Twitch channel](https://www.twitch.tv/diesoftgames).

We also collected *one more* moon today so we only need two more to unlock **Reward #2: the In-Game Instruction Manual**. As always, you can help out by joining the [Discord](https://discord.com/invite/9NymgSJAVp) and doing an introduction to gain the “Member” role, following us on [Twitter](https://twitter.com/diesoftgames), by backing the Kickstarter, or just by spreading the word.

![img](https://i.kickstarter.com/assets/037/778/896/d8c1e575d93bbabe61150105f5fd2816_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=KkpcMmnZAGWMfBaDurxdSFjl9HQj%2FRXGYvWv%2BGV4CcY%3D)

![img](https://i.kickstarter.com/assets/037/778/899/59ed8893d15576c048b1248c98bb618e_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=ZZUVdMaiBnRUmFg5k8LQdOCtNpovTaeLG%2BtGlMbEj60%3D)

As for the greater goal of funding, we’re just shy of 85% funded, and we’re going to be heading into the final 72 hours shortly, which are typically good for Kickstarters, so please keep helping to get the word out in these next few critical days!

## Interview w/ Thomas Brush

I did an interview with Thomas Brush in which I talked about working as a full-time game dev. It will be going live on **Tuesday at 10am EDT** and you can find it [right here](https://youtu.be/1QMFVxPL3xg).

![img](https://i.kickstarter.com/assets/037/778/913/71d33bb1b9b889fd87e4e2d53927b123_original.png?fit=scale-down&origin=ugc&width=700&sig=MGJXFF1atcTZ6o8TS6H5nCGRbjkyDqYwSQBLFnPg9vM%3D)



And now, onto the devlog 😊

## Devlog: Game Feel Niceties

As I was streaming some DuckTales Remastered on [Twitch](https://www.twitch.tv/diesoftgames) yesterday, I kept bumping my head on platforms above me that looked like the character shouldn’t get stuck on, and it got me on a tangent about something that I do in *Little Nemo* that is fairly common in platformers: fudge the player collision in different scenarios when it would be weird or unfair to be strict out about the player’s bounding box. Later in Discord, someone followed up asking about that, so I thought I’d show off a little bit about how it's achieved in *Little Nemo*.

Essentially, the way it boils down is thus: the player’s collider is a simple rectangle (in Nemo’s case, two units tall and one unit wide) but treating the player collider as something so strict will often just feel wrong and too strict for the player as they get stuck on corners they meant to avoid (this is one of the reasons you’ll often see capsule colliders used for player colliders in both 2D and 3D games). Rather than try to make a complex polygon or a capsule collider (both of which can have other intended knock-on effects to the “game feel”), we’ll just do a faux-bevel of the rectangle based on which direction we’re checking for collisions.

![img](https://i.kickstarter.com/assets/037/778/933/92e116ea08cc82dd221f6f860adb08d2_original.png?fit=scale-down&origin=ugc&width=700&sig=hNEVowytGZLQjgezeKT2iDlZpmnLTsXfErf5MsDdG34%3D)

I call this component Collider “Squeeze”. Here’s the inspector where we have set an Upward squeeze, and a Rear-Downward squeeze, and how it looks applied to Nemo’s collider:

![img](https://i.kickstarter.com/assets/037/778/934/1cff24b85b65390659e9983d5ad4466a_original.png?fit=scale-down&origin=ugc&width=700&sig=9DwpQCIsSSg%2FzzXwLpuVEWEDnxyVdgRYfNArZQNRatU%3D)

So here you can see Nemo’s collider in green, and in yellow you can see the squeezed collider, which is a better visual representation of how the collider will actually work. When we’re checking upwards for collisions, the collider “appears” to be much thinner than it is, and when moving downwards you can see the collider doesn’t extend out past the heel. I won’t get into how this is accomplished, because *Little Nemo* runs on a custom physics solution so any implementation details will be extremely specific to *Nemo*, but the important thing to note is this: by perceiving the collider as thinner than it is, we will cause the player’s collider to clip into the world geometry, and then the player will get ejected outwards, putting them where we want them.

Here’s a slow-motion effect of what happens when you jump into a corner with the front and back of Nemo’s head such that it would otherwise have been blocked by the world geometry.

![img](https://i.kickstarter.com/assets/037/778/948/0500ce6ed111d73379010029bf3bdfc7_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=wdbPYY7SW1Mfu5sIP6koH9mJ%2BTIEbFfEIuHmFILExJ4%3D)

And then the same thing for going downwards (we have to be careful about this, we don’t want the player to fall too soon, this just prevents them from floating off a ledge with the sprite not touching).

![img](https://i.kickstarter.com/assets/037/778/954/ad8f4d813cadaa982a074b889de957f2_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=d3pvUgf6lufyBfWC6tp%2B9LK4AbMLu8K0bn2aKtvMZnc%3D)

These are just little kindnesses to the player that help make everything feel a little more correct. You can also do these horizontally to help players get onto ledges, something I will likely implement after watching people have some difficulty getting their jumps just right in the closed demo.

Another platformer nicety you’ll see discussed in this context is “coyote-time”, which is when after a player falls off a ledge, you give them a grace period in which they can still jump for a certain amount of time.

![img](https://i.kickstarter.com/assets/037/778/961/97a208f292b1a53cdc86abe009d63cd2_original.png?fit=scale-down&origin=ugc&width=700&sig=%2FjnAsdms3pChg02Cd8Zzr2Wp6R%2Bg%2FYUOB1zD8luzrOw%3D)

For my purposes, I like defining that in frames (here frames meaning 1/60th of a second), but you also might just see this defined as a time given in seconds in other games. Here's how it looks in action:

![img](https://i.kickstarter.com/assets/037/778/967/1813e4d269123dc9b076208789f3ef9d_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=L%2BPWF6YIudAhS59w7PxleRuX2SEgCw4NyFTzHM8F0lU%3D)

Some things that might be different about my implementation of coyote time, but that I appreciate:

- The player begins falling when they normally should, I’m not actually keeping them on solid terrain longer than they should be.
- When the player does jump, they are snapped back to the height of the last surface they were on, and any falling momentum they had is canceled. This ensures they aren’t “penalized” with a jump that might be shorter when successfully coyote time jumping

If you liked this topic, then you should absolutely check out the GDC talk [Forgiveness Mechanics: Reading Minds for Responsive Gameplay](https://www.youtube.com/watch?v=HCnZhs-92j0) by Butterscotch Shenanigan's Seth Coster (this GDC talk is mostly about LevelHead, which is a really great platformer/level editor if you haven't tried it).

Okay, that’s it for this devlog. What other niceties like this do you like a platformer to have? Leave feedback in the comments! As always, I love to hear what y’all wanna hear about next, so please make sure to chime in 😊

Until the next update!

-Dave
