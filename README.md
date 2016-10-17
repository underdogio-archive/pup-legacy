# Pup

Underdog.io's front end styleguide.

---

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Importing components](#importing-components)
- [Developing](#developing)
- [Contributing](#contributing)

## Installation

You can use Pup in your project by installing it with npm:

```bash
npm install underdogio/pup#GIT_TAG

# Example
npm install underdogio/pup#1.0.0
```

After installing Pup, you can then include individual components in your project.

## Usage

### Requirements

In order to make use of Pup, your project must have support for the following:

- [Sass](https://github.com/sass/node-sass)
- [Browserify](https://github.com/substack/node-browserify)

For an example of how to set up a build system that uses Pup, check out the [package.json](https://github.com/underdogio/pup/blob/master/package.json) file for this repo.

### Importing components

While Pup does include a stylesheet and JavaScript bundle that contains styles and scripts for every available component, it is recommended that you only import the assets required for the components that are used by your project.

Importing just the assets that are used by your project will result in smaller CSS and JavaScript file sizes.

#### Styles

Before importing components, you must import shared Sass functions, variables, and mixins before you import any components, like so:

```scss
// Import shared SCSS
@import 'underdogio-pup/styles/pup/shared';

// Import individual components
@import 'underdogio-pup/styles/pup/base/btn';
@import 'underdogio-pup/styles/pup/components/btn';
@import 'underdogio-pup/styles/pup/helpers/list';
```

#### JavaScript

A few components, like the carousel, require JavaScript in order to function.

JavaScript modules are written with CommonJS syntax, so you must be using [Browserify](#) in your project in order to use them.

All components export a function that initializes the component.

```javascript
// Import polyfills
require('underdogio-pup/scripts/vendor/polyfills');

// Import and initialze individual components
require('underdogio-pup/scripts/components/carousel')();
```

## Developing

## Contributing

For guidelines on modifying the styleguide, please see [CONTRIBUTING.md](https://github.com/underdogio/pup/blob/master/package.json).
