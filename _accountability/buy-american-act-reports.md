---
layout: post
title: Buy American Act Reports
date: February 9, 2022
redirect_from:
  - /Accountability/buy_american_act
---

{% assign annual_reports = site.buy-american | reverse %}
{% for annual_report in annual_reports %}
  {% if annual_report and annual_report != nil %}
    {% include budget-report.html item=annual_report %}
  {% endif %}
{% endfor %}
