#! /usr/bin/env node
const chalk = require('chalk');
const log = console.log;

log(`Hello! My name is ${chalk.red('Lincon Kusunoki')}`);

log(
  `I'm a ${chalk.gray('<span>')}${chalk.red('Front-end Developer')}${chalk.gray(
    '</span>'
  )}`
);

log(`
My favorite languages are ${chalk.blue(`
  - HTML
  - CSS
  - JavaScript
`)}`);

log(`
Currently I'm working with ${chalk.blue(`
  - React/Redux/Gatsby
  - Storybook
  - Styled Components/Sass
  - NodeJS/Express
  - MongoDB
  - Bootstrap/Material/Tailwind
  - Jest & Testing Library
  - Webpack
  - Git/Github
`)}`);

log(`
Contact ${chalk.blue(`
Email: linconkusunoki@gmail.com
Phone: +34 634 940 578
`)}`);
