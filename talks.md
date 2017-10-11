---
layout: page
permalink: /talks/
title: talks
description: Some of my talks.
---

<ul class="post-list">
{% for talk in site.talks reversed %}
    <li>
        <h2><a class="poem-title" href="{{ talk.url | prepend: site.baseurl }}">{{ talk.title }}</a></h2>
        <p class="post-meta">{% if  talk.description %}{{  talk.description }}{% endif %}</p>
        <p class="post-meta">{{ talk.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>