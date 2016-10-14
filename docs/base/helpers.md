---
title: Helpers
category: Base
---

## Background colors

<div class="color-block">
  <div class="color-block__color bg--light-blue"></div>
  <div class="color-block__label">
    .bg--light-blue<br />
  </div>
</div>

<div class="color-block">
  <div class="color-block__color bg--green"></div>
  <div class="color-block__label">
    .bg--green<br />
  </div>
</div>

## Block center

Centers an element that has a display mode set to `block`.

<div class="block--center border--left border--right text--center" style="width: 200px;">
  Centered block
</div>

```html
<div class="block--center">
  Centered block
</div>
```

## Capitalize

Capitalize a string of text with `.capitalize`.

<p class="capitalize">
  this paragraph is capitalized
</p>

```html
<p class="capitalize">
  this paragraph is capitalized
</p>
```

## Center content

Centers content within a container.

<div class="center-content border--left border--top border--right border--bottom" style="height: 100px">
  Centered content
</div>

```html
<div class="center-content"></div>
```

## Colors

Helpers for setting an element's text color.

<strong class="color--blue">.color--blue</strong>

<strong class="color--gray">.color--gray</strong>

<strong class="color--orange">.color--orange</strong>

<strong class="color--red">.color--red</strong>

## Faded

Fade out an element by applying a class of `.faded` to it.

<div class="faded">
  <img alt="Underdog.io logo" src="/dist/img/underdogio-logo.svg" />
</div>

```html
<div class="faded"></div>
```

## Inline Center

Center inline text vertically. `.inline-center` Must be applied to each piece of inline text that you want to center.

<div>
  <span class="inline-center">
    Centered
  </span>
  <span class="inline-center" style="font-size: 0.5em">
    Vertically
  </span>
</div>

```html
<div>
  <span class="inline-center">
    Centered
  </span>
  <span class="inline-center">
    Vertically
  </span>
</div>
```

## position: relative

Capture elements that have a `position` set to `absolute` by applying the class
`.pos-rel` to an element.

<div style="height: 210px;">
  <div class="pos-rel">
    <div class="dropdown-menu" style="left: 0">
      <div class="dropdown-menu__wrapper">
        <span class="list-heading">chris@underdog.io</span>
        <div class="dropdown-menu__content">
          <ul class="menu-list">
            <li class="menu-list__item">
              <a class="nav-link" href="/settings/">Settings</a>
            </li>
            <li class="menu-list__item">
              <a class="nav-link" href="/support/">Support</a>
            </li>
            <li class="menu-list__item">
              <a class="nav-link" href="/logout/">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="pos-rel">
  <!-- Absolutely positioned content -->
</div>
```

## Strikethrough

Allows you to display a strikethrough on top of an element.
Use in place of `text-decoration: line-through` when you want a line-through to
span multiple elements.

<span class="strikethrough">
  Vehicula cillum illum reprehenderit! Laboriosam sapiente? Urna ullamcorper donec eleifend.
</span>

```html
<span class="strikethrough">
  Vehicula cillum illum reprehenderit! Laboriosam sapiente? Urna ullamcorper donec eleifend.
</span>
```

## Text clip

Hides overflowing text.

Note that this will only work with `block` level elements.

<div class="text-clip border--top border--right border--bottom border--left" style="width: 100px;">
  <span>chrishasasuper-longname@underdogiscool.com</span>
</div>

```html
<div class="text-clip">
  ...
</div>
```
