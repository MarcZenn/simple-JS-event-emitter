// NodeJS fakes event emitters by using JS function constructors and editing object properties. It's not a real event, its just a trick. A clean way to map events to behaviors without repetitive conditional statements.
function Emitter() {
    this.events = {}
};

// On event occurring, add the event name as a property to the events object with an array as the value. You can then push listener functions into that array. Similar to a watch function.
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

// Dictates what to do with each event, the expected behavior. So it happens above in .on() and then you dictate what to do next in the .emit().
Emitter.prototype.emit = function(type) {
  // If I have that property aka that event in the object then choose a desired behavior for that event. Basically take that event which maps to an array {type : []}, loop over it and execute the functions within.
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
};

module.exports =
