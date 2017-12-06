import endent from '../'

describe('endent', () => {
  it('ss', () => {
    var a = { "a": { 'dd' : {
      adfad : 12312
    }}}
    expect(endent`
      function () {
        var x = ${endent.pretty(a)}
      }
    `).toBe(`asdf100`)
  })
})
