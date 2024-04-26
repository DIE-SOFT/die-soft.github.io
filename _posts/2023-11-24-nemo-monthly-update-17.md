---

title: Monthly Update 17

---

# Monthly Update 17 🦃

Welcome back for another monthly update, Sleepyheads! This month was a little shorter than the last as I’m writing this update a bit early to account for the Thanksgiving holiday (🦃 Happy Thanksgiving 🍗 to all of our backers here in the US), but as usual I want to check in with you all and share what I have been working on.



## World Wrap 🌐

No, not “word wrap” but *world* wrap. Think Pac-Man or the original Mario Bros where leaving one side of the screen brings you around to the other, but apply that to the entire world.

As a quick recap: the world of Slumberland is made of distinct thematic dream domains, but are all assembled into one seamless world. To give some minor, early spoilers as example cases: you’ll start in the Dreamswept Plains, and the Gumdrop Gardens and Mushroom Marsh are both nearby (to the right and left respectively). There are other zones above and below these three zones as well, but you can imagine these three domains forming a cylinder so that you can continue traveling in one direction and you’ll always wind up coming back to where you started.

![img](https://i.kickstarter.com/assets/043/140/028/cefc2550977a6a0ed89728d365fe57f0_original.png?fit=scale-down&origin=ugc&width=700&sig=OqufbOOWdMOC8IXv6lxTyDqlegV%2B3sXAhrotvqo3pzM%3D)Here’s a sketch of how you can imagine these areas connect seamlessly in a loop



### So why do this?

Well, it’s simply kind of fun and I think takes an interesting bit of inspiration from some of the old platformers that inspired *Little Nemo* and adapts it to a large, seamless world. But more importantly, it makes it much easier to traverse the world. The question is frequently posed: "will you be able to fast travel between beds in Little Nemo?" My hope is that ultimately the world will be well connected and fun to traverse enough that a fast travel option doesn’t feel necessary (but ultimately we’ll see and introducing a fast-travel mechanic between beds is certainly very achievable, and would be something you’d unlock a little later in the game rather than having immediately). So making the world wrap around on itself is an important piece of helping make the world feel easier to traverse and prevents there being “corners” of the world you can get stuck in when you'd like to be on the opposite end.



### Technical Details

The technical implementation of this was relatively simple. The world “chunking” logic, or how we break the world up into discrete screen-sized chunks that are loaded in around the player, is already designed to be agnostic about a true world position (we’re constantly recentering the world to reduce the potential for floating point imprecision as we get further from the true world zero position). So to get things working right, I simply needed to add boundaries to our world, and then have our chunking logic adapt to return a bounded chunk when given unbounded chunk positions. Essentially, once we go outside of the bounds of the world, it simply wraps around and starts looking back at the other side for the chunks that should be loaded in.

Fun little detail: while working on this feature, I discovered that [modulo operations](https://en.wikipedia.org/wiki/Modulo) do not have an agreed upon handling for the case when the two inputs have differing signs, and different programming languages handle this differently. C# happens to implement it in a way that feels unintuitive to me so I was scratching my head for a bit at what I could be doing wrong before I realized this math operation was simply not returning the value I thought it was.



## Animated Intro Milestone ✏️

I’m happy to report that the animation is fully completed for the Animated Intro stretch goal. This is just a fun, short animation spliced in with some game footage to help set the scene when you first start the game, and give the whole thing a nice Saturday morning cartoon kind of feeling. I would share this with you all, but I want to hold off until the whole thing is assembled with sound and music and the appropriate gameplay footage. But here’s some stills from it to give you a sense of how it looks:

![img](https://i.kickstarter.com/assets/043/140/051/d884dcff1f80cb5081ef8cee0b375a35_original.png?fit=scale-down&origin=ugc&width=700&sig=AUKVjpxtRm9vLqyXdvTe7jCha26%2BpsHjmT%2FxGxV59g0%3D)A few stills from the completed animation.



## Finishing up work from last month 🛠️

Most of the last few weeks were spent finishing up the work I went into last month. There was actually a bit more polish and bug fixing left to do than I anticipated, so I did not get started on environment art for a new domain this month.

**The Observatory** 🔭 got some finalized sprites for the telescope and globes which were simply penciled in previously.

![img](https://i.kickstarter.com/assets/043/140/070/f6fb57a051cba44569a0e88e805a0c47_original.png?fit=scale-down&origin=ugc&width=700&sig=uqzp3DXPtte7yYL8WWO2eCzvZXDjvYj0cRQJ3dHXLV8%3D)Nemo in the Observatory about to peek at constellations through telescope.

And then I also finished up environmental art for the domain I was working on previously, which I will preface with a spoiler warning...



# Spoilers Abound ❗🙈❗



The ❄️**Valley of Silence**❄️ now has completed tilesets and finalized background art (some of which was only penciled in last month). A detail that wasn’t present in what I showed off last month is a dynamic, shifting Aurora Borealis in the sky behind Nemo. Here’s a still so you can see some of the finer details in the background:

![img](https://i.kickstarter.com/assets/043/140/096/3fe9bc5b040b5c411ccfefd7163e3eab_original.png?fit=scale-down&origin=ugc&width=700&sig=5alUOhr0Zlh6pi18B6KqjUFb3auOWzUuiHENF6sVWIQ%3D)In this still you can see some new details that have been finalized since last month. It looks better in motion, but this still helps show some of these details that are lost in GIF form.

In this shot, some of the things you can see which weren’t ready to show off last month: snowy pass thru tiles (like the snowy ground, you can’t pogo on here or you’ll be temporarily stuck in the snow), icy pass thru platforms (like the solid ice, you’ll slide around on these surfaces), snowy pillar decoration tiles, giant paper snowflakes far off in the distance, and a colorful, ever-shifting Arctic Aurora.

If you missed [last month’s update](https://www.kickstarter.com/projects/diesoft/little-nemo/posts/3947577), go check it out as I have some GIFs of the area which show off how some new updates to our default shader allow for sparkly snow, and dynamic sheens on all the icy surfaces.

I’m really excited for you all to see how this has come together with Pete’s music for this domain. I’m really happy with how on target the whole domain is for my initial loose concepts which were trying to get at the heart of what I love about a cold, winter evening.



## What’s Next❓

Next month will be another slightly shorter month due to the Holidays, but I need to be continuing to make plenty of progress, so I hope to have plenty to share. I was originally intending to finish all of the world's environmental art before continuing on to other work (it is just much easier to stay in one contextual mode of work so I can get work done faster and get better at the various types of work I have to do). But I think I will actually be changing gears slightly to try to start better assembling the bits that I do have into having a much larger portion of the game put together. I’m not sure I’ll be there in time next month, but I want to show off some new boss fights and abilities and make them available in the build that Sleepwalker backers have access to. So keep an eye out for new enemies and bosses in upcoming updates!



## Kickstarter Friends 💚

There's a Kickstarter launching next week I'm excited about. I usually link you to launched campaigns, but I'm getting this update out the door *just* before this campaign goes live, so I'll link you to their landing page where you can follow the campaign to get notified when it does go live:

![img](https://i.kickstarter.com/assets/043/177/372/91c20f9841ac48906943dcb4cc2030b5_original.png?fit=scale-down&origin=ugc&width=700&sig=jbi%2FB%2FhMazWd3uNpNqu2%2B8aymHX6XOQo5TRlzJyFhy0%3D)



[Dewborne Dawn](https://www.kickstarter.com/projects/dewbornedawn/dewborne-dawn-an-action-adventure-metroidvania) is another hand-drawn metroidvania that and it looks very impressive. You won't be able to see much on the Kickstarter landing page ahead of its launch next week, so if you want to know more you can also visit their [Twitter](https://twitter.com/DewborneDawn).



## Until Next Month! 👋

Thanks so much for reading all the way through. As always, please share your feedback or ask questions in the comments below, or hop into the **[Discord](https://discord.com/invite/9NymgSJAVp)** to get in touch directly!

-Dave
