---

title: Monthly Update 11

---

# Monthly Update 11



Hello, Sleepyheads! 👋 We’ve got lots of announcements this month for those of you that didn't already see them in our [Discord](https://discord.com/invite/9NymgSJAVp) server, so I’ll just jump right into it!

**1.** *Little Nemo* is gonna be in the upcoming **Wholesome Direct**! 🎉

![img](https://ksr-ugc.imgix.net/assets/041/090/819/4d0812f2831e803a624cd3d7cc981839_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1685125047&gif-q=50&q=92&s=5906b9757ae19151f7e081ac32e88dd5)



Make sure to tune in **Sat, June 10** @ ⏰ **9am PT / 12pm ET / 6pm CET** ⏰ to catch *Little Nemo* appearing as part of this collection of wholesome games. I’m really excited for this one because I’ve been such a fan of this event since its inception, and I'm so very honored that they chose to include us. 😊

If you’re not familiar with [Wholesome Games](https://wholesomegames.com/), to paraphrase their website: it’s a community that started on Twitter when they began curating games according to their feelings of comfort, compassion, and coziness. And it has since grown to nearly 500k members across Twitter, Discord, TikTok, YouTube, and more.

**2.** In less good news, I’ve decided to **push back** the original Q4 2023 **release target**.

I know this is probably very disappointing for most of you, but it’s become clear that I’m not on target to make that release target, and the only way to do so would be to compromise on the quality I’m aiming for. This means we’ll be aiming for a 2024 release window, but I don’t want to share a more specific release window than that until I have a firmer timeline established.

The upside of giving ourselves more time to make the game is that it puts on the table some content ideas that have come up during development that simply wouldn’t have been feasible if we were releasing this year. I won’t share much more about these specific ideas because they fall into the bucket of content that I will never spoil before release (not even in these private backer-only posts).

So ultimately I hope that, though this particular news is definitely a bummer, it will make the end product much better for it. Thank you for being kind in your responses to this news. ❤️

**3.** And finally, kind of a fun detail, although less relevant since *you* reading this already have access to these posts, but I’ve begun posting these devlog updates to the [DIE SOFT Website](https://diesoft.games/devlog). It’s still important for me to keep some of these details private for some amount of time though, so these posts will only show up on the public website about six months or so after they’re published here on Kickstarter.

So if you know anyone that missed the Kickstarter, but is interested in following along closely with development, please share that link! 😁

Okay, with those big announcements out of the way, let’s dig into what else I’ve been up to this month…



## Dialogue Improvements 🗣️

In general, the intent with *Little Nemo* is to have minimal “cutscenes” and to convey story, characters, and lore primarily through dialogue interactions. That means the dialogue needs to get leveled up a bit from the fairly naive implementation that has been there up until now (I’m referring more to the backend as I’m happy with the dialogue UI’s visual presentation).

![img](https://ksr-ugc.imgix.net/assets/041/090/891/16563d8e22f209e9f3d857f052cc0fdc_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1685125456&gif-q=50&q=92&s=dce0bf70447ed00bfc059598981bcfdb)

The existing dialogue UI mimics modern texting apps, has plenty of finely tuned animations, and allows for animated portraits on either side of the conversation.

There were a few important failings of my naive first pass at the dialogue system:

- It didn’t have any plan in place for localization, despite all other user-facing strings in the game being localization ready.
- The implementation only allowed for static, non-branching dialogue, and didn’t have any allowance for the player being able to make choices during conversations (something I’ve known from the start we would need at some point).
- The way multi-step conversations happen was kind of awkward, especially for a game with an open, non-linear world, which would lead to situations where an “old” conversation with Flip would still be available later in the game if you returned to an old area.

And so recently I worked the [Yarn Spinner](https://yarnspinner.dev/) tool into Little Nemo. A quick description from their website:

*"Yarn Spinner helps you build branching narrative and dialogue in games. It's easy for writers to use, and has powerful features for integrating your content straight into your game.*

*Yarn Spinner is used in games ranging from Lost in Random, to Night in the Woods, A Short Hike, Dredge, Escape Academy, Baladins, Frog Detective 2, Button City, and Unbeatable."*

After integrating this tool with the existing dialogue UI, we were able to move the conversations into Yarn Scripts, which immediately gives us access to some powerful tools (such as branching dialogue) right out of the gate. I have to say, I’m really impressed with this tool and how good the API and documentation are. It was very easy to replace my existing, naive dialogue implementation with Yarn Spinner with minimal interface needed to get it working with my UI.

Expect improvements to the existing conversations in the near future. Cid has been working on improving the placeholder conversations I’ve written thus far. I'm excited to get a bit more life written into the characters. 😁



### Shopping 💵

This might seem like a jump, but we’re still talking about the same topic of dialogue systems and UI. In *Little Nemo* you’ll be able to spend candy you’ve collected to purchase items (or other less concrete rewards) from NPCs. But there are no discrete “shops” in the world. This mostly comes down to the lack of consumable items or weapon upgrades (which are often the class of things you’ll purchase in video game shops). Instead, NPCs will typically only offer the opportunity to buy a singular item or perhaps offer to do something for you if you give them some candy. So it is a bit more of a bartering system, and it makes sense to simply work that into the flow of dialogue.

![img](https://ksr-ugc.imgix.net/assets/041/090/936/cc7e5a9fd112cb60ab9598cb648d5366_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1685125742&gif-q=50&q=92&s=c5feb1ff69b652617b62d415ef1e79d9)

A mocked up conversation example using the new choice selection & shopping UI.

Once you begin to encounter opportunities to spend your candy, it will start to make sense why you should want to collect it (and why you don’t want to wake up and lose your candy) aside from because it makes pretty sparkles when you pick it up. ✨



### Complex Dialogue Flow 🧶

In addition to the logic available within conversations, and the addition of shopping interactions, next up I will be introducing some equally important elements to the dialogue system: flagging for the player when an NPC has something new/important to tell you and also allowing NPCs to move around the world based on interactions you’ve had with them.

The groundwork here is mostly completed, it just needs some final touches and we’ll be able to have Flip follow the player around in a more dynamic way and present conversations to the player that make sense based on where and when you’re speaking with her. So no more back-tracking to find Flip still standing by the starting bed offering the same introductory dialogue.

Additionally, something I’ve noticed in the current build of the game is that players don’t know they can speak with Minerva after they’ve rescued her. This makes sense, especially given how static the conversations are in the game up until this point, but with a bit of UI, we’ll be able to indicate to the player that Mina wants to speak with you (she’ll sell you something after you rescue her). I'll probably be able to share some GIFs of this next month.



## Moon Meter 🌙

This is a somewhat small detail, but I think it will go a long way: there’s now an animation for the moon meter, and on Nemo, when you fill the meter. Players are often confused about the moon meter and what it does, for good reason: there weren’t any indications about what happened after filling it.

![img](https://ksr-ugc.imgix.net/assets/041/090/966/d0c9f104230e7336713524d6fc8613f8_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1685125944&gif-q=50&q=92&s=e0a4dd5843af786d4194606d9a3af46f)

Now the meter has a small animation to go with filling up, and Nemo is surrounded by hearts and sparkles with some text letting you know that Nemo has been healed. This effect was probably a lot harder than you’re imagining. The faux-3D aspect of the hearts and sparkles around Nemo (they go behind and in-front of and then again behind Nemo’s sprite) requires some clever toggling of two separate particle systems rendering in different sorting layers, and the curved text required an asset from the Unity asset store. So I think I wound up spending the better part of a day just getting this one effect done (😣 much longer than I’d typically spend on a single effect) but I’m happy with the result.

![img](https://ksr-ugc.imgix.net/assets/041/090/971/ab3b671aa300db37f019640cd19e531f_original.gif?ixlib=rb-4.1.0&w=700&fit=max&v=1685125972&gif-q=50&q=92&s=544339fe73e026d6b411779a5fe8934e)

If you’ve been following development closely, you’ve probably heard me mention the idea of ranking up. I’m probably not going to implement that system until a bit later when I have most of the content of the game complete so that I can balance it appropriately, but the general idea is that filling the moon meter when you’re already at full health will rank you up, making the game more challenging with the possibility for more rewards. I will re-use this effect with some changes to the text and particles for a rank up effect, but for now it will only ever heal Nemo.



## New Sleepwalker Early Access Build 💾

I also spent a little bit of time this month just getting things into a state where I could make a new build for Sleepwalkers to try out. I hadn’t put out a new build for almost three months, and there were some pretty significant technical changes since then that I’ve talked about in previous updates.

You can see a full changelog since the previous build here in the [patch notes](https://store.steampowered.com/news/app/2194870/view/5264189392023882224?l=english), but to recap a few of the big changes if you’re a Sleepwalker and want to check it out:

- Those new Gumdrop Gardens enemies I showed off in the previous update are in there now.
- The Camera overhaul I previously talked about is complete. This smooths out some of the jerkiness, improves screen transition smoothness (for secret areas and arenas), allows for Mario-style soft-top edges that Nemo doesn’t collide with but the camera does, and allows for the player to look up and down.
- The mapping and chunk edge improvements I mentioned before are in there. This gives very detailed control about conveying the parameters of a chunk edge in terms of how we determine if the player is able to pass through or not (eg. do you need to unlock a gate, do you need a toy ability or abilities, is it one-way, etc.).
- New tiles for the Mushroom Marsh and the bouncy mushrooms are available to see and play with.
- The new look for Oblivion is in there.
- And lots of other stuff. Again, check out the [patch notes](https://store.steampowered.com/news/app/2194870/view/5264189392023882224?l=english) to see the whole list of changes.



## That’s all for now! 👋

That’s it for this month. I just want to remind you to tune in to [Wholesome Direct](https://twitter.com/_wholesomegames/status/1658123609506824196) on **Saturday June 10th** at (**9am PT / 12pm ET / 6pm CET**), and consider hopping into the [Discord](https://discord.com/invite/9NymgSJAVp) where I’ll be hanging while the event is live so we can chat! Catch you then. 😊

-Dave
