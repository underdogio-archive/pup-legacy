---
title: Forms
category: Base
---

## Text input

`.block-input` fields will fill the width of their container. Paired with our grid system, we can easily create full and half width input fields.

<div class="row">
  <div class="col-12">
    <label>
      <span class="block-label">Full width input</span>
      <input class="block-input" type="text" />
    </label>
  </div>
</div>
<div class="row">
  <div class="col-6">
    <label>
      <span class="block-label">First half</span>
      <input class="block-input" type="email" />
    </label>
  </div>
  <div class="col-6">
    <label>
      <span class="block-label">Second half</span>
      <input class="block-input" type="password" />
    </label>
  </div>
</div>

```html
<div class="row">
  <div class="col-12">
    <label>
      <span class="block-label">Full width input</span>
      <input class="block-input" type="text" />
    </label>
  </div>
</div>
<div class="row">
  <div class="col-6">
    <label>
      <span class="block-label">First half</span>
      <input class="block-input" type="email" />
    </label>
  </div>
  <div class="col-6">
    <label>
      <span class="block-label">Second half</span>
      <input class="block-input" type="password" />
    </label>
  </div>
</div>
```

## Disabled text input

To disabled a text input you can set the property `disabled="true"`.

<label>
  <span class="block-label">Disabled</span>
  <input class="block-input" type="text" disabled="true" />
</label>

```html
<label>
  <span class="block-label">Disabled</span>
  <input class="block-input" type="text" disabled="true" />
</label>
```

## Text input with error

<label>
  <span class="block-label block-label--error">Error</span>
  <input class="block-input input--error" type="text" />
</label>

```html
<label>
  <span class="block-label block-label--error">Error</span>
  <input class="block-input input--error" type="text" />
</label>
```

## Submit button

<button type="submit" class="btn btn--block btn--primary">
  Submit button
</button>

```html
<button type="submit" class="btn btn--block btn--primary">
  Submit button
</button>
```

## Checkbox

To use a normal inline checkbox use the class name of `.checkbox`.

<label class="checkbox">
  <input type="checkbox" />
  A checkbox
</label>

```html
<label class="checkbox">
  <input type="checkbox" />
  A checkbox
</label>
```

## Nested checkbox

To add a checkbox nested under a parent input use the additional class name of `.checkbox--nested`.

<label class="checkbox checkbox--nested">
  <input type="checkbox" />
  A nested checkbox
</label>

```html
<label class="checkbox checkbox--nested">
  <input type="checkbox" />
  A nested checkbox
</label>
```

## Radio

To use a normal inline radio use the class name of `.radio`.

<label class="radio">
  <input type="radio" />
  A radio
</label>

```html
<label class="radio">
  <input type="radio" />
  A radio
</label>
```

## Select

Select dropdowns will take up the full width of their container.

<label>
  <span class="block-label">Dropdown label</span>
  <select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</label>

```html
<label>
  <span class="block-label">A dropdown</span>
  <select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</label>
```

## Textarea

<textarea class="block-input"></textarea>

```html
<textarea class="block-input"></textarea>
```
