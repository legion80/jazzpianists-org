---
layout: default
custom-css:
    - index
    - genre-backgrounds
custom-js: main
suppress-header: true
---
<hgroup>
<h1 class="logo"><span>The</span> <span>Jazz</span> <span>Pianists</span></h1>
<h2>an introduction</h2>
</hgroup>

<section id="intro">
    <section id="intro-text">
<div markdown="1">

## Jazz is America's classical music.

In American cities at the turn of the century, African musical traditions met popular song, European harmony, and social dance forms to create jazz.

</div>
<div markdown="1">

<img src="{{ site.image-directory }}gottlieb-338.jpg" alt="Portrait of Jack Teagarden, Dixie Bailey, Mary Lou Williams, Tadd Dameron, Hank Jones, Dizzy Gillespie, and Milt Orent, Mary Lou Williams' apartment, New York, N.Y., ca. Aug. 1947 [Gottlieb Collection Assignment No. 338]" />
{: class="image"}

## The piano became foundational to jazz.

Ubiquitous in homes, clubs, and social spaces, the piano was an instrument where these traditions could meet. Its ability to supply rhythm, harmony, 
and melody together made it an important tool for jazz.

</div>
<div markdown="1">

<img src="{{ site.image-directory }}davis-evans.jpg" alt="Miles Davis and Bill Evans" />
{: class="image"}

## The piano was a laboratory for jazz ideas.

At the keyboard, new ideas about rhythm, harmony, and form were tested and released into the music.

</div>
    </section>
    <section id="pianists-wall">
        <div class="meet"><h2>Meet</h2></div>
{%- assign jazz_insert_index = site.people | size | times: 0.33 | round -%}
{%- assign pianists_insert_index =  site.people | size | times: 0.75 | round -%}
{%- for c in site.people -%}
{%- if forloop.index0 == jazz_insert_index -%}
        <div class="the-jazz"><h2>the jazz</h2></div>
{%- endif -%}
{%- if forloop.index0 == pianists_insert_index -%}
        <div class="pianists"><h2>pianists.</h2></div>
{%- endif -%}
{%- include u/people-profile-image.html person=c -%}
{%- endfor -%}
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
        {%- capture _conditional %}item.genres contains '{{ _genre.tag }}'{% endcapture -%}
        {%- assign _people = site.people | where_exp: "item", _conditional -%}
        {%- for name in _genre.order -%}
            {%- assign _people2 = site.empty_array -%}
            {%- for person in _people -%}
                {%- if name == person.title -%}
    <div><a class="person-link" href="{{ person.url }}">{%- include u/people-profile-image.html person=person %} {{- person.first_name }} {{ person.last_name -}}</a></div>
                {%- else -%}            
                    {%- assign _people2 = _people2 | push: person -%}
                {%- endif -%}
            {%- endfor -%}
            {%- assign _people = _people2 -%}
        {%- endfor -%}
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
