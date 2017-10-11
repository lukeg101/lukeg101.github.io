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
        <p class="post-meta">{% if  project.description %}{{  project.description }}{% endif %}
        {% if project.git%}
        [<i><a href="{{ project.git }}" rel="noopener" aria-label="code">repo</a></i>]</p>
        <p class="post-meta">{{ project.date | date: '%B, %Y' }}</p>
        {% else %}
        </p>
        <p class="post-meta">{{ project.date | date: '%B, %Y' }}</p>
        {% endif %}
    </li>
{%  endfor %}
</ul>