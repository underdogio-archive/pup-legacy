---
title: Hiding Elements
category: Base
---

We have support for hidding elements with the `.hidden` and `.hidden--{media-query}` class names. `.hidden` will hide elements off screen without needing to use `display: none`.

## Example

<p class="hidden--medium-and-up">I am using `.hidden--medium-and-up` to show up only on `small` sized devices.</p>

<p class="hidden--small hidden--large-and-up">I am using `.hidden--small.hidden--large-and-up` to show up only on `medium` sized devices.</p>

<p class="hidden--medium-and-down">I am using `.hidden--medium-and-down` to show up only on `large` and `extra-large` sized devices.</p>
