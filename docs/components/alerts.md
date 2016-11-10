---
title: Alerts
category: Components
---

Alerts are full width blocks that can be used to show status messages.

## Normal Alert

<div class="alert">
  This is the alert message
</div>

```html
<div class="alert">
  This is the alert message
</div>
```

## Alert states

Alerts can have a state of `.alert--error` or `.alert--success`.

<div class="alert alert--error margin1--bottom">
  <div>
    This is an error message
    <a href="#">with a link</a>
  </div>
</div>

<div class="alert alert--success margin1--bottom">
  <div>
    This is a success message
    <a href="#">with a link</a>
  </div>
</div>

<div class="alert alert--info margin1--bottom">
  <div>
    This is an info message
    <a href="#">with a link</a>
  </div>
</div>

```html
<div class="alert alert--error">
  <div>
    This is an error message
    <a href="#">with a link</a>
  </div>
</div>

<div class="alert alert--success">
  <div>
    This is a success message
    <a href="#">with a link</a>
  </div>
</div>

<div class="alert alert--info">
  <div>
    This is an info message
    <a href="#">with a link</a>
  </div>
</div>
```

## Alert with close

Alerts can optionally contain a `.alertclose` which is placed at the far right of the alert.

<div class="alert alert--success">
  This is a success message
  <button class="alert__close">
    <span class="icon icon-close" aria-label="close" />
  </button>
</div>

```html
<div class="alert alert--success">
  This is a success message
  <button class="alert__close">
    <span class="icon icon-close" aria-label="close" />
  </button>
</div>
```

## Alert list

If you need to render multiple alerts in a list, you can use the `.alert-list` component.

You can fix alert lists to the top of the screen by applying the `.alert-list--fixed`
modifier class.

<button class="btn btn--primary js-class-toggle" data-target="#alertList" data-class="alert-list--fixed">Toggle `.alert-list--fixed` class</button>

<div class="margin1--bottom"></div>

<ul id="alertList" class="alert-list">
  <li class="alert-list__item">
    <div class="alert alert--error">
      <div>
        This is an error message
        <a href="#">with a link</a>
      </div>
    </div>
  </li>
  <li class="alert-list__item">
    <div class="alert alert--success">
      <div>
        This is a success message
        <a href="#">with a link</a>
      </div>
    </div>
  </li>
  <li class="alert-list__item">
    <div class="alert alert--info">
      <div>
        This is an info message
        <a href="#">with a link</a>
      </div>
    </div>
  </li>
</ul>

```html
<ul class="alert-list">
  <li class="alert-list__item">
    <div class="alert alert--error">
      <div>
        This is an error message
        <a href="#">with a link</a>
      </div>
    </div>
  </li>
  <li class="alert-list__item">
    <div class="alert alert--success">
      <div>
        This is a success message
        <a href="#">with a link</a>
      </div>
    </div>
  </li>
  <li class="alert-list__item">
    <div class="alert alert--info">
      <div>
        This is an info message
        <a href="#">with a link</a>
      </div>
    </div>
  </li>
</ul>
```
