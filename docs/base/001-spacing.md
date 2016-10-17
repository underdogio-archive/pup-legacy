---
title: Spacing
category: Base
---

Having consistent spacing helps to create a more harmonious relationship between our components.

Our spacing units our based on our base font size of `14px`.
We use the following values for spacing:

```scss
$spacing: (
  // 0px
  0: 0,

  // 7px
  1: 0.5rem,

  // 14px
  2: 1rem,

  // 28px
  3: 2rem,

  // 56px
  4: 4rem,

  // 98px
  5: 7rem
);
```

There is also a helper Sass function you can use in order to set margin or padding:

```scss
.example-class {
  margin: spacing(0);
  padding: spacing(2);
}
```

You can also use `.section` and `.section__subsection` classes in your markup for maintaining consistent vertical rhythm in page layouts. See the [sections](https://pup-underdogio.herokuapp.com/sections) section (pun intended) for more info.
