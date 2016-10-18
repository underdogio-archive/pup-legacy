---
title: Spacing
category: Base
---

Having consistent spacing helps to create a more harmonious relationship between our components.

Our spacing units our based on our base font size of `14px`. Our spacing units
are defined in [variables/_spacing.scss](https://github.com/underdogio/pup/blob/master/styles/pup/variables/_spacing.scss).

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

## Margin and padding helper classes

There are also helper classes you can use to apply margin or padding to an element.
These classes have units that correspond to the spacing units defined above.

### Margin

`.margin{unit}`, `.margin{unit}--{side}`, `.margin{unit}--sides`, `.margin{unit}--ends`

Examples:

`.margin1`: Apply margin of 1 spacing unit (0.5rem / 7px) to all sides of the element.

`.margin4--top`: Apply margin of 4 spacing units (4rem / 56px) to just the top side of the element.

`.margin4--sides`: Apply margin of 4 spacing units (4rem / 56px) to left and right sides of the element.

`.margin4--ends`: Apply margin of 4 spacing units (4rem / 56px) to top and bottom sides of the element.

### Padding

`.padding{unit}`, `.padding{unit}--{side}`, `.padding{unit}--sides`, `.padding{unit}--ends`

Examples:

`.padding1`: Apply padding of 1 spacing unit (0.5rem / 7px) to all sides of the element.

`.padding4--top`: Apply padding of 4 spacing units (4rem / 56px) to just the top side of the element.

`.padding4--sides`: Apply padding of 4 spacing units (4rem / 56px) to left and right sides of the element.

`.padding4--ends`: Apply padding of 4 spacing units (4rem / 56px) to top and bottom sides of the element.
