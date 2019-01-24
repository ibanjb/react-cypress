# React - Redux - Ant.Design - ESLint - Webpack - Lerna - Cypress

![antdesign](https://tomas.piestansky.cz/static/ant-menu-hero-53d994835d83a2613df8013ae9537376-61a4d.png)


![Build Status](https://img.shields.io/badge/build-passed-green.svg) ![Lint](https://img.shields.io/badge/lint-passed-green.svg) ![Flow](https://img.shields.io/badge/flow-passed-green.svg) ![ES6](https://img.shields.io/badge/ES6-with%20Flow-yellow.svg) ![React](https://img.shields.io/badge/React-16.7.0-%2300ffff.svg) ![Jest](https://img.shields.io/badge/Jest-23.6.0-red.svg)  ![Webpack](https://img.shields.io/badge/Webpack-4.29.0-blue.svg) ![Cypress](https://img.shields.io/badge/Cypress-3.1.4-%23ff69b4.svg)

![cypress](https://cdn-images-1.medium.com/max/2600/1*FoCFnUGcQvE2zqiFxitXUg.png)


# Previous steps before run the application
Be sure to have the last NodeJs LTS (https://nodejs.org) version installed in your computer before continue reading.

The next steps are to install, as a global dependency, these libraries:
  - Yarn
  - Cypress

Easy mode: 
```sh
$ npm install -g yarn cypress 
```

# Yarn commands
The commands available are the next ones:
  - **watch**. Uses lerna to create a 'watchable' steam instance of the application
  - **start**. Uses webpack-dev-server in 'development' mode to create a hot-reloading instance
  - **test**. Uses jest to run the unit tests in a 'development' environment
  - **test-prod**. Same about but for the 'production' environment
  - **build**. Uses webpack to create a production bundler
  - **lint**. Inspect the code to validate the lint rules defined
  - **flow**. Same above but with the flow rules defined
  - **flow-coverage**. Uses the flow-coverage-report library to display a 'graphical' related with the flow coverage in the application
  - **cypress**. Runs a new instance of Cypress to run the E2E tests

# Browsing

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8080
```

# Products, components and libraries

This application is currently extended with the following objects. Instructions on how to use them in your own application are linked below.

| Products | Description | Site |
| ------ | ------ | ------ |
| NodeJs | JavaScript run-time environment | [https://nodejs.org](https://nodejs.org/en/) |
| React | A JavaScript library for building user interfaces... and more | [https://reactjs.org](https://reactjs.org/) |
| Redux | A predictable state container for JavaScript apps | [https://redux.js.org](https://redux.js.org/) |
| ESLint | Pluggable JavaScript linter | [https://eslint.org](https://eslint.org/) |
| Flow | A static type checker for JavaScript | [https://flow.org](https://flow.org) |
| Ant.Design | The world's second most popular react UI framework  | [https://ant.design](https://ant.design/) |
| Webpack | Module bundler | [https://webpack.js.org](https://webpack.js.org/) |
| Cypress | JavaScript End To End testing framework | [https://cypress.io](https://cypress.io) |
| Lerna | A too for managing Javascripts projects with multiple packages | [https://lernajs.io](https://lernajs.io/) |


License
----
UNLICENSED


