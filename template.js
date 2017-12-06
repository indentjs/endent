module.exports = store

function store (state, emitter) {
  emitter.on('DOMContentLoaded', function () {
    state['a'] = {
      "a": {
        "d": {
          "dd": 123
        }
      }
    }

    state.on('a', data => {
      state['a'] = data
      emitter.emit('render')
    })
  })
}