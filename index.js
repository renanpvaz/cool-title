#!/usr/bin/env node

'use strict';

const program = require('commander');
const colors = require('colors');

const action = text => {
  const titleWords = text
    .split('')
    .map(
      word => {
        const titleWord = characters[word.toUpperCase()].split('\n');

        titleWord.shift();
        titleWord.pop();

        return titleWord;
      }
    );

  const lines = Array(6)
    .fill('')
    .map(
      (line, i) => titleWords.map(words => words[i]).join('').replace(/ /g, '')
    );

  const title = '\n' + lines.join('\n').replace(/0/g, ' ') + '\n';

  console.log(title[program.style] || title['white']);
};

const characters = {
  '"': '',

  ' ': `
    000000
    000000
    000000
    000000
    000000
    000000
  `,

  '-': `
    0000000
    0000000
    ██████║
    0000000
    0000000
    0000000
  `,

  A: `
    0█████╗0
    ██╔══██╗
    ███████║
    ██╔══██║
    ██║00██║
    ╚═╝00╚═╝
  `,

  B: `
    ███████╗0
    ██╔═══██╗
    ███████╔╝
    ██╔═══██╗
    ███████╔╝
    ╚══════╝0
  `,

  C: `
    0███████╗
    ██╔═════╝
    ██║000000
    ██║000000
    ╚███████╗
    0╚══════╝
  `,

  D: `
    ███████╗0
    ██╔═══██╗
    ██║000██║
    ██║000██║
    ███████╔╝
    ╚══════╝0
  `,

  E: `
    ███████╗
    ██╔════╝
    █████╗00
    ██╔══╝00
    ███████╗
    ╚══════╝
  `,

  F: `
    ███████╗
    ██╔════╝
    █████╗00
    ██╔══╝00
    ██║00000
    ╚═╝00000
  `,
  G: `
    0███████╗
    ██╔═════╝
    ██║0████╗
    ██║0╚═██║
    ╚███████║
    0╚══════╝
  `,

  H: `
    ██╗000██╗
    ██║000██║
    ████████║
    ██╔═══██║
    ██║000██║
    ╚═╝000╚═╝
  `,

  I: `
       ██╗
       ██║
       ██║
       ██║
       ██║
       ╚═╝
  `,

  J: `
    0000██╗
    0000██║
    0000██║
    ██╗0██║
    ██████║
    ╚═════╝
  `,

  K: `
    ██╗000██╗
    ██║00██╔╝
    ██████╔╝0
    ██║00██╗0
    ██║000██╗
    ╚═╝000╚═╝
  `,

  L: `
    ██╗0000
    ██║0000
    ██║0000
    ██║0000
    ██████╗
    ╚═════╝
  `,
  M: `
    ███╗000███╗
    ████╗0████║
    ██╔████╔██║
    ██║╚██╔╝██║
    ██║0╚═╝0██║
    ╚═╝00000╚═╝
  `,

  N: `
    ███╗000██╗
    ████╗00██║
    ██╔██╗0██║
    ██║╚██╗██║
    ██║0╚████║
    ╚═╝00╚═══╝
  `,

  O: `
    0███████╗0
    ██╔════██╗
    ██║0000██║
    ██║0000██║
    ╚███████╔╝
    0╚══════╝0
  `,

  P: `
    ███████╗0
    ██╔═══██╗
    ███████╔╝
    ██╔════╝0
    ██║000000
    ╚═╝000000
  `,

  Q: `
    0███████╗00
    ██╔════██╗0
    ██║0000██║0
    ██║00████║0
    ╚█████████╗
    0╚════════╝
  `,

  R: `
    ██████╗0
    ██╔══██╗
    ██████╔╝
    ██╔══██╗
    ██║00██║
    ╚═╝00╚═╝
  `,
  S: `
    ███████╗
    ██╔════╝
    ███████╗
    ╚════██║
    ███████║
    ╚══════╝
  `,
  T: `
    ████████╗
    ╚══██╔══╝
    000██║000
    000██║000
    000██║000
    000╚═╝000
  `,

  U: `
    ██╗0000██╗
    ██║0000██║
    ██║0000██║
    ██║0000██║
    ╚███████╔╝
    0╚══════╝0
  `,

  V: `
    ██╗0000██╗
    ██║0000██║
    ╚██╗00██╔╝
    0╚██╗██╔╝0
    00╚███╔╝00
    000╚══╝000
  `,
  X: `
    ██╗00██╗
    ╚██╗██╔╝
    0╚███╔╝0
    0██╔██╗0
    ██╔╝0██╗
    ╚═╝00╚═╝
  `,
  Y: `
    ██╗000██╗
    ╚██╗0██╔╝
    0╚████╔╝0
    00╚██╔╝00
    000██║000
    000╚═╝000
  `,
  W: `
    ██╗0╔═╗0██╗
    ██║╔██╚╗██║
    ██╚████╚██║
    ████╝0████║
    ███╝000███║
    ╚═╝00000╚═╝
  `,
  Z: `
    ████████╗
    ╚════███║
    000███╔═╝
    0███╔═╝00
    ████████╗
    ╚═══════╝
  `
};

program
  .version('1.0.0')
  .arguments('<text>')
  .option('-s, --style [name]', 'Add the specified style')
  .action(action)
  .parse(process.argv);
