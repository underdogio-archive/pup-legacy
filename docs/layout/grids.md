---
title: Grids
category: Layout
---

We use a nestable fluid 12 column grid system which supports our custom breakpoints.

<div class="row">
  <div class="col-12">
    <p class="greybox margin1--ends">col-12</p>
  </div>
</div>
<div class="row">
  <div class="col-6">
    <p class="greybox margin1--ends">col-6</p>
  </div>
  <div class="col-3">
    <p class="greybox margin1--ends">col-3</p>
  </div>
  <div class="col-3">
    <p class="greybox margin1--ends">col-3</p>
  </div>
</div>
<div class="row">
  <div class="col-4">
    <p class="greybox margin1--ends">col-4</p>
  </div>
  <div class="col-4">
    <p class="greybox margin1--ends">col-4</p>
  </div>
  <div class="col-2">
    <p class="greybox margin1--ends">col-2</p>
  </div>
  <div class="col-2">
    <p class="greybox margin1--ends">col-2</p>
  </div>
</div>
<div class="row">
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox margin1--ends">col-1</p>
  </div>
</div>
<div class="row">
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        <p class="greybox margin1--ends">Nested col-12</p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        <p class="greybox margin1--ends">Nested col-12</p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-6-large-and-up col-4-medium-and-down">
    <p class="greybox margin1--ends">One half/One third</p>
  </div>
  <div class="col-3-large-and-up col-4-medium-and-down">
    <p class="greybox margin1--ends">One quarter/One third</p>
  </div>
  <div class="col-3-large-and-up col-4-medium-and-down">
    <p class="greybox margin1--ends">One quarter/One third</p>
  </div>
</div>

## Vertically entering columns

By default column height will stretch to match the height of the tallest column:

<div class="row text-align--center">
  <div class="col-3 border">
    .col-3
  </div>
  <div class="col-6">
    <img alt="Underdog.io logo" src="/images/underdogio-logo-with-text.svg" />
  </div>
  <div class="col-3 border">
    .col-3
  </div>
</div>

```html
<div class="row text-align--center">
  <div class="col-3 border">
    .col-3
  </div>
  <div class="col-6">
    <img alt="Underdog.io logo" src="/images/underdogio-logo-with-text.svg" />
  </div>
  <div class="col-3 border">
    .col-3
  </div>
</div>
```

You can instead center columns by applying the `.row--center` modifier to the row element:

<div class="row row--center text-align--center">
  <div class="col-3 border">
    .col-3
  </div>
  <div class="col-6">
    <img alt="Underdog.io logo" src="/images/underdogio-logo-with-text.svg" />
  </div>
  <div class="col-3 border">
    .col-3
  </div>
</div>

```html
<div class="row row--center text-align--center">
  <div class="col-3 border">
    .col-3
  </div>
  <div class="col-6">
    <img alt="Underdog.io logo" src="/images/underdogio-logo-with-text.svg" />
  </div>
  <div class="col-3 border">
    .col-3
  </div>
</div>
```

## Column offsets

Just like our normal columns we can offset using the <code>.offset-{column}</code> or <code>.offset-{column}-{media-query}</code> class names.

For example to create a centered grid:

<div class="row">
  <div class="col-8 offset-2">
    <p class="greybox margin1--ends">col-8 offset-2</p>
  </div>
</div>
<div class="row">
  <div class="col-5">
    <p class="greybox margin1--ends">col-5</p>
  </div>
  <div class="col-5 offset-2">
    <p class="greybox margin1--ends">col-5 offset-2</p>
  </div>
</div>
<div class="row">
  <div class="col-6-medium-and-up offset-3-medium-and-up col-12-small">
    <p class="greybox margin1--ends">Responsive column with offset</p>
  </div>
</div>

## Examples

A simple grid.

```html
<div class="row">
  <div class="col-6">
    One half
  </div>
  <div class="col-3">
    One quarter
  </div>
  <div class="col-3">
    One quarter
  </div>
</div>
```

Grid with responsive breakpoints.

```html
<div class="row">
  <div class="col-6-large-and-up col-4-medium-and-down">
    One half
  </div>
  <div class="col-3-large-and-up col-4-medium-and-down">
    One quarter
  </div>
  <div class="col-3-large-and-up col-4-medium-and-down">
    One quarter
  </div>
</div>
```

Nested grids.

```html
<div class="row">
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        One whole
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        One whole
      </div>
    </div>
  </div>
</div>
```
