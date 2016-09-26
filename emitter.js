// Similar to NodeJS events here we fake events via JS function constructors and editing object properties. It's not a real event, its just a trick. A clean way to map events to behaviors without repetitive conditional statements.
function Emitter() {
    this.events = {}
};

// On event occurring, add the event name as a property to the events object with an array as the value. You can then push listener functions into that array. Similar to a watch function.
Emitter.prototype.on = function(eventName, behavior) {
  this.events[eventName] = this.events[eventName] || [];
  this.events[eventName].push(behavior);
};

// Dictates what to do with each event, the expected behavior. So it gets defined above in .on() and then you initiate the event and its desired behavior with the .emit() method.
Emitter.prototype.emit = function(eventName) {
  // If I have that property aka that event property in the object then choose a desired behavior for that event. Basically take that event which maps to an array {type : []}, loop over it and execute the functions within.
  if (this.events[eventName]) {
    this.events[eventName].forEach(function(behavior) {
      behavior();
    });
  }
};

// Make the function constructor available so you can create as many emitters as necessary.
module.exports = Emitter;
