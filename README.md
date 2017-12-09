# Endent [![stability][stability-image]][stability-index]
[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![dm][dm-image]][npm-url]

[stability-image]: https://img.shields.io/badge/stability-stable-green.svg
[stability-index]: https://nodejs.org/api/documentation.html#documentation_stability_index
[npm-image]: https://img.shields.io/npm/v/endent.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/endent
[travis-image]: https://img.shields.io/travis/indentjs/endent.svg?style=flat-square
[travis-url]: https://travis-ci.org/indentjs/endent
[dm-image]: http://img.shields.io/npm/dm/endent.svg?style=flat-square

An ES6 string tag that endows some indentation. Recommnend use it with [dedent](https://github.com/dmnd/dedent)! May help you generate pretty javascript template with dynamic json.

## Usage

```js

import dedent from "dedent"
import endent from "endent"

function usageExample () {
  var someobj = {
    contact: {
      jack: 123456,
      tom: 654321
    },
    color: "blue",
    animals: [ "bear", "fish", "dog", "cat"]
  }

  var colors = ["red", "pink", "white"]

  var awfulTmpl = dedent`
    module.exports = store

    function store (state, emitter) {
      emitter.on("DOMContentLoaded", function () {
        state["someobj"] = ${JSON.stringify(someobj, null, 2)}
        state["colors"] = ${JSON.stringify(colors, null, 2)}
      })
    }
  `
  var prettyTmpl = dedent(endent`
    module.exports = store

    function store (state, emitter) {
      emitter.on("DOMContentLoaded", function () {
        state["someobj"] = ${endent.pretty(someobj)}
        state["colors"] = ${endent.pretty(colors)}
      })
    }
  `)

  return awfulTmpl + "\n\n" + prettyTmpl
}
```

```js
> console.log(usageExample())
```

```js
// awfulTmpl

module.exports = store

  function store (state, emitter) {
    emitter.on("DOMContentLoaded", function () {
      state["someobj"] = {
"contact": {
  "jack": 123456,
  "tom": 654321
},
"color": "blue",
"animals": [
  "bear"
]
}
      state["colors"] = [
"red",
"pink"
]
    })
  }


// prettyTmpl ~

module.exports = store

function store (state, emitter) {
  emitter.on("DOMContentLoaded", function () {
    state["someobj"] = {
      "contact": {
        "jack": 123456,
        "tom": 654321
      },
      "color": "blue",
      "animals": [
        "bear",
        "fish",
        "dog",
        "cat"
      ]
    }
    state["colors"] = [
      "red",
      "pink",
      "white"
    ]
  })
}
```

## License

MIT
