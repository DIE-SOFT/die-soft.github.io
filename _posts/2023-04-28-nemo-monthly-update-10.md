---

title: Monthly Update 10

---

# Monthly Update 10



Ten months of developer updates. 😅 I hope y’all are enjoying following along with progress. Last month was very tech-centric, but this month I have some stuff to show off that I think will be more interesting to most of you. Specifically, I’d like to talk about the **dream domains** of the game. This is the proper term for what I often informally refer to as “zones” or “areas” of the game. This month I put a lot of work into finalizing assets for the **🍭Gumdrop Gardens 🍭** which I’d like to show off, along with talking through my general content strategy for each domain.



## Dream Domains 🗺️

*Little Nemo* is following a classic trend in Metroidvania games, which is to have the world composed of distinct thematic areas of the map. You’ll typically have some kind of inter-connectedness between these areas, but having each area thematically distinct keeps things fresh, helps you remember where you are, makes backtracking back to an area you find appealing more fun, etc. In a traditional platformer, like say Super Mario World, these would be called the “worlds”. I try to make sure to avoid referring to them as “levels” or “worlds” so that it is clear that although *Little Nemo* has classic platforming gameplay, it is a large, seamless world that you can explore.

So what kinds of content make up a dream domain? Generally there is the environment (background art, tile sets, decoration elements, and lighting presets), the enemies, and the gimmicks (bespoke and novel interactions and pluckable items). Let's dig into each of these a bit.



## The Environment 🌳

Each domain of course needs a custom backdrop, which can be seamlessly repeated as needed (while providing a sense of depth with parallax). This is often the first thing I’ll tackle when working on a new domain. The Gumdrop Gardens background I completed quite some time ago, but I’ll go ahead and share a peek here which you might already be familiar with.

![img](https://ksr-ugc.imgix.net/assets/040/764/229/de3ccf235281d0cdfbb8121b597a7a7c_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682704901&gif-q=50&q=92&s=cbfc8d559399987522d59aca514652cb)Gumdrop Gardens parallaxing and repeating background

Then we need various sets of tiles to build out our midground geography. I typically have a very complex main collision tile which is made up of about 50 distinct sprites to handle the various rules based on its neighboring tiles. Then I like to have a secondary tileset, which is more block-based. This won’t have rules and I like to have large (2x2) and smaller (1x1) variations.

Then we have various decoration tiles that are common to each domain such as the pillars, near-background wall tiles, foreground tiles, and dangleable bar tiles. I just finished making the dangleable tile for the Gumdrop Gardens, so you can see how all those tilesets come together with the background elements here.

![img](https://ksr-ugc.imgix.net/assets/040/764/243/c7915be3a327f29df2c18a2c94288a30_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1682704978&gif-q=50&lossless=true&s=de03b2b50a6ee5e2312ef95bf64bece0)Gumdrop Gardens' tilesets

And then we need plenty of decorations to add flavor.  Decorations you can interact with are especially fun. Something that I always loved about the Castlevania series is that the candles are always such a fun way to leave your mark on the world as you pass through. As with the pots in the Legend of Zelda, or the boxes in Dark Souls, it’s just fun to have some minor destructible elements typically available. So in *Little Nemo* we often have Castlevania inspired lanterns strewn about the world that you can hit with your Yo-Yo or even pogostick off of to break open for a bit of candy. Here’s the Gumdrop Gardens’ version of the lantern:

![img](https://ksr-ugc.imgix.net/assets/040/764/245/1c4d3be9b0bda94dd4e6c410e0dc7b29_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682705005&gif-q=50&q=92&s=09fef56d73f308576a658db66fbfcf1f)Nemo breaking some candy lanterns

I don’t think I will ever have enough decorational and destructible elements in the game as I'd like, but I will keep adding them as time allows.



## Spoilers Abound ❗🙈❗

I’m going to flag everything below as spoilers, but some of this content will show up in public promotional material in the near future, so I recommend going ahead and reading on.



## Enemies 😈

Each domain will introduce new enemy types that are relevant to the local theme. Seeing as the Gumdrop Gardens is made entirely of sweets, the enemies are sweets that have been corrupted by the Oblivion. Here are what we have so far:



### Gelatonne

This enemy appears to be completely invulnerable at first. You can at least get it wobbling to prevent it from jumping on you, and you can even just hop over it if you time your jump properly.

![img](https://ksr-ugc.imgix.net/assets/040/764/262/7235bddaedafb2700e909b813e70a031_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682705054&gif-q=50&q=92&s=9731813fb7fadbe43cd55af586fef1b9)Gelatonne threatening Nemo with a jumping slam attack



### Peppermint Wheelie

This is a more simple enemy type which will simply patrol back and forth until spotting the player, which will cause it to do a spinning dash attack at the player. If you can avoid it, it’ll get a little dizzy for a moment leaving it vulnerable to attack.

![img](https://ksr-ugc.imgix.net/assets/040/764/274/db34d4a0486060ee884696832c7b89f4_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682705095&gif-q=50&q=92&s=3b749ac8824638324d4d77bc8eb142d3)Jump to avoid this charge attack, or time a Yo-Yo attack before it hits you!



### Bubblegum Turret

As you progress beyond the Dreamswept Plains, the enemies will become more threatening. Here we have a machine that will continually fire gumballs at the player and seems to be armored against any of our attacks.

![img](https://ksr-ugc.imgix.net/assets/040/764/280/366bdde5a3dc4e5d3b5fa487a82379a9_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682705128&gif-q=50&q=92&s=48501ac34345e7ff4bd610848c160da9)Bubblegum Turrets firing at Nemo



### Pluckables 🥕

If you’re familiar with the radishes in the Dreamswept Plains, that might have got you thinking “what else can we pluck from the ground?” I want each domain to have their own pluckable gimmicks (with some overlap as well) each with their own visual identity. In the Gumdrop Gardens, instead of tufts of grass which pluck into radishes, we have cherries embedded in the frosting-covered ground which you can pull up.

These cherries behave effectively just like the radishes and provide a way to attack enemies from a distance, but perhaps more exciting is the cherry bombs! You might notice some of the cherries are a subtly different shade of red, and when you pluck them you’ll instead be holding a bomb that’s getting ready to explode. Make sure to toss it or set it down before it blows.

![img](https://ksr-ugc.imgix.net/assets/040/764/285/268e08c495341093707a14ad0269e592_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682705154&gif-q=50&q=92&s=be6e3f3de391bff12af921285d3d286d)Nemo tossing a Cherry Bomb just before it explodes!

And importantly, you can use this to hurt some enemies you may not be able to hurt with your normal toy attacks, as well as destroy some destructible terrain that you don’t have the toys to destroy on your own just yet (try tossing a Cherry Bomb at a Gelatonne).



### Gimmicks 🆕

In addition to novel pluckables in each domain, there will be other gimmicks to give a unique platforming identity to each area. Here are two that I’ve been working on:

This Donkey Kong Country 2 inspired honey trap will allow you to effectively wall jump before you get the Monster Claw. Of course you’ll be limited to wall-jumping only where this honey appears instead of the universally usable Monster Claw, but it will give you a taste for vertical scaling. I mentioned this in an earlier update when I was grayboxing it, here’s a peek at what it will look like.

![img](https://ksr-ugc.imgix.net/assets/040/764/295/aa5eab653849f09f1b190710a7bfc25d_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1682705181&gif-q=50&lossless=true&s=c4ae91081a849d7bc8aa3fd3cc2e440f)

I’ve also been working on theming the bouncy stuff I showed off in an earlier devlog update, and now I can show you the bouncy mushrooms for the Mushroom Marsh.

![img](https://ksr-ugc.imgix.net/assets/040/764/299/a0854765f70feee708db8f332fc15827_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1682705211&gif-q=50&q=92&s=0469af15f8eceb8df3762006c1443cff)Bounce off mushrooms in the Mushroom Marsh

My goal is for each domain to introduce a new gimmick or two, which can then later be used in the last domain (with new art assets) where we can combine different gimmicks for some very exciting and challenging platforming.



## Kickstarter Friends 💚

As always, I like to remind you all to take a look at what other independent video games are being made with help from Kickstarter backers such as yourself. 

[Dros](https://www.kickstarter.com/projects/emergeworlds/dros-0?ref=744pxu) is a game I’ve had my eye on for some time. I absolutely love this hand-drawn look and how it’s been incorporated into a 3D world through the textures and billboard dialogue sprites. They’ve already met their funding goal, but indies can always use the extra support, so [go check it out](https://www.kickstarter.com/projects/emergeworlds/dros-0?ref=744pxu)!

![img](https://ksr-ugc.imgix.net/assets/040/764/301/119024bea53fc5937241bc98e4a9eaf6_original.png?ixlib=rb-4.1.0&w=700&fit=max&v=1682705233&gif-q=50&lossless=true&s=2a5ab174b11ab1a686bd147251db8e77)



In [Dros](https://www.kickstarter.com/projects/emergeworlds/dros-0?ref=744pxu) you'll switch between a **slimy little creature** and her **human Bounty Hunter**. Together, solve **puzzles**, **fight** and **explore** your way through a crumbling world in peril.



## Wrap-Up 👋

Please let me know what you think of getting to see the new assets as they get into the game. My goal is to be getting into a better place to show some of this stuff off each month as new domains start getting better fleshed out, and I suspect you all prefer this sort of content to last month’s more tech-centric content. But I won’t know unless you leave me a comment below or ping me in the [Discord](https://discord.com/invite/9NymgSJAVp). 😁

Until next month! Thank you for reading 🙌

-Dave
