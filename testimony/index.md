---
layout: wide
published: true
---

<div class="grid-container">
  <div class="grid-row">
    <div class="desktop:grid-col-8 usa-prose padding-right-4">
      {% assign page_title = 'Testimony' %}
      {%
        include collection-header.html
        title=page_title
        description="
          NCD testimony to Congress
          and policymakers.
        "
      %}
      {% assign posts = site.testimonies | reverse %}
      {% for post in posts %}
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
