---
layout: default
custom-css: index
custom-js: main
suppress-header: true
---
<hgroup>
<h1 class="logo"><span>The</span> <span>Jazz</span> <span>Pianists</span></h1>
<h2>an introduction</h2>
</hgroup>

<section id="intro">
<section id="intro-text" markdown="1">

## Jazz is America's classical music.

Born in New Orleans, it emerged from African-American musical traditions reshaped by slavery and carried forward through improvisation and collective expression.

## The piano became foundational to jazz.

Portable enough to be in social spaces and powerful enough to act as an entire ensemble, it became the instrument jazz organized itself around.

## The piano was jazz's laboratory.

At the keyboard, new ideas about rhythm, harmony, and form were tested—then released into the music.

</section>
<section id="pianists-wall">
<div><h2>Meet</h2></div>
{%- for c in site.people -%}
{%- include u/people-profile-image.html person=c -%}
{%- endfor -%}
<div><h2>the jazz pianists.</h2></div>
</section>
</section>

<section id="timeline">
<figure>
{%- assign _start_decade = 189 -%}
{%- assign _end_decade = 199 -%}
{%- assign _start_year_offset = _start_decade | times: 10 | minus: 1 -%}
{%- capture timeline_dates -%}
    {%- for decade in (_start_decade.._end_decade) -%}
<div class="decade" style="grid-row: {{ decade | minus: _start_decade | times: 10 | plus: 1 }} / span 10;"><span>{{ decade | append: "0's" | smartify }}</span></div>
    {%- endfor -%}
    {%- assign last_row = _end_decade | plus: 1 | minus: _start_decade | times: 10 | plus: 1 -%}
<div class="decade" style="grid-row: {{ last_row }}; min-height: 5.2em;"><span>today</span></div>
{%- endcapture -%}

{%- assign genre_end = last_row | plus: 1 -%}
{%- assign timeline_text = "" -%}
{%- assign _genres_reversed = site.genres | sort: "timeline_start" | reverse -%}
{%- for _genre in _genres_reversed -%}
    {%- assign _genre_row_start = _genre.timeline_start | minus: _start_year_offset -%}
    {%- assign _genre_row_end = _genre.timeline_start | minus: _start_year_offset -%}
<div class="genre-background-container" style="grid-row: 1 / {{ genre_end }}"><div class="genre-background genre-{{ _genre.tag }}"></div></div>
    {%- capture _genre_text %}
<div class="genre genre-{{ _genre.tag }}" style="grid-row: {{ _genre.timeline_start | minus: _start_year_offset }} / {{ genre_end }}">
<div markdown="1">
        {%- assign genre_end = _genre.timeline_start | minus: _start_year_offset %}

## {{ _genre.name }}

<div class="content">
<div markdown="1">

{{ _genre.content }}

</div>
<div class="pianist-list">
        {% capture _conditional -%}item.genres contains '{{ _genre.tag }}'{%- endcapture -%}
        {%- assign _people = site.people | where_exp: "item", _conditional -%}
        {%- for person in _people %}
<div><a class="person-link" href="{{ person.url }}">{%- include u/people-profile-image.html person=person %} {{- person.first_name }} {{ person.last_name -}}</a></div>
        {% endfor %}
</div>
</div>
</div>
</div>
    {% endcapture -%}
    {%- assign timeline_text = timeline_text | append: _genre_text -%}
{%- endfor -%}
{{ timeline_dates }}

<div class="content-container" style="grid-row: 1 / {{ last_row | plus: 1 }};">
{{ timeline_text }}
</div>
</figure>
</section>
