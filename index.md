---
layout: default
title: "مرحبًا بكم في مفكرتي الرقمية"
---

<h2>👋 مرحبًا بك</h2>

<p>هذه هي مساحتي الشخصية حيث أشارك أفكاري، ملاحظاتي، ومقالاتي في مجالات متنوعة تشمل التقنية، إدارة الأعمال، الذكاء الاصطناعي، التعليم الإلكتروني، والإنسانيات.</p>

<p>🚀 تصفح الأقسام بالأعلى أو ابدأ القراءة مباشرة!</p>

<hr />

<h2>أحدث التدوينات</h2>
<div class="posts-grid">
  {% for post in site.posts limit:5 %}
    <article class="post-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <div class="meta">{{ post.date | date: "%-d %b %Y" }}</div>
      <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
    </article>
  {% endfor %}
</div>
