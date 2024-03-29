#! /usr/bin/env node
const chalk = require('chalk');
const log = console.log;

log(
  chalk.red(`
 ██╗     ██╗███╗   ██╗ ██████╗ ██████╗ ███╗   ██╗
 ██║     ██║████╗  ██║██╔════╝██╔═══██╗████╗  ██║
 ██║     ██║██╔██╗ ██║██║     ██║   ██║██╔██╗ ██║
 ██║     ██║██║╚██╗██║██║     ██║   ██║██║╚██╗██║
 ███████╗██║██║ ╚████║╚██████╗╚██████╔╝██║ ╚████║
 ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝
 `)
);

log(
  `I'm a ${chalk.gray('<span>')}${chalk.red('Senior Frontend Engineer')}${chalk.gray(
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
  - React/React-Native
  - Clean Architecture
  - Design Patterns
  - TDD
  - Internet of Things
  - Styled Components/Sass
  - NodeJS/Express
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
