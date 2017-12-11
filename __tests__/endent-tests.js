import endent from '../endent.js'

describe('endent', () => {
  it('only endent object or array', () => {
    var json = JSON.stringify(JSON.parse('[ "abc" ]'), null, 2)

    var someobj = {
      contact: {
        jack: '123456',
        tom: '654321'
      },
      name: 'template',
      color: 'blue',
      animals: [ 'bear', 'fish', 'dog', 'cat']
    }

    var colors = ['red', 'pink', 'white']
    var objectName = "someobj"

    var dependencies = ['jquery', 'underscore', 'bootstrap']
    var dependencyTmpl = ``

    dependencies.forEach((d, i) => {
      dependencyTmpl += `var ${d} = require("${d}")\n`
    })

    var jsFile = endent`
      ${dependencyTmpl}
      module.exports = store

      function store (state, emitter) {
        emitter.on("DOMContentLoaded", function () {
          state["json"] = ${json}
          state["${objectName}"] = ${endent.pretty(someobj)}
          state["colors"] = ${endent.pretty(colors)}
          state["name"] = "${endent.pretty("jack")}"
          state["name2"] = "${"tom"}"
          state["number"] = ${endent.pretty(123)}
          state["number2"] = ${123}
          state["Iamundefined"] = ${endent.pretty()}
          state["Iamnull"] = ${endent.pretty(null)}
          state["Iamregexp"] = ${endent.pretty(/abc/)}
        })
      }
    `

    expect(jsFile).toMatchSnapshot()
  })
})
