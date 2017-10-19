---
layout: page
permalink: /talks/
title: talks
description: Some of my talks.
---
<div class="posts" itemscope="" itemtype="http://schema.org/Blog">
	<ul class="post-list">
	{% for talk in site.talks reversed %}
	    <li>
	    	<article class="post" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
	        <h2><a class="poem-title" itemprop="url" href="{{ talk.url | prepend: site.baseurl }}"><div itemprop="name">{{ talk.title }}</div></a></h2>
	        {% if  talk.description %}
	        	<p class="post-meta" itemprop="description">{{  talk.description }}</p>
	        {% endif %}
	        {% if talk.date%}
	        	<p class="post-meta">{{ talk.date | date: '%B %-d, %Y' }}</p>
	        {% endif %}
	        </article>
	      </li>
	{% endfor %}
	</ul>
</div>