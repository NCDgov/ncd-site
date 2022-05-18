---
layout: wide
title: Fact Sheets
pagination:
  enabled: true
  collection: all
  category: fact sheets
---

<div class="grid-container">
  <div class="grid-row">
    <div class="desktop:grid-col-8 usa-prose padding-right-4">
      {%
        include collection-header.html
        title=page.title
        description="
          NCD publishes fact sheets with recommendations on national disability policy.
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
