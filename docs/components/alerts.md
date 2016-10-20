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
  This is an error message
</div>

<div class="alert alert--success">
  This is a success message
</div>

<div class="alert alert--info">
  This is an info message
</div>

```html
<div class="alert alert--error">
  This is an error message
</div>

<div class="alert alert--success">
  This is a success message
</div>

<div class="alert alert--info">
  This is an info message
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
