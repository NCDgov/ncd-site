---
layout: wide
published: true
year: 2017
---

<div class="grid-container">
  <div class="grid-row">
    <div class="desktop:grid-col-8 usa-prose padding-right-4">
      {% assign page_title =  page.year | append: ' ' |  append: 'Meetings' %}
      {%
        include collection-header.html
        title=page_title
        description="
          NCD publishes meeting and event details with post meeting materials like agenda and minutes.
        "
      %}
      {% for post in site.meetings %}
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
      title="Meetings By Year"
      limit=40
      path="meetings"
      posts=site.meetings
    %}
  </div>
</div>
