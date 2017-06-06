---
title: Header
category: Components
---

Our header is a full width header which should not be contained within a `.container`.
To make a header sticky, apply the `.header--fixed` modifier class to it.

<div class="header border--bottom">
  <div class="header__container">
    <div class="header__logo">
      <img class="hidden--small header__logo" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" />
      <img class="hidden--medium-and-up header__logo" src="/images/underdogio-logo.svg" alt="Underdog.io logo" />
    </div>
    <nav class="header__menu">
      <a class="header__link" href="#">Nav link 1</a>
      <a class="header__link" href="#">Nav link 2</a>
      <a class="header__link" href="#">Nav link 3</a>
    </nav>
    <div class="header__menu-extra">
      <div class="hidden--small"><span class="icon icon-arrow icon--right icon--small"><span class="icon__label icon__label--left">Lionel Itchy</span></span></div>
      <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
    </div>
  </div>
</div>

```html
<div class="header border--bottom">
  <div class="header__container">
    <div class="header__logo">
      <img class="hidden--small header__logo" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" />
      <img class="hidden--medium-and-up header__logo" src="/images/underdogio-logo.svg" alt="Underdog.io logo" />
    </div>
    <nav class="header__menu">
      <a class="header__link" href="#">Nav link 1</a>
      <a class="header__link" href="#">Nav link 2</a>
      <a class="header__link" href="#">Nav link 3</a>
      <a class="header__link" href="#">Nav link 4</a>
    </nav>
    <div class="header__menu-extra">
      <div class="hidden--small"><span class="icon icon-arrow icon--right icon--small"><span class="icon__label icon__label--left">Lionel Itchy</span></span></div>
      <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
    </div>
  </div>
</div>
```
