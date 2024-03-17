---
layout: post
title: Congressional Budget Justification Reports
date: March 11, 2024
redirect_from:
  - /accountability/congressional_budget
---

## Reports by Fiscal Year

{% assign budget_years = site.budget-reports | reverse %}

{% for budget_year in budget_years %}
  {% if budget_year and budget_year != nil %}
    {% include budget-report.html item=budget_year %}
  {% endif %}
{% endfor %}

<!-- ### Fiscal Year 2025 Budget Justification

{% include download-file.html document_type="PDF" file_path="accountability/NCD-FY2025-Budget-Submission.pdf" %}

### Fiscal Year 2024 Budget Justification

{% include download-file.html document_type="PDF" file_path="accountability/NCD-FY2024-Budget-Submission.pdf" %}

### Fiscal Year 2023 Budget Justification

{% include download-file.html document_type="PDF" file_path="accountability/NCD-FY2023-Budget-Submission.pdf" %}

### Fiscal Year 2022 Budget Justification

{% include download-file.html document_type="DOC" file_path="accountability/budget-submission-fy2022.docx" %}

### Fiscal Year 2021 Budget Justification

{% include download-file.html document_type="PDF" file_path="accountability/budget-submission-fy2021.pdf" %}

### Fiscal Year 2020 Budget Justification

{% include download-file.html document_type="PDF" file_path="accountability/budget-submission-fy2020.pdf" %}

### Fiscal Year 2019 Budget Justification

{% include download-file.html document_type="DOC" file_path="accountability/budget-submission-fy2019.docx" %}

### Fiscal Year 2018 Budget Justification

{% include download-file.html document_type="DOC" file_path="accountability/budget-submission-fy2018.docx" %}

### Fiscal Year 2017 Budget Justification

{% include download-file.html document_type="DOC" file_path="accountability/budget-submission-fy2017.docx" %} -->

<!--
These docs do not exist.

\* \[Fiscal Year 2016 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/ncd-fy16-cj.doc)
\* \[Fiscal Year 2015 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/ncd-2015-congressional-justification.doc)
\* \[Fiscal Year 2014 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/fy2014-congressional-justification.docx)
\* \[Fiscal Year 2013 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/ncd-fy-2013-congressional-justification.pdf)
\* \[Fiscal Year 2012 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/fy12-ncd-cj-final-3-updated.pdf)
\* \[Fiscal Year 2011 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/14-ncd-cong-budget-fy-2011-1-7-10-(2).pdf)
\* \[Fiscal Year 2010 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/ncd-2010cogressionalbudget-5-5-09.doc)
\* \[Fiscal Year 2009 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/ncd-2009-budget-final-final-narrative-9-10-07.pdf)
* \[Fiscal Year 2008 Budget Justification]({{ site.baseUrl }}/assets/uploads/docs/2008budget.pdf)

-->
