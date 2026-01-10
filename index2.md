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

<section>
<h3>Jazz is America's classical music.</h3>
<p>Born in New Orleans, it emerged from African-American musical traditions reshaped by slavery and carried forward through improvisation and collective expression.</p>
<h3>The piano rose with the music.</h3>
<p>Portable enough to be in social spaces and powerful enough to act as an entire ensemble, it became the instrument jazz organized around.</p>
<h3>The piano was jazz's laboratory.</h3>
<p>At the keyboard, new ideas about rhythm, harmony, and form were tested—then released into the music.</p>

<h2>Meet the jazz pianists.</h2>
</section>

<section markdown="1">

{%- for genre-tag in page.genre-order -%}
    {%- capture _conditional -%}item.tag == '{{ genre-tag }}'{%- endcapture -%}
    {%- assign _genre = site.genres | where_exp: "item", _conditional | first %}

## [{{ _genre.name }}]({{ _genre.url }})

{{ _genre.content }}

    {%- capture _conditional -%}item.genres contains '{{ genre-tag }}'{%- endcapture -%}
    {%- assign _people = site.people | where_exp: "item", _conditional -%}
    {%- for person in _people -%}
        <a class="person-link" src="{{ person.url }}">{%- include u/people-profile-image.html person=person %} {{- person.first_name }} {{ person.last_name -}}</a>
    {%- endfor -%}
{%- endfor %}

</section>