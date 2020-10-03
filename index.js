#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const brand = hex('#09c').bold.inverse;
const twitterClr = hex('#1da1f2').bold.inverse;
const githubClr = hex('#6cc644').bold.inverse;
const linkedinClr = hex('#8d6cab').bold.inverse;
const dim = dim;

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
${italic(`
  Front-End Dev with a JAMStack Focus with a knack for web analytics, data visualization and a11y development practices.
  ---
  I fell in love with JAM-Stack and have no regrets.
  ---
  Dad, Husband, Tech Blogger, Airsoft Fanatic, and I try to Sous Vide everything.
  `
)}

${brand(` Website `)} - ${dim(`https://virtuallycreative.ca`)}
${twitterClr(` Twitter `)} - ${dim(`https://twitter.com/vip3rousmango`)}
${linkedinClr(` LinkedIn `)} - ${dim(`https://www.linkedin.com/in/alromano/`)}
${githubClr(` GitHub `)} - ${dim(`https://github.com/vip3rousmango`)}

`);