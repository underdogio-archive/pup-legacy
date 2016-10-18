---
title: Dropdown
category: Components
---

Use to display menu items in a hidden menu.

<h1>
<div class="dropdown" style="margin-bottom: 300px; width: 300px;">
  <div class="dropdown__menu">
    <div class="dropdown__menu-container">
      <span class="list-heading">chrishasasuperlongname@underdog.io</span>
      <div class="dropdown__menu-content">
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
</h1>

```html
<div class="dropdown">
  <div class="dropdown__menu">
    <div class="dropdown__menu-container">
      <span class="list-heading">chrishasasuperlongname@underdog.io</span>
      <div class="dropdown__menu-content">
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
```

Dropdowns have `display` set to `inline-block` by default. You can have a
dropdown take up the full width of its container with the
`.dropdown--block` class:

<div style="margin-bottom: 300px; max-width: 100%; width: 300px">
  <div class="dropdown dropdown--block">
    <button class="btn btn--secondary btn--block">
      <span class="icon__label icon__label--reverse">Menu toggle</span>
      <span class="icon icon-arrow icon--small"></span>
    </button>
    <div class="dropdown__menu">
      <div class="dropdown__menu-container">
        <span class="list-heading">chrishasasuperlongname@underdog.io</span>
        <div class="dropdown__menu-content">
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
<div class="dropdown dropdown--block">
  <button class="btn btn--secondary btn--block">
    <span class="icon__label icon__label--reverse">Menu toggle</span>
    <span class="icon icon-arrow icon--small"></span>
  </button>
<div class="dropdown__menu">
  <div class="dropdown__menu-container">
    <span class="list-heading">chrishasasuperlongname@underdog.io</span>
    <div class="dropdown__menu-content">
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
```

If you are want to fit really wide content within a dropdown menu, you can use
the `.dropdown__menu--auto-width` class:

<div style="margin-bottom: 300px; max-width: 100%; width: 350px">
  <div class="dropdown dropdown--block">
    <button class="btn btn--secondary btn--block">
      <span class="icon__label icon__label--reverse">Menu toggle</span>
      <span class="icon icon-arrow icon--small"></span>
    </button>
    <div class="dropdown__menu dropdown__menu--auto-width">
      <div class="dropdown__menu-container">
        <span class="list-heading">chrishasasuperlongname@underdog.io</span>
        <div class="dropdown__menu-content">
          <ul class="menu-list">
            <li class="menu-list__item">
              <a class="btn btn--block btn--secondary" href="/settings/">This is a super wide button</a>
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
<div class="dropdown dropdown--block">
  <button class="btn btn--secondary btn--block">
    <span class="icon__label icon__label--reverse">Menu toggle</span>
    <span class="icon icon-arrow icon--small"></span>
  </button>
  <div class="dropdown__menu dropdown__menu--auto-width">
    <div class="dropdown__menu-container">
      <span class="list-heading">chrishasasuperlongname@underdog.io</span>
      <div class="dropdown__menu-content">
        <ul class="menu-list">
          <li class="menu-list__item">
            <a class="btn btn--block btn--secondary" href="/settings/">This is a super wide button</a>
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
```
