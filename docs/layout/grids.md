---
title: Grids
category: Layout
---

We use a nestable fluid 12 column grid system which supports our custom breakpoints.

<div class="row">
  <div class="col-12">
    <p class="greybox">col-12</p>
  </div>
</div>
<div class="row">
  <div class="col-6">
    <p class="greybox">col-6</p>
  </div>
  <div class="col-3">
    <p class="greybox">col-3</p>
  </div>
  <div class="col-3">
    <p class="greybox">col-3</p>
  </div>
</div>
<div class="row">
  <div class="col-4">
    <p class="greybox">col-4</p>
  </div>
  <div class="col-4">
    <p class="greybox">col-4</p>
  </div>
  <div class="col-2">
    <p class="greybox">col-2</p>
  </div>
  <div class="col-2">
    <p class="greybox">col-2</p>
  </div>
</div>
<div class="row">
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
  <div class="col-1">
    <p class="greybox">col-1</p>
  </div>
</div>
<div class="row">
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        <p class="greybox">Nested col-12</p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        <p class="greybox">Nested col-12</p>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-6-large-and-up col-4-medium-and-down">
    <p class="greybox">One half/One third</p>
  </div>
  <div class="col-3-large-and-up col-4-medium-and-down">
    <p class="greybox">One quarter/One third</p>
  </div>
  <div class="col-3-large-and-up col-4-medium-and-down">
    <p class="greybox">One quarter/One third</p>
  </div>
</div>

## Flexbox grid

Columns can be centered vertically by applying the `.row--flex` modifier to a `.row`.

<div class="text-align--center">
  <div class="row row--flex">
    <div class="col-3">
      <p class="greybox flush--bottom">One third</p>
    </div>
    <div class="col-6">
      <img alt="Underdog.io logo" src="/images/underdogio-logo.svg" />
    </div>
    <div class="col-3">
      <p class="greybox flush--bottom">One third</p>
    </div>
  </div>
  <div class="row row--flex text-align--center">
    <div class="col-4">
      <p class="greybox flush--bottom">One fourth</p>
    </div>
    <div class="col-6">
      <p class="greybox flush--bottom">One half</p>
    </div>
    <div class="col-2">
      <img alt="Underdog.io logo" src="/images/underdogio-logo.svg" />
    </div>
  </div>
</div>

## Column offsets

Just like our normal columns we can offset using the <code>.offset-{column}</code> or <code>.offset-{column}-{media-query}</code> class names.

For example to create a centered grid:

<div class="row">
  <div class="col-8 offset-2">
    <p class="greybox">col-8 offset-2</p>
  </div>
</div>
<div class="row">
  <div class="col-5">
    <p class="greybox">col-5</p>
  </div>
  <div class="col-5 offset-2">
    <p class="greybox">col-5 offset-2</p>
  </div>
</div>
<div class="row">
  <div class="col-6-medium-and-up offset-3-medium-and-up col-12-small">
    <p class="greybox">Responsive column with offset</p>
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
