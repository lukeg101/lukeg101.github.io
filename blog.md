---
layout: page
permalink: /blog/
title: blog
description: A collection of some blog posts I have done.
---
<div class="posts" itemscope="" itemtype="http://schema.org/Blog">
	<ul class="post-list">
	{% for blogs in site.blog reversed %}
	    <li>
	    	<article class="post" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
		        <h2><a class="poem-title" itemprop="url" href="{{ blogs.url | prepend: site.baseurl }}"><div itemprop="name">{{ blogs.title }}</div></a></h2>
		        {% if  blogs.description %}
		        	<p class="post-meta" itemprop="description">{{ blogs.description }}</p>
		        {% endif %}
		        {% if blogs.date %}
		        	<p class="post-meta">{{ blogs.date | date: '%B %-d, %Y' }}</p>
		        {% endif%}
	        </article>
	      </li>
	{% endfor %}
	</ul>
</div>