---
layout: wide
title: Progress Reports
pagination:
  enabled: true
  collection: all
  category: progress report
---

<div class="grid-container">
  <div class="grid-row">
    <div class="desktop:grid-col-8 usa-prose padding-right-4">
      {%
        include collection-header.html
        title=page.title
        description="
          NCD publishes progress reports with recommendations on national disability policy.
        "
      %}
      {% for post in paginator.posts %}
        {%
          include paginated-collection-item.html
          post=post
        %}
      {% endfor %}
      <!-- Pagination links -->
      {% include paginator.html %}
    </div>
  </div>
</div>
