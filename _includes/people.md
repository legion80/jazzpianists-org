<figure id="feature">
    <img class="hero-image" src="{%- include u/people-image-directory.fx person=page -%}hero.jpg" style="object-fit: cover; {%- if hero_position -%}object-position: {{ hero_position }}{%- endif -%};" />
</figure>
<hgroup>
<div>
    <h1>{{ page.title }}<br/><span class="life-dates">({{ page.birth_date | date: "%Y" }}–{{ page.death_date | date: "%Y" }})</span></h1>
    <h2>{{ tagline | markdownify }}</h2>
</div>
</hgroup>

<article>
{{ bio | markdownify }}

{{ contrib_jazz | markdownify }}

{{ contrib_piano | markdownify }}
</article>