#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');


welcome({
  title: `Al Romano`,
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
})

console.log(`
${chalk.italic(`
  Front-End Dev with a JAMStack Focus with a knack for web analytics, data visualization and a11y development practices.
  ---
  I fell in love with JAM-Stack and have no regrets.
  ---
  Dad, Husband, Tech Blogger, Airsoft Fanatic, and I try to Sous Vide everything.
  `
)}

${chalk.hex('#09c').bold.inverse(` Website `)} - ${chalk.dim(`https://virtuallycreative.ca`)}
${chalk.hex('#1da1f2').bold(` Twitter `)} - ${chalk.dim(`https://twitter.com/vip3rousmango`)}
${chalk.hex('#8d6cab').bold(` LinkedIn `)} - ${chalk.dim(`https://www.linkedin.com/in/alromano/`)}
${chalk.hex('#6cc644').bold(` GitHub `)} - ${chalk.dim(`https://github.com/vip3rousmango`)}

`);