<figure id="feature">
    <img class="hero-image" src="{%- include u/people-image-directory.fx person=page -%}hero.jpg" style="object-fit: cover; object-position: {%- if hero_position %}{{ hero_position }}{% else %}50% 25%{% endif %};" />
</figure>
<hgroup>
<div>
    <h1>{{ page.full_name | default: page.title | smartify }}<br/><span class="life-dates">({{ page.birth_date | date: "%Y" }}–{{ page.death_date | date: "%Y" }})</span></h1>
    <h2>{{ tagline | markdownify }}</h2>
</div>
</hgroup>

<div class="article-container">
<article markdown="1">

{%- if intro -%}
{{ intro }}
{%- endif -%}

## Biography

{{ bio }}

### Influences

<div id="influence-graph">
    <div class="graph-container">
        <div class="graph-layout">
            <svg class="graph-svg"><defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#0A85B2" />
                </marker>
            </defs></svg>
            <div class="column left">
{%- include u/influence-column.html objects=page.influences -%}
<script>var influences = [{{ __return | join: "," }}];</script>
            </div>
            <div class="column center">
                <div class="person-link">
{%- include u/people-profile-image.html person=page %}<span>{{- page.title -}}</span>
                </div>
<script>var mainPerson = "{{ page.title | slugify }}";</script>
            </div>
            <div class="column right">
{%- capture _conditional -%}item.influences contains "{{ page.title }}"{%- endcapture -%}
{%- assign _influenced = site.people | where_exp: "item", _conditional -%}
{%- include u/influence-column.html objects=_influenced -%}
<script>var influenced = [{{ __return | join: "," }}];</script>
{%- include u/influence-column.html objects=page.influenced -%}
<script>var influenced = influenced.concat([{{ __return | join: "," }}]);</script>
            </div>
        </div>
    </div>
</div>

{%- if page.quotes -%}
<div id="quotes">
    {%- for quote in page.quotes -%}
    <blockquote>{{ quote.quote | markdownify }}</blockquote>
    <p>— {{ quote.author | markdownify | remove: '<p>' | remove: '</p>'}}</p>
    {%- endfor -%}
</div>
{%- endif -%}

## Contributions to jazz

{{ contrib_jazz }}

## Contributions to jazz piano

{{ contrib_piano }}

## Listen

{{ listen | markdownify }}

## Additional resources

{% assign links = "" -%}
{%- if page.links.wikipedia -%}
    {%- capture _html -%}<li><a href="{{ page.links.wikipedia }}">Wikipedia article on {{ page.title }}</a></li>{%- endcapture -%}
    {%- assign links = links | append: _html -%}
{%- endif -%}
{%- if page.links.piano_jazz -%}
    {%- assign links = links | append: "<li>" -%}
    {%- capture _html -%}<a href="{{ page.links.piano_jazz }}">Episode notes: {{ page.first_name }} {{ page.last_name }} on <em>Piano Jazz</em></a>{%- endcapture -%}
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