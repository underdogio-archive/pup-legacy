---
title: Icons
category: Base
---

<section class="section">
  <ul>
    <li>
      <span class="icon icon-arrow"><code class="icon__label">.icon-arrow</code></span>
    </li>
    <li>
      <span class="icon icon-arrow-right"><code class="icon__label">.icon-arrow-right</code></span>
    </li>
    <li>
      <span class="icon icon-back"><code class="icon__label">.icon-back</code></span>
    </li>
    <li>
      <span class="icon icon-calendar"><code class="icon__label">.icon-calendar</code></span>
    </li>
    <li>
      <span class="icon icon-check"><code class="icon__label">.icon-check</code></span>
    </li>
    <li>
      <span class="icon icon-close"><code class="icon__label">.icon-close</code><span>
    </li>
    <li>
      <span class="icon icon-copy-link"><code class="icon__label">.icon-copy-link</code><span>
    </li>
    <li>
      <span class="icon icon-download"><code class="icon__label">.icon-download</code><span>
    </li>
    <li>
      <span class="icon icon-dribbble"><code class="icon__label">.icon-dribbble</code><span>
      </li>
    <li>
      <span class="icon icon-dropdown"><code class="icon__label">.icon-dropdown</code><span>
    </li>
    <li>
      <span class="icon icon-filter"><code class="icon__label">.icon-filter</code><span>
    </li>
    <li>
      <span class="icon icon-github"><code class="icon__label">.icon-github</code><span>
    </li>
    <li>
      <span class="icon icon-globe"><code class="icon__label">.icon-globe</code><span>
    </li>
    <li>
      <span class="icon icon-graph"><code class="icon__label">.icon-graph</code><span>
    </li>
    <li>
      <span class="icon icon-info"><code class="icon__label">.icon-info</code><span>
    </li>
    <li>
      <span class="icon icon-linkedin"><code class="icon__label">.icon-linkedin</code><span>
    </li>
    <li>
      <span class="icon icon-location"><code class="icon__label">.icon-location</code><span>
    </li>
    <li>
      <span class="icon icon-locked"><code class="icon__label">.icon-locked</code><span>
    </li>
    <li>
      <span class="icon icon-menu"><code class="icon__label">.icon-menu</code><span>
    </li>
    <li>
      <span class="icon icon-money"><code class="icon__label">.icon-money</code><span>
    </li>
    <li>
      <span class="icon icon-next"><code class="icon__label">.icon-next</code><span>
    </li>
    <li>
      <span class="icon icon-not-allowed"><code class="icon__label">.icon-not-allowed</code><span>
    </li>
    <li>
      <span class="icon icon-other-link"><code class="icon__label">.icon-other-link</code><span>
    </li>
    <li>
      <span class="icon icon-referral"><code class="icon__label">.icon-referral</code><span>
    </li>
    <li>
      <span class="icon icon-resume"><code class="icon__label">.icon-resume</code><span>
    </li>
    <li>
      <span class="icon icon-settings"><code class="icon__label">.icon-settings</code><span>
    </li>
    <li>
      <span class="icon icon-support"><code class="icon__label">.icon-support</code><span>
    </li>
    <li>
      <span class="icon icon-upload"><code class="icon__label">.icon-upload</code><span>
    </li>
    <li>
      <span class="icon icon-visa"><code class="icon__label">.icon-visa</code><span>
    </li>
    <li>
      <span class="icon icon-work"><code class="icon__label">.icon-work</code><span>
    </li>
  </ul>
</section>

## Accessibility

To support screen readers all icons should have an appropriate label or text associated with them.

Icons can contain text directly, which will be shown and be the text read by the screen reader.

```html
<span class="icon icon-github">
  <code class="icon__label">GitHub</span>
</span>
```

If the icon is associated with nearby text, then <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden" target="_blank">aria-hidden</a> should be used to ensure that the screen reader will not try to read or focus on the icon element.

```html
<span class="icon icon-github" aria-hidden="true">
  <code class="icon__label">GitHub</span>
</span>
```

If the icon has no accompanying text, then <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-label" target="_blank">aria-label</a> should be used, which tells the screen reader what to read when focusing on that icon element.

```html
<span class="icon icon-github" aria-label="github"></span>
```
