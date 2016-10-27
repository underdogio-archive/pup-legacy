---
title: Spacing
category: Base
---

Having consistent spacing helps to create a more harmonious relationship between our components.

Our spacing units our based on our base line-height of `1.5rem / 21px`. Our spacing units
are defined in [variables/_spacing.scss](https://github.com/underdogio/pup/blob/master/styles/pup/variables/_spacing.scss).

We use the following values for spacing:

```scss
// 21px
$spacing-unit: 1.5rem;

$spacing: (
  0: 0,

  // 5.25px
  quarter: 0.375rem

  // 10.5px
  half: 0.75rem,

  // 21px
  1: 1.5rem

  // 42px
  2: 3rem

  // 63px
  3: 4.5rem

  // 84px
  4: 6rem

  // 105px
  5: 7.5rem
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

`.margin1`: Apply margin of 1 spacing unit to all sides of the element.

`.margin4--top`: Apply margin of 4 spacing units to just the top side of the element.

`.margin4--sides`: Apply margin of 4 spacing units to left and right sides of the element.

`.margin4--ends`: Apply margin of 4 spacing units to top and bottom sides of the element.

### Padding

`.padding{unit}`, `.padding{unit}--{side}`, `.padding{unit}--sides`, `.padding{unit}--ends`

Examples:

`.padding1`: Apply padding of 1 spacing unit to all sides of the element.

`.padding4--top`: Apply padding of 4 spacing units to just the top side of the element.

`.padding4--sides`: Apply padding of 4 spacing units to left and right sides of the element.

`.padding4--ends`: Apply padding of 4 spacing units to top and bottom sides of the element.
