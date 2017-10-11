---
layout: page
permalink: /blog/
title: blog
description: A collection of some blog posts I have done.
---

<ul class="post-list">
{% for blogs in site.blog reversed %}
    <li>
        <h2><a class="poem-title" href="{{ blogs.url | prepend: site.baseurl }}">{{ blogs.title }}</a></h2>
        <p class="post-meta">{% if  blogs.description %}{{  blogs.description }}{% endif %}</p>
        <p class="post-meta">{{ blogs.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>