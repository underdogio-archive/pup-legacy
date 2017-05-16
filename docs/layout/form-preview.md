---
title: Form Preview
category: Layout
---

The `.form-preview` can be used to render a preview of form output.
The preview will be displayed to the right of the form, and will appear above
the form when the viewport gets narrow.

<div class="form-preview">
  <div class="form-preview__form">
    <h2>Profile</h2>
    <form>
      <label class="block-label">Your name</label>
      <input class="block-input" value="Bark Ruffalo" />
    </form>
  </div>
  <div class="form-preview__preview">
    <h4>Profile preview</h4>
    <div class="card">
      <h3>Bark Ruffalo</h3>
    </div>
  </div>
</div>

```html
<div class="form-preview">
  <div class="form-preview__form">
    <h2>Profile</h2>
    <form>
      <label class="block-label">Your name</label>
      <input class="block-input" value="Bark Ruffalo" />
    </form>
  </div>
  <div class="form-preview__preview">
    <h4>Profile preview</h4>
    <div class="card">
      <h3>Bark Ruffalo</h3>
    </div>
  </div>
</div>
```
