function Emitter() {

  this.listeners = {}

  this.on = function (message, callback) {
    this.listeners[message] = this.listeners[message] || []
    this.listeners[message].push(callback)
  }

  this.off = function (message, callback) {
    if (!this.listeners[message]) { return }
    let i = this.listeners[message].indexOf(callback)
    this.listeners[message].splice(i, 1)
  }

  this.CHANGE = function (message, payload) {
    this.emit(message, payload)
  }

  this.emit = function (message, payload) {
    for (var f in this.listeners[message]) {
      if (typeof this.listeners[message][f] == 'function') {
        this.listeners[message][f](payload)
      }
    }
  }
}