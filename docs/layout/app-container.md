---
title: App Container
category: Layout
---

The `.app-container` allows you create a full screen app layout that has a fixed header. The header will
only be fixed for large viewport.

There should be just one `.app-container` on a page, and it should always to applied to the top most node of the page layout.

<div class="app-container" style="padding-top: 0;">
  <div class="app-container__header" style="position: relative;">
    <div class="header">
      <div class="header__container">
        <div class="header__logo">
          <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
          <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
        </div>
        <div class="header__menu-extra">
          <span>Lionel Itchy</span>
          <span class="icon icon-arrow" />
        </div>
      </div>
    </div>
  </div>
  <div class="app-container__content greybox">
    <p>
      Cursus eu quibusdam lectus itaque pulvinar, ullamco facilisi sunt, praesent placerat eaque? Minima minima sunt malesuada perferendis vero condimentum sapien, beatae eleifend debitis elementum luctus adipisci delectus iure penatibus incidunt accusamus aenean architecto dis sequi nunc! Nunc a excepteur taciti, natus sollicitudin, feugiat ante, inventore commodo sollicitudin primis delectus, fugit sunt! Felis minus ante repellat voluptas. Aliqua ornare egestas blandit vel nascetur proin expedita, ultricies maecenas. Ipsam eaque, possimus quam sit primis! Ut viverra wisi nullam temporibus ullamcorper officia morbi erat metus anim ullamcorper. Hic, nibh tortor sed quo nostrud porta accusantium impedit congue molestias. Praesent, enim quod nostrum sociosqu.
    </p>
  </div>
</div>

```html
<div class="app-container">
  <div class="app-container__header">
    <div class="header">
      <div class="header__container">
        <div class="header__logo">
          <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
          <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
        </div>
        <div class="header__menu-extra">
          <span>Lionel Itchy</span>
          <span class="icon icon-arrow" />
        </div>
      </div>
    </div>
  </div>
  <div class="app-container__content greybox">
    <p>
      Cursus eu quibusdam lectus itaque pulvinar, ullamco facilisi sunt, praesent placerat eaque? Minima minima sunt malesuada perferendis vero condimentum sapien, beatae eleifend debitis elementum luctus adipisci delectus iure penatibus incidunt accusamus aenean architecto dis sequi nunc! Nunc a excepteur taciti, natus sollicitudin, feugiat ante, inventore commodo sollicitudin primis delectus, fugit sunt! Felis minus ante repellat voluptas. Aliqua ornare egestas blandit vel nascetur proin expedita, ultricies maecenas. Ipsam eaque, possimus quam sit primis! Ut viverra wisi nullam temporibus ullamcorper officia morbi erat metus anim ullamcorper. Hic, nibh tortor sed quo nostrud porta accusantium impedit congue molestias. Praesent, enim quod nostrum sociosqu.
    </p>
  </div>
</div>
```
