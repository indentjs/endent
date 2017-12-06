var endent = require('./dist').default
var dedent = require('dedent')
var fs = require('fs')

;(function () {

  var obj = {
    'a': { 'd' : {'dd': 123}}
  }
  var file =  dedent(endent`
    module.exports = store

    function store (state, emitter) {
      emitter.on('DOMContentLoaded', function () {
        state['a'] = ${endent.pretty(obj)}

        state.on('a', data => {
          state['a'] = data
          emitter.emit('render')
        })
      })
    }
  `)

  fs.writeFile('template.js', file, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })

})()
