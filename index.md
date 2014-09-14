---
layout: default
---


#Where will you be when disaster strikes?

###_Disaster Preparation App for Boulder Residents_

<div class="home">
  <h1 class="page-heading">Latest Posts</h1>
  <ul class="post-list">
    {% for post in site.posts limit:5 %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <MARQUEE scrollamount="1" truespeed="true" scrolldelay="15">Just your minutely reminder that this HTML tag is still recognized</MARQUEE>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>