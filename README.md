# pkgcfg-example <sub><sup>0.7.0</sup></sub>
## One configuration to rule them all

[![npm](https://img.shields.io/npm/v/pkgcfg-example.svg?maxAge=2592000)](https://npmjs.com/package/pkgcfg-example)
[![license](https://img.shields.io/npm/l/pkgcfg-example.svg)](https://creativecommons.org/licenses/by/4.0/)
[![travis](https://img.shields.io/travis/Download/pkgcfg-example.svg)](https://travis-ci.org/Download/pkgcfg-example)
[![greenkeeper](https://img.shields.io/david/Download/pkgcfg-example.svg?maxAge=2592000)](https://greenkeeper.io/)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)

<sup><sub><sup><sub>.</sub></sup></sub></sup>

**Example project using [pkgcfg](https://npmjs.com/package/pkgcfg) to add dynamic behavior to package.json**

## Usage
Clone this project to your local machine:

```sh
$ git clone https://github.com/download/pkgcfg-example.git
Cloning into 'pkgcfg-example'...
remote: Counting objects: 17, done.
remote: Total 17 (delta 0), reused 0 (delta 0), pack-reused 17
Unpacking objects: 100% (17/17), done.
Checking connectivity... done.
```

Change directory into the cloned project:

```sh
$ cd pkgcfg-example
```

Install dependencies:

```sh
$ npm install
```

Run the tests:

```sh
npm run test

> pkgcfg-example@0.7.0 test c:\pkgcfg-example
> mocha pkgcfg-example.spec.js


  pkgcfg-example
    √ can use {env} without explicit require
    √ can use {eval} without explicit require


  2 passing (22ms)
```

Explore `package.json` and `pkgcfg-example.spec.js`. Add your own tags to
`package.json` and write some tests to put them to work.


## Issues

Add an issue in this project's [issue tracker](https://github.com/download/pkgcfg-example/issues)
to let me know of any problems you find, or questions you may have.


## Copyright

Copyright 2016 by [Stijn de Witt](http://StijnDeWitt.com). Some rights reserved.


## License

[Creative Commons Attribution 4.0 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)
