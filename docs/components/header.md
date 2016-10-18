---
title: Header
category: Components
---

Our header is a full width header which should not be contained within a `.container`.
To make a header sticky, apply the `.header--fixed` modifier class to it.

<div class="header">
  <div class="header__left">
    <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
    <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
  </div>
  <div class="header__right">
    <div class="hidden--small"><span class="gamma margin2--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
    <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
  </div>
</div>

```html
<div class="header">
  <div class="header__left">
    <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
    <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
  </div>
  <div class="header__right">
    <div class="hidden--small"><span class="gamma margin2--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
    <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
  </div>
</div>
```
