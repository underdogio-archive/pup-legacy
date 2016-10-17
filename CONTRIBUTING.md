# Contributing to Pup

## Table of Contents

- [Components](#components)
  - [Styles](#styles)
  - [JavaScript](#javascript)
- [Icon font](#icon-font)
- [FAQs](#frequently-asked-questions)

## Components

### Styles

### JavaScript

If your component requires JavaScript, create a new module in the `scripts/components` directory.

Your module should export a single function that performs any initialization work, such as
binding to DOM elements.

## Icon font

To add a new icon to the icon font, add the SVG file for the icon to the `/icons` directory.

The dimenions of the icon should be `100px` by `100px`.
In order to ensure that all icons are the same size, please make sure the icon is
occupying the full width and/or full height of the viewbox.

After adding a new icon, run `npm run icons` in order to re-compile the icon font
to the `/fonts` directory.

## Frequently Asked Questions
