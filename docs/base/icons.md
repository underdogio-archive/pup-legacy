---
title: Icons
category: Base
---

<ul>
  <li><span class="icon icon-arrow"><span class="icon__label">Arrow</span></span></li>
  <li><span class="icon icon-arrow-right"><span class="icon__label">Arrow Right</span></span></li>
  <li><span class="icon icon-back"><span class="icon__label">Back</span></span></li>
  <li><span class="icon icon-check"><span class="icon__label">Check</span></span></li>
  <li><span class="icon icon-close"><span class="icon__label">Close</span></span></li>
  <li><span class="icon icon-copy-link"><span class="icon__label">Copy link</span></span></li>
  <li><span class="icon icon-download"><span class="icon__label">Download</span></span></li>
  <li><span class="icon icon-dribble"><span class="icon__label">Dribble</span></span></li>
  <li><span class="icon icon-dropdown"><span class="icon__label">Dropdown</span></span></li>
  <li><span class="icon icon-filter"><span class="icon__label">Filter</span></span></li>
  <li><span class="icon icon-github"><span class="icon__label">GitHub</span></span></li>
  <li><span class="icon icon-linkedin"><span class="icon__label">LinkedIn</span></span></li>
  <li><span class="icon icon-location"><span class="icon__label">Location</span></span></li>
  <li><span class="icon icon-locked"><span class="icon__label">Locked</span></span></li>
  <li><span class="icon icon-menu"><span class="icon__label">Menu</span></span></li>
  <li><span class="icon icon-next"><span class="icon__label">Next</span></span></li>
  <li><span class="icon icon-not-allowed"><span class="icon__label">Not Allowed</span></span></li>
  <li><span class="icon icon-other-link"><span class="icon__label">Other link</span></span></li>
  <li><span class="icon icon-referral"><span class="icon__label">Referral</span></span></li>
  <li><span class="icon icon-resume"><span class="icon__label">Resume</span></span></li>
  <li><span class="icon icon-settings"><span class="icon__label">Settings</span></span></li>
  <li><span class="icon icon-arrow icon--small"><span class="icon__label">Small arrow</span></span></li>
  <li><span class="icon icon--small icon-back"><span class="icon__label">Small back</span></span></li>
  <li><span class="icon icon--small icon-next"><span class="icon__label">Small next</span></span></li>
  <li><span class="icon icon-support"><span class="icon__label">Support</span></span></li>
  <li><span class="icon icon-user"><span class="icon__label">User</span></span></li>
  <li><span class="icon icon-visa"><span class="icon__label">Visa</span></span></li>
</ul>

# Accessibility
To support screen readers all icons should have an appropriate label or text associated with them.

Icons can contain text directly, which will be shown and be the text read by the screen reader.

```html
<span class="icon icon-github">
  <span class="icon__label">GitHub</span>
</span>
```

If the icon is associated with nearby text, then <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden" target="_blank">aria-hidden</a> should be used to ensure that the screen reader will not try to read or focus on the icon element.

```html
<span class="icon icon-github" aria-hidden="true">
  <span class="icon__label">GitHub</span>
</span>
```

If the icon has no accompanying text, then <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-label" target="_blank">aria-label</a> should be used, which tells the screen reader what to read when focusing on that icon element.

```html
<span class="icon icon-github" aria-label="github"></span>
```
