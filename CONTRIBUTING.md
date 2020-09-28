# Contributing <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Ground Rules](#ground-rules)
  - [Branching strategy](#branching-strategy)
  - [Merge requests](#merge-requests)
  - [Code quality assurance](#code-quality-assurance)
- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder structure](#folder-structure)
  - [Coding style](#coding-style)
- [Technical](#technical)
  - [Prerequisites](#prerequisites)
  - [First time setup](#first-time-setup)
  - [Local development](#local-development)
  - [Creating a new component](#creating-a-new-component)
  - [Creating builds](#creating-builds)
  - [Integration testing](#integration-testing)

## Ground Rules

### Branching strategy

Due to the simplicity of this project, we'll be using [GitHub Flow](https://guides.github.com/introduction/flow/) as apposed to git-flow.

For this repo:

- New features are to branch off from `master`.
- A PR must be created before merging feature branches to `master`.
- PR's will be reviewed and tested before merging back to `master`.

#### How to name branches <!-- omit in toc -->

- Components - When creating a new component, prepend the branch with `component/*`. There's also no need to create a new branch for subcomponents, you can just do it in the main component branch.

- Theming - For features pertaining to the theme, prepend the branch with `theme/*`.

### Merge requests

When submitting a merge request, title your merge request as per this template:

`Merge [<branch_name>] Create | Update | Fix <component_name>: <optional description>`

### Code quality assurance

The repo has been set-up to run both `prettier` and `ng lint` on-commit, thus you're allowed to format your code in any way you see fit, and it'll automatically be formatted to a common style when you run `git commit`.

## Codebase

### Technologies

- **Angular 10** - This project is intended to be used with the latest version of Angular, and will be kept updated for futureproofing.
- **Storybook** - A toolkit for developing UI components in isolation. We'll be making full use of this during development and also for documentating our components. Their website can be found here https://storybook.js.org.

### Folder structure

The general folder structure of this project looks something like this.

```bash
ktb-ui-components
├─ .storybook                # Configuration files for Storybook
├─ src/                      # Source files goes in here
│  ├─ component-name/
│  ├─ theme/
│  └─ ...
│
├─ dist                      # The project build goes here
├─ public                    # Static build of the Storybook server
└─ ...
```

Every component lives in `src/` in their own subfolder and generally will have these files.

```bash
/component-name/
├─ component-name.component.html
├─ component-name.component.scss
├─ component-name.component.ts
├─ component-name.module.ts
├─ component-name.stories.(ts|mdx) # by default use .ts
├─ package.json
├─ public-api.ts
└─ index.ts
```

### Coding style

There is no strict restriction to follow any JS style guide, but it's still good practice to _at least_ try to use them for cleaner code.

The styleguide referenced most would be the one by Airbnb:

- [Airbnb Styleguide](https://github.com/airbnb/javascript#references)
- [Google](https://google.github.io/styleguide/jsguide.html)
- [StandardJS](https://standardjs.com/)

But when it comes to Angular, generally we'll be using the standard [Angular coding style guide](https://angular.io/guide/styleguide) with a few rules disabled to allow better library developement.

#### General rules <!-- omit in toc -->

With that said, there still are a few ground rules to follow,

- Prefer `const`, `let` when absolutely necessary, and never `var`.<sup>[reference](https://github.com/airbnb/javascript#references)</sup>
- Prefer arrow functions callbacks.<sup>[reference](https://github.com/airbnb/javascript#arrow-functions)</sup>
- Components must be pure/dumb. Meaning they should not depend on any services or global states.<sup>[reference](https://dev.to/mquanit/concept-of-smart-dumb-components-in-angular-2fom)</sup>

## Technical

### Prerequisites

Development of this library heavily relies on `@angular/cli` being installed globally.

If it's not already, install it with this script.

```
npm install -g @angular/cli
```

### First time setup

The first step to start development, is to clone this repo.

```bash
git clone https://gitlab.com/ktb-corporate-portal/ktb-ui-components.git
```

Then proceed to install the dependencies as per usual.

```
npm install
```

### Local development

To start working on this library, run this script.

```bash
npm start
```

This will open a local storybook server on [//localhost:6006](//localhost:6006) for you to start working on your components.

### Creating a new component

#### Generate component module <!-- omit in toc -->

To begin, use `angular-cli` to generate a `module` and a `component`.

```bash
ng generate module component-name
ng generate component component-name
```

**Important Note**

Due to an odd limitation of `angular-cli`<sup>[Open Issue](https://github.com/angular/angular-cli/issues/9370)</sup>, these files will be generated in `src/lib/`.

You'll have to manually move them out to the `src` folder, or alternatively, manually create the component files yourself in `src/component-name`

#### Create a story <!-- omit in toc -->

Next, create a `*.stories.ts` in the new components directory.

This is where you'll declare the component stories for Storybook.

`component-name.stories.ts`

```ts
import { FooComponent } from './foo.component'

export default {
  title: 'Example/Foo',
  component: FooComponent
}

export const Basic = () => ({
  component: FooComponent,
  props:
})
```

#### Create entry point files <!-- omit in toc -->

Next, also create these 3 files.

They will allow our components to be better delivered in chunks and subsequently reduce bundle sizes. More on this can be found [from this article](https://medium.com/angular-in-depth/improve-spa-performance-by-splitting-your-angular-libraries-in-multiple-chunks-8c68103692d0).

`package.json`

```json
{
  "ngPackage": {
    "lib": {
      "entryFile": "public-api.ts"
    }
  }
}
```

`public-api.ts`

```ts
export * from './foo.component'
export * from './foo.module'
```

`index.ts`

```ts
export * from './public-ts'
```

#### Add export to primary entry point <!-- omit in toc -->

Finally, export your module from the primary library entry point.

`src/index.ts`

```ts
export * from 'ktb-ui-components/component-name'
```

#### Writing Documentations <!-- omit in toc -->

For guide on how to write stories, check out [Storybooks documentation](https://storybook.js.org/docs/angular/writing-stories/introduction).

If you require more control over the documentation layout, you can opt use create a `.mdx` file instead. Learn more of that [here](https://storybook.js.org/docs/angular/writing-docs/mdx).

### Creating builds

To build the library, there are a few commands available,

- Build only the documentation. Outputs to `public/`.

  ```bash
  npm run build:docs
  ```

- Build only the library. Outputs to `dist/ktb-ui-components/`

  ```bash
  npm run build:lib
  ```

- Build both the library and the documentation

  ```bash
  npm run build
  ```

### Integration testing

When it comes time to test out your library, create a build and follow the [standard installation steps](./README.md/#installing-the-library).
