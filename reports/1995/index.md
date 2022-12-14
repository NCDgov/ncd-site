---
layout: wide
published: true
report_year: 1995
---

<div class="grid-container">
  <div class="grid-row">
    <div class="desktop:grid-col-8 usa-prose padding-right-4">
      {% assign page_title =  page.report_year | append: ' ' |  append: 'Reports' %}
      {%
        include collection-header.html
        title=page_title
        description="
          NCD publishes reports for with recommendations to the President, Congress
          and policymakers on national disability policy.
        "
      %}
      {% for post in site.reports %}
        {% if page.report_year == post.report_year %}
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
      include aside-page-links.html
      title="Reports By Year"
      limit=40
      items=site.data.report_years
    %}
  </div>
</div>
