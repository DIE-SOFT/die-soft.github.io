---

title: Monthly Update 28
description: Pet Constellations and loads of new enemies!
image: /assets/images/devlog/2024-10-25-preview.png
---

# Monthly Update #28 🎃

Happy Halloween, Sleepyheads! We’re nearing the end of October and it’s the last Friday of the month so that means it’s time to update you all on *Little Nemo* development. For those of you up here in the northern hemisphere, I hope you’re getting some of these amazing autumn colors that we’ve been having in our area. 🍂 I’ve also been playing some spooky games lately when I have some time, and I hope you’ve had the chance to do the same!
 

## Timeline Update 🕰️

First off, I just wanna share the big picture look at where we’re at. Currently the focus is on finishing up the level design of the world (currently deep into making the layout of Nightlight City fun and interesting) while also giving art to all the grayboxed enemies and gimmicks for the domains that need it. Sharing the level design stuff is a bit difficult without being very spoilery, so I’ll mostly share a bunch of art and animations that I’ve been working on this month down below.

The goal is to get these things done by the end of the year so that at the start of 2025 we have a fully playable game, which will then just need the remaining bosses completed and to get playtested and polished for a release sometime next year (it’s easy to make that not sound like much, but the road from “mostly done” to “release” will be plenty of work).
 

## Pet Constellations ✨

Also a quick update on the Pet Constellations. Typically anything that has to happen in Unity I handle myself as others helping with the project are mostly focused on making assets that get handed off to me (music, sfx, narrative docs and direction, etcetera). But this month, Cid (our Narrative Designer) jumped into Unity to help with the daunting task of taking all of João’s amazing pet drawings and bringing them into Unity and placing all of the constellations into the system that allows you to view them from the telescope in the Observatory. This means these are all set now, and I’ll be sharing some images and videos, as well as a new build, so anyone with a Pet Constellation will be able to see how it looks and help spot any errors that may have popped up. Please keep an eye in the [Discord](https://discord.com/invite/9NymgSJAVp) for news/details about that in the next couple of days.

Next up, on the Special Backer Rewards side of things, we’ll be getting the Cat Guardians’ cats into Nemo's bedroom! Keep an eye out for those details in an upcoming monthly update.

Now onto spoilery updates!  


# Spoilers Abound ❗🙈❗

Okay, if you don’t like to see all of the fun art and animations and want to discover them for yourself as you explore from one domain to the next, then please avert your eyes. But for those of you that wanna see all the fun details, I’ve got lots of enemies to share with you that we worked on this month.
 

## Generic Enemies 👹

Something that has come up while working on level design for some later areas is that sometimes the enemies designed specifically for each domain are maybe too specific, and sometimes we just want an enemy that sits in place or just walks back and forth. It’s easy enough for us to just use enemies from other domains as needed, but sometimes they are themed specifically for the domain they are introduced in, so I decided to make a small suite of 4 enemies that will be shared for use across any domain.

And a quick aside about these enemies, some of the coloring details are still being worked out. Because of the way things are dynamically colored with shaders, I'll probably continue tweaking the enemy colors until the very end.

### Raddler

This was previously a Dreamswept Plains specific enemy, but it’s not actually themed for that specific domain and its simple, patrol back and forth behavior was something we often wanted to use elsewhere. Additionally, something I’d been wanting to do for some time is better communicate that the Raddler hurts the player on contact, so it now has a very radical spike mohawk.

![img](https://i.kickstarter.com/assets/047/028/086/c5a10791b41cd04f0f0120a97902e859_original.webp?fit=scale-down&origin=ugc&q=92&v=1729870313&width=700&sig=1KT4ALp1BWLhVCprfAIBm4sgYWMDVcJvCOZLFvv319o%3D)The Raddler simply patrols a small area, turning around whenever it encounters a ledge or a hazard, and now sports some very radical spikes.

### Slowpoke

This is very similar to the **Burrchin**, but often we found ourselves wanting to place Burrchins in places just floating in the air. So these little guys allow us to do that, and they will appear throughout lots of domains.

![img](https://i.kickstarter.com/assets/047/028/218/160ae9e630ec15cf81faeea0611d249b_original.webp?fit=scale-down&origin=ugc&q=92&v=1729870997&width=700&sig=CiPhjn35dT%2BvLchEm5sWaBmbKDCj03LT%2BcnIuGIFuh0%3D)Slowpoke is essentially just a re-skinning of the Burrchin that let's it make more sense visually that it's floating in the air.

### Tiredactyl

*Metroid*’s “Geemer” enemy set a strong precedent for enemies that simply patrol along a surface in Metroidvanias. While we have Scarabiner enemies that do this, I wanted a more general purpose enemy that just clings on surfaces, avoids hazards, and hurts the player on contact.

![img](https://i.kickstarter.com/assets/047/028/394/27f3765e9daa2851b1807ae3f959bace_original.webp?fit=scale-down&origin=ugc&q=92&v=1729871742&width=700&sig=eEVDzu2HLDUztZ7MfpLXean%2FiFcI0ta6FnPGeZ43gJw%3D)The Tiredactyl just wants to cruise along surfaces. Either hit it with your yo-yo or stay out of its way!

### BooHoo

This is an entirely new idea to *Nemo*, but something I’ve been thinking about introducing for a while now. One idea I’ve always loved from *Super Mario Bros. 2*, is Phanto, a creepy mask that chases you when you steal its key. It isn’t the most difficult enemy to avoid, but the ever present threat of this invincible enemy can make navigating areas much more exciting.

So we have the BooHoo, a haunted owl mask, which will chase after you anytime you’re carrying its target item (this isn’t restricted to keys, but is the most likely target of its attention). The only way to dispatch this enemy is to find where the key goes and use it.

![img](https://i.kickstarter.com/assets/047/028/509/1bef1f0e5fe10cdf8584d380596728c1_original.webp?fit=scale-down&origin=ugc&q=92&v=1729872146&width=700&sig=ycsPw4PxLccUyaO%2B5Se66bpT%2FmGFF42YCzCUpUiXtZ8%3D)The BooHoo pursues Nemo for taking its key!

So that’s it for this new class of generic enemies we’ll use throughout any domain in which they are needed. I should also point out, these enemies will tend to be a little “weaker” than others. Enemies specific to a domain have damage that scales depending on where they appear (later domains have enemies which deal more damage, incentivizing the collection of Lucky Coins for defense), but these enemies all simply deal one damage.
 

## Crystal Cavern Enemies: Scarabiners 🪲

I’ve been working on lots of enemy sprite animations this month. In addition to those above, I’ve also been working on the sprites for the enemies for the Crystal Caverns which I previously first mentioned [**here**](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/4159090). I haven’t yet gone into detail about what these enemies do, so I’ll dig into that now!

### Dizzy Scarabiner

This little bug crawls along on any surface, only turning around if it runs into a hazard. But if it sees Nemo, it will drop off the surface to do a spinning shell attack.

![img](https://i.kickstarter.com/assets/047/028/864/5750f3316f032d9d2fd0cd65eaa83f68_original.webp?fit=scale-down&origin=ugc&q=92&v=1729873682&width=700&sig=aHZ7BZWppk2s6eYVji7eOIfrl71B4ZIrC7w8SE7ctzs%3D)Nemo deftly avoids an attack from the Dizzy Scarabiner

As long as you don’t get underneath or in front of it, you’ll be safe. In fact, you can even ride on and pick up these bugs.

![img](https://i.kickstarter.com/assets/047/028/927/1ae7d7c941ac4b6daa96d74dd3bfa940_original.webp?fit=scale-down&origin=ugc&q=92&v=1729873960&width=700&sig=uFO2tTgquSq21lXMyI4DZnVdfEuu80Ni3wPnnfDlxT0%3D)Nemo riding and then throwing a Dizzy Scarabiner

But their strong upper carapace keeps them safe from your Yo-Yo. If you want to defeat these enemies, you’ll need to pogostick their exposed bellies.

![img](https://i.kickstarter.com/assets/047/029/036/8c3ff4f201307c337f4c21cdd0de86bf_original.webp?fit=scale-down&origin=ugc&q=92&v=1729874276&width=700&sig=nOsERv%2BJdobFUPMaEjxF%2Bn%2Brq3LsNy7z58HaOvJU5vw%3D)Nemo pogosticks on the Dizzy Scarabiner's exposed belly to defeat it

Defeating these enemies leaves behind their shell which you can then use to ride around, damage other enemies, or toggle crystals.

### Crystal Scarabiner

These are Scarabiners that have been around the Crystal Caverns for so long that crystals have built up on their shells. These sharp crystals will prevent you from riding on them.

![img](https://i.kickstarter.com/assets/047/029/167/e24c95aa83affc4f28651dc0b2cad537_original.webp?fit=scale-down&origin=ugc&q=92&v=1729874814&width=700&sig=KrWcc2wXPinT2KcMmiWympK0UUVJs%2BlZYwkLNaCgUjU%3D)Don't try riding one of the Crystal Scarabiners, those crystals are sharp!

They won’t do a spinning attack, but if you wind up below one, it will drop down with a large crystal attack! Watch out for this, you’ll want the Bubble Wand handy around these enemies. If you can manage to pogostick their bellies, you’ll shatter the crystals and it will turn into a Dizzy Scarabiner.

### Flying Scarabiner

These Scarabiners are actually pretty chill and won’t attack you. In fact, since they’re flying, you can even hop on them to reach areas you wouldn’t otherwise be able to. Be careful though, they can’t support your weight very well and will start to fall as long as you’re on top of them.

![img](https://i.kickstarter.com/assets/047/029/233/b69cda1e30d80016f14e8cc6f9d51c5e_original.webp?fit=scale-down&origin=ugc&q=92&v=1729875049&width=700&sig=Bv7x4PKo2KVwxZ9ory%2FycRUTzHcEoRiQMjTf21ozvvI%3D)Nemo hopping from one Flying Scarabiner to the next

You won’t be able to hurt these Scarabiners since they never flip over to expose their bellies, but I suppose if you really wanted to kill one (but why would you?!) there is surely a way.

Fun little detail, there is actually a fourth Scarabiner, but it’s found in Haunted Hollow rather than the Crystal Caverns: the Electric Scarabiner! You’ll see that one when I share more about the Haunted Hollow sprites I’ve been working on, but I’ll save that for next month’s update perhaps as they still need a bit more work.

Okay that’s all the spoilers I have for you this month!
 

# Back to Spoiler-Free ✅🐵✅

### Kickstarter Friends 💚

Okay, this one might seem a little odd, recommending a fighting game, but the way [Knock Off: The Battle for Imagination](https://www.kickstarter.com/projects/knockoffthegame/knock-off-the-battle-for-imagination) is steeped in toy nostalgia from my childhood is very similar to a lot of the influences in *Little Nemo and the Guardians of Slumberland*. So if you’re someone following *Little Nemo* development and you like fighting games, then you should absolutely take a peek at this Kickstarter.

![img](https://i.kickstarter.com/assets/047/029/254/2f8f295356672f234dccdb7895cb73aa_original.png?fit=scale-down&origin=ugc&q=100&v=1729875107&width=700&sig=fXZ8tbZILSRIRLPAda474m1cPPLRke0FYijZS40fp1U%3D)Knock Off: The Battle for Imagination

*Welcome to the world of Knock Off, a fun and exciting game that is sure to appeal to fans of fighting games and toy enthusiasts alike. The game features a variety of characters, each with their own unique moveset and abilities.*

*Players are transported into the vibrant world of action figure toys, brought to life within the confines of a young boy’s bedroom. Here, everyday objects become epic battlegrounds, and the stakes are as high as a child's imagination.*
 

## That’s all for this month 👻

If you made it down here to the end, please leave me a comment and let me know what you think of how things are shaping up. It’s always really helpful to get feedback from y’all. Are there any systems or other details that maybe I haven’t covered that you would like to see in upcoming updates? Are there any technical deep dives you’d love to see (akin to the [Pathfinding devlog](https://diesoft.games/2024/08/18/devlog-pathfinding.html) I shared recently)? Or, as always, feel free to hop into the [Discord](https://discord.com/invite/9NymgSJAVp) and chat with me there about all the nitty gritty details of game dev!

Until next month!

-Dave

![img](https://i.kickstarter.com/assets/047/029/275/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1729875163&width=700&sig=jHZP3YJTp2Hv%2Bf%2F9N9ER1NbABKINks2niEXOYvOmjOU%3D)
