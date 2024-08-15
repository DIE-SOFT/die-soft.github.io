---

title: Little Nemo Art Pipeline
description: A detailed look at the character art pipeline for Little Nemo
image: /assets/images/devlog/2022-06-13-preview.png

---

# Little Nemo Art Pipeline

I’ve been really happy that the response to the visual identity of *Little Nemo and the Guardians of Slumberland* has been so positive. I put a lot of care and attention into each frame of animation that goes into the game, and I thought it would be nice to elaborate a little more on what my art pipeline looks like. It's fairly elaborate so I'm going to break it down into at least two parts. So for today, here's Part I.

## Part I: The Shader

I'll start with the final image first just to set the stage, so here's a screenshot of Nemo in the Gumdrop Gardens:

![img](https://i.kickstarter.com/assets/037/634/277/7db895a38d1ed5a6743ca9bd1770f52e_original.png?fit=scale-down&origin=ugc&width=700&sig=ijNYM81TeRSWW6qpBwX6i32fWseOF%2B8i17vDoRsCQ3E%3D)

And I’ll zoom in so you can get a closer look at Nemo. The paper texture on Nemo comes from the shader, but all of the other details are drawn into the textures, such as the sprite outline and the cross hatching and shading.

![img](https://i.kickstarter.com/assets/037/634/281/300c61eb88e207c4e705c84fe33f19f0_original.png?fit=scale-down&origin=ugc&width=700&sig=KyUFXKPWEze2NBCKYvB22HrXQSqATcHx%2F2O1F6%2BYpp8%3D)

But aside from that paper texture, one of the key features of the shader is the ability to do a “palette swap” for sprites. This is used to let Nemo swap PJs, and also comes in handy for other sprites as well which sometimes need to appear with different colors in different contexts. Here's Nemo wearing the "Master of Dreams" PJs:

![img](https://i.kickstarter.com/assets/037/634/293/1ba9f0b82d617281ee3a3bcc6642f0cf_original.png?fit=scale-down&origin=ugc&width=700&sig=HQTTHTH7ai7%2F2nmHvJKm%2BQqqt8CJsOjYDi%2B7k3sbMAE%3D)

And since we’re utilizing Unity’s 2D lighting system, we can of course change the lighting on Nemo. You’ll see that the outline is actually emissive if we crank up our emissive global light. This is all very useful for setting up different lighting moods in different environments.

![img](https://i.kickstarter.com/assets/037/634/298/1470c5b900f2986c47b1c0aee36e46e2_original.png?fit=scale-down&origin=ugc&width=700&sig=yfKhzfk4bRU7Ad0auux6d861q3c0Kw5%2B%2BgnqLUwxT74%3D)

And then if I change the sprite’s material so that it’s using the default shader, you can see what the sprite actually looks like:

![img](https://i.kickstarter.com/assets/037/634/300/537c0ecc0405de2a6b81a95cfc9281b3_original.png?fit=scale-down&origin=ugc&width=700&sig=6qv%2FKz4ULrz%2FTDNIBhS8z%2BmbsRMQh22J%2BH1qYeGAQg8%3D)

Yikes! If you’re wondering where all the hatching, shading, and outline information went, that’s all in the mask data texture, so it’s not visible here. Here in this primary texture, we have blocks of RGBCMY colors so that we can identify areas of color, and then we apply a gradient to each of those. And if you’re wondering what the mask data looks like:

![img](https://i.kickstarter.com/assets/037/634/306/40f9b243db74294766032af39f461697_original.png?fit=scale-down&origin=ugc&width=700&sig=f2TYk1dgirGmoyfcKspHLHMTkIWNO%2BUfAHxF%2BuxqWFk%3D)

Here red values represent that we’re coloring based on the RGBCMY value from the primary texture, and green represents the emission levels. (The blue channel is reserved for now but may be used for rim lighting later on).

So, to combine those two textures together into a fully rendered sprite, we first need the gradients that we’ll be mapping from. For that there is a gradients map ScriptableObject which is just a relatively simple object that allows us to define a gradient for each color block. Here's the inspector panel for one:

![img](https://i.kickstarter.com/assets/037/634/317/cacb5fbd62dc0a10807209f7224ce6c0_original.png?fit=scale-down&origin=ugc&width=700&sig=%2FX5WqvrAE55%2BKqrvxguzn0tPuGSVsMiSeJBJKJVICxI%3D)

And all of those gradient maps we have in the game get flattened down into a single relatively small Texture 2D Array, which is what the shader will use to do the lookups. Perhaps that sounds complicated, but essentially, we’re just using the red values in that mask texture above to figure out *where* on the gradient to sample, and the RGBCMY value in the other texture to determine *which* gradient to use.

Here’s a birds-eye view of the shadergraph I’ve built that does just that:

![img](https://i.kickstarter.com/assets/037/634/324/65b8d736e733a8fa19050cb84474a367_original.png?fit=scale-down&origin=ugc&width=700&sig=WwesO%2F8t8CmGvVjq%2B0UikUKtzkFiCB8hEJYe6DJXxt4%3D)

It looks a bit of a mess, but ultimately it’s just doing all of the things I’ve described above:

- Combining a texture along with its mask texture and a gradient map to generate a final image
- Applying a paper texture
- Isolating the outline so that visual effects can be applied specifically to the outline (eg. a bright gradient to indicate something is interactable)

Of course I’ve glossed over the complexity of the shadergraph a bit, but you’ve got the broad strokes of it now. And I’m always happy to answer questions about this stuff if you’re curious to know more. It easiest to find me in the [DIE SOFT Discord server](https://t.co/EhbzHv9ZPn), and we even have a dedicated Q&A channel.

I’ll be back with Part II soon (now can be found [here](/2022/06/15/nemo-art-pipeline-pt2.html)) which will get more into the process of using the Procreate app on my iPad to actually draw and animate all these sprites. But in the meantime, please let me know in the comments if you enjoy this kind of technical, behind-the-scenes look at the game. Am I overwhelming you with detail? Would you rather hear about a different aspect of the game? Leave a comment with your feedback. Thank you!

\- Dave
