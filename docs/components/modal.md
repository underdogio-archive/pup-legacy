---
title: Modal
category: Components
---

Modals are for getting the user's attention to either confirm an action or to alert them of something urgent.

Modals will always take up the full width and height of the page and be displayed over all other content.

### Simple Modal

<div style="position: relative; height: 500px">
  <div class="modal" style="position: relative;">
    <div class="modal__content">
      <div class="modal__header">
        This is a modal message. Enter the purpose of the modal here.
        <button class="modal__close">
          <span class="icon icon-close" aria-label="close" />
        </button>
      </div>
      <form action="#">
        <label>
          <span class="block-label">Input label</span>
          <input class="block-input" type="text" />
        </label>
        <div class="text-align--center">
          <button class="btn btn--primary btn--block push18--bottom">Save</button>
          <a href="#">Cancel</a>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<div class="modal">
  <div class="modal__content">
    <div class="modal__header">
      This is a modal message. Enter the purpose of the modal here.
      <button class="modal__close">
        <span class="icon icon-close" aria-label="close" />
      </button>
    </div>
    <form action="#">
      <label>
        <span class="block-label">Input label</span>
        <input class="block-input" type="text" />
      </label>
      <div class="text-align--center">
        <button class="btn btn--primary btn--block push10--bottom">Save</button>
        <a href="#">Cancel</a>
      </div>
    </form>
  </div>
</div>
```
