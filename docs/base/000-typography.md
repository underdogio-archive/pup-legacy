---
title: Typography
subtitle: Typography, the foundation of every design system.
category: Base
---

Our main font face is Google's excellent [Open Sans](https://fonts.google.com/specimen/Open+Sans).


Open Sans is automatically imported with a CSS `@import`, so you don't have to do anything extra in order to use it.

Values for things like our base font size, font scale, and line height are defined in [variables/typography.scss](https://github.com/underdogio/pup/blob/master/styles/pup/variables/_typography.scss).

## Specs

Here are some quick specs for Pup's typography system:

<ul class="list--bullet margin2--bottom">
  <li>
    <strong>Base font size</strong>: 14px
  </li>
  <li>
    <strong>Font scale</strong>: 1.333
  </li>
  <li>
    <strong>Line height</strong>: 1.5
  </li>
</ul>

## Font sizes

Our font sizes follow a (mostly) modular scale of `1.333`, based off a font size of `14px`.

<ul class="list--bullet margin2--bottom">
  <li>
    <strong>0.875rem</strong>: 10px
  </li>
  <li>
    <strong>1rem</strong>: 14px
  </li>
  <li>
    <strong>1.25rem</strong>: 17.5rem
  </li>
  <li>
    <strong>1.5625rem</strong>: 17.5rem
  </li>
  <li>
    <strong>1.953rem</strong>: 22px
  </li>
</ul>

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
```

## Headings

<h1>Headline</h1>

```html
<h1>Headline</h1>
```

<h2>Title</h2>

```html
<h2>Title</h2>
```

<h3>Subheader</h3>

```html
<h3>Subheader</h3>
```

<h4>Small Heading</h4>

```html
<h4>Small Heading</h4>
```

## Heading classes

You can apply a heading style to a non-header element with a class.

<span class="h3">A span with h3 styling</span>

```html
<span class="h3">A span with h3 styling</span>
```
