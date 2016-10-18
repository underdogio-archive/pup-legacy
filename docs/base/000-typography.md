---
title: Typography
subtitle: Typography, the foundation of every design system.
category: Base
---

Our main typeface is Google's excellent [Open Sans](https://fonts.google.com/specimen/Open+Sans).


Open Sans is automatically imported with a CSS `@import`, so you don't have to do anything extra in order to use it.

Values for things like our base font size, font scale, and line height are defined in [variables/typography.scss](https://github.com/underdogio/pup/blob/master/styles/pup/variables/_typography.scss).

## Specs

Here are some quick specs for Pup's typography system:

<ul class="list--bullet margin2--bottom">
  <li>
    <strong>Base font size</strong>: 14px
  </li>
  <li>
    <strong>Font scale</strong>: 1.25
  </li>
  <li>
    <strong>Base line height</strong>: 1.5 (21px)
  </li>
  <li>
    <strong>Line height for headings / large text</strong>: 1.25 (1.25 `x` heading font size in pixels)
  </li>
</ul>

## Font sizes

Our font sizes follow a (mostly) modular scale of `1.25`, based off a font size of `14px`.

```scss
$font-size: (
  // 12.25px
  -1: 0.875rem,

  // 14px
  0: 1rem,

  // 18px
  1: 1.25rem,

  // 22px
  2: 1.562rem,

  // 27px
  3: 1.953rem,

  // 34px
  4: 2.441rem
);
```

There is also a Sass function you can use to get a font size:

```scss
.example-class {
  // Set font size to 18px
  font-size: font-size(1);
}
```

## Spacing

All headings and paragraphs have a bottom margin of `1rem`, or `14px`.

## Paragraphs

<p>
  Maxime hymenaeos est, laoreet! Etiam iusto ab, quas, class aspernatur lacus
  nihil quidem laboriosam hac velit fugit nibh. Mus, exercitationem, venenatis
  aperiam. Suspendisse vero, sequi. Maxime hymenaeos est, laoreet! Etiam iusto
  ab, quas, class aspernatur lacus nihil quidem laboriosam hac velit fugit nibh.
  Mus, exercitationem, venenatis aperiam. Suspendisse vero, sequi.
</p>

```html
<p>
  Maxime hymenaeos est, laoreet! Etiam iusto ab, quas, class aspernatur lacus
  nihil quidem laboriosam hac velit fugit nibh. Mus, exercitationem, venenatis
  aperiam. Suspendisse vero, sequi. Maxime hymenaeos est, laoreet! Etiam iusto
  ab, quas, class aspernatur lacus nihil quidem laboriosam hac velit fugit nibh.
  Mus, exercitationem, venenatis aperiam. Suspendisse vero, sequi.
</p>

// Font size: 14px
// Line height: 21px
```

## Headings

<h1>Headline</h1>

```html
<h1>Headline</h1>

// Font size: 27px
// Line height: 33.75px
```

<h2>Title</h2>

```html
<h2>Title</h2>

// Font size: 22px
// Line height: 27.5px
```

<h3>Subheader</h3>

```html
<h3>Subheader</h3>

// Font size: 18px
// Line height: 22.5px
```

<h4>Small Heading</h4>

```html
<h4>Small Heading</h4>

// Font size: 12.25px
// Line height: 15.312px
```

## Heading classes

You can apply a heading style to a non-header element with a class.

<span class="h3">A span with h3 styling</span>

```html
<span class="h3">A span with h3 styling</span>
```
