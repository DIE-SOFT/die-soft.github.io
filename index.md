## DIE SOFT

Placeholder homepage for DIE SOFT, LLC. A tiny indie game studio.

### Games

[Little Nemo](/little-nemo)

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

{% include mce-signup.html %}

