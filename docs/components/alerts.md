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
