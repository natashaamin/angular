# UI Components <!-- omit in toc -->

This project is an Angular UI components library meant for use in any project.

This also serves as a scaffold for other components library to built on.

## Table of Contents <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Usage Guide](#usage-guide)
  - [Installing the library](#installing-the-library)
  - [Using the library](#using-the-library)
  - [Using the included theme](#using-the-included-theme)
- [Documentation](#documentation)
- [Contributing](#contributing)
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

### Using the library

Simply import the `Module` of the component you want use where needed and add the components tag in your template.

`app.module.ts`

```js
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'

// import module
import { FooModule } from 'ktb-ui-components'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

`app.component.ts`

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ui-foo></ui-foo>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'library-test'
}
```

### Using the included theme

This library comes included with a `theme.scss` for use in projects.

Before using it though, it is highly recommended to update your `angular.json` to include the theme directory in `stylePreprocessorOptions.includePaths` to make importing a lot easier.

`angular.json`

```json
{
  ...
  "stylePreprocessorOptions": {
    "includePaths": ["./node_modules/ktb-ui-components/src/lib"]
  },
}
```

With that done, you can now import any of the files below.

`app.component.scss`

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

Simply run this script, and a local Storybook server of all production ready components will open on [localhost:8080](//localhost:8080).

```bash
npm run docs
```

## Contributing

Please take a look at [CONTRIBUTING.md](./CONTRIBUTING.md) on how to contribute to this library.

## License

< TO BE ADDED >
