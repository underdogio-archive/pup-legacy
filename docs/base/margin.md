---
title: Margins
category: Base
---
There are predefined helpers and sizes used for adding margin to elements.

The sizes available are `7`, `10`, `18`, `25`, `30`, `45`, `70`, and `90`.

The available helpers are:

* `.push{size}` - add margin of `{size}px` on all sides
* `.push{size}--ends` - add margin of `{size}px` to the top and bottom
* `.push{size}--sides` - add margin of `{size}px` to the left and right sides
* `.push{size}--bottom` - add margin of `{size}px` to the bottom
* `.push{size}--left` - add margin of `{size}px` to the left
* `.push{size}--right` - add margin of `{size}px` to the right
* `.push{size}--top` - add margin of `{size}px` to the top

```html
<div class="row push25--ends">
</div>
```

Or you can use them when defining new SCSS classes:

```css
.name {
  @extend .push25--ends;
}
```
