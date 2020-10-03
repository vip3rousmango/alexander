#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');


welcome({
  title: pkgJSON.name,
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
})

console.log(`
  NAME: ${pkgJSON.name}
  VERSION: ${pkgJSON.version}
  MISSION: ${pkgJSON.tagline}

${chalk.bgBlue.bold(`Al Romano`)}

${chalk.italic(
  `A "Web Stack" Developer with a knack for web analytics, data visualization and accessable dashboards.
 I'm a firm believer of "user experience first" and HTML First Prototyping approaches when applying best
 practice standards for web development and passonate about includsive development.`
)}

${chalk.hex('#09c').bold.inverse(` Website `)} - ${chalk.dim(`https://virtuallycreative.ca`)}
${chalk.hex('#1da1f2').bold(` Twitter `)} - ${chalk.dim(`https://twitter.com/vip3rousmango`)}
${chalk.hex('#8d6cab').bold(` LinkedIn `)} - ${chalk.dim(`https://www.linkedin.com/in/alromano/`)}
${chalk.hex('#6cc644').bold(` GitHub `)} - ${chalk.dim(`https://github.com/vip3rousmango`)}

`);