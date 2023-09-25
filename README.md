

# React Library Template

A React template for creating your components library


## Features

- Minimal folder structure and configurations
- Easy startup with scripts in package.json
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) and [Rollup](https://rollupjs.org/) configurations for production builds
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://typicode.github.io/husky/) pre-commit hook
- [Lint Staged](https://github.com/okonet/lint-staged) to run Prettier on staged Git files.
- Included [Storybook](https://storybook.js.org/) for documentation (with minimal examples)


## Run Locally

Clone the project

```bash
  git clone https://github.com/lorenzo-bonatti/react-library-template.git my-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
or with Yarn
```
  yarn install
```

> **Yarn 2+**
> If you are using Yarn 2+ you need to run `yarn husky install` manually.
> This because Yarn 2+ not support *prepare* script automatically after install like npm or yarn v1 [Read docs](https://yarnpkg.com/advanced/lifecycle-scripts).


## Build your library

WIP

## Configurations

WIP

## Running Tests

To run tests one time, run the following command

```bash
  npm run test
```
with Yarn
```bash
  yarn test
```

or you can run test watching changes
```bash
  npm run test:watch
```
```bash
  yarn test:watch
```

### No tests? :'(
If your project not has already test, you need to comment the `npm run test` in `.husky > pre-commit` file.
![Husky Pre Commit Script](https://s3.eu-west-1.amazonaws.com/lorenzobonatti.github/hucky-pre-commit.png)

That because without tests, the command returns **1** and this suspends the lint-staged script and your commit. You will not be able to commit your changes.

## Scripts

This is the list of all scripts that you can run with npm o yarn:

- `test`: run test one time only
- `test:watch`: run test watching changes
- `build`: build your package
- `storybook`: run Storybook
- `build-storybook`: build your Storybook  

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors
- [Lorenzo Bonatti](https://github.com/lorenzo-bonatti)
