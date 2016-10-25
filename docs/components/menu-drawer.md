---
title: Menu Drawer
category: Components
---

A hidden drawer that can be toggled by the user. Can be toggled by adding or removing the `.menu-drawer---active` class.

The content within the menu drawer is scrollable.

<nav class="menu-drawer menu-drawer--active" style="position: relative; height: 360px;">
  <div class="menu-drawer__overlay"></div>
  <div class="menu-drawer__container">
    <div class="menu-drawer__header">
      <span class="menu-drawer__title">Menu</span>
      <span class="js-class-toggle icon icon-close" role="button" tabindex="0" data-target="#menuDrawer" data-class="menu-drawer--active">
        <span class="screen-reader">
          Close
        </span>
      </span>
    </div>
    <ul class="menu-list">
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="530" role="button">
          Small (530)
        </span>
      </li>
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="768" role="button">
          Medium (768)
        </span>
      </li>
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="1024" role="button">
          Large (1024)
        </span>
      </li>
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="1440" role="button">
          Extra Large (1440)
        </span>
      </li>
      <li class="menu-list__item">
        <a class="nav-list__btn btn btn--secondary btn--block" href="https://underdog.io">
          Underdog.io
        </a>
      </li>
    </ul>
  </div>
</nav>

```html
<nav class="menu-drawer menu-drawer--active">
  <div class="menu-drawer__overlay"></div>
  <div class="menu-drawer__container">
    <div class="menu-drawer__header">
      <span class="menu-drawer__title">Menu</span>
      <span class="js-class-toggle icon icon-close" role="button" tabindex="0" data-target="#menuDrawer" data-class="menu-drawer--active">
        <span class="screen-reader">
          Close
        </span>
      </span>
    </div>
    <ul class="menu-list">
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="530" role="button">
          Small (530)
        </span>
      </li>
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="768" role="button">
          Medium (768)
        </span>
      </li>
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="1024" role="button">
          Large (1024)
        </span>
      </li>
      <li class="menu-list__item">
        <span class="header__link media-query" data-width="1440" role="button">
          Extra Large (1440)
        </span>
      </li>
      <li class="menu-list__item">
        <a class="nav-list__btn btn btn--secondary btn--block" href="https://underdog.io">
          Underdog.io
        </a>
      </li>
    </ul>
  </div>
</nav>
```
