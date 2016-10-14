---
title: Menu Drawer
category: Components
---

A hidden drawer that can be toggled by the user. Can be toggled by adding or removing the `.is-active` class.
The content within the menu drawer is scrollable.

<div class="menu-drawer is-active" style="position: relative; height: 360px;">
  <div class="menu-drawer__content">
    <span class="menu-drawer__close icon-btn__ic icon icon-close" role="button" aria-label="menu close"></span>
    <span class="list-heading">Settings</span>
    <div class="menu-drawer__section">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Billing</a>
        </li>
      </ul>
    </div>
    <span class="list-heading">Batch</span>
    <div class="menu-drawer__section">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Billing</a>
        </li>
      </ul>
    </div>
    <div class="menu-drawer__section">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Sign Out</a>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="menu-drawer is-active">
  <div class="menu-drawer__content">
    <span class="menu-drawer__close icon-btn__ic icon icon-close" role="button" aria-label="menu close"></span>
    <span class="list-heading">Settings</span>
    <div class="menu-drawer__section">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Billing</a>
        </li>
      </ul>
    </div>
    <span class="list-heading">Batch</span>
    <div class="menu-drawer__section">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Billing</a>
        </li>
      </ul>
    </div>
    <div class="menu-drawer__section">
      <ul class="menu-list">
        <li class="menu-list__item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="menu-list__item">
          <a class="nav-link" href="#">Sign Out</a>
        </li>
      </ul>
    </div>
  </div>
</div>
```
