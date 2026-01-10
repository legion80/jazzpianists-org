{%- comment -%}
List all keys in an object |o|.
{%- endcomment -%}
{%- for item in include.o %}{{ item }} {% endfor -%}
