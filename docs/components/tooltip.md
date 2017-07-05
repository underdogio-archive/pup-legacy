---
title: Tooltip
category: Components
---

Add a tooltip to an element by adding the class `tooltip`. You can set the content of
the tooltip by setting the `aria-label` attribute.

<span class="tooltip" style="margin-bottom: 4em">
  <button class="btn btn--primary">
    Center tooltip
  </button>
  <span class="tooltip__content">This is tooltip</span>
</span>

<span class="tooltip tooltip--left" style="margin-bottom: 4em">
  <button class="btn btn--primary">
    Left tooltip
  </button>
  <span class="tooltip__content">This is tooltip</span>
</span>

<span class="tooltip tooltip--right" style="margin-bottom: 4em">
  <button class="btn btn--primary">
    Right tooltip
  </button>
  <span class="tooltip__content">This is tooltip</span>
</span>

```html
<span class="tooltip">
  <button class="btn btn--primary">
    Center tooltip
  </button>
  <span class="tooltip__content">This is tooltip</span>
</span>

<span class="tooltip tooltip--left">
  <button class="btn btn--primary">
    Left tooltip
  </button>
  <span class="tooltip__content">This is tooltip</span>
</span>

<span class="tooltip tooltip--right">
  <button class="btn btn--primary">
    Right tooltip
  </button>
  <span class="tooltip__content">This is tooltip</span>
</span>
```
