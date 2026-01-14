<figure id="feature">
    <img class="hero-image" src="{%- include u/people-image-directory.fx person=page -%}hero.jpg" style="object-fit: cover; object-position: {%- if hero_position %}{{ hero_position }}{% else %}50% 25%{% endif %};" />
</figure>
<hgroup>
<div>
    <h1>{{ page.title }}<br/><span class="life-dates">({{ page.birth_date | date: "%Y" }}–{{ page.death_date | date: "%Y" }})</span></h1>
    <h2>{{ tagline | markdownify }}</h2>
</div>
</hgroup>

<div class="article-container">
<article markdown="1">

## Biography

{{ bio }}

## Contributions to jazz

{{ contrib_jazz }}

## Contributions to jazz piano

{{ contrib_piano }}

## Listen

## Additional resources

{% assign links = "" -%}
{%- if page.links.wikipedia -%}
    {%- capture _html -%}<li><a href="{{ page.links.wikipedia }}">Wikipedia article on {{ page.title }}</a></li>{%- endcapture -%}
    {%- assign links = links | append: _html -%}
{%- endif -%}
{%- if page.links.piano_jazz -%}
    {%- assign links = links | append: "<li>" -%}
    {%- capture _html -%}<a href="{{ page.links.piano_jazz }}">Article on <em>Piano Jazz</em> episode</a>{%- endcapture -%}
    {%- assign links = links | append: _html -%}
    {%- if page.links.piano_jazz_player -%}
        {%- capture _html -%}<iframe src="{{ page.links.piano_jazz_player }}" width="100%" height="290" frameborder="0" scrolling="no" title="NPR embedded audio player"></iframe>{%- endcapture -%}
        {%- assign links = links | append: _html -%}
    {%- endif -%}
    {%- assign links = links | append: "</li>" -%}
{%- endif -%}

<ul>{{ links }}</ul>
</article>
</div>