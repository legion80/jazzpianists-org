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
{%- for decade in (189..198) -%}
<div class="decade" style="grid-row: {{ decade | minus: 189 | times: 10 | plus: 1 }} / span 10;"><span>{{ decade | append: "0's" | smartify }}</span></div>
{%- endfor -%}
{%- assign last_row = 199 | minus: 189 | times: 10 | plus: 1 -%}
<div class="decade" style="grid-row: {{ last_row }};"><span>today</span></div>

{%- assign genre_end = last_row | plus: 1 -%}
{%- for genre_tag in page.genre-order reversed -%}
    {%- capture _conditional -%}item.tag == '{{ genre_tag }}'{%- endcapture -%}
    {%- assign _genre = site.genres | where_exp: "item", _conditional | first -%}
<div class="genre genre-{{ genre_tag }}" style="grid-row: {{ _genre.timeline_start | minus: 1889 }} / {{ genre_end }}" markdown="1">
    {%- assign genre_end = _genre.timeline_start | minus: 1889 -%}

## [{{ _genre.name }}]({{ _genre.url }})

{{ _genre.content }}

    {% capture _conditional -%}item.genres contains '{{ genre_tag }}'{%- endcapture -%}
    {%- assign _people = site.people | where_exp: "item", _conditional -%}
    {%- for person in _people %}
<a class="person-link" src="{{ person.url }}">{%- include u/people-profile-image.html person=person %} {{- person.first_name }} {{ person.last_name -}}</a>
    {% endfor %}
</div>
{%- endfor -%}
</figure>
</section>
