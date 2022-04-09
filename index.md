## DIE SOFT

Placeholder homepage for DIE SOFT, LLC. A tiny indie game studio.

### Games

![Cover Image](/assets/images/NemoCoverImage4K.png)

### Posts

{% for post in site.posts %}
  <article>
    <h2>
        <a href="{{ site.url }}{{ post.url }}">
            {{ post.title }}
        </a>
    </h2>
  </article>
{% endfor %}

