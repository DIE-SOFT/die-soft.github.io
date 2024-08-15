---

title: Scene Transitions
description: Seamless transitions between different scenes in Little Nemo
image: /assets/images/devlog/2022-06-20-preview.png

---

# Scene Transitions

Hello Little Nemo fans! I want to start by giving a shout out to recent backers that have brought us up to **68% funded**. Welcome to all the new sleepyheads reading. 👋 We’re super excited to have you as part of our Nemo community. As always please leave feedback about the campaign or join us on [our Discord server](https://discord.com/invite/9NymgSJAVp).

Today I wanted to share a bit about how scene transitions are handled in Little Nemo. As usual, I’ll try to keep things at a birds-eye view, but we’ll dive into some technical details as needed. One of the most well received snippets of gameplay from Little Nemo is Nemo’s wake up animation. When you take too much damage, you’ll be snapped out of the dream and find yourself awake on your bedroom floor having fallen out of bed.

![img](https://i.kickstarter.com/assets/037/708/760/57b026905254bb84faee51b293998931_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=fGaGDQkF%2Ba%2BJAvcAqaRezP%2BCvtXWF4astvCjmfKeQhg%3D)

And for those of you that aren't familiar with the original Little Nemo comics, they would typically end with Nemo having fallen out of bed onto the floor in a similarly silly pose.

![img](https://i.kickstarter.com/assets/037/708/769/b25a59a6b3e85eea2dfe47952fdc9ede_original.jpg?fit=scale-down&origin=ugc&q=92&width=700&sig=r30ODCMEsMphDTDB6V3V8hRObP6DjterC4M6jcSzQeA%3D)

First, I'll quickly describe how the broken glass effect is achieved.

- Hide Nemo briefly
- Then "take a photo" so to speak of the screen sans Nemo
- That screen texture is then put onto a 3D sheet glass model
- And then we shatter the glass, centered on Nemo's position
- The shattered bits get some spin put on them as they float up with negative gravity
- A custom shader is applied to them to make them dissolve into bright colors

Though what I really want to talk about today is one of the more subtle aspects of this transition: Nemo’s constant presence throughout. This somewhat minor detail is kind of important to me because I think it helps express the world from Nemo’s (and thus the player’s) point of view. There are no “scenes” or transitions so much as Nemo has just woken up and the Slumberland context has been torn out from under and replaced with the bedroom.

So now I’ll break down that transition from a more technical perspective of what’s happening:

- Start the glass break effect
- Swap out the Nemo player object with a “fake” Nemo that will do the tumbling animation
- Unload Slumberland (it’s not visible once the glass break effect starts)
- Load in the bedroom, and find where Nemo should land
- Animate Nemo tumbling from the position in Slumberland to the position in the bedroom
- Fade in the bedroom
- Swap from the “fake” Nemo to the player-controlled Nemo

And if we look at the non-violent wake up for fall asleep animations, it’s doing something similar (though including the bed in the animation this time).

![img](https://i.kickstarter.com/assets/037/708/802/e92f7dc3c16610fe678bea95be3ca180_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=a%2BFanGTlieJ7XWnvjNxAOqAYDTWOOsvtfORfZmLGZUA%3D)

So essentially it just boils down to swapping out Nemo for the “fake” Nemo during a scene transition and making sure that “fake” Nemo is in the correct positions on both ends. The end.

## That's it? Really?

Kind of yeah. So why don't people do *clever* transitions like this more often to make them more fun? Well, for one, it's much easier to wipe the slate clean when changing scenes. For another, you can't always guarantee your scene is going to load quickly enough to be ready in time. But probably the most troublesome issue with this is that it requires some kind of coordination between the two scenes. Okay so here's your warning, *I'm gonna start getting into the technical details from here on in*.

Because the "fake" Nemo has to move from the Slumberland position to the bedroom position during this transition, we need to enable some coordination here. In Unity the crux of this problem boils down to: the scenes have no way to “talk” to each other. If you want to share information, you’d typically be reduced to using some kind of globally scoped singleton that both scenes can refer to. But using singletons like that can make your code a bit brittle and it likes to create unintended side-effects, so when there’s a simple alternative to global variables, I like to use it. And in Unity, we have a good alternative in *ScriptableObjects*.

## ScriptableObjects for Inter-Scene Communication

ScriptableObjects have the interesting property of being both a referenceable asset, as well as always having an in-memory representation associated with that asset. What that means if we have some asset that both the Slumberland and Bedroom scenes can reference in the editor, and then at runtime those references will go to the same in-memory object.

So I have a class of ScriptableObjects that I’ve decided to name “Pipelines” that are simply for ferrying data around between anyone who might be interested. So we have a “DiegeticPipeline” in our current scene transition use case, and it contains properties and events, and if we set those properties or invoke those events in one scene, the other scene will be able to see the updated property values or receive those events. The scenes can't talk directly to each other, but the Pipeline is their go-between.

In addition to making inter-scene communication possible without using a global scope, it also provides a way to decouple dependencies. ScriptableObjects can become a kind of API for the data and events in question. That means you can properly define your API and prevent misuse of internal data, as well as swap out the implementations as needed.

I could go into some details of other use-cases that take advantage of these qualities of ScriptableObjects, but I'll leave it for another time (or for the comments).

## That's it for now!

As always: I’m happy to answer any questions or follow up with more details in the comments below. Also I’d love to get your feedback on this post and the campaign in general. And another reminder, if you’re not already a part of the [Discord community](https://discord.com/invite/9NymgSJAVp), make sure to come on by and say hello!

![img](https://i.kickstarter.com/assets/037/708/981/96839a028a684c4bc6bbf4add7f2d1fa_original.png?fit=scale-down&origin=ugc&width=700&sig=%2BEAKEGmIXifDChYT7SVLMCrFEMwWt3fDECOsom9Ati8%3D)



Okay, that’s all for today’s update! I don’t have a Kickstarter friend I want to mention today, so instead I’ll just suggest: consider browsing through the other video games that are currently up on Kickstarter. I’ll bet you’ll find something amazing in there that you’ll be excited to back.

Until the next update!

-Dave
