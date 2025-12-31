---
title: Reference page
---

{% comment %}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus velit, posuere luctus egestas id, finibus at diam. Aliquam ullamcorper est eget hendrerit fringilla. Duis in nisi tempor, vestibulum nunc placerat, vulputate metus. Vivamus at justo nec purus malesuada lobortis. Donec tincidunt interdum mi quis vestibulum. Quisque vehicula justo non metus condimentum pellentesque. Integer mollis malesuada purus, id aliquet odio elementum vitae. Donec eget sagittis eros. Donec vehicula, augue id pharetra posuere, velit purus tincidunt velit, vel hendrerit odio magna in purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta velit eu bibendum euismod. Nam non arcu mi.{% endcomment %}

* TOC
{:toc}

# Header 1 — Basic styles

Let's have a glance at the basic styles: [link](http://github.com/wild-flame/jekyll-simple), **strong**, *italic*, ***strong italic***, <del>deletion</del>, <ins>insertion</ins>.

Here's a new paragraph. Let's include an image:

![Image ALT text](https://fakeimg.pl/400x100/2ac3ae/feffff?font=bebas&retina=1&text=Test+Image)

## Header 2 — List items

- Unordered list item 1.
- **Unordered list item 2.** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus velit, posuere luctus egestas id, finibus at diam. Aliquam ullamcorper est eget hendrerit fringilla. Duis in nisi tempor, vestibulum nunc placerat, vulputate metus.
    - Nested unordered list item A.
    - Nested unordered list item B.
    - Nested unordered list item C.
- Unordered list item 3.
- Unordered list item 4.

1. Ordered list item 1.
1. Ordered list item 2.
1. Ordered list item 3.

### Header 3 — Blockquote

Here is a blockquote:

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### Header 4 — Tables

| Name      |  Age  | Fruit      |
|-----------|:-----:|-----------:|
| Alexandra | 22    | Apple      |
| Bran      | 50    | Orange     |
| Mike      | 31    | Watermelon |

##### Header 5 — Horizontal rule

Here are horizontal rules surrounding a paragraph with justified style:

---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{: style="text-align: justify"}

---

###### Header 6 — Code snippet

Here's a sentence with some `inline code` inserted in the middle.

```javascript
// index.js
var arr = [1, 2, 3, 4, 5];
var b = arr.map(x => x * x);
console.log(b);

function foo(){
    console.log('foo');
}
// 4 6 810 2 4 6 820 2 4 6 830 2 4 6 840 2 4 6 860 2 4 6 870 2 4 6 880 2 4 6 890

```

## Favicon

<img src="{{ site.favicon-directory | append: 'apple-touch-icon.png' | relative_url }}" />
