# Pup

Underdog.io's front end styleguide.

---

Pup defines a common set of components, patterns, and static assets that are used to create a coherent visual style and user experience across all of Underdog.io's products.

The styleguide contains things like:

- UI Components
- Definitions for typography and spacing
- Illustrations
- Favicons

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Components](#importing-components)
    - [Styles](#styles)
    - [JavaScript](#javascript)
  - [Favicons](#favicons)
  - [Icon font](#icon-font)
  - [Images](#images)
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

### Favicons

Favicons are kept under `favicons/*`. In order to use these favicons you must copy them into your project.
You must also update the paths to the favicons in `favicons/browserconfig.xml`, `favicons/manifest.json`, and
in the `<head />` tag of your HTML document.

#### Updating browserconfig.xml and manifest.json

By default `browserconfig.xml` and `manifest.json` are assuming that icons are being served from `/`. The path to each icon defined in these files must be manually updated to match the path where the favicons are being served from.

##### browserconfig.xml

```xml
<square70x70logo src="/path/to/favicons/mstile-70x70.png"/>
```

##### manifest.json

```json
{
  "src": "\/path\/to\/favicons\/android-chrome-36x36.png",
  "sizes": "36x36",
  "type": "image\/png",
  "density": 0.75
}
```

#### Markup for importing icons in an HTML document

You must include the following markup in the `<head />` tag of the HTML document you want the favicons to be displayed for.

**Note**: The following markup is assuming that icons are being served from the root (`/`) directory..
You must manually update the paths for each icon to the actual path where the favicons are being served from.

```html
<meta name="apple-mobile-web-app-title" content="Underdog.io" />
<meta name="application-name" content="Underdog.io" />
<meta name="msapplication-TileColor" content="#72ceaa" />
<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
<meta name="theme-color" content="#72ceaa" />

<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
<link rel="manifest" href="/manifest.json" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#524b7a" />
```

### Icon font

We use a custom icon font which is generated from individual SVGs stored in `icons/*.svg`.

In order to utilize the icon font that is generated in this project you will need to copy the fonts into your project.

If you are using the icon font in your project you will also have to override the `$icon-font-path` variable to ensure the fonts get loaded properly.

```sass
$icon-font-path: '/fonts/';
```

### Images

Images that are shared by all of our projects, such as our logo and illustrations, are kept under the `/images` directory.

## Developing

### Requirements

Your local machine must be running [Node v6.4.0](https://nodejs.org/download/release/v6.4.0/).

### Running a local development server

First, install dependencies with `npm install`.

Then run `npm run develop` to start a development server and watch script that will rebuild assets whenever you make a change to a file.

To see what other scripts are available, run `npm run`.

## Contributing

For guidelines on modifying the styleguide, please see [CONTRIBUTING.md](https://github.com/underdogio/pup/blob/master/CONTRIBUTING.md).
