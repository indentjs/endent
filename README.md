## endent

An ES6 string tag that endows some indentation. Use it with [dedent](https://github.com/dmnd/dedent)!

### Usage

```js
// you are developing some javascript template...

import endent from 'endent'
import dedent from 'dedent'

function usageExample () {
  var obj = { color: 'red' }
  var awfulTmpl = dedent`
    function func () {
      var renderObj = ${JSON.stringify(obj, null, 2)}
    }
  `
  var prettyTmpl = dedent(endent`
    function func () {
      var renderObj = ${endent.pretty(obj)}
    }
  `)
  return awfulTmpl + '\n\n' + prettyTmpl
}
```

```js
> console.log(usageExample())
```

```text
function func () {
  var renderObj = {
  "color": "red"
}
}

function func () {
  var renderObj = {
    "color": "red"
  }
}
```
