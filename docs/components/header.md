---
title: Header
category: Components
---

Our header is a full width header which should not be contained within a `.container`.
To make a header sticky, apply the `.header--fixed` modifier class to it.

<div class="header">
  <div class="header__logo">
    <img class="hidden--small" src="/dist/img/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
    <img class="hidden--medium-and-up" src="/dist/img/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
  </div>
  <div class="header__nav">
    <div class="hidden--small"><span class="gamma push10--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
    <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
  </div>
</div>

```html
<div class="header">
  <div class="header__logo">
    <img class="hidden--small" src="/dist/img/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
    <img class="hidden--medium-and-up" src="/dist/img/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
  </div>
  <div class="header__nav">
    <div class="hidden--small"><span class="gamma push10--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
    <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
  </div>
</div>
```

The content of the header can be restricted by wrapping it within an optional `.header__content`
element and overriding the value for the `$header-max-width` Sass variable:

<div class="header">
  <div class="header__content" style="flex-basis: 800px;">
    <div class="header__logo">
      <img class="hidden--small" src="/dist/img/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
      <img class="hidden--medium-and-up" src="/dist/img/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
    </div>
    <div class="header__nav">
      <div class="header__nav">
        <div class="hidden--small"><span class="gamma push10--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
        <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
      </div>
    </div>
  </div>
</div>

```html
<div class="header">
  <div class="header__content">
    <div class="header__logo">
      <img class="hidden--small" src="/dist/img/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
      <img class="hidden--medium-and-up" src="/dist/img/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
    </div>
    <div class="header__nav">
      <div class="header__nav">
        <div class="hidden--small"><span class="gamma push10--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
        <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
      </div>
    </div>
  </div>
</div>
```
