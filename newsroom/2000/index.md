---
layout: wide
published: true
year: 2000
---

<div class="grid-container">
  <div class="grid-row">
    <div class="desktop:grid-col-8 usa-prose padding-right-4">
      {% assign page_title =  page.year | append: ' ' |  append: 'Newsroom Posts' %}
      {%
        include collection-header.html
        title=page_title
        description="
          NCD publishes newsroom posts for with recommendations to the President, Congress
          and policymakers on national disability policy.
        "
      %}
      {% for post in site.posts %}
        {% assign post_year = post.date | date: "%Y" | string %}
        {% assign page_year = page.year | string | strip %}
        {% if page_year == post_year %}
          {%
            include paginated-collection-item.html
            post=post
          %}
        {% endif %}
      {% endfor %}
      <!-- Pagination links -->
      {% include paginator.html %}
    </div>
    {%
      include aside-collection-year-links.html
      title="Newsroom Posts By Year"
      limit=40
      path="newsroom"
      posts=site.posts
    %}
  </div>
</div>
