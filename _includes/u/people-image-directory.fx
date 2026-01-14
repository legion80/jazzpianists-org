{%- comment -%}
Returns path to person's image directory.

    person - Member of collection |people|.
{%- endcomment -%}
{%- assign __filename_with_ext = include.person.path | split: "/" | last -%}
{%- assign __filename_without_ext = __filename_with_ext | split: "." | first -%}
{{ site.image-directory }}people/{{ __filename_without_ext }}/