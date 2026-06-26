---

title: Monthly Update 48
description: Upgrading to Unity 6 and overhauling Addressables
image: /assets/images/devlog/2026-06-26-preview.png
---

# Monthly Update #48☀️

Welcome back for another update, Sleepyheads! Summer is well underway here, and I’ve been taking advantage of the nice weather we’ve been having (in between all the rain we’ve also been getting) and getting outside a decent amount. But don’t worry, I’ve been making plenty of progress on *Little Nemo’s* porting process as well. So let me dig into all the gritty details for you.
 

## What I’ve Been Up To in June✨

The porting process continues with loads of performance and under-the-hood work on the game. There are a few different things I focused on this month, so I’ll break it out for you. I had mentioned last month the next big technical hurdle for performance would be addressing the stutters that the tilemap’s Rule Tiles cause, but a few other things got prioritized over that for now.

### Updating to Unity 6.0

I hadn't done a Switch build of the game in quite some time because it takes a while even just to switch over to that platform and make a new build, so it's mostly gone ignored except for early proofs-of-concept to make sure it was ultimately feasible. So early in June I decided I should go ahead and at least make sure things are still running okay on Switch. The first step though, was to address the fact that Unity 2022.3 LTS (which *Little Nemo* has been using) was no longer considered “masterable” by Nintendo, meaning I would need to update to a newer version of Unity that Nintendo does support for the Switch.

The most obvious target would be Unity 6.3 LTS because that is the most recent LTS (long-term support) version, but Unity 6.0 LTS was also a valid choice. The problem I encountered when trying to upgrade to 6.3 though, is the ScriptableRenderPipeline has seen a significant overhaul and we're forced to use the new Render Graph system. This only becomes a problem because my Fluid simulation (which is used to make some sprites move due to wind and movement) would need to get overhauled to work with Render Graph. I gave it a quick exploration, but found it would be a little trickier than I was willing to commit to, so decided to just aim for Unity 6.0, which still allows us to manually opt out of the Render Graph system. I may yet revisit this, especially because I suspect this could have important performance considerations on the Switch, but for now Unity 6.0 LTS will do.

So moving to Unity 6.0 was actually relatively painless. There were some deprecations in Unity’s Entities API, but they actually made sense to simply ignore for now. And I should also note, there is a nice benefit to moving to this newer version of Unity: in 6.0 and later, Unity allows you to disable the Unity splash screen which previously required a Pro license. So you’ll see that splash screen go away in upcoming builds of *Little Nemo*.

### Addressable Bundles Cleanup

After getting set up with Unity 6.0, I went ahead and made a build to test on the Nintendo Switch and it immediately crashed upon launch. 😬 After a bit of digging, I realized we were immediately running out of memory and it was because we were loading in almost every asset bundle for the game. This probably requires a bit of explanation for how the game handles assets:

*Nemo* is effectively an open-world game, that is to say, the world always loads in around the player and there are no loading transitions. The way that is possible is we can stream in the assets as they’re needed using Unity’s Addressables system. We can group things into bundles of assets that are likely to be needed at around the same time (generally broken up into groups based on dream domains or other top level concerns), and then we can asynchronously ask for certain assets and then get those assets once Unity has finished streaming them into memory from disk.

I’ll use the Music Player as an example for how this can go wrong (even though this wasn’t a source of any issues, the way it "touches" many domains of content makes it a good example):

The Music Player can play every song in the game, and even display the background for whichever dream domain each song is associated with. If the Music Player contained direct references to each of these songs and backgrounds, then as soon as we load in the music player, we’d also need to load in every song in the game and every sprite atlas used for all background art in the game along with all of the prefabs used for those backgrounds. And since our assets are grouped into bundles generally including everything in a given domain, we’d actually be loading in the entire bundle for each domain, meaning the Music Player would load in just about every bundle in the game. Far from ideal.

Instead of a direct references to these assets then, we instead use the Addressable system's Asset References. These allow us to only load in the referenced data when we ask Unity to do so. So when we highlight an entry in the Music Player, we can ask Unity to load in the music and background assets needed (and unload the assets for the item that was previously selected). In this way, we only ever have the relevant data loaded based on which track is currently selected in the music player.

Though the Music Player didn't actually have this issue, there were a few spots throughout the game’s assets where I needed to remove direct references from one bundle to another. Even just the few that we had were enough to cause nearly every bundle to have references to every other, such that upon starting the game up, we were trying to load in everything. That might not sound so bad since the game is under 2GB in size, but once we are dealing with a console like the Nintendo Switch which is more memory constrained, we need to be better about handling all of this.

### Where We’re At Now

All of these under-the-hood improvements are currently only on the playtesting branch: these new changes in conjunction with the ECS hybrid conversion process stuff I mentioned last month present many opportunities for things to have broken, so it needs lots of testing. But the game has become quite a bit more performant, it takes up less memory, and also went down from 1.7GB to 1.4GB in size (while overhauling Addressables, I also de-duped a lot of assets that were replicated in different bundles). And, as expected, the game doesn’t immediately crash on the Nintendo Switch 🎉

With the game once again running on the Switch, I can see the framerate is not where I ultimately want it still, so this next month I’ll be digging into the Switch specific performance issues. And of course, I still need to tackle the stuttering issues I mentioned. On the Steam Deck, the game has no problem running at hundreds of frames per second (if you fiddle with the Steam Deck settings to allow it to get in excess of 60hz), but seems to suffer from the stuttering much worse than I see on desktop, causing noticeable hitches despite otherwise great performance.
 

## Next Steps 🔮

So what do we need to do next to get the Switch port ready and to improve Steam Deck performance even more?

### Address Traversal Stuttering

So we still have this lingering stuttering issue that I am excited to finally get to tackling (after getting sidetracked by Unity upgrades and Addressables refactoring this month). I think most of this issue comes from Unity's Rule Tile logic not being performant and being main thread bottlenecked, but I’ve spotted a few things recently that lead me to believe there might be more to the issue than just that. So I’ll also be doing some explorations into this, and primarily using the Steam Deck as the target platform since that is where this issue is most intensely noticeable.

### Switch-Specific Performance

As I mentioned above, the Switch still needs more work to get to where it’s running smoothly. I need to get started on research into why it’s slow. To start, for instance, I need to determine if we’re getting bottlenecked by the CPU or the GPU (it’s probably CPU that’s the culprit, but it’s also possible that I need to reduce draw calls and that might be part of our problem). This is gonna be a big chunk of time since it will involve a lot of research before I even get to addressing the issues that are discovered.

### Switch-Specific Adjustments

Then there are some smaller tasks that I need to tackle that will be specifically for Switch. For instance, I need to default to swapping the confirm and cancel buttons for UI on the Switch. These are remappable by the player, but I need to make sure the defaults match expectations for this console. Then there are other little things, for instance, I should not have a *quit to desktop/exit game* option in the main menu. I’m sure once I get going on these, even though they’ll be easy fixes, there will probably be a lot of them. This stuff will be essential for getting the game to feel at home on the Switch and to pass Nintendo's certification process.

### Miscellanea

And then there will be a bunch of other small tasks outside of the port itself, such as getting the game rated, setting up the Nintendo eShop page, and other tasks like that. I only call this out because there’s gonna be plenty of it, even though it’s not super exciting to talk about in detail.
 

## Update on Localization 💬

I have been talking a bit in previous updates about getting the game localized/translated for other regions and languages. I was hoping to get some professional help, but ultimately it’s just a bit too expensive. So right now my plan is to try to get things set up to allow for crowdsourced translations to be possible. But part of that process is going to be identifying people that are willing, interested, and able to donate time to help bring the game to their language/region. So if you are fluent in English and any other language that you’d like to see the game translated to, please let me know (you can email me at **dave at diesoft.games** if you want to reach out directly).
 

## That's It For Now 👋

Okay, sorry if that one was a bit boring for those of you that aren't interested in the technical details, but at this point in the process it's mostly a lot of "boring" work that remains (fwiw this is the kind of stuff I really enjoy though 😊). There are some more fun "features" and stuff though (such as the Game Genius**™** feature I mentioned last month), so keep following along for now! And I'll see you all next month, unless you wanna come hang out in the [Discord](https://discord.com/invite/9NymgSJAVp)!

-Dave

![img](https://i.kickstarter.com/assets/054/246/042/c6ae5595d2e479d177ad02837c5676d5_original.png?fit=scale-down&origin=ugc&q=100&v=1782488187&width=700&sig=6nbJu43JZp30eFK4q9RmbH7cpHh2siPZMwmX6i2jihw%3D)
