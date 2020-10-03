#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagline: `Dream. Design. Develop. Deliver.`,
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
  DESCRIPTION: ${pkgJSON.description}
`)

console.log(`

Hi, I'm Al Romano.

I'm a Web Stack Developer with a knack for web analytics, data visualization and accessable dashboards.
I'm a firm believer of "user experience first" and HTML First Prototyping approaches when
applying best practice standards for web development and passonate about includsive development.

Starting out as a PHP (LAMP) developer (you guessed it, WordPress...) I've recently taken
an interest in Information Dashboard design and data visualization with a focus on web accesability using JavaScript
as well as becoming more proficient using Node.js both for pipeline and for building applications (MExN/CLIs).

I have worked for international ad agencies like Saatchi & Saatchi and Upcoming Media,
local bioinformatics software Cyclica and am currently helping the cause at SickKids Foundation.

Twitter - https://twitter.com/vip3rousmango
LinkedIn - https://www.linkedin.com/in/alromano/
Github - https://github.com/vip3rousmango
Site - https://virtuallycreative.ca

`);