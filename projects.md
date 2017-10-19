---
layout: page
permalink: /projects/
title: projects
description: A collection of some projects I have worked on.
---
<div class="posts" itemscope="" itemtype="http://schema.org/Blog">
    <ul class="post-list">
    {% for project in site.projects reversed %}
        <li>
            <article class="post" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
                <h2><a class="poem-title" itemprop="url" href="{{ project.url | prepend: site.baseurl }}"><div itemprop="name">{{ project.title }}</div></a></h2>
                
                {% if  project.description %}
                    <p class="post-meta" itemprop="description">{{  project.description }}
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
            </article>
        </li>
    {%  endfor %}
    </ul>
</div>