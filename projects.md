---
layout: page
permalink: /projects/
title: projects
description: A collection of some projects posts I have worked on.
---

<ul class="post-list">
{% for project in site.projects reversed %}
    <li>
        <h2><a class="poem-title" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h2>
        <p class="post-meta">{{ talk.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>