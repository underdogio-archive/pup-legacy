---
title: Hero
category: Components
---

Heros are used to summarize the main objective of a page or website. They should always
be the first element in a page, and there should never be more than one hero on a single page.

`.hero` uses flexbox to center content, so all content must be contained within a single node.

### Default hero

<div class="hero border--top border--bottom">
  <div class="hero__container">
    <div class="hero__section">
      <img class="hero__image" alt=" " src="/images/assembly_line.svg" />
    </div>
    <div class="hero__section">
      <h1 class="hero__title">Apply to top technology jobs in 60 seconds</h1>
    </div>
    <div class="hero__section">
      <p class="hero__subtitle">We connect job seekers to awesome companies in New York, San Francisco, and beyond.</p>
    </div>
    <div class="hero__section">
      <a class="btn btn--primary btn--large btn--block margin1--bottom" href="#hero">Candidates</a>
      <a href="#hero">Is your team hiring?</a>
    </div>
  </div>
</div>

```html
<div class="hero border--top border--bottom">
  <div class="hero__container">
    <div class="hero__section">
      <img class="hero__image" alt=" " src="/images/assembly_line.svg" />
    </div>
    <div class="hero__section">
      <h1 class="hero__title">Apply to top technology jobs in 60 seconds</h1>
    </div>
    <div class="hero__section">
      <p class="hero__subtitle">We connect job seekers to awesome companies in New York, San Francisco, and beyond.</p>
    </div>
    <div class="hero__section">
      <a class="btn btn--primary btn--large btn--block margin1--bottom" href="#hero">Candidates</a>
      <a href="#hero">Is your team hiring?</a>
    </div>
  </div>
</div>
```
