---
title: Buttons
category: Components
---

All buttons must use the base classname of `.btn` and can be disabled using the `.btn--disabled` class.

## Primary button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--primary">Primary button</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--primary btn--disabled" disabled="true">Disabled button</button>
  </div>
</div>

Primary buttons.

```html
<button class="btn btn--primary">Primary button</button>
<button class="btn btn--primary btn--disabled" disabled="true">Disabled button</button>
```

## Secondary button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--secondary">Secondary button</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--secondary btn--disabled" disabled="true">Disabled button</button>
  </div>
</div>

Secondary buttons.

```html
<button class="btn btn--secondary">Secondary button</button>
<button class="btn btn--secondary btn--disabled" disabled="true">Disabled button</button>
```

## Danger button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--danger">Danger button</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--danger btn--disabled" disabled="true">Disabled button</button>
  </div>
</div>

```html
<button class="btn btn--danger">Danger button</button>
<button class="btn btn--danger btn--disabled" disabled="true">Disabled button</button>
```

## Google sign in button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--google">Sign in with Google</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--google btn--disabled" disabled>Sign in with Google</button>
  </div>
</div>

```html
<button class="btn btn--google">Sign in with Google</button>
<button class="btn btn--google btn--disabled" disabled>Sign in with Google</button>
```

## Link as a button

You can also style an `a` tag as a button.

<a href="#" class="btn btn--primary">Primary link</a>

Link as a button.

```html
<a href="#" class="btn btn--primary">Primary link</a>
```

## Block button

A block button will fill the full width of it's parent container and any adjacent buttons will has a small amount of spacing between them.

<button class="btn btn--primary btn--block">Primary button</button>

<button class="btn btn--secondary btn--block">Secondary button</button>

Block buttons.

```html
<button class="btn btn--primary btn--block">Primary button</button>
<button class="btn btn--secondary btn--block">Secondary button</button>
```

## Button with icon

Buttons can contain non-text elements like icons.

<button class="btn btn--secondary">
  <span class="icon__label icon__label--left">Download</span>
  <span class="icon icon-arrow icon--small" aria-hidden="true" />
</button>

Button with icon.

```html
<button class="btn btn--secondary">
  <span class="icon__label icon__label--left">Download</span>
  <span class="icon icon-arrow icon--small" aria-hidden="true" />
</button>
```

## Button with dropdown

Buttons can contain dropdown menus.

<div style="height: 300px; padding-left: 100px;">
  <div class="dropdown">
    <button class="btn btn--secondary">
      <span class="icon__label icon__label--left">Download</span>
      <span class="icon icon-arrow icon--small" aria-hidden="true" />
    </button>
    <div class="dropdown__menu">
      <div class="dropdown__menu-container">
        <span class="list-heading">chris@underdog.io</span>
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
<span class="dropdown">
  <button class="btn btn--secondary">
    <span class="icon__label icon__label--left">Download</span>
    <span class="icon icon-arrow icon--small" aria-hidden="true" />
  </button>

  <div class="dropdown__menu">
    <div class="dropdown__menu-container">
      <span class="list-heading">chris@underdog.io</span>
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
</span>
```

### Button groups

Button groups can be grouped within a `.btn-group`. Button groups can contain any
type of button.

<div class="btn-group">
  <div class="btn-group__container">
    <div class="btn-group__btn">
      <a class="btn btn--primary" href="mailto:bark@underdog.io">
        Email
      </a>
    </div>
    <div class="btn-group__btn">
      <button class="btn btn--primary btn--small">
        <span class="icon icon-arrow icon--small">
        </span>
      </button>
    </div>
  </div>
</div>

<div class="btn-group">
  <div class="btn-group__container">
    <div class="btn-group__btn">
      <button class="btn btn--secondary">
        A button
      </button>
    </div>
    <div class="btn-group__btn">
      <button class="btn btn--secondary btn--small">
        <span class="icon icon-arrow icon--small">
        </span>
      </button>
    </div>
  </div>
</div>

```html
<div class="btn-group">
  <div class="btn-group__container">
    <div class="btn-group__btn">
      <a class="btn btn--primary" href="mailto:bark@underdog.io">
        Email
      </a>
    </div>
    <div class="btn-group__btn">
      <button class="btn btn--primary btn--small">
        <span class="icon icon-arrow icon--small">
        </span>
      </button>
    </div>
  </div>
</div>

<div class="btn-group">
  <div class="btn-group__container">
    <div class="btn-group__btn">
      <button class="btn btn--secondary">
        A button
      </button>
    </div>
    <div class="btn-group__btn">
      <button class="btn btn--secondary btn--small">
        <span class="icon icon-arrow icon--small">
        </span>
      </button>
    </div>
  </div>
</div>
```

You can also use the `.btn--block` class on a `.btn--group`:

<div style="max-width: 100%; width: 200px;">
  <div class="btn-group btn--block">
  <div class="btn-group__container">
    <div class="btn-group__btn">
      <a class="btn btn--primary" href="mailto:bark@underdog.io">
        Email
      </a>
    </div>
    <div class="btn-group__btn btn-group__btn-small">
      <button class="btn btn--primary btn--small">
        <span class="icon icon-arrow icon--small">
        </span>
      </button>
    </div>
  </div>
  </div>
</div>

```html
<div class="btn-group btn--block">
  <div class="btn-group__container">
    <div class="btn-group__btn">
      <a class="btn btn--primary" href="mailto:bark@underdog.io">
        Email
      </a>
    </div>
    <div class="btn-group__btn btn-group__btn-small">
      <button class="btn btn--primary btn--small">
        <span class="icon icon-arrow icon--small">
        </span>
      </button>
    </div>
  </div>
</div>
```
