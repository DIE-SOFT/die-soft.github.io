---

title: Nemo Art Pipeline Part II - Animation
description: A closer look at the character animation of Little Nemo
image: /assets/images/devlog/2022-06-15-preview.png

---

# Art Pipeline Part II: Animation

In the first part of this look at the art pipeline for Little Nemo and the Guardians of Slumberland, I dug into [how I utilize shaders to create some advanced features for sprites](/2022/06/13/nemo-art-pipeline.html), such as palette swapping. That post got fairly technical, but if you just want the tl;dr, by combining two textures I can accomplish:

- Palette swapping using gradient maps
- Have a hand-drawn sprite outline with customizable lighting/light-emission
- And apply a nice paper texture to the final sprite image

But in this update, I wanted to get into how I draw and animate these textures.  If you’re unfamiliar with the look of the sprites, here’s a frame from Nemo’s run animation:

![img](https://i.kickstarter.com/assets/037/659/774/300c61eb88e207c4e705c84fe33f19f0_original.png?fit=scale-down&origin=ugc&width=700&sig=k0Nebni0H4ilnFOtw%2FQQnil1HSdsHEMRZBGvwzZ4GGk%3D)

To start, I want to talk a little bit about the tools I'm using.

## The Hardware: iPad & Apple Pencil

I use a 2018 iPad with an Apple Pencil to do all of my drawing. This was the first model of base iPad which supports the Apple Pencil (before that it was only the Pro models). I managed to get a really great deal for this hardware used on eBay for about $250, so keep in mind that you don’t need the latest hardware and you might be able to find amazing deals on the older models.

## The Software: Procreate

I should start by saying: the [Procreate app](https://procreate.art/) is probably the best ten dollars I have ever spent. When I first purchased this app, it was already a great deal, and since then it’s added amazingly useful features, notably animation support, all with no new purchases or subscription fees required. So if you're looking to do some stylus-based drawing, an older iPad with Apple Pencil and Procreate is very affordable, and probably about as good as any other solutions out there.

## The Animation Process

Here’s a more granular breakdown of a process GIF from the campaign page. Let’s take a look at how Nemo’s run animation was developed as our example. First, I start with a rough sketch where I try to settle on the major motions that are happening. This shouldn’t have too many details, and I’ll only draw every other frame (on the twos). Once I get something I like, it will look something like this:

![img](https://i.kickstarter.com/assets/037/659/818/bda141b8fea85a17424921d82eab9563_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=fJ%2F1QrU9d6vIEAH4eCKD0WbEvxJKZVg92fIFtn7VWoY%3D)

The run animation is a fairly fast movement and the player is constantly looking at it, so the choppy 15fps of the first pass won't do. We’re going to take that up to a full 30fps, which is the highest animation frame rate I target in Little Nemo. It’s visually very similar to 24fps (an animated film standard), but also makes things interpolate nicely into a 60hz context. So I will:

- Create new frames in-between all the existing frames
- Add all the fine details and secondary motions (eg. hair swishing, pajama hood flapping in the wind, etc.)
- And then once I’m happy with how it’s looking, I will ink it all in with my inking brush

And then we’ll have something like this:

![img](https://i.kickstarter.com/assets/037/659/832/815cecf2d1d09cf2dde39f01b0d9c51c_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=ofDb0%2FeLqtyx5GzFdaCZRsZAUJM43AyKAlx%2Bs%2BhU6Q0%3D)

A detail that might be worth bringing up at this point is consistency in line-weight and texture details. Because I’m targeting a maximum of 4K resolution with screen size of 20x11 units (my rough approximation for getting a widescreen NES feel, while still being very close to a 16x9 ratio), that means I need my source art to be 192 pixels per unit (ppu), so I am targeting 256ppu to give myself some wiggle room. With a consistent ppu target, I can use the same brush weights when inking and penciling in details and I can create consistency in the final image that is rendered on screen despite having various character sprites and terrain and background elements.

Next up, I’ll block in a white underlayer which, combined with the line art, represents what should be opaque in the texture. It also makes blocking in the colors and other details easier by using clipping masks on top of the white underlayer. The first step is to determine where my different color areas are. I define those by painting in either Red, Green, Blue, Cyan, Magenta, Yellow, or Black (white always remains white simply because I use that color often for action “swooshes”). Here’s how the run looks with my color areas defined:

![img](https://i.kickstarter.com/assets/037/659/858/38137b75532d44559d9de0f9225df839_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=O9aNX0xPvmJUQPkUTm7m5Tqwp2wwYbP6qqKLclKTyhY%3D)

And then I start adding in all the penciled-in details and shading. Essentially these are all the values that determine where on the gradient to sample a color from (darker is more to the left, lighter is more to the right), but while drawing,  it just looks like grayscale. Also I’ll go ahead and add the sprite outlines now. All of these values will be defined in red (so just cover them with a red layer set to multiply) and the outline will be expressed in the green channel (so I just draw it using a perfect green color). This texture doesn’t need alpha information, so the background is just black and it looks like this:

![img](https://i.kickstarter.com/assets/037/659/868/17c05119232d4da187f90b4ff41f250c_original.gif?fit=scale-down&origin=ugc&q=92&width=700&sig=oqjEmRzJLorjKpp9Ue6t3fs4NWMDAXRKHqIYxB2VoCk%3D)

Here’s a process pic of me working on these layers in Procreate:

![img](https://i.kickstarter.com/assets/037/659/873/493c86666ddba8517a495ddec31a3603_original.png?fit=scale-down&origin=ugc&width=700&sig=e1WuTfVuRoEr%2BByCpeapBfWGNMi2ib7B3Zta615OjyU%3D)

Procreate’s animation tools are excellent for this style of frame-by-frame animation. It’s very simple: your root layers and groups represent frames of animations, and their vertical order represents their position in the timeline. It also offers colored onion-skinning (red is previous frame, green is the next), which is super critical when you’re defining the broad movements of each frame. I think these tools are fairly standard for frame-by-frame animation, but the way they’ve so elegantly integrated it with Procreate's existing UI is just perfect.

Once that’s all set, I just export that as a PSD to my computer and use other software to export 2 sprite sheets. Here’s a side-by-side of what they look like for the Nemo run animation:

![img](https://i.kickstarter.com/assets/037/659/886/521987787066ecd032629b98919d2837_original.png?fit=scale-down&origin=ugc&width=700&sig=jDMKU4zwuv9R0WDATsQon%2FKiFl1ja31L4RatYWQkvCs%3D)

And that’s where it gets handed off to Unity, which gets into the bits I discussed in [Part I of this devlog](/2022/06/13/nemo-art-pipeline.html).]

## Seems Annoying But...

It might seem a bit annoying to have to draw in this grayscale style and block in the colors, but actually I find it’s really nice because I’m very indecisive in my color choices, and I like being able to finalize sprites for a character and know that I can come back in later and tweak the colors without needing to touch the textures at all. So often I’ll take a sketch, like say this one of Flip, and create a gradient palette from it in Unity.

![img](https://i.kickstarter.com/assets/037/659/926/48b39178f9a6ee7506300eb218d3a0fb_original.png?fit=scale-down&origin=ugc&width=700&sig=u4gzJfEOEmxdZITBMRfCIOkEyd%2FP74g3MgdRyc%2BaWNc%3D)

And later I will make tweaks as needed. That, of course, is in addition to the benefit of being able to swap palettes at runtime which is really useful for use cases like Nemo being able to change pajamas.

## Feedback?

So I think that’s it for my art pipeline coverage. There are other details I could go into, but I think these are some of the more interesting aspects. If there’s other art pipeline stuff you want to know about, leave questions in the comments or suggestions for more follow up posts.

## Another Kickstarter Friend!

There’s another Kickstarter I want to shout out that I think is really neat. It looks like a great blend of educational app with a cute game, so it caught my eye. It’s called [L2 Speak: Language Immersion](https://www.kickstarter.com/projects/jeffreyha/l2-speak?ref=zofb52) and they’re in the **last 48 hours of their campaign**, so get to it!

![img](https://i.kickstarter.com/assets/037/659/945/9c3ac162fbbc83f92b3b69869994ae1b_original.png?fit=scale-down&origin=ugc&width=700&sig=oby7%2BWM4yn3INVzPGK7lGzJbqCexqE8PkkKIV2vB8J0%3D)



**Put yourself in a world where you have no option but to learn your target language.** You'll explore new areas, try new activities, and meet new people, seamlessly learning the language of your choice as you go. It’s the world’s first free, immersive mobile social-sim designed to turn learning a language from something you labor to do, to something you love to do.

## Don't Forget About Our Discord!

Okay that’s it for this update, hopefully I’ll be back tomorrow with new milestones reached. Please leave comments about what else you’d like to see in the campaign and in these updates. What I’ve got to go on right now is **your direct feedback**, so please leave your comments below or find us in the community Discord!

[![img](https://i.kickstarter.com/assets/037/659/965/96839a028a684c4bc6bbf4add7f2d1fa_original.png?fit=scale-down&origin=ugc&width=700&sig=7G24ETGwoDbq6sYcTckLSMA6ZVzPJP%2B%2FUqRs4j28t1U%3D)](https://discord.com/invite/9NymgSJAVp)



Until the next update!

-Dave
