import dedent from 'dedent'
import objectorarray from 'objectorarray'
import parse from 'fast-json-parse'

export default endent

const ENDENT_ID = 'twhZNwxI1aFG3r4'

function endent (strings, ...values) {
  const raw = typeof strings === 'string' ? [strings] : strings.raw

  let result = ''

  for (let i = 0; i < raw.length; i++) {
    result += raw[i]

    if (i < values.length) {
      var value = values[i]
      var isJson = false

      if (parse(value).value) {
        value = parse(value).value
        isJson = true
      }

      if ((value && value[ENDENT_ID]) || isJson) {
        var rawlines = result.split('\n')
        var l = rawlines[rawlines.length - 1].search(/\S/)
        var endentation = ' '.repeat(l)
        var valueJson = isJson ? JSON.stringify(value, null, 2) : value[ENDENT_ID]
        var valueLines = valueJson.split('\n')

        valueLines.forEach((l, index) => {
          if (index > 0) {
            result += ('\n' + endentation + l)
          } else {
            result += l
          }
        })
      } else if (typeof value === 'string' && value.includes('\n')) {
          var endentations = result.match(/(?:^|\n)( *)$/)

          if (endentations && typeof value === 'string') {
            var endentation = endentations[1]
            result += value
              .split('\n')
              .map((str, i) => i === 0 ? str : `${endentation}${str}`)
              .join('\n')
            } else {
              result += value
            }
      } else {
        result += value
      }
    }
  }

  return dedent(result)
}

endent.pretty = (data) => {
  return objectorarray(data) ? {[ENDENT_ID]: JSON.stringify(data, null, 2)} : data
}
