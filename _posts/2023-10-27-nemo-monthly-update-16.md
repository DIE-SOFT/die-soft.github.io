---

title: Monthly Update 16

---

# Monthly Update 16 🎃

Welcome back, Sleepyheads!  Last month I showed off the very seasonal Haunted Hollow dream domain a bit. You can see more of it in some clips we’ve been posting on our [Twitter account](https://twitter.com/diesoftgames) as we make our way towards Halloween. This has always been one of my favorite times of year, so it’s been fun to try to capture what I love about it in the artwork for a dream domain. But what have we been working on this month? Well, I moved on to the art for another seasonally themed dream domain (more below the spoiler warning) and I also got some more of the special tier backer rewards implemented, this time the **🔭Observatory🔭** where Pet Constellations and Pet Statues can be viewed.



## A Quick Follow-Up

Before we get into it, I just wanted to do a quick follow-up on some of the news about Unity that I shared in the last update. Things are trending in the right direction, although Unity still has some work to do to rebuild the trust of their developers. Importantly, their CEO, John Riccitiello has been ousted from the company, which is an important first step. Unity also announced a finalized pricing structure which is much more clear and fair. It continues to not majorly affect this project, so no worries about us needing to switch engines mid-development. And hopefully this is the last I’ll need to share about this topic!



## 🔭Observatory🔭

I’m not gonna mark this as a spoiler since it’s backer-related content. In the Palace of Slumberland, players can find the Observatory. Here you’ll find dedications to backers’ animal friends in the form of statues (Super Starry-Eyed Sleepwalker tier reward) as well as a telescope through which you can view the starry night sky of Slumberland and the constellations found within of more backers’ animal friends (Starry-Eyed Sleepwalker tier reward).

![img](https://ksr-ugc.imgix.net/assets/042/857/521/d65bf32b53b46f254abf55e82c55da5d_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698435834&gif-q=50&q=92&s=ff8154313de79d08e5d64cbc8f0d67aa)The statues are just placeholders for now, and some of the artwork is unfinished in the Observatory.

This area is still being worked on so you can see some of the art is just line art with some shading, and I don’t have any pet statues to show yet. But the constellation viewer UI is all done with some examples. Here's a quick look at that UI:

![img](https://ksr-ugc.imgix.net/assets/042/857/582/2bd9c291361e8a771fed8152106172e6_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698436084&gif-q=50&q=92&s=676d1c0b54284e5b543e7ce2f63ea518)This is just a couple of the constellations from the 60-70 animal friends that will be featured in here.

We’ll ultimately have I think almost 70 constellations to show off in here, but I just made a few for now (Samus is my cat who passed away earlier this year, and I’ll likely be including her in some of these pet reward tiers as well). For this first pass, I just have the pet name (and animal type) listed out to keep it simple, but I’m curious to hear from backers of these tiers if you’d prefer to see your name in each listing below or next to the animal's name?

Another idea I might implement is making it so that once you reach the Observatory in-game, you’ll unlock the Constellations viewer so that you can simply open it via a menu from anywhere. On the one hand, it’s kinda nice to have it rooted in the world like this, but on the other, perhaps y’all will simply want to be able to have a peek at your animal friend’s constellation whenever you’d like. Let me know what you think in the comments!

 

## Spoilers Abound ❗🙈❗



With the Halloween-themed domain’s environment art wrapped up, I wanted to work on some art that will be relevant for sharing in the near future, and so began work this month on **❄️The Valley of Silence❄️**. This is named after the arctic-themed region in the original *Little Nemo* comics. This is a dangerous, yet beautiful icy domain that is meant to evoke that sublimity of a perfectly quiet snowy evening. This is a fairly late-game area you won’t reach right away, and thusly, it’s a bit more dangerous than some others. You’ll find here terrain that is difficult to navigate as well as some new hazards that aren’t quite ready to share yet.

I haven’t quite wrapped things up yet, so like with the Observatory, you’ll notice some of this art is still just placeholder.

![img](https://ksr-ugc.imgix.net/assets/042/857/736/71ff88369e3893e1f5d0a7af8f0faa94_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698436878&gif-q=50&q=92&s=da294ec20e44e16dd8fc68d05f5d6167)

Welcome to the Valley of Silence

This has been a really interesting zone to work on the art and gimmicks for because there are so many unique challenges. So I thought I’d go into some of these fine details and share about how I accomplished what I was after.



### Snow 🌨️

Getting the snow to look just how I wanted was ultimately fairly simple, but when taking in account the technical considerations, I was a little worried about getting this to look just how I’m after. The world of Slumberland is built up of screen-sized chunks, each with their own Room Type. Different rooms might have differing amounts of snow they want, so we need each chunk to have their own independent particle systems, each with parallaxing layers of snow. And we want to ensure we don’t see “seams” between each of these. Because snow is falling vertically, my concern was that we’d need vertically adjacent chunks to share a particle system to prevent visual seams.

![img](https://ksr-ugc.imgix.net/assets/042/857/762/c8593d34936debe3cf5ad25076ccb26f_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698437034&gif-q=50&q=92&s=e6ed5cbd12693aa8f1f264d5278725a9)

Here's Nemo standing in the normal amount of snowfall you'll encounter here.

I tried a few different things, but ultimately the solution that works is to just let each chunk’s particle systems overlap a little bit, and ensure the particles fade in when they appear, and fade out as they disappear. With enough snowflakes you can’t actually notice the individual flakes coming and going.

Another thing I needed to do was combine particle systems that express single snowflakes, as well as others that have many snowflakes combined into a single particle. This allows us to get nice and heavy snow without overwhelming the system with particles. Because you’re seeing some individual snowflakes, especially the ones that are closer to the camera, your brain fills in the blanks and it feels like all of them are individual particles.

![img](https://ksr-ugc.imgix.net/assets/042/857/811/48c827cb042867c9658b5cfc2c63bcb8_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698437359&gif-q=50&q=92&s=e308efd0a137384c70a19bc6cceca5f8)

There is a vertical transition happening here between two different amounts of snowfall, being lighter up top. There is no visible seam because of how snow particles are faded in and out.

There is also a gameplay element to the snow. Our main collision tiles prevent pogosticking, and you’ll get stuck if you land on the snow with the pogostick active.

![img](https://ksr-ugc.imgix.net/assets/042/857/860/0d9a76a2dc6cc28bcb4046d2135957a7_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698437580&gif-q=50&q=92&s=f100b515f02f821688b2cba538411c15)

Shout out to "Duck Tales" on the NES, which inspired both the Pogostick toy and this hazard.

There are times when you’ll want to pogostick off of enemies to traverse the area, but you’ll need to be careful because if you miss the enemy, you’ll be stuck briefly which will leave you vulnerable to attack.



### Ice 🧊

The ice in this domain also presented an interesting new visual challenge. I had thought for some time it would be nice to apply a “sheen” to some objects in the world, especially metallic things, but my default lit shader was relatively simple and didn’t support anything like that. But while working on the ice here, I knew it would need to catch the light in interesting ways and create the illusion of reflecting the light.

![img](https://ksr-ugc.imgix.net/assets/042/857/887/fe3e61e3e33fd914390d6b46fb8a18d9_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698437727&gif-q=50&q=92&s=132648addcf3b5f5c6d948d48cd18895)

This started out being inspired by some specific material in Super Mario 3D World, but I leaned more into the stained glass look it started to take on.

Our default lit shader already allowed for a mask texture to be used alongside any texture, but it was previously only using the green channel (which allows us to make things emissive). With this change, we’re using a combination of the blue and red channels of the mask texture to create this sheen. Essentially, the blue indicates how much sheen there should be, and the red indicates the angle of the sheen. You may not be able to tell in these low res gifs, but the snow on the ground also uses these channels to create that sparkling effect you see on snow as the light catches individual flakes.

![img](https://ksr-ugc.imgix.net/assets/042/857/939/3e22ed87e0bf64b632d7304bfd203912_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1698438143&gif-q=50&lossless=true&s=29caf35b0a2fbfd860f2c3b6ff32fe5f)Here you can see the main texture (top) vs the mask texture (bottom) for the large gift block tiles. The red and blue channels combine to create the reflective qualities of the ribbons and wrapping paper where desired.

This immediately also solved the need for metallic/foil objects, and I also used this in the block tiles for this domain which are holiday gifts that come in a variety of colors and matte or metallic materials.

![img](https://ksr-ugc.imgix.net/assets/042/857/977/89223c87d9ae1cdb957a98945d2094a8_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698438328&gif-q=50&q=92&s=4c7f2e0c3f8990e3267351b979acaf7e)

The "block" tiles in this domain are holiday gifts. These are helpful in that you can safely pogostick off them unlike the snow.

And the ice of course has a gameplay impact: Nemo loses footing a bit and slides around. This was an especially interesting thing to tackle because typically the player has *absolute* control of Nemo’s movement. What that means is that by default, when you input movement, we don’t use any acceleration or velocity, we simply translate the player a fixed amount, and that amount we move is always the same, as opposed to something like *Mario* where you slowly ramp up to full speed, and similarly slowly come to a stop.

So what does that mean for slippery physics? Well, if you don’t normally have momentum from your own movement, what happens when you step on ice? Do you take longer to slow down? Does it also take longer to get up to speed? What happens if you jump in the air? Since you’re no longer on the ice, do you immediately regain your *absolute* control of movement you typically have in the air? While those first two questions might be easier to answer, the last one is actually fairly interesting. In most *Mario* games for instance, you have better traction in the air than on the ice, which means you want to often be bunny-hopping for the best control.  *Spelunky* on the other hand is even more rewarding of bunny-hopping when on ice because not only do you regain your normal aerial mobility, but it also halts any momentum you had while on the ice. In doing a little research, I actually couldn’t immediately find any games which give you absolute control of your movement, and then also introduce a slippery surface (leave a comment for me if you know of any!).

Even though when you normally move Nemo with precise and discrete translation amounts, there is a physics system that the movement system operates alongside which accounts for acceleration and velocity. You’ll see this happen in a few contexts, usually when Nemo gets “launched” in some way. So some things that apply velocity instead of translating Nemo directly: knockback from hits, wall-jumping, air-dodging, and likely some others. Velocities applied to Nemo will behave differently than when you use the movement inputs because a velocity will continue to move Nemo and will only be reduced as you experience friction from surfaces, aerial drag, or if you explicitly stop your velocity (by bumping into something or using your air-dodge).

So this kind of behavior is what we want from movement when on ice. It should feel a bit more “physicsy”. So we simply do that: any time you’re on a surface with a friction of less than one (all things you can stand on will express their friction in a value ranging from zero meaning infinitely slippery, to one meaning perfectly frictive) the movement system will apply the appropriate velocity, rather than directly translating Nemo. It’s a bit more complicated because we need to apply a velocity which preemptively accounts for the friction and aerial drag such that we perfectly match the speed you’d be moving at if you were just directly translating Nemo, but that’s the gist of it.

![img](https://ksr-ugc.imgix.net/assets/042/858/045/7506e01af8516ce14c71a174e6a48b54_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1698438706&gif-q=50&q=92&s=d949ad79769041922338750657c2d7ae)

Nemo on Ice!

So the result of this is that once you’re on ice, you’ll have a more difficult time coming to a stop, and bunny-hopping won’t help with that (you’ll actually have less stopping power in the air than on the ice because the ice does have some amount of friction which isn’t experienced in the air). I appreciate how this gives a unique weight to moving on ice and makes it potentially quite dangerous when combined with hazards and enemies. I slightly worry that for players used to Mario style ice behavior, not being able to bunny-hop for traction might feel awkward, but I want to get this in front of some playtesters soon to see how others like it. But overall I’m really enjoying the ice so far.

And in case you're wondering, any objects that get tossed will slide on the ice as expected. That's actually a feature that's always been built into the game as all surfaces already appropriately apply friction based on the friction values of the two surfaces in contact. So I'll likely being looking into what fun gameplay ideas we can generate from that as well.



## More to Come ➕

So that’s not everything for the Valley of Silence. I still have a little more work to do on some of the background art, a few smaller tilesets to finish up, an icicle hazard I’d like to implement, and then of course we haven’t tackled the enemies yet. But once I’ve finished up some of this environment art, I’ll be moving on to environment art for another dream domain (only two more zones need environment art after this and then all 9 of them will have their core environment art and tilesets done!).



## That’s it for this month!

That’s about everything that I’ve been up to this month that’s worth sharing. Next month I hope to share the environment artwork for another new dream domain, and perhaps I’ll have some backer statues done so I can show how those look (both human and animal statues) in the Observatory and the Palace foyer.

Please let me know what you think in the comments below, or come hop into the [Discord](https://discord.com/invite/9NymgSJAVp) to say hi! Until next time 👋

-Dave
