import endent from '../'
import dedent from 'dedent'

describe('endent', () => {
  it('only endent object or array', () => {
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

    var jsFile = dedent(endent`
      module.exports = store

      function store (state, emitter) {
        emitter.on("DOMContentLoaded", function () {
          state["someobj"] = ${endent.pretty(someobj)}
          state["colors"] = ${endent.pretty(colors)}
          state["name"] = ${endent.pretty("jack")}
          state["number"] = ${endent.pretty(123)}
          state["Iamundefined"] = ${endent.pretty()}
          state["Iamnull"] = ${endent.pretty(null)}
          state["Iamregexp"] = ${endent.pretty(/abc/)}
        })
      }
    `)

    expect(jsFile).toMatchSnapshot()
  })
})
