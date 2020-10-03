#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

// Colours
const chalk = require('chalk');
const italic = chalk.italic;
const brand = chalk.hex('#09c').bold.inverse;
const twitterClr = chalk.hex('#1da1f2').bold.inverse;
const githubClr = chalk.hex('#6cc644').bold.inverse;
const linkedinClr = chalk.hex('#8d6cab').bold.inverse;
const dim = chalk.dim;

// Alerts
const sym = require('log-symbols');
const success = chalk.green;
const error = chalk.red.bold;
const warning = chalk.keyword('orange');
const info = chalk.blue;

welcome({
  title: `Al Romano`,
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#09c`,
  color: `#000000`,
  bold: true,
  clear: true,
})

console.log(`
${italic(`
  Front-End Dev with a JAMStack Focus with a knack for web analytics, data visualization and a11y development practices.
  ---
  I fell in love with JAM-Stack and have no regrets.
  ---
  Dad, Husband, Tech Blogger, Airsoft Fanatic, and I try to Sous Vide everything.
  `
)}

:: URLS ::
${brand(` Website `)} - ${dim(`https://virtuallycreative.ca`)}

:: Social ::
${twitterClr(` Twitter `)} - ${dim(`https://twitter.com/vip3rousmango`)}
${linkedinClr(` LinkedIn `)} - ${dim(`https://www.linkedin.com/in/alromano/`)}
${githubClr(` GitHub `)} - ${dim(`https://github.com/vip3rousmango`)}
`);

console.log(`
  ${sym.success} ${success(' SUCCESS ->')} Thank you for downloading my CLI.
  ${sym.warning} ${warning(' WARNING ->')} Currently, I'm not actively persuing clients.
  ${sym.info} ${info(' INFO ->')} For more info, please don't hesitate to reach out!
  ${sym.error} ${error(' ERROR ->')} Stay hungry. Be humble.
`);