---
layout: default
title: الرئيسية
---

<div class="home">
  {% if site.posts.size > 0 %}
    <h2 class="post-list-heading">أحدث التدوينات</h2>
    <ul class="post-list">
      {% for post in site.posts limit:5 %} <!-- عرض أحدث 5 تدوينات -->
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
    {% if site.posts.size > 5 %}
    <p class="rss-subscribe">يمكنك <a href="{{ "/feed.xml" | relative_url }}">الاشتراك عبر RSS</a> لمتابعة كل جديد.</p>
    <p><a href="{{ '/archive/' | relative_url }}">عرض كل التدوينات &raquo;</a></p> <!-- أنشئ صفحة archive.md لعرض كل المقالات -->
    {% endif %}
  {% else %}
    <p>لا توجد تدوينات بعد. ابدأ بكتابة أول تدوينة لك!</p>
  {% endif %}

  <!-- يمكنك إضافة أقسام أخرى هنا، مثل نبذة عنك أو أهم المشاريع -->
  <div class="welcome-section">
    <h2>مرحباً بك في مفكرتي الرقمية!</h2>
    <p>هنا أشارك تأملاتي وأفكاري حول أحدث التقنيات، استراتيجيات ريادة الأعمال، وتطوير الذات. أتمنى أن تجد ما يفيدك ويلهمك.</p>
    <p>يمكنك معرفة المزيد <a href="{{ '/about/' | relative_url }}">عني</a> أو تصفح <a href="{{ '/archive/' | relative_url }}">التدوينات</a>.</p>
  </div>
</div>
