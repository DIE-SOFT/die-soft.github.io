---

title: Lighting and Mood Volumes
description: A look at how we dynamically change lighting schemes to get the right mood for different rooms
image: /assets/images/devlog/2022-06-16-preview.png

---

# Lighting and Mood Volumes

First off, I just want to say thank you to all you sleepyheads that have brought the campaign up to **60% funded!** 🎉 We have two weeks left, that’s right up until the end of June, so please help spread the word and let’s get this game 100% funded! 💪

For today’s update I wanted to talk about how I create environmental moods in Little Nemo. The game is a bit unique in that it is one large world which seamlessly loads in around the player, similar to what you might expect in a modern 3D open-world game. So, for different areas, I have bounding volumes (volumes in the spatial sense) which can control:

- Global Lighting
- Audio Effects
- Post processing effects: Color Grading, Bloom, etc.
- Screen-space particles

So it’s a few different elements that all combine to create the mood. First let me show how those can all come together with this video which shows the camera transitioning between two volumes (the default for this area, and the “cave” volume).

<video class="landscape" controls>
<source src="https://v2.kickstarter.com/1723690608-q%2BzWpEvWppPTqLBib%2FUJuLyj2lLCSLbGCdc3jrg1RVA%3D/assets/037/671/824/df6407a085f8f82a85eb4ab9ff8f8cbf_h264_high.mp4" type="video/mp4; codecs=&quot;avc1.64001E, mp4a.40.2&quot;">
<source src="https://v2.kickstarter.com/1723690608-q%2BzWpEvWppPTqLBib%2FUJuLyj2lLCSLbGCdc3jrg1RVA%3D/assets/037/671/824/df6407a085f8f82a85eb4ab9ff8f8cbf_h264_base.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
You'll need an HTML5 capable browser to see this content.
</video>

It's a bit subtle in this example, but hopefully you can see and hear the changes the occur as the camera pans between these two areas.

## Technical Jargon Primer

-  **Volume**: I’m not talking about the audio levels, but rather the area inside a bounding rectangle defined in the game’s 2D world space. Essentially all we do with these is ask: is this thing on screen, and if so, how much of it is on screen.
-  **Lerp**: This is short for linear interpolation, which sounds complicated but is fairly simple. We use it to find a middle ground between two things. So if you wanted, let’s say, a lighting scheme that’s 40% scheme A and 60% scheme B, you’ll lerp between scheme A and scheme B.
-  **LUT**: This is a Lookup Table. That can mean a lot of things in different contexts, but think of it like a dictionary. It’s full of entries with keys (which would be the word you’re looking up in a dictionary) and values (which would be the definition of the word).
-  **Color Grading**: This is a post processing step which uses a LUT that has an entry for every possible color, and the value of each entry is what that color should be converted to. This let’s you essentially “photoshop” the picture on screen, so you might tweak the hue, saturation, and levels to get the picture just right.
-  **GameObject**: This is a Unity specific term, this is just a “thing” that lives in the world which you can attach things to, and it can be put inside other GameObjects (a parent) or have GameObjects inside of it (children).
-  **Behaviour (or MonoBehaviour)**: This is a type of script that you can attach to a GameObject to give it properties or have it perform logic. It’s a central part of Unity’s “mono” environment.

## Mood Volumes

Now that you’ve got those ideas in your head, I can describe how I use volumes to define areas with set moods. I’ll create a GameObject for the volume. Then I’ll give it a Behaviour which defines this volume’s height and width (which combined with this GameObject’s position, will give us everything we need to create the bounds (area) of the volume. So right now I have a GameObject that does nothing, but it has a bounding volume.

So next I’ll start adding different effects which will utilize those bounds. So for instance, a Lighting Volume Behaviour could be attached. This would contain information about the desired lighting in this area (for instance, perhaps the midground lighting is dimmed and the background lighting has gotten brighter with red hues to simulate sunset).

Then I may also attach an Audio FX Volume which would contain information about the desired audio environment (for instance, making it the audio sound echoey like a cave).

And then finally perhaps I’ll add a Color Grading Volume which defines how the image should be color graded in this volume (for instance, making everything warmer and slightly more purple).

So now I have a Volume which has lighting, audio, and color grading information associated with it, but when do we express that volume? When it’s fully on screen or maybe when it just starts to get on screen? Since we can determine how much of this volume is on screen, we can lerp between adjacent volumes based on how much of each is visible. This is achievable because we always know we will have some other volume adjacent to the volume in question (or else we’ll assume a volume with default values). So if we’re halfway between the two volumes, we lerp halfway between the two.

![img](https://i.kickstarter.com/assets/037/671/840/01d0ddd31739dfd15faa6460bf27880a_original.png?fit=scale-down&origin=ugc&width=700&sig=uaD7m7QVfwZpxzTeZHDHwrE%2BdMuXoTC702dsx5WPGzE%3D)

Here you can see my attempt at showing how the camera overlap with the different bounds, tells us how much each volume should be expressed in the final image and audio mix.

## That's Essentially It

There are of course finer details to make this all work, for instance, how are the lerps between volumes actually implemented, but that’s getting into a level of technical detail that I think most of you won’t be interested in reading about.

One detail that might be interesting is how the global lighting is implemented in Little Nemo. There are three lighting layers that can be targeted: the background, the midground (this is where Nemo and all characters are), and the foreground. In each layer there is the default lighting (essentially how well lit is a sprite) and then there is the emissive lighting which is used for doing some tricks like making the candy and moon shinier in a sunset/backlit setting.

I posted to Twitter [a video a while back](https://twitter.com/diesoftgames/status/1494091793490759684) which illustrates the lighting amongst other details that’s worth sharing here.

<video class="landscape" controls>
<source src="https://v2.kickstarter.com/1723690608-Tvf1SOmEgdVEAs%2FXVsJE9MXnCyB5KiNlM6wQ%2F1aWwQI%3D/assets/037/671/978/b97d9ce66ce15532f050b8c409221bbd_h264_high.mp4" type="video/mp4; codecs=&quot;avc1.64001E, mp4a.40.2&quot;">
<source src="https://v2.kickstarter.com/1723690608-Tvf1SOmEgdVEAs%2FXVsJE9MXnCyB5KiNlM6wQ%2F1aWwQI%3D/assets/037/671/978/b97d9ce66ce15532f050b8c409221bbd_h264_base.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
You'll need an HTML5 capable browser to see this content.
</video>

You can see here that I also glossed over some more details aside from global lighting which a lighting scheme can control, but the important thing is that these schemes work with our volumes so we can transition to them with a lerp based on how visible they are.

Okay that’s all for now. Lemme know what you thought of this. I tried to take a birds-eye view and not get bogged down in the fine details but let me know if this was too broad of an approach.

Thank you again for your support, and please help spread the word by sharing this update with anyone you think might appreciate it. Let’s get to 70% funding next!

-Dave
