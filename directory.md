---
title: Directory
custom-css: directory
---

{%- assign minimum_year = 2025 -%}
{%- assign maximum_year = 'now' | date: "%Y" | to_integer -%}

<section id="directory">
{%- for person in site.people -%}
    {%- assign _i = person.birth_date | date: "%Y" | to_integer -%}
    {%- if _i < minimum_year -%}
        {%- assign minimum_year = _i -%}
    {%- endif -%}
    {%- if person.death_date -%}
        {%- assign _i = person.death_date | date: "%Y" | to_integer -%}
        {%- if _i < minimum_year -%}
            {%- assign minimum_year = _i -%}
        {%- endif -%}
    {%- endif -%}
<div>
<a class="person" href="{{ person.url }}"><div class="profile">{% include u/people-profile-image.html person=person %}</div>
    <div class="details">
        <h2 class="name">{{ person.full_name | default: person.title | smartify }}</h2>{{ person.birth_date | date: "%B %e, %Y" | replace: "  ", " "  | replace: " ", "&nbsp;" }} — {{ person.death_date | date: "%B %e, %Y" | replace: "  ", " " | replace: " ", "&nbsp;"}}
    </div>
</a>
</div>
{%- endfor -%}
</section>

<h1>Timeline</h1>
<section id="timeline"><figure>
{%- assign _row_offset = minimum_year | minus: 1 -%}
{%- assign _max_row = maximum_year | minus: _row_offset -%}
{%- assign _gr = minimum_year | minus: _row_offset -%}<div class="years" style="grid-row: 1 / {{ _max_row }}">
    <div class="year" style="grid-row: {{ _gr }}"><div>{{ minimum_year }}</div></div>
    <div class="year-hr" style="grid-row: {{ _gr }}"></div>
{%- for _year in (minimum_year..maximum_year) -%}
    {%- assign _i = _year | modulo: 10 -%}
    {%- if _i == 0 -%}
        {%- assign _gr = _year | minus: _row_offset -%}
            <div class="year" style="grid-row: {{ _gr }}"><div>{{ _year }}</div></div>
            <div class="year-hr" style="grid-row: {{ _gr }}"></div>
    {%- endif -%}
{%- endfor -%}
{%- assign _gr = maximum_year | minus: _row_offset -%}
    <div class="year" style="grid-row: {{ _gr }}"><div>{{ maximum_year }}</div></div>
    <div class="year-hr" style="grid-row: {{ _gr }}"></div>
</div>
<div class="people" style="grid-row: 1 / {{ _max_row }}">
{%- assign _people_sorted_by_birth_year = site.people | sort: "birth_date" -%}
{%- for person in _people_sorted_by_birth_year -%}
    {%- assign _gr = person.birth_date | date: "%Y" | to_integer | minus: _row_offset -%}
    {%- if person.death_date -%}
        {%- assign _i = person.death_date | date: "%Y" | to_integer -%}
    {%- else -%}
        {%- assign _i = maximum_year -%}
    {%- endif -%}
    {%- assign _gre = _i | minus: _row_offset -%}
    <div class="person" style="grid-row: {{ _gr }} / {{ _gre }}"><div class="background"></div><div class="name">{{ person.title }}</div></div>
{%- endfor -%}
</div>
</figure></section>