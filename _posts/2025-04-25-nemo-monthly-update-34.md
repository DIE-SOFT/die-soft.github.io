---

title: Monthly Update 34
description: Difficulty options, attract mode, and a look at the Palace
image: /assets/images/devlog/2025-04-25-preview.png
---

# Monthly Update #34 🌱

Welcome back, Sleepyheads! It’s finally properly spring around these parts. 🌞 I hope you’re also having some wonderful weather wherever you happen to be. This month’s update is quite long, so let’s get right into it, and I’ll start by talking about where we’re at with our timeline…
 

## Timeline Update 🕰️

I have a lot to talk about with respect to the Timeline Update this month, so I’m gonna break this down into sub-headings this month.
 

### Production Timeline ⚒️

I haven’t done this break down in a little while so it's probably good to revisit it. When I’ve broken this out into major areas that needed completion before it was these three points:

- Level/world design that remains
- Enemy and boss implementations that remain
- Environment design for the last two domains

Since then we’ve finished up the environment for the last two domains, and this month I’ve been finishing up the level/world design. So that means our last big production task is finishing up the bosses. Not every dream domain has a boss. Some areas instead have what would best be called “quests” that you’ll do instead to rescue or enlist the help of that domain’s Guardian. But for those that remain, we’ve got them in various states of completion.

Once those bosses get done, we’ll be able to properly say the game is in a Beta state. All of the content will be there, it will be a matter of playtesting, fixing issues, and developing some features that have been earmarked but aren’t yet in there (eg. bed fast travel and ranked up enemy variants).
 

### Release Timing 📅

So with the end clearly in sight, I’m sure you’d like to hear more about the release window, but we’re still figuring that out. We’re about to head into the summer game season when game companies will be announcing new games, launching games, and we'll even have a new console launching this year (!), so I think we’re gonna learn a lot about what the gaming landscape is gonna look like for the near future and that sort of stuff will impact how we’re thinking about timing.

One point I want to touch on here is how the gaming landscape affects our release window. Typically when talking about this stuff, it’s more focused on the work I need to do to finish the game, or coordinating with third parties such as hired marketing help or platform shareholders, but there is another concern worth discussing, and that is the landscape of other games' releases.

For those of you reading this, as Kickstarter backers, you’ve already happened to come across this tiny indie game one way or the other. But there are many others like you out there that just haven’t happened across our game yet. We hope to reach these fans-in-waiting as we get closer to launch by hitting “press beats” (these are just opportunities to talk about the game such as a new trailer dropping or the game’s release impending). And the way we reach them is by getting people with large audiences talking about and/or showing off the game. This means influencers like press outlets, streamers, and YouTubers. Those influencers have limited bandwidth, so the more exciting game releases and game news there is, the less room there will be for them to share details about our game.

So it’s with that in mind that we’re trying to be very thoughtful about the timing of our release window so our news doesn’t get occluded by other news (often much bigger news such as AAA releases which have huge interested audiences). It probably sounds silly to some of you that would never play a GTA game, but it’s with these things in mind that we have to be careful about the release timing of something like GTA 6 even though we’re an indie, cute, metroidvania game. In plenty of cases our audience *will* overlap and force them to make a purchasing decision, but even in the cases where it doesn’t, we’ll still be competing for general audience attention.

So this is all to say, we have to be very thoughtful about our release timing, and the ultimate release window could very well wind up depending as much on this stuff as it does on how far along the game’s production is.
 

### Switch Release 🎮

Also this month, I wanted to follow-up on the topic I discussed last month about decoupling the Switch port from the PC release on Steam and itch.io. The feedback I heard from everyone was very supportive (thank you to everyone that chimed in 🙌) and you all seemed to get behind this idea to ensure that the Switch release comes out of the gate as polished as possible. So that is now the definite plan for the Switch release: we will target a Switch release some time after the PC release (likely a few months after given just necessary delays that come from getting approval from Nintendo in addition to work that needs doing). This will help ensure that the Switch gets a version right out of the gate that has the benefits of finding and fixing any bugs that don’t show up until we hit scale (unfortunately there are just some software bugs you don’t find until you have thousands of people playing).

Okay, that’s everything for this month’s Timeline Updates. I’m sorry, I know that’s a lot of text to essentially say “we’re still not ready to share a release window yet,” but I want to make sure you understand why these things are still in-the-air. Okay, let’s get into what I think is the more interesting topic of…
 

## Things we worked on this month ⚒️

I’ve got some interesting spoiler-free stuff I want to show off and chat about this month. But when I do get to the spoilers below, just be forewarned that they’re **very late game spoilers**, so you may want to avoid them (so look out for that warning down below).
 

### Difficulty Options 📊

Often when playtesting the game, I get to see players with a wide range of gaming experience playing the game, and it has really driven home the need for accessibility and difficulty options. One thing I’ve been intending to add for some time now, is health scaling. For players such as myself that have experience with 2D platformers and are quite adept, the default 3 hearts is more than enough, and in fact, we’ll likely try to make the game harder by Ranking Up. But for most players, the game is designed to hit a sweet spot where 3 hearts is just the right amount of health for the game to provide a fun, but not oppressing, difficulty (for a bit more on the 3 health system, I talked about it back in [Update #21](https://diesoft.games/2024/03/29/nemo-monthly-update-21.html#lucky-coins-) when discussing Lucky Coins).

But we also have players that will simply encounter too much frustration if they only have 3 hearts. And for those players, I want to give them the means to tailor the difficulty by adjusting their health.

![img](https://i.kickstarter.com/assets/049/038/698/53eafd23e40a9a7114c659bb9347e3e3_original.png?fit=scale-down&origin=ugc&q=100&v=1745583871&width=700&sig=Fe9u79od9ij7wzUiBR3fNyOl%2Fs3HJtCx0lSMl0Z%2BYBw%3D)The difficulty options screen in the Settings menu

Previously, we had the Time Scale option under Accessibility, but I’ve decided to move it here into a Difficulty Options section and disable it by default. When you start a new game, or go into Settings > Difficulty Options, you’ll be able to choose from a few difficulty options.

![img](https://i.kickstarter.com/assets/049/038/711/384e662ace0c13e4b40f6746705c5166_original.png?fit=scale-down&origin=ugc&q=100&v=1745583959&width=700&sig=1ayUAZLQBinDGfjnWDK6GVOU5Q9U6MmbzMtw7d%2Fps8Y%3D)You can select from 3 different difficulty levels

This gives a simple way for people that know they like their games to be a bit easier to just immediately opt into having twice as much health. If you select "Easier", the custom options are still disabled, but the health setting is set to “Doubled”, meaning you’ll have 6 health instead of only 3.

![img](https://i.kickstarter.com/assets/049/038/743/ec447e3a4fc40ad8278f12c7ae603366_original.png?fit=scale-down&origin=ugc&q=100&v=1745584172&width=700&sig=V1dwxby2hxPWytxrfUAZIiTa7TVFJQqCWxhgbRcjtK4%3D)You’ll still only have 3 hearts in the UI, but they can tick down in half increments when your health is doubled at the Easier difficulty level

Some players will still find this challenging to an un-fun degree, whether that’s due to unfamiliarity with the play experience or motor function difficulties. Whatever their reason, I want people to have plenty of options, so those players can select the Custom difficulty level. With this option selected, you then have even more health options including Infinite Health and Invulnerability.

![img](https://i.kickstarter.com/assets/049/038/851/89ef69c2b1e40ee70bdcd882babb8793_original.png?fit=scale-down&origin=ugc&q=100&v=1745584756&width=700&sig=fdyrsNIEW6CRF3FPPFAJ4zim7igyDKDO06TZbjuIvPE%3D)The Health Modifier options gives more ways to adjust your health if you select the Custom difficulty level.

And this Custom difficulty level also gives access to the Time Scale slider. Previously this was our primary difficulty adjustment tool, but I think ultimately the health adjustment is a better difficulty scaling tool, and I think the Time Scale is better suited for players that have more custom needs.

![img](https://i.kickstarter.com/assets/049/038/874/73f21c5ba628629c98dab5be85037a80_original.png?fit=scale-down&origin=ugc&q=100&v=1745584870&width=700&sig=wgEb6FMyJz%2Fz03vQd1ab3pzTbxjxxc4DNHQ%2BdfLcIh8%3D)With the Custom difficulty option selected, you'll have access to more ways to tailor your experience as needed.

I know how it is when there is an option like this and you might feel incentivized to use it, even if you’re capable of beating a challenge without reducing the difficulty. And to that end, your save slot will track which difficulty options you’ve used and they will be displayed on your save slot. You can of course beat the game with any of these difficulty options, but if you can do it on the default setting, you’ll see that reflected on your save slot. There's not necessarily any reward for doing so, but you'll have that success reflected in your save slot. I'll share some screenshots of that when the UI is all wrapped up.

Additionally, one thing I plan to do with this difficulty system is to disable the Rank Up system when you’re not on the default difficulty setting. The Rank Up system is intended for players that want to make the game *harder*, so I think it makes a lot of sense to disable that for players that have explicitly opted into an easier difficulty setting. We’ll certainly have some achievements tied to the Ranking system, so that gives more incentive for players capable of playing at the default difficulty, to stay at that level.

Something else I should point out about this that is a bit interesting is that, unlike all other settings, these are not global. You can only affect the difficulty options for the specific save slot you have loaded. That probably seems like a very obvious thing, and it is, but I still wanted these options to appear in the Settings menu, which means you can access them from the main menu before you've actually selected a save slot. So if you do visit this settings screen from the main menu, you’ll get a message explaining why the options are disabled.

![img](https://i.kickstarter.com/assets/049/038/914/abf932a842be42796bc9480ba5870d13_original.png?fit=scale-down&origin=ugc&q=100&v=1745585142&width=700&sig=tUm0zcGhSufAwkwyB%2BjdrGHXoa6gObVD0U8fNncApMg%3D)The difficulty options are disabled when selected from the main menu

Ensuring these are not global will be helpful for cases where we have multiple players on one system/user, or just in cases where a single person would like to try out different difficulties in different save slots.
 

### Attract Mode 📽️

One of our Kickstarter stretch goals was doing an animated intro (you can see some stills from it in an older update [here](https://diesoft.games/2023/11/24/nemo-monthly-update-17.html#animated-intro-milestone-️)) which would help set the scene and get the player excited to hop into the game. This doesn’t play when you select a new game, but rather at the title screen as an [attract mode](https://tvtropes.org/pmwiki/pmwiki.php/Main/AttractMode). This month I finally got around to actually building the attract mode logic. I can’t really show it off easily here, but it’s sort of interesting technically, so I’ll do a quick breakdown of how it works:

- When we’re on the main menu, start a countdown timer. Reset this timer anytime a different menu option is selected, and cancel the timer entirely if we’re not at the root of the menu (we don’t want attract mode kicking in if you’re looking at the game’s settings after all).
- Once the timer is complete, then we start fading to black, but if we press any buttons at all during this time, we’ll cancel and go back to step 1.
- If the fade to black finishes, we’ll load our attract mode scene, which is just a simple video player. Once that video finishes up, we’ll just transition back to the main menu (which starts out with the camera looking at Nemo in bed before panning up to the night sky and main menu).

Right now I just have a gameplay montage I threw together, but ultimately this will be the animated intro (with bits of gameplay seamlessly slotted in) that helps set the scene for players. I’ll share that video with you all when it’s ready, but I have been waiting until the game was mostly production complete so that I have a wide array of gameplay bits to choose from to show off.

And one small bug/oversight that I fixed while I was working on this was ensuring that videos use the correct volume levels based on your global settings. Previously, the DIE SOFT logo at game launch would always play at full volume, but now it will appropriately respect your Full Mix and SFX volume settings, and the attract mode video will respect your Full Mix and Music volume settings.
 

### Special Item GET ✨

This is a small detail, but I wanted to share it because it’s something that had been bugging me for a while, and I think my fix turned out pretty nice. The detail is the visual effect that is applied to unique collectibles that you find in the world. Previously it looked like this:

![img](https://i.kickstarter.com/assets/049/038/983/a9098415156decefd0ee5098ea126ed3_original.webp?fit=scale-down&origin=ugc&q=92&v=1745585531&width=700&sig=bPX7o4hacc1xwZ6iBkVl2%2B6BsxX%2Be30gAEMcZPk6MdI%3D)The old effect combined a rotating sprite light and some sparkle particles

And now it looks like this:

![img](https://i.kickstarter.com/assets/049/038/991/5b3b8eab8fbd067950f5fabcbf8e3582_original.webp?fit=scale-down&origin=ugc&q=92&v=1745585608&width=700&sig=OmsAB8XkY119I60EHGo4xT4t4nl%2BgTFeJnXUbyFz5uY%3D)The new effect combines several rotating sprites with a point light and a variation of the sparkle particles

It’s a somewhat subtle detail, but I want to make sure these items that you can only collect once (Toys, PJs, Little Buddies, Blue Moons, etc.) are sufficiently indicated with some “this is important!” kind of effect and that the effect looks sufficiently enticing. This has been on my list of things I wanted to tweak for some time now, so it was nice to finally get around to it.
 

### Playtesting Fixes ✅

There were also a few things that popped up in the most recent playtesting round that I wanted to fix and I thought I’d share:

**Pass-Thru Buffering Fix**: I’d known about this issue for a while, but sometimes it’s unclear if it’s worth fixing a bug until someone else notices it. In this case, you couldn’t buffer a pass-thru input. So if you’re trying to rapidly pass through multiple pass-thru platforms in a row by pressing down + jump, there is a chance that you will press down + jump too early. If this happens, the input is buffered, but not correctly, so instead you would buffer a *jump*. I saw someone encountering this in a playthrough recording (and in fact, they noticed it and called it out themselves, which means it’s really bad because this is the sort of thing I wouldn’t expect players to typically even notice is going wrong). So since I finally saw someone encounter this, I figured it was worth hunting down and fixing, so I took care of it this month.

**New Signposts**: One thing I’ve noticed is that while players are able to correctly intuit that you press down to enter a pipe from above, not everyone intuits that you hold up to enter from below (alongside jumping towards it). So after finally seeing more than a few players encounter a pipe and turn away thinking they can’t enter it, I realized I could simply take advantage of the signposts I use throughout the intro area to show the “jump + up” inputs required near the first pipe most players will encounter. It’s a very simple fix, but I think it will go a long way.

There were a bunch of other smaller fixes (like making the Gelatonne enemy immune to hazards for instance) that I worked on as well this month. After a round of playtesting, I like to identify the most important things that came up and just tackle fixing them while the problem is still fresh in my mind. These are usually really quick to hammer out to so I can just spend a few hours and tackle everything that comes up in this way.

Okay, now onto the spoilery bits of stuff I worked on this month.

 

# Spoilers Abound ❗🙈❗

This section contains very late-game spoilers, so they are extra spoilery this month! You’ve been warned.

 

## The Palace 🏰

This month I worked on finishing up the Palace. This is an area you can only enter after you’ve rescued the seven Guardians of Slumberland and unlocked the gate. It’s an area that is intended to be tackled when you have every Toy upgrade Nemo can get, and it combines enemies and gimmicks from throughout Slumberland to create some interesting new challenges. The environment for this area has mostly been done for some time (check out [Update #13](https://diesoft.games/2023/07/28/nemo-monthly-update-13.html) for some cool in-progress looks at this area), but there were still a few environment details we were missing.
 

### Indoor/Outdoor Seams 🧵

In this domain, you’re often going from indoors to outdoors. The interior is designed to seamlessly repeat itself chunk-by-chunk, but it previously had awkward visible seams when crossing from interior to exterior. I created a some new chunk background tiles to handle these cases, so now it visually makes more sense when passing from interior to exterior and vice versa.

![img](https://i.kickstarter.com/assets/049/039/107/f6ea4393b8d1db42f08ab25bc8f1f316_original.webp?fit=scale-down&origin=ugc&q=92&v=1745586343&width=700&sig=gwLr%2FfiioYqivAX%2Faod4qZTAAS6VXDmLTcaengA9n3A%3D)The horizontal seams for indoor/outdoor are relatively simple and just use the column sprites at various parallax depths to create a sense of a wall.

This also allows for some nice rooftop decorations for outdoor chunks which appear above interior chunks as seen here:

![img](https://i.kickstarter.com/assets/049/039/140/a725450c8f09afdeff8eab118200b37e_original.webp?fit=scale-down&origin=ugc&q=92&v=1745586530&width=700&sig=WZghuQezC1Jn54iUlanIs3SdcT0vGTdBAEnfW4rg3tU%3D)The vertical seams between indoor and outdoor are visually a little more interesting.

![img](https://i.kickstarter.com/assets/049/039/160/e9c581a42662c9c93340b3026db230c4_original.webp?fit=scale-down&origin=ugc&q=92&v=1745586694&width=700&sig=9pQuLS6uSAqsSkQDjTdCaFayQ5a1UQcpskIkcl9aTwY%3D)These create a nice rooftop look when we're outside and above indoor portions of the Palace

The fencing and hedges here mimic some elements that appear in the domain wide background, but which only appear at the horizon line when outside.

![img](https://i.kickstarter.com/assets/049/039/172/e08a1c86402bc2fd1417ed1032199e84_original.png?fit=scale-down&origin=ugc&q=100&v=1745586786&width=700&sig=46Io7S9xbW0XIvDhgAIwQk4TwaZShjQyNNuPM106poM%3D)The Palace Horizon line uses stone fencing and hedges to help show when we've reached the "bottom" of the outdoor area  


### Underground Windows

Because we have vertical scrolling of the background in this domain, we have a horizon line. When we're outdoors, we simply don’t have any rooms that go below the horizon line, but we do want some interior rooms to be able to go below the horizon line. They have windows that expose the outside, which means they will look odd unless we do something about that, so we added a new room-type which uses stained glass windows instead of the usual clear windows.

![img](https://i.kickstarter.com/assets/049/039/218/5fe88fd4870f1a641c7dc4ca4be69bc7_original.webp?fit=scale-down&origin=ugc&q=92&v=1745587048&width=700&sig=2ROwtqo2eEba0QAhuUxzstdRTWLC3DtpaheFxhdM9kE%3D)We can use these "basement" rooms with stained glass windows to hide the outdoor environment when dropping below the horizon line

These rooms also get slightly darker and with a less warm lighting to reflect this change in lighting. Overall I think it makes for a nice environmental change of pace to add visual interest and variety to the domain.
 

### Level Design

This area combines a bunch of gimmicks and enemies to utilize your abilities in new and challenging ways, but we also sometimes take advantage of the fact that your abilities are limited when carrying items, to restrict what you can do and oscillate between having a full suite of abilities, and having your hands full as you carry around keys, all the while chased by a Boo-Hoo. I would show you a map of the area, but I can’t do that without spoiling some secrets I’d really like to stay hidden for now, so instead here’s some gameplay combining gimmicks from other domains:

![img](https://i.kickstarter.com/assets/049/039/290/4dea675d6d8e467be70a23564fd81631_original.webp?fit=scale-down&origin=ugc&q=92&v=1745587427&width=700&sig=FscME4GCd5gzgdaIdy34dKamZDVfZFrvusBER3PzmDg%3D)Here we're combining elements from at least three other domains to make some fun and unique challenges  


### King Morpheus 👑

And here we’re getting very spoilery showing off some sketches of finally meeting Morpheus. After we’ve beaten this domain’s boss, we’ll be able to get into the “throne room” and meet him. If you step into his hand, he’ll pick you up so you can reach him to talk.

![img](https://i.kickstarter.com/assets/049/039/343/4f4608e5c5808bf4747a4001f2549c55_original.webp?fit=scale-down&origin=ugc&q=92&v=1745587696&width=700&sig=9VeWWdn4PHsEmyufXuC%2FWxpMFqTD5mSWIxTkCcCd3%2FI%3D)Morpheus picks up Nemo so they can speak with one another

The assets here are very roughly sketched in for now as I was just trying to get the size/scale/parallax depth all correct first. We wanted Morpheus to be very large and imposing, so he's quite far into the distance to help convey that sense of scale.

One thing I like to avoid when possible is taking control away from the player. There's a case to be made here that this is just a "cutscene" where the player walks into the room and control is taken away as we're scooped up by Morpheus' hand. I much prefer to do something like this where control is not taken from the player until they press the button to Talk to Morpheus. Part of that is that, in my opinion at least, it feels a bit more retro this way. But I also know there are other players like me who will, in a situation like this, have fun toying with jumping into and out of Morpheus' hand to test the boundaries of this interaction.

However, I won’t spoil what happens after this. I just wanted to show you this fun way to interact with the character. Behind the scenes it’s pretty simple: essentially it’s just a platform that lifts when Nemo is standing on it, with some extra flourishes to allow for the animation of the hand and Morpheus opening his eyes.

 

# Back to Spoiler-Free ✅🐵✅  



### That’s it for April, see you in the Discord server! 👋

That was a lot to go over in one update, so I’ll wrap things up now. Thank you to all of you that made it down here, it’s fun to put these together even just for my own sake to kind of recap some of the things I worked on each month, but it’s nice knowing that a bunch of you are following along and enjoying these updates. I hope you’re getting some interesting behind the scenes insight. If you have thoughts on other things you want me to chat about, please leave a comment, or come join us in the [Discord](https://discord.com/invite/9NymgSJAVp) and leave questions for me in the #team-q-and-a channel!

So long for now, Sleepyheads!

-Dave
