---
title: Typography
subtitle: Typography, the foundation of every design system.
category: Base
---

Our main font face is Google's excellent [Open Sans](https://fonts.google.com/specimen/Open+Sans).


Open Sans is automatically imported with a CSS `@import`, so you don't have to do anything extra in order to use it.

## Specs

Here are some specs for Pup's typography system:

<ul class="list--bullet margin2--bottom">
  <li>
    <strong>Base font size</strong>: 14px
  </li>
  <li>
    <strong>Font scale</strong>: 1.25
  </li>
  <li>
    <strong>Line height</strong>: 1.5
  </li>
</ul>

These values are defined in [variables/typography.scss](https://github.com/underdogio/pup/blob/master/styles/pup/variables/_typography.scss).

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
