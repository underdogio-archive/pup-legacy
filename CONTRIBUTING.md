# Contributing to Pup

## Table of Contents

- [Styles](#styles)
- [JavaScript](#javascript)
- [Icon font](#icon-font)

## Styles

### Tl;DR

- Add documentation to `/docs` for everything.
- Remember that docs are for both designers and developers.
- Prefer mixins over extends.

### Organization

The organization of our styles is loosely based on [SmaCSS](https://smacss.com/), but with a focus on the cascading nature of CSS.

#### Base

Styles for element tags.

Examples:
  - HTML element
  - Images
  - Links

#### Layout

Styles that affect layout and have no other visual styling.

Examples:
  - Container
  - Grid
  - Sections

#### Components

Reusable bits and pieces of a user interface.

Examples:
  - Buttons
  - Dropdowns
  - Wells

#### Helpers

Small atomic classes (usually with just one or two rules) that override some default styling.

Examples:
  - Centering text
  - Floating elements
  - Setting background color

## JavaScript

If you are creating a component that requires JavaScript, create a new module in the `scripts/components` directory.

Your module should export a single function that performs any required initialization work, such as
binding to DOM elements.

## Icon font

To add a new icon to the icon font, add the SVG file for the icon to the `/icons` directory.

The dimenions of the icon should be `100px` by `100px`.
In order to ensure that all icons are the same size, please make sure the icon is
occupying the full width and/or full height of the viewbox.

After adding a new icon, run `npm run icons` in order to re-compile the icon font
to the `/fonts` directory.
