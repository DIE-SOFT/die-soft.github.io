---

title: Monthly Update 43
description: Update on the release timeline and remaining work
image: /assets/images/devlog/2026-01-30-preview.png
---

# Monthly Update #43 🥶

Welcome back for another monthly update, Sleepyheads! I think most of you that are just generally in the northeast of the US as I am, have been dealing with some very cold weather with lots of snow. Usually I would actually quite enjoy this kind of weather and would get out to do some snow-shoeing, but I’ve just been too busy getting *Little Nemo* ready for release. 😅

There’s much still to be done ahead of release, but it’s the last Friday of the month, so I wanted to make sure to take a bit of time to fill everyone in on where things are at with the game. And I know last month was a shorter one because of the holiday, but I’ve got lots to dig into this month: our release and post-release timelines, what I wrapped up this month, what’s left to do before launch, and a look behind-the-scenes at implementing sound effects in *Nemo*.

So grab a hot beverage and get comfy!
 

## Release Timeline 🕰️

We’re in the quarter of release now, so I wanted to share some details about the release timing with you all ahead of any official announcements. That way I can dig into the decision making process and give you all the fine details. As usual with this sort of early news, I just ask that you not share this info publicly (this is a **backers-only** update) so that we can use the news to help make a splash when the time is right (likely sometime later in February).

So the plan for the Q1 2026 release date has generally been: let’s join the February Steam Next Fest, that way we can do some announcements ahead of Next Fest, get some people playing and excited about the demo, and have some wishlist momentum going into a release immediately following Steam Next Fest. But there are a few things that have shifted the calculus a bit:

1. Steam Next Fest is coming a bit later in February again this year, which means a post Steam Next Fest launch isn’t until March.
2. March is pretty busy with both GDC and PAX East keeping everyone’s attention.
3. There is going to be a release immediately following Steam Next Fest in early March, just about the same day we were hoping to release, and which we need to avoid for reasons I can't share until later (it'll make more sense later on when I can explain).

So all of that means that releasing in early or mid March is pretty scary or problematic, so we’re going to be pushing all the way back towards the end of March. I’ll save the exact date for later because I think things are still in a state where they could change a bit, but I just wanted to give you a general idea.

I was originally hoping our release would be late February, but it’s looking like it'll be about a month later than I was thinking when I was sharing the Q1 2026 plans late last year.
 

### Release Plans 📝

So I want to dig back into the details of the release plans for those that didn’t read earlier updates, and just to reiterate. We’ll be launching the PC version on Steam and itch.io to start, and then we’ll give it a few weeks for follow-on work and bugfixes before moving over to getting the Nintendo Switch version ready. I think the process of getting things running smoothly on Switch and getting through Nintendo’s approval process will take a few months, so don’t expect the Switch version before sometime in summer.

I also wanted to warn that there may be some features I had planned the game to ship with which might not make the 1.0 release. Some of the stretch goals and milestones may not get finished up in time for release, I think the bestiary and artbook are the most likely to not make it in the game until just after release.

![img](https://i.kickstarter.com/assets/052/412/152/81d2f735b73e6e23e0c5026e7832f47f_original.webp?fit=scale-down&origin=ugc&q=92&v=1769802364&width=700&sig=kI%2Fo67lQl6Xv0qZsBZQ7SAZssa5NBbD8xEna401ecCQ%3D)Here's the graphic used in the original Kickstarter campaign to share the Milestones that were unlocked

If you’re already waiting for the Switch version, you don’t have to worry about this stuff not being included there. Part of the reason I wanted to push the Switch release back in the first place is to make sure the game got into an ideal state before launching on the eShop. So the Switch port will be finalized once all of the game, including stretch goals and milestones, are all wrapped up.

The goal right now is to make sure things are all polished up and you have an exciting and relatively bug-free game to play by late March, and from there we’ll be wrapping up any of the smaller missing pieces and the Switch port.
 

### What’s After the Switch Port ❔

It’s probably worth also touching on what else will be next when the Switch port is done and has had time to have its bugs all worked out. Depending on how the game sales go, that’s when I’ll start looking into doing further ports and localizations.

*Little Nemo* has been built in Unity, and it has the necessary features it needs for localization (to make it relatively easy that to do, that is), so both of these are things I’d like to pursue if it looks like it will be worth the time and effort invested. Localizing to many regions and doing Switch 2 and/or PlayStation ports could take up plenty of time and effort, so I don’t want to say for sure about those until we see how the sales are going. My hope is that it looks like it would be a clear benefit to expand the consoles and regions *Little Nemo* appears on and in, because while I am excited to think about whatever is next after *Little Nemo*, I’d really love to take advantage of the fact that I’ve built the game to be ready to get localized and ported.
 

## What’s New? 📰

So that’s all the latest on how things are shaping up for the next couple months and, possibly for the rest of the year. But what have I been up to this month? Oh man, there is lots to talk about here. I feel like this month I got done as much as I like to *imagine* I can get done in a month. But the reality is that to achieve it, I ended up working 10-12 hour days most of this month, often including the weekends as well.

But as I crack on towards release, the reality is that any polish and features I don’t finish up before we launch, will mean it doesn’t get in until after release, and obviously the game needs to make a good first impression. So I'm just working hard to get everything as polished and ready as I know it can be. I’ll just briefly touch on each of these things that I worked on this month since there’s a lot:

**SFX**
This month Jonathan finished up another round of sound effects, this time covering everything in the game that didn’t already have sound effects, and revisiting some things that I didn’t love (I have a stock sound library which I've used for some placeholder audio, some of which have been in there for a long time). Now everything in the game has SFX, and it really makes a big impact, especially for some of the later enemies and bosses which playtesters were having to play with no sound effects.

**Lore Records**
I went ahead and populated every lore record in the game. Cid has written up a really cool general outline of the character and world lore, and it was really fun to take that and make a bunch of little pieces of that lore which players can find to help them assemble an idea of what’s going on under the surface and figure out how to get the best ending possible.

![img](https://i.kickstarter.com/assets/052/412/315/03fe27751f8ee4835d9fb0d095e4568d_original.png?fit=scale-down&origin=ugc&q=100&v=1769802992&width=700&sig=b0D2RoDYCzJErmW3JDnpW49hnxsaYnOk0%2FoEPtK259Q%3D)Panda Tuxpin ready to read a Lore Record for Nemo

Similarly, I took Cid’s ideas for the domain themes and wrote memories for the remaining Guardians which didn’t yet have them. Hopefully Cid will have some time to revise what I’ve written, because I think they do a much better job writing these than I do.

**Level Design Polish**
I have been accruing a lot of level design revisions and polish from playtesting that had needed to be done. For instance, what we call “the gauntlet” portion of Gumdrop Gardens (an area you get dropped into and can’t back out of, and is a fairly linear challenging area you must clear to open a path to the boss) was identified as much too difficult for quite some now. Other areas were simply a bit too boring in my opinion and needed to get revisited just to add a little something to them. But in general, I think the world of Slumberland is much more exciting now. I’m sure I’ll continue polishing things up, but it finally feels like it’s in a shippable state.

![img](https://i.kickstarter.com/assets/052/412/359/cb3a4f60e3223fac294eded30336f4e9_original.png?fit=scale-down&origin=ugc&q=100&v=1769803172&width=700&sig=Xb%2BpLnp%2FJYCzSYKOzmpHt4rvfxA6Y6IQnzUpJ%2B809OU%3D)Don't look too closely if you don't want spoilers, but here's a look at this portion of Gumdrop Gardens after revisiting it to make things a little more fair

**Boss Difficulty**
I tuned down the difficulty of some of the bosses based on playtesting results. The most egregious offender was the Cordysect Queen. I’m actually quite happy with how this boss has turned out, but it had a pretty tricky problem: it was too hard for less experienced players, and it was too easy for more experienced players. That’s completely backwards, so I had to tune the difficulty in a way to make it even harder for advanced players, but otherwise easier. The reason that’s even possible is because that boss has a bit of a *shortcut* that you can leverage if you’re clever and handy with the pogo stick. I really liked having that shortcut (it’s been an essential part of the boss’ design since the inception) but I simply made it more difficult to execute. And then I also made the boss' normal patterns a bit slower and made it throw fewer projectiles at the player.

While I was tuning the Argemony boss difficulty, I had a realization about some of the game’s projectiles: the targeted, arcing projectiles that get lobbed at the player would benefit greatly with a quick targeting reticle to appear where they’ll wind up. The result looks like this

![img](https://i.kickstarter.com/assets/052/412/434/6a21a1f543e8669daa40b55c0ddd0c38_original.webp?fit=scale-down&origin=ugc&q=92&v=1769803545&width=700&sig=%2BIy07tdf6m2UmhkJbVZCOYPVXQypuLEuvc8iDqLMYWA%3D)A Mushroom Mortar firing spores at Nemo

The original intent was to make these attacks feel more fair, but I think ultimately it also makes them more *fun*. It’s funny how little things like that will sometimes just completely change things to feel very different and more interesting. 

**Finish Up Missing Content**
There is stuff that wasn’t done in the last playtest, including: enemy and boss sprites in the Palace, Frog and Bat PJs didn’t actually have a buff implemented yet, the game’s ending flow and “true” ending flow weren’t properly functional, and we didn’t even have credits yet. I got those all taken care of this month. And speaking of the credits, this is a good time to make sure **you** (yes you, the Kickstarter backer reading this) appear in the credits correctly! Many backers never filled out how they want to appear in the credits, so if that’s you, please get in touch so I can make sure you appear.

If you want to **verify you appear as expected in the credits**, I’ve uploaded [a video of the Kickstarter portion of the credits](https://youtu.be/7dq3n73zplc) for you to check. Also the credits are now available to select from the main menu, so you’ll be able to check in-game when our demo is available in the upcoming Steam Next Fest (the credits allow for scrolling using the right thumb stick so you can zoom around to find where your name appears).

**Ranking System**
So this could be a much larger topic, but I will save some of the finer details for a deep dive perhaps next month once I have time to implement more of it. But I wanted to share at least what I got done recently.

If you’ve played a build or demo of *Little Nemo* in the past, you’ll know that Nemo has a Moon Meter in the HUD which fills up a bit with each moon you collect. When you fill it up, you’ll heal up, and it rolls over back to empty. If you were already at full health, it would just roll over and you wouldn't get anything for that healing effect you didn’t need. Bummer.

But now, I’ve got the core of the ranking system implemented, so when you fill that meter up, if you’re already at full health, it will keep filling up a second time and you’ll see a “Rank Up” effect instead of a “Healed” effect. Now that you’re ranked up, the enemies get a little more difficult. If you take a hit, your moon meter will drop back down and you’ll “Rank Reset”, bringing the enemies back to their normal difficulty.

![img](https://i.kickstarter.com/assets/052/412/719/624cced8e699a95a75bdd6b54fca0148_original.webp?fit=scale-down&origin=ugc&q=92&v=1769805203&width=700&sig=2HQWj7MVeMYFztLJFfJAI6fOeY5MUBCU6ZyZVcNbSUM%3D)Nemo collecting moons to fully Rank Up before taking damage and resetting back to normal

And if you manage to fill up the Moon Meter a second time while Ranked Up, you’ll get a “Max Rank” effect instead. Now the game gets quite a bit harder as enemies emit “bullets” in all directions when they’re defeated, and bosses will be ranked up as well. There are also some fun effects you’ll notice while at Max Rank.

![img](https://i.kickstarter.com/assets/052/412/787/32b5ebdcb4ecee0779ab101b68ebb852_original.webp?fit=scale-down&origin=ugc&q=92&v=1769805506&width=700&sig=yavnfGGD5j9pXNgy%2Beew6hrn8NkO5BkLkTcUKT9a3yo%3D)Nemo's spin jump doesn't actually do anything, it's just for style points and to help reiterate that you're at Max Rank

So why would you want to Rank Up? Well, if the game is a bit too easy for you, you’ll naturally wind up with the enemies getting tougher. This helps the game meet you where you’re at. But also, there are some benefits of Ranking Up: notably, you’ll get more candy from enemies, and at Max Rank you have the speed buff that you can normally only get from the Quick PJs.

So while I have this system and the Ranking side effects all implemented, I need to make sure all the enemies and bosses can Rank Up into their more difficult variants as well. Just as a proof of concept for myself for how it would work, I implemented the Burrchin Rank Up. Burrchin simply gains the ability to jump when Nemo jumps, which you can see in the animations above.

So I’m really excited that this is finally in the game, and eager to work on all of the enemy Ranked Up variations I designed and wrote up in my Bestiary doc already.
 

## What Remains? 🔎

So that’s a lot done this month, but that still leaves plenty that I still need to get into the game before launch. Here's what I'm gonna be working on this month:

**Kickstarter Rewards**
The Wallpaper Pack, Instruction Manual PDF, and Artbook PDF aren’t done yet. Obviously all of these benefit from waiting because they could be subject to change with the game still getting tweaked and worked on, but we’re ready to move forward with these now. The Instruction Manual and Artbook have some preliminary layout work done already, but there’s more to be done. The Instruction Manual is my top priority of these rewards because obviously it’s something that’s really nice to have *before* playing the game, whereas the Artbook will be full of spoilers, so you’ll want to save that for later.

**Stretch Goals**
Both the Instruction Manual and Artbook have their PDF form for the Kickstarter Rewards, but they also need to be done before their **in-game** version can be made ready. The Artbook is designed to be found throughout Slumberland page-by-page, but even if that does have to get pushed back to after release, I already have plenty of hiding places ready for those pages. The in-game bestiary doesn’t have a PDF counter-part, but I think ultimately it’s actually more work because it will require more custom UI work. That’s why this is the one I think is most likely to get pushed out to after release.

**Achievements**
I believe I’ve mentioned before, these are all designed, and partly implemented, but I need to go through and wire things up and actually test them out with Steam to make sure they work there. Something I’d love to do post-release and to prepare for the Switch port, is to have in-game Achievements. Since Nintendo does not have an Achievements system UI, if I want Achievements in the Switch version of *Little Nemo*, I would need to offer all of that myself in-game. It’s definitely doable, but UI work is always slow going in Unity.

**Soundtrack**
Pete is still putting the finishing touches on the soundtrack, and we’re working out the details of making the soundtrack available to the backers that have it included in their tiers as well as for people that are interested in buying it separately.

**Ranked Up Enemies**
As I mentioned above, I need to do the enemy and boss variations for players looking for more of a challenge. These will also probably want for their own playtesting with more skilled players once it’s all ready.

**Continue Playtesting and Polishing**
And of course I’m going to be juggling all of this with collecting feedback from playtesters and using that to polish the gameplay experience, fix bugs, and improve performance. I meant to do the full start-to-finish playtesting this month, but kept thinking “oh *this* should really be in there before playtesting” and “oh *that* really needs to be in there”. So I’m only just now getting that build ready, but looking forward to it first thing in February.

**Miscellaneous**
I need to finish up the end-of-game dioramas that I want to work into the game ending flow (I shared a bit about this back in [Monthly Update #38](https://diesoft.games/2025/08/29/nemo-monthly-update-38.html)). And João is working on some decoration sprites for various domains throughout Slumberland. He’s making some really cool stuff that is not at all essential, but will help make the world more visually exciting and interesting than it already is. There’s also a bunch of other things I’ve kind of added to the scope of the game in my head and in docs, but aren’t critical (and could get pushed to post-launch): Chromatic PJs (oooh what’s that?!), more meaningful interactions with some of the Guardians and your progress with some of the collectibles, a way for Silas to direct you towards secrets you haven’t found yet by giving him candy, and of course the in-game music player I’ve mentioned before (tracks are intended to be unlocked by finding the collectibles in Slumberland).

So that’s still plenty to keep me just as busy in February and March as I have been in January, but it’s super exciting to be in a place where it feels more like I’m putting a bow on things rather than rushing to just get the game into a fully playable state.

Well that’s enough for the very topical *news* about where things are at with *Nemo*. Let’s take a deep dive look at a fun behind-the-scenes aspect of the game’s development. And this month I want to look at something that has been suggested: the game’s sound effects. Specifically I’m gonna dig into the process here, which is maybe a bit more interesting because this is something I don’t do myself, and so I’m working with Jonathan Baken on all of this stuff.
 

## The Sounds of Slumberland 🔊

So in this update, what I want to talk about is the *process* of getting the sound effects created and implemented in the game. But before I get into that process, it would probably help for me to give some context about the systems I’ve designed for the sound in the game.

### Audio Systems

**Sound Channels**
In *Little Nemo* there is one sound channel for the music, and then four separate sound channels for the sound effects. They are broken up into interface, voices, and then two diegetic channels: ambient and the default diegetic SFX channel. That last one is probably what one thinks of when thinking about game sound effects, but as you can see, there’s a lot more to it than just that.

Here’s a look at Unity's Audio Mixer panel:

![img](https://i.kickstarter.com/assets/052/412/872/0acaf4a9f294883f945e86de72762deb_original.png?fit=scale-down&origin=ugc&q=100&v=1769805954&width=700&sig=ezuvfaGbxvxgHuXdm1l3NU0pBNCmngJ%2FquQLLk4YNao%3D)

And here are the levels that are presented to the user in the settings so that they can adjust the audio:

![img](https://i.kickstarter.com/assets/052/412/879/49887c9388e9d21852d3fc088ce07eba_original.png?fit=scale-down&origin=ugc&q=100&v=1769805995&width=700&sig=kela%2FbaHfvzO6rg15EnH2iH6j8IJLCSZDfNNIfiamwk%3D)

The sorting and nesting of the channels allows us to break them out for distinct user-adjustable volume levels, and it also provides us with differing audio effects for each channel.

**Diegetic Sound Effects**
The most interesting of these are the diegetic sound effects. That channel has two filters, reverb and lowpass, whose settings get adjusted dynamically as the player moves throughout Slumberland, based on the environment they’re currently in. This allows us to produce a variety of effects like making an area sound more cavernous or enclosed, or making it sound like we’re a bit underwater. The sound effects themselves don’t need to know anything about this, it will happen automatically to the entire channel as needed, so each sound effect shouldn’t worry about trying to fit a certain acoustic space.

These diegetic sound effects get spawned into the world based on where the sound occurred. This is important because we also fade and pan a sound effect based on its location relative to the camera.

![img](https://i.kickstarter.com/assets/052/412/916/90b73c5b4cbebf96ecbe2298815dae3d_original.png?fit=scale-down&origin=ugc&q=100&v=1769806198&width=700&sig=pwh9akFKoAJb%2BwmaloSPSncyGPp3wggJn9aamWkg3KM%3D)These sound effects on camera will be at full volume, while the one just off camera on the right will be quieter and panned slightly to the right ear

**Voice Sound Effects**
The sound channel for the voices has a lot more filters available to tweak. But rather than being location specific, these get tweaked based on whoever is currently speaking. Each actor has a defined voice, which is a combination of audio clips (one for each letter) and parameters for the channel’s filters.

**Interface and Ambient**
The interface and ambient audio channels are a bit simpler as these don’t need any type of filtering or spatial considerations. These sound effects just get slotted in pretty simply. And for clarity, ambient audio is the stuff you probably don’t even know is there: the very gentle sound of wind in the Dreamswept Plains, the gentle trickling of water from nearby fountains in the Palace exteriors, the distant din of car and foot traffic in Nightlight City.

Okay, so with that context set, what does the process actually look like?
 

### SFX Implementation Process 🔨

**Documenting**
It all starts, of course, in a document. I will create a list of sound effects that are needed, broken down into groups (by enemy or character for instance). Here is where I try to convey what we’re looking for exactly and some in-game footage that Jonathan can use both as reference, but also to test his sounds by syncing it up with the video and making sure it feels right.

![img](https://i.kickstarter.com/assets/052/412/954/d82e0f9fb8b9cd9854e010fedaf010a2_original.png?fit=scale-down&origin=ugc&q=100&v=1769806351&width=700&sig=bT3QH4Jcl7tmrhHd4Z6NmJTSdgtxTDuRTOHZ%2BwPmlRY%3D)Here’s a pic of the most recent doc I sent to Jonathan that we’ve been working from

**Making the Clips**
From here, Jonathan will create sound effects for each specific item I have called out, usually with several different versions to try out. Usually at least one of these will be perfect, but if not, I can mark it in our shared document that it needs further revisions. I can’t say too much about his process in this step, but if anyone is interested to know more please let me know in the comments and I can talk to him and get more details about how the .wav files actually get made.

**Implementing in Unity**
When I’m testing out new sound effects, ideally it’s a simple use case of “this sound fires whenever this thing happens”. Those are typically very easy to implement, and it looks something like this:

- Bring one or more .wav files into Unity as Audio Clip assets.
- Create a Sound Effect asset, which uses those Audio Clips. If there are multiple clips, it’s typically something like footsteps which want several variations so that we can randomly select one each time the sound effect is used. This Sound Effect asset is important because, not only can a sound require multiple Audio Clips, but it also has associated data such as the playback volume.
- And finally there’s the triggering of that Sound Effect in one of our few most common ways: include it in a effect prefab (these are our effects which are generally used for effects that have some visual element), or include it in an object’s sound effects collection to be referenced from that object’s Animator.

That’s the general idea for most sound effects, but even here I’ve glossed over some details, so let’s take a closer look.
 

### The Complexities of the Implementation Step 🔍

In the above description of the implementation, the third step made things sound pretty simple, and it often is when we’re just attaching a single, momentary sound to a visual effect or playing it in a specific part of a character’s attack animation for instance.

But often sound effects have more particular needs. Perhaps it’s some kind of looping audio that will need to neatly fade in and out as desired. Or maybe it is a simple momentary audio clip, but it’s important that the audio stops immediately if the character that emitted that sound is destroyed. For these more specialized use cases and considerations, I’ll typically develop a minor system for how to implement them. We rarely ever have to do anything a single time, so if I find I have to do something unique with a sound effect, there’s a good chance I will later need to do something similar in another scenario.

So here are a few different scenarios for more specialized audio needs that are kind of interesting:

**Proximity Audio Loops**
Oftentimes when something has some looping audio component, it risks becoming a bit annoying or overwhelming. My solution for these scenarios is to have the volume of the sound effect be tied to Nemo’s physical proximity to the collider of the source of the audio. I first used this to introduce a threatening *hum* that comes from the Oblivion (it is also paired with a visual effect, slightly over-contrasting the screen as the sound gets louder), but have since used it in several other places. The solution was fairly complex to build out once, but now it’s just a matter of adding a ProximityAudioProxy component to an entity which references a Sound Effect asset.

![img](https://i.kickstarter.com/assets/052/413/010/6fb9a3ed0c93bd99be95119c4d5bf7ae_original.png?fit=scale-down&origin=ugc&q=100&v=1769806594&width=700&sig=hh74IpEkUxx4vDpToaTkGrJ1Kw%2BqbPangaIZxfwX%2BWU%3D)While you can't hear the humming in this screenshot, you might be able to tell that the contrast is increased due to Nemo being so close to the Oblivion

**Looping Audio More Generally**
Looping audio in other scenarios has important considerations about when and how it starts and stops. For simple audio loops, the Sound Effect has a “Should Loop” property you can check. That loop will continue until told to stop or the entity responsible for emitting it is gone. But loops suddenly starting at full volume, and then later abruptly ending, tend to sound bad. So in a lot of cases we use a custom subclass of the SoundEffect which is a FadeInOutLoopingSoundEffect (it does what it sounds like it does). I used this very recently while working with Jonathan’s sound effects for the Crystal Cruncher boss’ idling engine noise. The sound effect is fairly loud and helps communicate which sub-phase you are in (is the core vulnerable or not) based on whether or not it’s running. But if we just stop the sound without fading it out (even very briefly) it’s very jarring.

**Surface Effects**
Another common need is a sound when something collides with a floor or a wall. This gets a bit more generally into our Surface Effects systems, which also includes visual effects like having different bits of grass, snow, or dust kick up when walking on a surface, but without going into those details, we can simply hook into that system to specify that some objects should make sounds when making horizontal and/or vertical collisions. A good example of this is the breakable gems which appear in the Palace. In an effort to communicate that they can and should be shattered, they make a crystalline sound whenever bouncing off a floor or wall.

![img](https://i.kickstarter.com/assets/052/413/047/fc9a8e8abbfb03f1db274438163e73f3_original.png?fit=scale-down&origin=ugc&q=100&v=1769806772&width=700&sig=hjrciaEp41SgqJYn8LiylblrG9jdb%2FENptItUlYGb%2FM%3D)Here's another in-editor screenshot in which you can see the gem emitting a sound effect right where it's hit the wall

There are probably some other minor variations of how the diegetic sound effects get implemented, but I think that helps give a sense of how much their implementation can vary. The sound effects used for interface elements, ambient sounds, and the voices are all much more straight-forward. Interface sounds are typically immediate and momentary, ambient sounds are just looped with the volume attenuated based on how much screen space that type of environment takes up, and voice sound effects are all implemented in the same way so that I can just slot new clips in for new voices.

But hopefully that helps paint a picture for the general workflow and process that goes into getting sound effects into *Little Nemo*! Let me know what you thought of this deep dive. Did I go into enough detail, too much detail, not touch on a particular aspect you’re more curious about? These are fun to dig into so I’m happy to share more details!
 

## That’s it for this month 👋

I ran very long this month, so I’m just gonna wrap things up here. I hope everything about the release and post-release plans make sense and feel fair for all of you backers. I’m really excited that we’re so close to getting this into your hands! Make sure to stay tuned this month for some more public announcements regarding release and our inclusion in Steam Next Fest (and thank you for keeping release info a secret for now)!

Stay warm, Sleepyheads. See you in next month’s update if I don’t see you before then in the [Discord](https://discord.com/invite/9NymgSJAVp)!

-Dave

![img](https://i.kickstarter.com/assets/052/413/067/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1769806871&width=700&sig=BwA3ivbhoTA86N0CQpYhUkBNJvDRefBt8J6z1ArZG5w%3D)
