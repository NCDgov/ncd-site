---
layout: single-page
published: true
permalink: /foia/
title: Freedom of Information Act (FOIA)
redirect_from:
  - /freedom-information-act
  - /FOIA/FOIA-e-library
  - /FOIA/FOIA-annual-reports
  - /FOIA/FOIA-quarterly-reports
  - /FOIA/FOIA-chief-FOIA-officer-reports
  - /FOIA/make-a-FOIA-request
  - /accountability/foia/
---
The Freedom of Information Act (FOIA) is a federal law that permits individuals to request access to federal agency information and documents, except for records protected from disclosure by FOIA.

# Make a FOIA Request

Before submitting a FOIA request, please be sure to thoroughly browse NCD's website, including About Us, Newsroom,Progress Reports, Publications & Policy Briefs, Meetings & Events, and the NCD Policy Areas, which contain extensive information already available to the public.

When submitting a FOIA request to NCD, the requestor should:

*     State the request is being made under the Freedom of Information Act;
*     Be as specific as possible in identifying requested records;
*     Include his or her name, address, and phone number.

NCD will make every effort to respond to FOIA requests as quickly and as thoroughly as possible.

NCD's Freedom of Information Officer is Amged Soliman, Senior Attorney Advisor:

## Contact

**Amged Soliman**\
Senior Attorney Advisor\
National Council on Disability\
1331 F Street, NW, Suite 850\
Washington, DC 20004\
202-731-5910\
202-272-2074 TTY\
202-272-2022 Fax\
[FOIA@ncd.gov](mailto:FOIA@ncd.gov?subject=FOIA)

Additional resources are available for the FOIA [reference guide](/foia/reference-guide) and [regulation](/foia/regulation).

# FOIA e-Library

NCD strives to proactively publish as much information about NCD and our work processes as possible. That way, information that might be requested via a FOIA request can be readily found by any member of the public on our website, but not necessarily in this e-library. Examples of available documents on our website are: NCD Bylaws; Performance and Results Act Reports ; Congressional Budget Justification Reports; Financial Audit Reports; NCD strategic plan; Letters to stakeholders; NCD reports and NCD’s FOIA policy and procedures for requesters. While NCD publications are posted throughout the NCD.gov website, non-NCD documents, such as official government responses to NCD letters, will be posted here to the NCD FOIA e-Library. If you need help to determine whether the information you seek is posted to our website please contact NCD’s FOIA Public Liaison, Amged Soliman, at 202-731-5910 or [asoliman@ncd.gov](mailto:asoliman@ncd.gov)[](mailto:anicholas@ncd.gov?subject=FOIA).

* \[AbilityOne Commission response to NCD request for assistance collecting data for NCD report]({{ site.baseUrl }}/assets/uploads/docs/abilityone-commission-response-to-ncd-correspondence.pdf)
* \[FEMA Response to NCD Letter on Office of Disability Integration and Coordination]({{ site.baseUrl }}/assets/uploads/docs/mr.-clyde-terry---response---508---2017-03-03.pdf)

# FOIA Reports

{% assign foia_years = site.foia-reports | map: "report_year" | reverse | uniq %}

{% for year in foia_years %}
  {% assign year_reports = site.foia-reports | where: "report_year", year %}

  {% assign annual = year_reports | where: "report_type", "yearly" %}
  {% assign annual_length = annual | size %}

  {% assign quarter = year_reports | where: "report_type", "quarterly" | sort: "quarter" %}
  {% assign quarter_length = quarter | size %}

  {% assign chief = year_reports | where: "report_type", "chief-officer" %}
  {% assign chief_length = chief | size %}

  <h2>{{ year }} Reports</h2>

  <div>
    {% if annual and annual != nil and annual_length > 0 %}
      {% include foia-report-list.html title="Annual Report" items=annual %}
    {% endif %}

```
{% if quarter and quarter != nil and quarter_length > 0 %}
  {% include foia-report-list.html title="Quarterly Reports" items=quarter %}
{% endif %}

{% if chief and chief != nil and chief_length > 0 %}
  {% include foia-report-list.html title="Chief FOIA Officer Reports" items=chief %}
{% endif %}
```

  </div>

{% endfor %}
