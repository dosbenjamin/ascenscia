# Simple Workflow with Laravel Mix.

## Install

- `npm i`

## Features

- Copy `src/*.html` to `dist` folder.
- Copy `src/assets/*/` to `dist/assets/*/` folder.
- Compile SASS `src/styles/app.scss` to `dist/styles` folder.
- Bundle and transpile JS `src/scripts/app.js` to `dist/scripts` folder.
- Create sources maps.
- Run a dev web server with browsersync.
- Run linter on SCSS and JS files.
- Optimize assets on production mode (build).

## Commands

- `npm start` : build on files changes, launch a dev server with browsersync.
- `npm run build` : clean, lint and build the project.
- `npm run clean` : clean the `dist` folder.
- `npm run lint` : run a linter on scss and js files.

## Linters

### Javascript

Use "JavaScript Standard Style" : [https://standardjs.com/rules.html](https://standardjs.com/rules.html)

Only customization: require a semicolon at the end of each line.

### Stylesheet

Use "stylelint-config-standard" : [https://github.com/stylelint/stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
