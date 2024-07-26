---

title: Monthly Update 20
description: Backer rewards, a boss fight, a new Little Buddy, and more!
image: /assets/images/devlog/2024-02-26-preview.png
---

# Monthly Update #20

Welcome back, Sleepyheads! We’re actually *overdue* for a devlog entry this month. Normally I post these on the last Friday of each month, but I had it in my head that the last Friday of this month would be this upcoming Friday, but in fact it was last Friday. It's on my calendar, but was just working away at *Little Nemo* tasks and didn’t look at the calendar in time. So this month you’re getting a Monday update.

We’ve got loads to get into, and probably plenty of spoilers, but also some cool backer rewards stuff to follow-up on, so I’ll post that up top here for those of you that are avoiding spoilers but want to see backer reward updates.

Alright, prep a cup for tea or whatever you like for sitting down with a nice long read because we’ve got plenty to get into this month!
 

## Pet and Backer Statues Finalized 🗿

Last month I showed off some Pet statues, and since then we got all of the Backer statues finished up as well (these are the **Regal Sleepwalker** busts), so here’s a peek at how the statues are looking in-game:

![img](https://i.kickstarter.com/assets/044/141/821/2f754c723253276c3ad07c356c21cd43_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=Bh%2FnIAcYu7dYPbSWxFOIhO6ASmHqJ5%2F5nNHBl5%2FxkJ8%3D)You can’t see all of the Regal Sleepwalker statues here, but have a peek at how some of them look in the Palace foyer

And here are a few of the Pet Statues in the Observatory. Last time you just got a peek at the sprite sheet, so I thought I’d show off how some of these look in-game so you can better appreciate them. It gets a bit dim in the Observatory (the curtains are drawn of course), so I’ll probably add some lighting for each of them to help them stand out a little better, but you can see how they fit in the environment and the sheen of the bronze nameplates.

![img](https://i.kickstarter.com/assets/044/141/825/ef4ce453b2c59644187b4c462626ba5b_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=dReblGRNbKXn0kVKUhdGgbFwI6gtikDnZ2wd06vleR4%3D)Nemo in the Observatory with a few of the Super Starry Sleepwalkers’ Pet Statues.

## Talking Heads 🗣️

Another thing to follow-up on from last month is how dialogue scenes are improving with the new portraits that João has been working on. We’ve been taking advantage of his speed at creating new art to allow us to have different moods for the portraits when reading a line of dialogue. Here’s a look at a quick test conversation to show it off.

![img](https://i.kickstarter.com/assets/044/141/833/20e3ee287a78a707fa1499e4f14cebf5_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=T7ONIw%2F%2BfTOljvyjb3VePRoywB%2F4K%2B9k7NXuXqJIu7o%3D)Here’s a quick test script I put together just to show off some of Nemo’s moods that are available for us to leverage in conversations.

I’m very excited about how these have turned out, and being able to have the portraits appropriately reflect the mood of the reader is kind of a game changer. I’ve also been making some subtle changes to the text appearance speed and the speed of the tweens to help make dialogue feel a bit snappier.
 

## Lost in Slumberland 🗺️

There’s a new feature I’m experimenting with and introducing in an upcoming build which I’d like to get some feedback on, and that is the **minimap**. Originally I had not intended to introduce this feature simply because I wasn’t convinced of the impact it would have on players. My experience in Metroidvania games that have minimaps has been that I tend to not use these (although possibly I’m sub-consciously using them to help reinforce my understanding of the geography). But a few thoughts and observations led me to consider this more carefully and I’m thinking including the minimap might be appropriate for *Little Nemo*. This would of course be something you could disable in the options, but when something is available by default, most players will leave the settings as they are.

![img](https://i.kickstarter.com/assets/044/141/840/b195f8529f3250aca839eb6a10f17454_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=m7Pz%2F8p8oA9AKNm3Yx3YFkErDH9OxJcF8CiwoJbenJ0%3D)

A zoomed-in look at a first-pass for the minimap. You can see rooms appear as they’re explored for the first time as well as important icons, all at a glance.

So I wanted to go over my own list of pros and cons for having a minimap in Little Nemo and ask you all for feedback (both generally and on the implementation that will be in an upcoming build).

Call me Rory Gilmore because here comes a pros and cons list:

**Pros**

- A minimap appearing in screenshots/videos/streams helps set context and expectations for people that are unfamiliar with the game.
- Players are more likely to understand that there is a map which they can access anytime they’re feeling a bit lost (so far I’ve tried to have Flip help reinforce this for the player, but I still see people getting lost without consulting the map).
- It’s a nice quality-of-life feature for people that simply have more trouble with navigation than others.
- It helps show off some of the map features that you may not notice otherwise because you can get the info at a glance, rather than having to pause and enter a map screen (eg. getting an at-a-glance understanding of the bounds of the current room and which direction you may want to head to find unexplored areas).
- It was actually very easy to implement (I got a first pass in the game with a few hours of work) due to having a robust mapping system already in place.

**Cons**

- Having a minimap up by default could risk the game feeling too down-to-business. Exploring should be fun, and the goal is for this to aid in that, but at the same time, you don’t want to help turn exploration into a chore the player is *compelled* to do. Essentially, I think this has the potential to change the “vibe”of the game.
- Implementing the minimap more properly will require a bit of design work to get it looking just right, and allowing it to dim when the player winds up in the lower left corner of the screen.

So tell me more about your thoughts on minimaps! We already discussed this a bit in the [Discord](https://discord.com/invite/9NymgSJAVp), but I’d love to hear your thoughts in the comments as well. Do you have strong opinions on which corner the minimap should appear (right now it’s lower-left simply because that is the only corner that doesn’t have any UI elements)? If you dislike minimaps, do you typically go into the settings and turn them off if that option is available? Lemme know down below!
 

## Timeline to Launch ⌚

As I mentioned before, this is something I want to touch on with each update. Things have been speeding up really nicely as I’ve been getting help with the art from João and I’ve also been getting help with level design and getting the entire world blocked in and accessible to backers with **Early Builds Access** 💾. I have a private production timeline that is very aggressive which I’m still trying to aim for, but it remains a bit of a lofty goal. I really hate to compromise on the things I’m working on, so it’s mostly just a matter of how much work I can get done each month. So effectively nothing to share on this front this month, but I hope all the updates we’ve got this month keep you as excited as I am for eventually finishing up production.
 

## Early Builds Access 💾

This month we got a new build up for the first time in several months. This area included a blocked-in Gumdrop Gardens including a boss, new toy, and a Guardian to rescue. It’s got plenty of rough edges, but I want to lean into this a bit more so I can provide backers with a build that has more unfettered access to everything as the rest of Slumberland gets all blocked in.

Look out for another update coming very shortly which will include the new dialogue portraits, the minimap, and some fixes for some of the most prominent issues that popped up. We’re also getting the Mushroom Marsh blocked in, so if not this update then the one after that will have a blocked-in Mushroom Marsh for you to explore along with a new toy (no playable boss in here yet though).

And talking about all of this dovetails nicely into talk of spoilers…
 

# Spoilers Abound ❗🙈❗

If you’ve played the latest build of *Little Nemo*, you’re likely already familiar with the boss encounter in the Gumdrop Gardens, but for everyone else I want to show off a bit of this character and talk a bit about her (without spoiling her larger story arc).

Nemo is off looking for Jules’ scepter, and we’ve heard that a large dragon has the scepter. But upon arriving, we find a mysterious character has already defeated the dragon and claimed the scepter.

![img](https://i.kickstarter.com/assets/044/141/844/5862c10796ba8d58b97ceb6ac4b6a076_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=JiUJHdpaGGB3jvpMIjKYFL2GkeKumWxXLkksv5O%2BFO0%3D)

Nemo finds a mysterious character that has defeated the boss of this domain.

Unfortunately, she is not happy with Nemo and will attempt to wake you up. This character is very much inspired by characters like Protoman and Hornet (I talked a bit about this in an [earlier update](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3992948) when I implemented the boss). She’s not your enemy, but she’s either testing your mettle or just upset with you enough to want to wake you up. She’s much too adept at combat to defeat, attacking her with your Yo-yo will only result in a parry and counter-attack, so you’ll need to make use of your new Bubble Wand toy to block her attacks.

![img](https://i.kickstarter.com/assets/044/141/845/eb29407c5e3145b702796e963e3e37ae_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=yeaAZTQ3GaoC7jcmucnzun50k0ZVialI%2B1Ami081ShE%3D)

Argemony is very fast and will counter-attack if you try to go on the offensive. You’ll need to dodge and block to triumph.

I won’t fully spoil the mechanics of the fight, but if you manage to win, you’ll learn her name is Argemony and she will take off after tasking you with returning the scepter to Jules. You’ll encounter Argemony more later, and there’s a lot of hidden depth to this character you may or may not explore as you make your way through Slumberland.

The VFX in this fight are still sketched in for now (and no SFX yet) as I’m trying to get better about roughing things in and then moving on and coming back to them a little later, just in the interest in getting everything to as playable a state as it can be as soon as possible.
 

## Pneumatic Tubes ⬆️⬇️

Here’s another new element that appeared in the latest build that I haven’t talked about in an update yet: pneumatic tubes. These were of course inspired by the glass pipes in Super Mario 3D World, but I’m looking to use them as a bit of a replacement for ladders. You often see platformer games include some kind of ladder mechanic simply because you want to allow the player to travel vertically despite their natural tendency to succumb to gravity. The problem that often pops up with ladders in platformers is that they tend to be a little boring (or as is the case with stairs in Castlevania, they can sometimes even be just plain annoying). So I thought a simple very-fast vertical traversal option of a pneumatic tube would do the trick. It winds up taking away *complete* control (rather than standard *partial* loss of control with ladders), but the upside is it makes that travel less annoying and it’s even kind of fun to see Nemo zip along at speeds you can’t normally reach.

![img](https://i.kickstarter.com/assets/044/141/855/3613b59df86297241bb3cf5af7445a6a_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=ahGClpUi2cUPucW4PlI0Fy7BbzyPhFhq2jMkdwrPIas%3D)

Here’s Nemo zipping up and down a Pneumatic Tube. 

I want to be careful of over-using these, but they’re great when you simply need the player to travel a long enough distance that requiring vertical platforming might be a bit tedious.
 

## Candy Tiles 🍭

So this is a relatively small detail, but I wanted to share it because it’s a cool example of João and I working together on new assets: we have a new hazard tileset for the Gumdrop Gardens. When I initially did the tilesets for this location, I wasn’t entirely sure what to do for hazards, and wasn’t sure if we would definitely them or not, but after blocking in the level it was clear we would want a hazard tile.

![img](https://i.kickstarter.com/assets/044/141/856/cfd8c9c2a4c76854c07366f9af7069ac_original.png?fit=scale-down&origin=ugc&width=700&sig=Igo4Z9xgnzHDdKVv0qN7AgsavWjCUh%2FeykwyQ7mABng%3D)João’s sketches for what a candy hazard might look like.

These are all really great, but it was easy to envision how the first option’s waffle cone texture underneath the frosting would allow the tile to look better and more interesting when next to more of the same neighboring tiles.

With a bit of interpretation and some helpful feedback from João, I came up with this tileset based on the first sketch:

![img](https://i.kickstarter.com/assets/044/141/868/754c634484b40f160316d542ef703a58_original.png?fit=scale-down&origin=ugc&width=700&sig=%2BHz3Hcs7jebLbzYiRNHgGMMQVia4OfVFFmJ0TTw%2FDSY%3D)Tilesets have several variations depending on how many neighbor tiles it has and in which direction, as well as some more common tiles have variations to prevent repetition.

And here’s how it looks when it’s actually used in-game:

![img](https://i.kickstarter.com/assets/044/141/873/f182571baba78f5beccce2608bc3cbfa_original.png?fit=scale-down&origin=ugc&width=700&sig=bPFpCemBUhAMSClkolVctQPI8FSjEOu8f6ze0BwbI8g%3D)Finalized candy hazard tiles. Don’t touch!

You can also see in this screenshot that the decorative wall tiles also got cleaned up a bit and I added the option to have top and bottom jagged edges (which you can see with the little “window” cutout in the wall).
 

## My Alien Monster 👹

I don’t have anything too exciting to show off for this just yet, but I’ve mostly wrapped up getting a new Little Buddy functional. This one is called “My Alien Monster” and is a hungry, little creature that you can carry around to eat small enemies. It’s a bit like a baby Yoshi in SMW (but it never grows bigger).

![img](https://i.kickstarter.com/assets/044/141/879/a2e2ebd7ecd059f2ded734ce3744ba95_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=Jd6SEpcs%2BY8q18Pg996HH4YgjcZq43cbHUqxu9P22sY%3D)A rough sketch of the monster’s walk animation

I want this to likely be the first Little Buddy you acquire in the game as it feels very potent at first. Being able to eat enemies means it’s hard for them to hurt you, but as you explore the world more and find other Little Buddies, you’ll likely want to swap out from this one because carrying him around can be a bit difficult (you’ll not be able to dangle for instance) and you won’t get any moons or candies from enemies when they’re eaten by My Alien Monster.

![img](https://i.kickstarter.com/assets/044/141/892/2f5d52547192d96bc7be9b5ee207497e_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=Mv1i8WfK8a5fRteMCwqOFICshoRKPz3dEOURLRWisnk%3D)

Here’s what the greyboxing phase looks like while getting the logic figured out.

In this gif you can see all the elements are in place, but nothing is animated yet (we just have placeholder sprites and the enemy sprite being eaten just kind of “sticks” to Nemo for now). I think it’ll be fun to compare this to how it’ll look when it’s all ready with animation and effects because I think all of those elements will make eating enemies much more fun.
 

### Greyboxing in Mushroom Marsh 🍄

We’re in the process of getting the Mushroom Marsh all boxed in and exploring the gameplay potential of the various gimmicks (bouncy mushrooms and mushroom gunk), what kind of enemies we want here, and what fun stuff we can do with the pluckables here (right now we’ve got a little bouncy bug that you pluck out of the ground and can set down to bounce very high off of, but you have to act quickly or it will burrow back into the ground).

![img](https://i.kickstarter.com/assets/044/141/900/a33a891ad8e3a026763d9872deee81f8_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=QOfGzjLClsjANklnPyky64RHBkfcg7eWgPBZbvfKxGA%3D)

Nemo playing on the mushrooms and jumping into a pool of gunk.

![img](https://i.kickstarter.com/assets/044/141/907/8b0d7005f7e9a974986bab479e637936_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=mIG%2FEbLZDt6u6JXflY6u%2BDjpDoTD3zWnWLLSrAWezZY%3D)It can get quite dark in some parts of the Marsh, but luckily the gunk provides some much appreciated light.

The Guardian of this domain is Wilfred (or just Fred). He’s been transformed into a Frog and you’ll need to defeat the Cordysect Queen to get his scepter back for him. Keep an eye out for new builds to get access to more of the Mushroom Marsh.
 

## Designing the Last Two Domains 🎨

I know we’ve already got lots in here, but I also wanted to share a bit of some of João’s latest work. We’re working on designing the last two domains’ environments, which are the **Crystal Caverns**✨  and **Nightlight City**💡domains. I’ll save the Nightlight City sketches for another time, but here’s a peek at a few concept sketches for the Crystal Caverns.

![img](https://lh7-us.googleusercontent.com/ef0d6ogfpqvLtO-WE3ny5zMbXmosu_qMBB554WatqOOHw5LOKQJh751CtDIlr4aqfgxEBNYhlWZGLyOPS1aAzVNy3z5n8NlB-u3rrSQmubhKjvsBZvILwyIV8XHFJKvRuDFVmxV2D2NxbJE2we5Iyc0)

And here’s a look at some various colors we were toying with for the general colors and feel of the area.

![img](https://lh7-us.googleusercontent.com/bk_HOVVBkc3sHN44-8s2u3pSk4U2aqKzqg_aS1XhJ-Uwg0WBhvXEA9652hIq9qx6iEmvIK2YUoL9UwuGcIDaJCRbm0nWa3ZHSUxyH7bGqPJj4ZCtLDXEzaFIOgBciH_glZQBUyykvrNmuP231sS_eRc)

Originally I was imagining cool blues for this area just because of its subterranean nature, but there are already a lot of domains in Slumberland that have predominantly cool hued color schemes, and this purplish red hue look unexpected, which is often a nice quality to have when you’re working with a very archetypical setting.

Creating the environments takes a good chunk of time, so it will probably be a little bit before we’re ready to share some actual screenshots of this domain. Stay tuned!
 

## Kickstarter Friends 💚

Before I wrap this up I just wanna take a moment to shout out an exciting Kickstarter campaign that will be wrapping up shortly, [Rollin’ Rascal](https://www.kickstarter.com/projects/curiomatic/rollin-rascal). They’ve already hit their goal by almost 3x, but I still wanted to call this one out because it’s looking really good if you’re into fast-paced 3D platformers. They also have a demo available to download so you can give it a try.

[![img](https://lh7-us.googleusercontent.com/69mx1SbG7IGcTTZcZMStUe47q3yccRPqygB6YIXxfd4r9cIk5oQ7xwzKCG6CtieZ6KamT7VDe7k-254JX-9WlYYopjJ7eSZ3hU9EBeTeJ8k8Q9S4y3AeCppSDS0cSn0Ym6Tx2ptMoh8sTGQWuRt8tfs)](https://www.kickstarter.com/projects/curiomatic/rollin-rascal)

*Rollin' Rascal is a love letter to high-speed 3D platformers like Sonic the Hedgehog with the dynamic interactivity of Super Mario Bros. Strap in for a thrilling ride filled with speed, excitement, and a cast of endearing characters—an experience that’ll delight classic speedster fans, while also introducing newcomers to the genre!*

And while you’re here on Kickstarter, why not head to the [Explore](https://www.kickstarter.com/discover/advanced?category_id=35&sort=magic&next_page_cursor=&page=1) page to check out what video game campaigns are live. You never know when you’re gonna find a project that is right up your alley and which your support can help make possible.
 

## Until Next Month 👋

Alright, that’s gonna be it for this month. I’m sorry for the delay in getting this out, but thank you so much for reading until the end. If you did make it all the way down here, don’t forget that I’d love to get your feedback on things in the comments down below or in the [Discord](https://discord.com/invite/9NymgSJAVp). Enjoy your extra day of February this year, and we’ll see you again next month for a March update!

-Dave

![img](https://lh7-us.googleusercontent.com/7ShzB82pGC9EmQb8NGG-k9nszX78N1Pvq4ZDeg-zWIojNwO2l_4wk0FSe6WzFM5M-sCOG-Xb4zznstYmWczma5zVPjZ41XuEmBodDzJQPwltydfGKbqqd2EaSHdamZUuHOJsY-wabmb9dmhIET0juzc)
