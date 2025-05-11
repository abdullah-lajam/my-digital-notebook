---
layout: page # أو layout مخصص للأرشيف
title: أرشيف التدوينات
permalink: /archive/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      <span class="post-meta">{{ post.date | date: "%d %b، %Y" }}</span>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">اقرأ المزيد &raquo;</a>
    </li>
  {% endfor %}
</ul>
