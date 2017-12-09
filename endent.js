import objectorarray from 'objectorarray'

export default endent

const ENDENT_ID = 'twhZNwxI1aFG3r4'

function endent (strings, ...values) {
  const raw = typeof strings === 'string' ? [strings] : strings.raw

  let result = ''

  for (let i = 0; i < raw.length; i++) {
    result += raw[i]

    if (i < values.length) {
      if (values[i] && values[i][ENDENT_ID]) {
        var rawlines = result.split('\n')
        var l = rawlines[rawlines.length - 1].search(/\S/)
        var endentation = ' '.repeat(l)
        var valueLines = values[i][ENDENT_ID].split('\n')
        valueLines.forEach((l, index) => {
          if (index > 0) {
            result += ('\n' + endentation + l)
          } else {
            result += l
          }
        })
      } else {
        var value = typeof values[i] === 'string' ? `"${values[i]}"` : values[i]

        result += value
      }
    }
  }

  return result
}

endent.pretty = (data) => {
  return objectorarray(data) ? {[ENDENT_ID]: JSON.stringify(data, null, 2)} : data
}
