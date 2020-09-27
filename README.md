# UI Components <!-- omit in toc -->

This project is an Angular UI components library meant for use in any project.

This also serves as a scaffold for other components library to built on.

## Table of Contents <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Usage Guide](#usage-guide)
  - [Installing the library](#installing-the-library)
  - [Getting started](#getting-started)
  - [Using the included theme](#using-the-included-theme)
- [Documentation](#documentation)
- [Contributing](#contributing)
  - [Quick start](#quick-start)
- [License](#license)

## Prerequisites

This library will required you to have Angular CLI installed globally to function as intended.

```
npm install -g @angular/cli
```

## Usage Guide

### Installing the library

As this project is not hosted on any registry, you'll have to clone the repo and run a local copy of it use of `npm link` to isntall the library.

`npm link` creates a sym-link to the current projects folder, which you can then run `npm link <project_name>` in a another local project to "install" the link in that project. Allowing you to treat it as if it was added through `npm install`.

1. Clone the repo, and install dependencies.

   ```bash
   git clone https://gitlab.com/bryon.sigawin/ktb-ui-components-v2.git

   # Use npm not yarn
   npm install
   ```

2. Create a build.

   ```bash
   npm run build
   ```

3. Create an npm link inside the `dist` folder.

   ```bash
   # Assuming you're at the root directory
   cd dist/<name_of_library>/

   # Create the link
   npm link
   ```

4. Link your project folder to the library.

   ```bash
   # Assuming you're inside your projects root directory,
   npm link <project_name>
   ```

   > **Important Note**  
   > Anytime you install dependencies in your project folder, you'll have to rerun `npm link` as it's not automatically done for you.

### Getting started

With the library installed, you can now import the `Module` you would like to use where it's needed by adding it to the list of `imports`.

Take note you'll have to import from the module directly like so.

```ts
import { ButtonModule } from 'ktb-ui-components/button';
…
@NgModule ({....
  imports: [...,
  ButtonModule,
…]
})
```

Add the components selector to your template `.html` file and you're good to go!

```html
<button ktbButton>This is my button</button>
```

### Using the included theme

This library comes prebundled with a `theme.scss` file allowing you to reuse the styles used to build the components.

Before using it though, it is highly recommended to update your `angular.json` to include the theme directory in `stylePreprocessorOptions.includePaths` to make importing a lot easier.

`angular.json`

```json
{
  ...
  "stylePreprocessorOptions": {
    "includePaths": ["./node_modules/ktb-ui-components/"]
  },
}
```

With that done, you can now import any of the files below where needed.

```scss
// Imports everything
@import 'ktb-ui-theme/theme.scss';

// Single imports
@import 'ktb-ui-theme/variables.scss';
@import 'ktb-ui-theme/mixins.scss';
@import 'ktb-ui-theme/typography.scss';
```

## Documentation

This libraries documentation is powered by Storybook, allowing you to view every single component in isolation and their variations.

An online version of the documentation can be found here: https://acc-ktb-ui-components.netlify.app/

Alternatively, you can run this script to view a local version of the documentation hosted on [localhost:8080](//localhost:8080).

```bash
npm run docs
```

## Contributing

Please take a look at [CONTRIBUTING.md](./CONTRIBUTING.md) for a more detailed explanation on how to contribute to this library.

### Quick start

- clone thi repository.
- run `npm install` to install all dependencies.
- run `npm start` to start Storybook.
- create you component and it's module in `src/`.
- create `index.ts`, `public-api.ts` and `package.json` for `ng-packgr` to recognize the component as an entry point.
- write your components `.stories.ts`.
- periodically run `npm run lint` to ensure there are no lint errors.
- submit a MR when you're done.

## License

< TO BE ADDED >
