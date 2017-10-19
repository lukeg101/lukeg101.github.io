---
layout: page
permalink: /projects/
title: projects
description: A collection of some projects I have worked on.
---

<ul class="post-list">
{% for project in site.projects reversed %}
    <li>
        <h2><a class="poem-title" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h2>
        
        {% if  project.description %}
            <p class="post-meta">{{  project.description }}
            [<i><a href="{{ project.url | prepend: site.baseurl }}" rel="noopener" aria-label="code">more</a></i>]</p>
        {% endif %}
        
        {% if project.tech%}
            <p class="post-meta">{{ project.tech | join: ', ' }}
            {% if project.git%}
                [<i><a href="{{ project.git }}" rel="noopener" aria-label="code">repo</a></i>]</p>
            {% else %}
                </p>
            {% endif %}
        {% endif %}

        {% if project.date%}
        <p class="post-meta">{{ project.date | date: '%B, %Y' }}</p>
        {% endif %}
    </li>
{%  endfor %}
</ul>