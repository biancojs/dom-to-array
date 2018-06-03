require('jsdom-global')()
const assert = require('assert')
const domToArray = require('./')
const body = document.body

describe('Bianco dom-to-array', function() {
  before(function() {
    const div = document.createElement('div')
    div.innerHTML = `
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>
    `
    body.appendChild(div)
  })

  it('It can convert node list', function() {
    const lis = document.querySelectorAll('li')
    const $lis = domToArray(lis)
    assert.equal($lis.length, 2)
    assert.equal(typeof $lis, 'object')
  })

  it('It can convert a single node', function() {
    const li = document.querySelector('li')
    const $li = domToArray(li)
    assert.equal($li.length, 1)
    assert.equal(typeof $li, 'object')
  })

  it('It can detect also the window', function() {
    const $win = domToArray(window)
    assert.equal($win.length, 1)
    assert.equal(typeof $win, 'object')
  })

})