---
title: Aside Layout
category: Layout
---

The `.aside-layout` creates a sidebar + content layout where the sidebar is always fixed in view,
but the content is allowed to scroll independently.

<div class="aside-layout">
  <div class="aside-layout__sidebar  border--right">
    <div class="sidebar">
      <div class="sidebar__title">
        Sidebar links
      </div>
      <ul class="sidebar__nav">
        <li>
          <a href="#">First link</a>
        </li>
        <li>
          <a href="#" class="link--active">Active link</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="aside-layout__content">
    <p>
      Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
    </p>
  </div>
</div>

```html
<div class="aside-layout">
  <div class="aside-layout__sidebar border--right">
    <div class="sidebar">
      <div class="sidebar__title">
        Sidebar links
      </div>
      <ul class="sidebar__nav">
        <li>
          <a href="#">First link</a>
        </li>
        <li>
          <a href="#" class="link--active">Active link</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="aside-layout__content">
    <p>
      Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
    </p>
  </div>
</div>
```

You can make the width of the sidebar fixed with by applying the `.aside-layout--fixed-sidebar-width` modifier class to the `.aside-layout`.

<div class="aside-layout aside-layout--fixed-sidebar-width">
  <div class="aside-layout__sidebar  border--right">
    <div class="sidebar">
      <div class="sidebar__title">
        Sidebar links
      </div>
      <ul class="sidebar__nav">
        <li>
          <a href="#">First link</a>
        </li>
        <li>
          <a href="#" class="link--active">Active link</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="aside-layout__content">
    <p>
      Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
    </p>
  </div>
</div>

You can also nest aside layouts.

<div class="aside-layout">
  <div class="aside-layout__sidebar border--right">
    <div class="sidebar">
      <div class="sidebar__title">
        Sidebar links
      </div>
      <ul class="sidebar__nav">
        <li>
          <a href="#">First link</a>
        </li>
        <li>
          <a href="#" class="link--active">Active link</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="aside-layout__content">
    <div class="aside-layout aside-layout--sidebar-right">
      <div class="aside-layout__content">
        <p>
          Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
        </p>
      </div>
      <aside class="aside-layout__sidebar border--left">
        Aside-Layout 2 Sidebar
      </aside>
    </div>
  </div>
</div>

```html
<div class="aside-layout">
  <div class="aside-layout__sidebar border--right">
    <div class="sidebar">
      <div class="sidebar__title">
        Sidebar links
      </div>
      <ul class="sidebar__nav">
        <li>
          <a href="#">First link</a>
        </li>
        <li>
          <a href="#" class="link--active">Active link</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="aside-layout__content">
    <div class="aside-layout aside-layout--sidebar-right">
      <div class="aside-layout__content">
        <p>
          Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
        </p>
      </div>
      <aside class="aside-layout__sidebar border--left">
        Aside-Layout 2 Sidebar
      </aside>
    </div>
  </div>
</div>
```
