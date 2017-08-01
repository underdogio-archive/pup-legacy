---
title: Aside Layout
category: Layout
---

The `.aside-layout` creates a sidebar + content layout where the sidebar is always fixed in view,
but the content is allowed to scroll independently.

In order for this layout to work, `.aside-layout` must be wrapped in an element that has a set
height, like `.app-container`.

<div class="app-container" style="height: 20em; position: relative; width: 100%;">
  <div class="app-container__header border--bottom">
    <div class="header">
      <div class="header__container">
        <div class="header__left">
          <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
          <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
        </div>
        <div class="header__right">
          <span>Lionel Itchy</span>
          <span class="icon icon-arrow icon--small" />
        </div>
      </div>
    </div>
  </div>
  <div class="app-container__content">
    <div class="aside-layout">
      <div class="aside-layout__sidebar">
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
      <div class="aside-layout__content border--left">
        <p>
          Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
        </p>

        <p>
          Scelerisque feugiat. Nulla fusce voluptatum, per molestie scelerisque. Congue ornare nostra est? Vehicula molestias, natoque quos massa mattis, natoque repellendus urna, quibusdam, autem imperdiet? Lacinia aperiam ipsum netus. Qui incidunt leo adipiscing excepturi iste nesciunt aliquid? Class conubia, ullamco. Cubilia quidem dolore sociis consectetur dolorum minus? Ligula gravida placerat, quis? Quasi lobortis, aliquet mauris erat venenatis exercitationem fringilla? Magni consequuntur. Ullamcorper! Eleifend, minima curabitur labore, optio pellentesque porta, hymenaeos porttitor, nunc taciti! Mollitia risus consequatur senectus deleniti, cillum, venenatis dignissim, scelerisque. Laborum mollis accumsan! Leo consectetur, occaecat ab! Dolore numquam, eveniet mattis posuere, sodales consectetur, ipsa, eget mi cupidatat rhoncus.
        </p>

        <p>
          Harum quas congue accusamus per? Diamlorem ligula rem cupidatat aliquet. Ab condimentum ullamcorper temporibus eius perferendis elementum wisi magnis incididunt? Dolorem exercitationem placeat eveniet ipsam pretium ullamco? Iaculis! Ipsa veniam nonummy cillum? Magnam lorem, praesent aspernatur. Quia nonummy quibusdam! Habitasse dapibus nascetur laboris class, nullam, tempus totam autem? Aute dignissim malesuada ornare a qui suspendisse hac, tempor, consequuntur diam veritatis, nullam eleifend tempore quis augue porro interdum habitasse condimentum cupidatat! Montes rhoncus. Corporis quos ut magna nulla leo maiores voluptates rerum eros inventore modi! Sapiente explicabo excepturi? Varius! Fermentum elementum, arcu euismod curae distinctio blandit sollicitudin malesuada praesent inceptos fugiat.
        </p>
      </div>
    </div>
  </div>
</div>

```html
<div class="app-container">
  <div class="app-container__header border--bottom">
    <div class="header">
      <div class="header__left">
        <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
        <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
      </div>
      <div class="header__right">
        <span>Lionel Itchy</span>
        <span class="icon icon-arrow icon--small" />
      </div>
    </div>
  </div>
  <div class="app-container__content">
    <div class="aside-layout">
      <div class="aside-layout__sidebar">
        Sidebar goes in here
      </div>
      <div class="aside-layout__content">
        Content goes in here
      </div>
    </div>
  </div>
</div>
```

You can make the sidebar a fixed with by applying the `.aside-layout__sidebar--fixed` modifier class to the sidebar.

<div class="app-container" style="height:20em; position: relative; width: 100%;">
  <div class="app-container__header border--bottom">
    <div class="header">
      <div class="header__container">
        <div class="header__left">
          <img class="hidden--small" src="/images/underdogio-logo-with-text.svg" alt="Underdog.io logo" width="173" height="50">
          <img class="hidden--medium-and-up" src="/images/underdogio-logo.svg" alt="Underdog.io logo" width="48" height="50">
        </div>
        <div class="header__right">
          <span>Lionel Itchy</span>
          <span class="icon icon-arrow icon--small" />
        </div>
      </div>
    </div>
  </div>
  <div class="app-container__content">
    <div class="aside-layout">
      <div class="aside-layout__sidebar aside-layout__sidebar--fixed">
        Sidebar goes in here
      </div>
      <div class="aside-layout__content border--left">
        <p>
          Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
        </p>

        <p>
          Scelerisque feugiat. Nulla fusce voluptatum, per molestie scelerisque. Congue ornare nostra est? Vehicula molestias, natoque quos massa mattis, natoque repellendus urna, quibusdam, autem imperdiet? Lacinia aperiam ipsum netus. Qui incidunt leo adipiscing excepturi iste nesciunt aliquid? Class conubia, ullamco. Cubilia quidem dolore sociis consectetur dolorum minus? Ligula gravida placerat, quis? Quasi lobortis, aliquet mauris erat venenatis exercitationem fringilla? Magni consequuntur. Ullamcorper! Eleifend, minima curabitur labore, optio pellentesque porta, hymenaeos porttitor, nunc taciti! Mollitia risus consequatur senectus deleniti, cillum, venenatis dignissim, scelerisque. Laborum mollis accumsan! Leo consectetur, occaecat ab! Dolore numquam, eveniet mattis posuere, sodales consectetur, ipsa, eget mi cupidatat rhoncus.
        </p>

        <p>
          Harum quas congue accusamus per? Diamlorem ligula rem cupidatat aliquet. Ab condimentum ullamcorper temporibus eius perferendis elementum wisi magnis incididunt? Dolorem exercitationem placeat eveniet ipsam pretium ullamco? Iaculis! Ipsa veniam nonummy cillum? Magnam lorem, praesent aspernatur. Quia nonummy quibusdam! Habitasse dapibus nascetur laboris class, nullam, tempus totam autem? Aute dignissim malesuada ornare a qui suspendisse hac, tempor, consequuntur diam veritatis, nullam eleifend tempore quis augue porro interdum habitasse condimentum cupidatat! Montes rhoncus. Corporis quos ut magna nulla leo maiores voluptates rerum eros inventore modi! Sapiente explicabo excepturi? Varius! Fermentum elementum, arcu euismod curae distinctio blandit sollicitudin malesuada praesent inceptos fugiat.
        </p>
      </div>
    </div>
  </div>
</div>

You can also nest aside layouts.

<div class="aside-layout" style="height:20em; width: 100%;">
  <aside class="aside-layout__sidebar border--right">
    Aside-Layout 1 Sidebar
  </aside>
  <div class="aside-layout__content padding0">
    <div class="aside-layout aside-layout--nested">
      <div class="aside-layout__content">
        <p>
          Quibusdam ante volutpat curae, iure ad maxime cumque morbi! Dicta aptent alias dapibus morbi gravida sit, donec aliquam optio consectetuer delectus sodales ornare sodales, vitae! Sagittis consectetur sociosqu, feugiat impedit dignissim recusandae, ipsa nemo numquam, duis? Molestie eu aute ridiculus! Facere velit maecenas! Voluptate? Sollicitudin imperdiet, impedit vero. Animi, ut morbi, nisi voluptates aperiam! Minim quas potenti placerat varius sint, curae reiciendis reiciendis cillum morbi pharetra, mollitia fames, aperiam perspiciatis tincidunt mauris pretium similique torquent, tincidunt habitasse! Aut, ex, habitant? Accumsan. Saepe taciti dictumst, cras placerat. Sapien porttitor! Suspendisse aliqua aliquid interdum fugit culpa dictum commodi, aperiam temporibus iste hac.
        </p>

        <p>
          Scelerisque feugiat. Nulla fusce voluptatum, per molestie scelerisque. Congue ornare nostra est? Vehicula molestias, natoque quos massa mattis, natoque repellendus urna, quibusdam, autem imperdiet? Lacinia aperiam ipsum netus. Qui incidunt leo adipiscing excepturi iste nesciunt aliquid? Class conubia, ullamco. Cubilia quidem dolore sociis consectetur dolorum minus? Ligula gravida placerat, quis? Quasi lobortis, aliquet mauris erat venenatis exercitationem fringilla? Magni consequuntur. Ullamcorper! Eleifend, minima curabitur labore, optio pellentesque porta, hymenaeos porttitor, nunc taciti! Mollitia risus consequatur senectus deleniti, cillum, venenatis dignissim, scelerisque. Laborum mollis accumsan! Leo consectetur, occaecat ab! Dolore numquam, eveniet mattis posuere, sodales consectetur, ipsa, eget mi cupidatat rhoncus.
        </p>

        <p>
          Harum quas congue accusamus per? Diamlorem ligula rem cupidatat aliquet. Ab condimentum ullamcorper temporibus eius perferendis elementum wisi magnis incididunt? Dolorem exercitationem placeat eveniet ipsam pretium ullamco? Iaculis! Ipsa veniam nonummy cillum? Magnam lorem, praesent aspernatur. Quia nonummy quibusdam! Habitasse dapibus nascetur laboris class, nullam, tempus totam autem? Aute dignissim malesuada ornare a qui suspendisse hac, tempor, consequuntur diam veritatis, nullam eleifend tempore quis augue porro interdum habitasse condimentum cupidatat! Montes rhoncus. Corporis quos ut magna nulla leo maiores voluptates rerum eros inventore modi! Sapiente explicabo excepturi? Varius! Fermentum elementum, arcu euismod curae distinctio blandit sollicitudin malesuada praesent inceptos fugiat.
        </p>
      </div>
      <aside class="aside-layout__sidebar border--left">
        Aside-Layout 2 Sidebar
      </aside>
    </div>
  </div>
</div>
