# Samuel Ipsum
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![license](https://img.shields.io/github/license/marinko-peso/samuel-ipsum.svg)](https://github.com/marinko-peso/samuel-ipsum/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![package version](https://img.shields.io/npm/v/samuel-ipsum.svg)](https://npm.im/samuel-ipsum)
[![install size](https://packagephobia.now.sh/badge?p=samuel-ipsum)](https://packagephobia.now.sh/result?p=samuel-ipsum)
[![dependecies](https://david-dm.org/marinko-peso/samuel-ipsum.svg)](https://david-dm.org/marinko-peso/samuel-ipsum)

Generate placeholder text from Samuel L. Jackson quotes.

## Install

```sh
npm i -g samuel-ipsum
```

## Usage

In code:
```js
import { generateParagraphs, generateHeader, Mode } from 'samuel-ipsum'

generateParagraphs(3);              // returns array with requested number of paragraphs
generateHeader();                   // returns single header string
generateParagraphs(2, Mode.Lite);   // lite mode (Mode.Regular is by default)
```

In terminal:
```
> samuel-ipsum -n 2 -t paragraph

Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.

Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

------------
Pipe to pbcopy if you want to copy to clipboard: samuel-ipsum --number=2 --type=paragraph | pbcopy
```

Options:
-  --type, -t    Choose between "paragraph" and "header"
-  --number, -n  Number of paragraphs to output (default=1)
-  --mode, -m    Choose between "regular" (offensive) or "lite" output (default="regular")

More details can be found with --help.

Don't forget:
```
npx samuel-ipsum
```

## What does the duckie say?

```sh
npx samuel-ipsum --t header | npx -q duckiesay
```
```
 __________________
< No, motherfucker >
 ------------------
  \
   \ >()_
    __(__)__ _
```

## License

MIT
