---

title: Monthly Update 51
description: Switch Porting Work Continues!
image: /assets/images/devlog/2026-09-25-preview.png
---

# Monthly Update #51🍵

Hello, Sleepyheads! Welcome back for our September monthly update. I was holding out hope for getting a little more summer weather before fall set in, but the weather seems to be settling firmly into autumn territory. I even went ahead and set my phone background to the Haunted Hollow pic from the backer rewards that were released earlier this year. 🎃 But we’re not quite to October yet, so let me get into what I’ve been up to this month. But first…
 

## Quick Reminder: RetroGameCon

ICYMI from [last month’s update](https://diesoft.games/2026/08/28/nemo-monthly-update-50.html#retrogamecon), we’ll be showing off *Little Nemo* at [RetroGameCon](https://www.retrogamecon.com/) **next weekend!** If you’ll be in the Syracuse area and want to come, you’ll want to buy tickets ASAP because it looks like they’ll be sold out ahead of the event. We’ll be demoing the game, but I also had a few keychains printed up. I wanted to be able to sell physical copies of the game, but the next best thing was to put scratch-off codes onto keychains. So attendees will be able to buy a keychain for $20 with a Steam code on the back, and I also have some Nemo keychains (without the code) to sell for $5.

![img](https://i.kickstarter.com/assets/055/266/430/5e973eda168f853cffa89be7d79c9610_original.png?fit=scale-down&origin=ugc&q=100&v=1790346076&width=700&sig=Dd3fyzQH5JzKVkPn11OThK%2FSxk5PEbqvsEDc61i7VcI%3D)Here's the front and back of the acrylic keychains. The cartridge keychain comes with a scratch-off on the back with a Steam code underneath.

If you’ll be there, let me know! It would be pretty exciting to see any backers that might happen to be in the area for this event.
 

## What I’ve Been Up To

Okay, so let’s dig into what’s been going on this month:

### v1.0.8 Release

Earlier this month, v1.0.8 was released, which included most of the performance work I talked about last month ([traversal stutter improvements](https://diesoft.games/2026/08/28/nemo-monthly-update-50.html#traversal-stutter-follow-up-) and [map UI performance](https://diesoft.games/2026/08/28/nemo-monthly-update-50.html#map-and-mini-map-performance-️)). You can read the patch notes for the release [here](https://steamcommunity.com/app/2074630).

### In-Game Instruction Manual

Kickstarter Backers reading have already had access to the digital PDF version of the Instruction Manual since earlier this year, but other players haven’t had access to that potentially helpful document. And one of the rewards from the Kickstarter is the in-game version of the manual. In the next update, you’ll be able to find the Instruction Manual from the “Extras” menu, and it’s accessible from the main menu or the pause menu. 

![img](https://i.kickstarter.com/assets/055/266/376/3c684a5244ecf50c86afb31c9c31068a_original.webp?fit=scale-down&origin=ugc&q=92&v=1790345676&width=700&sig=hwyol9dVYxmFJifcV6pG4VIBPPdQhHWTbiFRFUknUgU%3D)Flipping through the pages of the in-game instruction manual

The idea for this was this was always to mimic the NES instruction manuals I remember so fondly, so to try to help convey that inspiration, I added a bit of weathering details to the manual, and a page-flip animation. The downside of just taking a physical design and putting it on screen is that users can’t dynamically increase the font-size, so it risks being difficult to read. To that end, tapping the UI Confirm button will toggle zoom when you’re browsing through the booklet. I hope those of you that didn’t get a chance to browse the PDF enjoy getting a chance to check it out in-game after the next update.

### Updates to the Game’s Ending

There will be **story spoilers in this section**, so skip ahead if you haven’t already played through the game! Something else to look out for in the upcoming update is some changes to the dialogue at the end of the game. Some of that dialogue I wound up writing myself, but my writing tends to be much more functional and direct. Cid and I weren’t super happy with how some of it turned out, even if it does strike the right general tone and conveys the ideas we wanted conveyed. So this month Cid finally got some time to take a shot at improving some of this dialogue.

These changes aren’t going to drastically alter the ending, I think they just do a better job of helping to convey the themes and tones we were aiming for. And there’s just some nice flavor additions too (King Morpheus’ uses an archaic/Shakespearean style of speech, which is a nice touch I really enjoyed).

The endings have also been improved in some small ways (changes to the dialogue, timings, and other small details). This stuff isn’t going to be so big that you should feel the need to play through again, the hope is just that the ending is a bit more impactful, though with the same message and themes.

Since the game’s launch, I’ve actually heard from several people that were so thorough in their playthroughs, that they actually never got the first/bad ending, and they had to turn to YouTube to see the earlier ending they had missed. So to that end, I’ve added the ability to see the first ending, even after you’ve completed the second/good ending.

I’ll have finer details about all of these changes in the changelog for the next version when that arrives, hopefully very soon!

### Much More Performance Work

I’ll save the detailed description for the upcoming patch notes, but the game keeps getting in better and better shape. After this next update, I believe there will only be one area that still gives the Steam Deck a little bit of trouble, which I'm working on currently. The big problem areas were the Valley of Silence (but I got the snow particle systems under control this month), and some areas of Nightlight City in which many train cars and bouncing platforms are active nearby. The latter is a problem both because it means many more physics bodies, slowing down the physics a little, but more importantly, these bouncing platforms and train cars aren’t pooled right now, which means we’re frequently creating and then later destroying GameObjects, so they need to be pooled. But once that’s under control, the Steam Deck experience will be really great.

And that segues nicely into the next topic I want to talk about, the Switch port timeline:
 

## Switch Release Update

I’ve been doing loads of performance work to get things ready for the Switch release (while also of course improving performance on other low-power devices), but there’s still more work to be done. The game is currently in a place where the game can run at 60fps in simple scenes, like Nemo’s bedroom, but once we get into Slumberland, it’s having to drop to 30fps (sometimes worse in some of the domains that are more demanding) once many more of the game's systems are active. That means, even in the areas that are relatively under control, the game's frame-time cost is somewhere between 17ms and 33ms, and we need to finish getting it firmly under 17ms.

![img](https://i.kickstarter.com/assets/055/266/271/b9c5484f1de7915aa3633c742e01e239_original.jpg?fit=scale-down&origin=ugc&q=92&v=1790345092&width=700&sig=qsw1YM0pPGQkaTVNTVLAlXRhsEvIV9%2FpDE6sk1ZLoL8%3D)A photo of my workstation, now with a third monitor to help with Switch hardware testing

Here’s a picture of how I’m currently set up to work. Unity and VS Code easily take up an entire monitor themselves, so they are usually full-screened on my main monitor, and then my second monitor (the vertical one) is great for having secondary, helpful stuff stay up. So on here you can see Unity’s Profile Analyzer, as well as some of the software I use to load the game onto the Switch dev kit and view its logs. Then the third monitor on the right is one that I added this summer as I’ve been needing to regularly do testing on mobile hardware, so the Steam Deck and the Switch are both hooked up to display on that so that I can test them in docked configurations (that's the Switch version you see running in this pic).

Right now I’m in the process of simply auditing every system in the game. I run the game on the Switch hardware, profile things, see which systems are the most slow (or have high variability cost frame-to-frame), and then address the worst offenders. It’s a slow process, but my goal is to keep at this until the game is able to maintain 60fps. I know most third party indie games that ship on the Switch tend to aim for 30fps, but a) I still think 60fps is possible, and b) I personally just really don’t love 30fps for platforming games. But to get there, it’s going to be a grueling process of just Profile/Improve/Build/Test over and over until performance is under control on the Switch.

### Timeline 🕰️

As I’ve mentioned before, my hope was to have most of this work done by the end of summer, so that I could get the game out this year. I’m a bit behind, and to give you an idea of possible timelines: to ship the game this year, I would need to be done in about **six weeks** (allowing time for lot check) to have the game out in early December ahead of the holidays. I’m going to keep trucking on ahead as best I can, but that timeline is looking more and more infeasible. The performance work I’ve been doing this month for the Switch has me thinking finishing it up in the next six weeks is unlikely.

So I’m not going to say it’s definitely not going to make it by the end of the year, but I’m starting to look into what timelines look like where it’s not ready in time. I hate to once again be bringing news of delays, but getting the Switch release in great shape is even more critical than it was for the PC release. I thought being able to focus primarily on technical optimizations since April would have been enough to get this ready in time, but getting that last bit of juice out of the squeeze is proving to be quite time consuming.

### What Else Remains?

So aside from the technical optimizations to get things performant on Switch, what work remains? Here’s a list of the features and rewards that haven’t shipped yet, and where they’re at:

- **Bestiary**: This is written up and pretty thoroughly designed, so now just needs to get implemented. I’ve been working on it here and there this past week so that I can hopefully sneak it in there soon.
- **Artbook**: I did some design work earlier in the summer, but I haven’t been focused on it since then. I need to pick this back up and finish up the design of the book. But once that’s done, the in-game component should be very straight-forward since this will use the same interface that we used for the instruction manual (although the artbook page unlocks will be connected with progression through the game).
- **Digital OST Release**: This one luckily takes up almost none of my time as Pete is handling the publishing and release himself, but we’re going to be aiming to get this out around the time of the Switch release. So stay tuned here for details as we're getting very close.
- **In-Game Achievements**: This is something that is on my “nice-to-have” list, so it could get delayed for an update if we needed to drop something to hit a deadline. Since Nintendo doesn’t have any sort of Achievement system, I would like to have my own UI for displaying achievement progression from within the game. The way the achievements work means that we can use the existing logic that is used for Steam Achievements, we just simply need a custom UI for presenting that. For now, this UI is sitting un-developed, though I do have some ideas in my head about what it will look like.

So with only six weeks left to release by end of year, that would mean the perf optimization going perfectly, dropping in-game achievements, and then the Bestiary and Artbook wouldn’t take up too much more time. But it's a tall order, so I just want to be clear about how things are looking about getting it out by December. In next month’s update of course I’ll have a much better idea about where things are standing with the timeline.

Okay, so let’s turn to a more fun and exciting update!
 

## Upcoming Bundle!

We’re going to be doing a Steam bundle with another gorgeous, hand-drawn Metroidvania that is coming out on October 8 called [Echo Weaver](https://store.steampowered.com/app/2184080/Echo_Weaver/)! I’ve got some keys to give away for it, so make sure to come join the [Discord](https://discord.com/invite/9NymgSJAVp) where I’ll announce that giveaway soon!

![img](https://i.kickstarter.com/assets/055/266/454/771801b88c62d1507af91c3de927dff1_original.jpg?fit=scale-down&origin=ugc&q=92&v=1790346232&width=700&sig=ToRUFHT1OUpeyQDSlIjHjRbVkzKe0gLZBzxz4mDJr8o%3D)Echo Weaver coming to Steam on October 8

*Time is your greatest resource and secrets are your only upgrades. Master an unraveling time loop in this knowledge-based Metroidvania. As the last Weaver, exploit time-altering anomalies and use what you learn to break the cycle. Explore what remains. Uncover the mystery. Perfect the loop.* 

## What Does Porting/Optimization Work Look Like?

I've had lots of friends and family that are curious about this stage of the process, and what *exactly* is it that I'm doing? How do I get the game to run on the Switch? What does that look like? What are you actually *doing*? So I thought I'd dig in with a little more detail on what I mentioned above about the Switch porting and optimization work.

So to clarify: Unity and Nintendo have tools that make it dead simple to create an executable and then run it on my Nintendo Switch dev kit. That is the easy part. Actually getting it to not crash and to overcome the poor performance is what I'm doing.

### Step 1: Not Crashing

If you've built a game for Steam/Windows, the first problems you'll likely encounter is that you can't use Unity's default FileSystem methods. You'll need to use a special Nintendo filesystem API on the Switch. Luckily we've planned for this, so all of our disk serialization (reads and writes) go through an "abstraction" layer. That is to say, I've written my own DiskSerializer class, which is what I use *everywhere* in the game, and this DiskSerializer then in turn uses whichever API is relevant for the platform it's running on. In our case we have two, the default/Windows disk serialization logic, and another for Nintendo, but it could grow to other platforms if needed.

The next issue that I ran into when trying to run the game on the Switch after finishing up all of the game's content (it's almost 2GB even when compressed), is that we were quickly filling up all available RAM and promptly crashing. The Switch is heavily RAM constrained compared to most other devices people are playing on, and I had some bugs in the game which I wasn't even aware of until I got started in porting post-PC-release. I went into detail on this particular issue a few updates ago, which you can read [here](https://diesoft.games/2026/06/26/nemo-monthly-update-48.html#addressable-bundles-cleanup).

And of course you'll find a slew of bugs that pop up just due to severe timing differences triggering bugs that were always there but which never previously manifested. But once you've got the game running, you can start working on performance.

### Step 2: Performance

This is the step I've been working through lately. I talked a bit about it up above, the general flow I'm going through is:

- Play the game on Switch dev kit for a bit while recording with the Unity Profiler.
- Use the Profile Analyzer to dig into what is taking the most time.
- Sometimes the Profiler doesn't have enough information to break down exactly the source of the problem, so you need to then use Profiling Markers which will allow you to get information about exactly how long it takes to run a specific block of code.
- Identify the areas of code that are the most un-optimized (because they take much longer than seems reasonable, or perhaps the time they take is low on one frame, and very high on another).
- And then you have to actually **optimize** that code. I'll dig into what that looks like a bit more below.
- Once you've optimized it, you make another build (this can take a few minutes, making the process a bit excruciating), profile it again, and verify that it's improved by comparing the before and after Profiler recordings. There are surely better ways to do this that involve automation that I'm not really equipped for.
- Then you go back and do it all over again 🔁

So what does that optimization step look like? That's the tricky part, it can be all sorts of things, and often it means learning something entirely new that you didn't know about before. Here are some examples of optimizations I've done recently:

**Schedule Jobs on a Worker Thread**
All of my physics systems are written for [**ECS**](https://en.wikipedia.org/wiki/Entity_component_system), which makes it fairly easy to run them as jobs on a worker thread so that they don't block the main thread, potentially speeding things up by spreading out the work load. The problem is that there is overhead to the work of scheduling those jobs, so you can't really know if it's actually faster without testing. Working with scheduled jobs can also increase complexity a bit. Since my physics system is relatively simple, I found just running it on the main thread was perfectly acceptable for performance. However, in Nightlight City, we often have a lot of physics bodies active at once (between the trains and the bouncing platforms), and this means there's an opportunity to speed up the physics work by scheduling it as jobs.

But I needed to prove out this was worth it on the Switch. To do so, I made two builds, one with the existing physics systems, and another where I've moved all the jobs to be scheduled on worker threads. I then tested it in scenarios where there are only 1-2 physics bodies, and scenarios where there are hundreds. The result was promising because in the small body count scenario, the physics systems only took about 0.02ms **longer** to run (this is due to the scheduling overhead I mentioned), but in the worst-case scenarios, it can save us 2-3ms.

Now that I've proven out how beneficial this can be, I want to find other systems that iterate over a large number of entities and see about doing the same with them.

**"Touch" Unity's Legacy Systems Less**
Because I've rolled my own ECS and Legacy Unity interoperability layer (it simply didn't exist back when I wrote these foundational systems), I have to read from and write to many GameObjects each frame. The core game logic is running in ECS, but we need things like Animators and SpriteRenderers to update appropriately each frame. Some of the testing I did this month identified ReadFromGameObjectsSystem and WriteToGameObjectsSystem as some of my slowest systems, even though they're doing something very straight-forward.

ReadFromGameObjectsSystem takes the state of our GameObjects and updates their ECS data (allowing us to make changes to the GameObject and have those changes propagate through into ECS). We run this early on in each frame. And then the WriteToGameObjectsSystem does the opposite, propagating any changes that have happened to the ECS data through to their GameObjects once our ECS logic is done running.

The performance problem in both of these systems revolved around the fact that we were always updating GameObject properties even if they hadn't changed. It can be fairly complex to know if the properties have changed in some cases, but it turns out doing some complex logical tasks each frame can be significantly cheaper than doing any interactions with Unity's GameObjects. The biggest problems for us were changing Transforms and Animators unnecessarily each frame. Unity's code often has extremely taxing side-effects just from reading in properties of some objects, so the more we can ask "do we actually need to do this?" before we access the legacy Unity code, the better.

**Pooling**
Initializing and destroying objects is both slow on the CPU and also causes a lot of "garbage" to build up. In automatically memory managed languages like C#, after you use things that take up memory, when you're done with them, they don't get cleared out of memory right away. Instead you have a "garbage collection" step that the system will run every so often to find any unused objects in memory that can be freed up. (*Me editorializing for a moment*: it's a really terrible way to handle memory, and a big part of why I try to use ECS and data driven approaches as much as possible to avoid generating garbage.) On CPU and RAM constrained hardware like the Switch, this can quickly become a problem, and that makes it more important to turn towards pooling.

Pooling is a really simple concept to explain: instead of generating and then destroying objects constantly, just have a pool of them. When you need one, if there are none available, then you create one as normal, but when you're done with it, instead of destroying it, just leave it there and available to use the next time you need one. I already use this in a few places in the game where I have a lot of something: for instance the candy that gets scattered about is all pooled.

The task I'm currently working on is pooling for the aforementioned bouncing platforms and toy trains of Nightlight City.

**"Better" Code**
Sometimes the changes that are needed to improve something are just about writing better, more performant code. When this is the case, it usually means when I wrote the code originally, I either didn't understand some aspect of it, I thought what I was doing would be "good enough" and the better solution was more complicated, or the needs of the system changed slightly at some point causing the old code to become non-ideal.

A good example of this is the work I did recently to improve the traversal stutter (talked about in [this previous update](https://diesoft.games/2026/07/31/nemo-monthly-update-49.html#traversal-stutter-)). When going through and working on the tilemapping and prefab instantiation code associated with loading in content dynamically, I discovered that we were using too many memory-managed collections (resulting in a lot of garbage collection being needed). In a lot of these cases I was able to either re-write it without using a managed collection, or if I did need a managed collection, I could have a single one that is used over and over each time it's needed (similar to pooling).

A lot of this work was really just kind of a combination of the last two points, but sometimes, it also means re-writing the code in a slightly clever way to do less work. You have to be careful with this: writing clever code can get you into trouble, especially if you're writing it early in the project because you might come back later and not know how or why it's doing what it it's doing and it can also be harder to change when your needs change. But at this phase, it's sometimes just the thing.

**Random Small Fixes**
So much of the stuff that gets improved is just be one-off, unique, small fixes. For instance, I noticed that every second or so, we would wind up spending about 1.5ms just updating the Steam API, even if nothing had changed (no progress made on achievements). After some digging into the Facepunch API I'm using, I discovered it was likely due to the fact that I was manually calling the API's RunCallbacks() method. If I instead just let the system call that automatically, it will do so on a background thread, preventing the main thread from getting blocked for ~1.5ms every second or so.

### Step 3: Platform Specific Stuff

And then finally, once you have a game that's not crashing, and runs smoothly, you need to make sure the platform holder is happy with it. In this case it means doing work like ensuring your gamepad glyphs adhere to style guides, make sure you don't have menu options you shouldn't (e.g. no "Exit to Desktop" option on Switch), and any other platform-specific needs are addressed. I've actually mostly already done this stuff, although I probably need to double check my Switch glyphs meet Nintendo's expectations.

And that's kind of the general gist of it. This is how I'm getting the game ready for Switch. That was actually a lot more than I meant to write, I didn't even have this section in my update initially, but decided it would be a nice addition. But now I can point to this when people ask me "yeah, but what exactly do you have to do to launch it on Switch?"
 

## That’s All For This Month 👋

We’re getting so close to the finish line. Thanks so much for reading along and sticking with us through all of this. I hope it’s exciting and interesting to see behind the scenes on this porting work. But of course we’ll be back next month for another update on progress and more details on timing. Until then!

-Dave

![img](https://i.kickstarter.com/assets/055/266/461/04ba5a133d19bb67bf98705b85e10f7a_original.png?fit=scale-down&origin=ugc&q=100&v=1790346311&width=700&sig=jyQsawcZIO%2Fysyy2%2BOo4wdM9gbA%2F2Z9CW7bD6fu6rks%3D)
