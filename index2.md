---
layout: default
custom-css: index
suppress-header: true
genre-order:
    - ragtime
    - neworleans
    - stride
    - swing
    - bebop
    - cool
    - mainstream
    - hardbop
    - avantgarde
    - fusion
    - contemporary
---


<hgroup>
<h1 class="logo"><span>The</span> <span>Jazz</span> <span>Pianists</span></h1>
<h2>an introduction</h2>
</hgroup>

<section id="intro" markdown="1">

### Jazz is America's classical music.

Born in New Orleans, it emerged from African-American musical traditions reshaped by slavery and carried forward through improvisation and collective expression.

### The piano became foundational to jazz.

Portable enough to be in social spaces and powerful enough to act as an entire ensemble, it became the instrument jazz organized itself around.

### The piano was jazz's laboratory.

At the keyboard, new ideas about rhythm, harmony, and form were tested—then released into the music.

## Meet the scientists. Meet the jazz pianists.
</section>

<section id="timeline">
<figure>
{%- assign _start_decade = 189 -%}
{%- assign _start_year_offset = _start_decade | times: 10 | minus: 1 -%}
{%- capture timeline_dates -%}
    {%- for decade in (_start_decade..198) -%}
<div class="decade" style="grid-row: {{ decade | minus: _start_decade | times: 10 | plus: 1 }} / span 10;"><span>{{ decade | append: "0's" | smartify }}</span></div>
    {%- endfor -%}
    {%- assign last_row = 199 | minus: _start_decade | times: 10 | plus: 1 -%}
<div class="decade" style="grid-row: {{ last_row }}; min-height: 2em;"><span>today</span></div>
{%- endcapture -%}

{%- assign genre_end = last_row | plus: 1 -%}
{%- assign timeline_text = "" -%}
{%- for genre_tag in page.genre-order reversed -%}
    {%- capture _conditional -%}item.tag == '{{ genre_tag }}'{%- endcapture -%}
    {%- assign _genre = site.genres | where_exp: "item", _conditional | first -%}
    {%- assign _genre_row_start = _genre.timeline_start | minus: _start_year_offset -%}
    {%- assign _genre_row_end = _genre.timeline_start | minus: _start_year_offset -%}
<div class="genre-background-container" style="grid-row: 1 / {{ genre_end }}"><div class="genre-background genre-{{ genre_tag }}"></div></div>
    {%- capture _genre_text -%}
<div class="genre genre-{{ genre_tag }}" style="grid-row: {{ _genre.timeline_start | minus: _start_year_offset }} / {{ genre_end }}" markdown="1">
    {%- assign genre_end = _genre.timeline_start | minus: _start_year_offset -%}

## [{{ _genre.name }}]({{ _genre.url }})

{{ _genre.content }}

    {% capture _conditional -%}item.genres contains '{{ genre_tag }}'{%- endcapture -%}
    {%- assign _people = site.people | where_exp: "item", _conditional -%}
    {%- for person in _people %}
<a class="person-link" href="{{ person.url }}">{%- include u/people-profile-image.html person=person %} {{- person.first_name }} {{ person.last_name -}}</a>
    {% endfor %}
</div>
    {%- endcapture -%}
    {%- assign timeline_text = timeline_text | append: _genre_text -%}
{%- endfor -%}
{{ timeline_dates }}

<div style="position: relative; display: grid; grid-template-rows: subgrid; grid-template-columns: subgrid; grid-row: 1 / {{ last_row }}; grid-column: 1 / 5;">
{{ timeline_text }}
</div>
</figure>
</section>
