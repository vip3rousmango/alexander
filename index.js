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
  Front-End Dev with 15 years experience with WordPress, Front-End Accessibility but now it's all Ai, agents, RAG and automations. Moving data from one system to the next.
  I love to build tools that help people do their jobs better, faster, and more efficiently. I also love to automate everything I can.
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