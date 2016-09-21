# bianco.dom-to-array

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]



## Usage

```js
import domToArray from 'bianco.dom-to-array'

var div = document.createElement('div')
div.innerHTML = `
  <ul>
    <li>one</li>
    <li>two</li>
  </ul>
`
body.appendChild(div)

// It can convert node list
const lis = document.querySelectorAll('li')
const $lis = domToArray(lis)
$lis.length // => 2
Array.isArray($lis) // => true

// It can convert a single node
const li = document.querySelector('li')
const $li = domToArray(li)
$li.length // => 1
Array.isArray($li) // => true

```

## API

- `domToArray` Converts any DOM node/s to a loopable array


[travis-image]:https://img.shields.io/travis/biancojs/dom-to-array.svg?style=flat-square
[travis-url]:https://travis-ci.org/biancojs/dom-to-array

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/bianco.dom-to-array.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/bianco.dom-to-array.svg?style=flat-square
[npm-url]:https://npmjs.org/package/bianco.dom-to-array
