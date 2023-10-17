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

## Use template

### With GitHub

If you have an GitHub account, you can create a new repository from this repository by clicking on **Use this template > Create a new repository**

### Manually

Clone the project and remove the `.git` folder to delete history.

```bash
  git clone https://github.com/lorenzo-bonatti/react-library-template.git my-project
```
```bash
 cd my-project && rm -rf .git
```

Now you can init your new git wiht `git init` and create you *Initial commit*

## Run Locally

### Install dependencies

```bash
  npm  install
```
or with Yarn
```
  yarn install
```

>  **Yarn 2+**
>
> If you are using Yarn 2+, you need to run `yarn husky install` manually.  
> This because Yarn 2+ doesn't support *prepare* script automatically after install like npm or yarn v1  
> See [Yarn 2+ - Lifecycle Scripts](https://yarnpkg.com/advanced/lifecycle-scripts).

## Running Tests

To run tests, run the `test` command as following:

```bash
  npm run test
```

You can run tests watching changes with `test:watch` command:

```bash
   npm run test:watch
```

### No tests yet?

If your project doesn't already have tests, you need to comment out the `npm run test` command in the `.husky > pre-commit` file.

![Husky Pre Commit Script](https://s3.eu-west-1.amazonaws.com/lorenzobonatti.github/hucky-pre-commit.png)

This is because, without tests, the command returns **1**, suspending the lint-staged script and your commit.  
Wihtout this changes, **you won't be able to commit your changes**.

## Scripts

This is the list of all scripts that you can run with npm o yarn:

-  `test`: run test one time only
-  `test:watch`: run test watching changes
-  `build`: build your package
-  `storybook`: run Storybook
-  `build-storybook`: build your Storybook

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [Lorenzo Bonatti](https://github.com/lorenzo-bonatti)
