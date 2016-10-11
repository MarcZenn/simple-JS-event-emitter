
// The purpose of this object is to avoid the 'Magic String' problem with the event emitter by using object keys as opposed to just stand alone strings as events
module.exports = {
  events: {
    GREET: 'greet',
    FILESAVED: 'filesaved',
    FILEOPENED: 'fileopened'
  }
}
