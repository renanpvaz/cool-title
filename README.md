```
 ███████╗ ███████╗  ███████╗ ██╗           ████████╗██╗████████╗██╗    ███████╗
██╔═════╝██╔════██╗██╔════██╗██║           ╚══██╔══╝██║╚══██╔══╝██║    ██╔════╝
██║      ██║    ██║██║    ██║██║    ██████║   ██║   ██║   ██║   ██║    █████╗  
██║      ██║    ██║██║    ██║██║              ██║   ██║   ██║   ██║    ██╔══╝  
╚███████╗╚███████╔╝╚███████╔╝██████╗          ██║   ██║   ██║   ██████╗███████╗
 ╚══════╝ ╚══════╝  ╚══════╝ ╚═════╝          ╚═╝   ╚═╝   ╚═╝   ╚═════╝╚══════╝
```

Display cool titles from your terminal.

## Installation

```
npm install -g cool-title
```

## Usage

```
cool-title --help

  Usage: cool-title [options] <text>

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -s, --style [name]  Add the specified style
```

Supports the whole english alphabet plus dashes and non-breaking spaces. The style option accepts any of [these](https://www.npmjs.com/package/colors).

Note: when adding non-breaking spaces, wrap the text with double quotes.


### Using with npm scripts

```
"scripts": {
    "start": "cool-title cool-app --color blue && node index.js",
    ...
  },
```
