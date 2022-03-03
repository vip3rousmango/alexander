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
const npxCMD = chalk.hex('#FFFFFF').inverse;
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

console.log(`${italic(`
  Front-End Dev with a JAMStack Focus with a knack for web analytics, data visualization and a11y development practices.
  Started with the LAMP-stack, but fell in love with JAM-Stack and haven't looked back since.
  Dad, Husband, Tech Blogger, Airsoft Fanatic, and I try to Sous Vide everything.
  `
)}

:: CLIs ::
${brand(` Punchline `)} -> ${npxCMD(`npx @vip3rousmango/punchline`)} -> ${dim(`https://github.com/vip3rousmango/punchline`)}

:: URLS ::
${brand(` Freelance Website `)} - ${dim(`https://virtuallycreative.ca`)}
${brand(` Blog `)} - ${dim(`https://hash.virtuallycreative.ca`)}

:: SOCIAL ::
${twitterClr(` Twitter `)} - ${dim(`https://twitter.com/vip3rousmango`)}
${linkedinClr(` LinkedIn `)} - ${dim(`https://www.linkedin.com/in/alromano/`)}
${githubClr(` GitHub `)} - ${dim(`https://github.com/vip3rousmango`)}

${sym.success} ${success(' SUCCESS ->')} Thank you for downloading my CLI!
${sym.info} ${info(' INFO -> ')} Stay hungry. Be humble.
`);