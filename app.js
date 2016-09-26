// return module.exports which is now the function constructor from emitter.js
var Emitter = require('./emitter');

// Another alternative here would be to delete the local emitter.js file and simply require Node's internal core JS module (events.js).

var NodeInternalEventEmitter = require('events');

// Create new instance of the Emitter constructor function who'se prototype will now contain an .on() and .emit() method previuously defined in emitter.js
var emtr = new Emitter();

// Call the .on() watch method and pass in the event name as the first parameter which will be a property on the this.events object, then pass in the listener function to the array of that property. The function will run whenever the greet method is emitted (called) as seen below...
emtr.on('greet', function() {
  console.log('someone said Hi!');
});

emtr.on('greet', function() {
  console.log('another persons says Hi!!');
});

// Here we must explicitly say that a 'greet' event happened which will then run the functions passed to the .on() method above and result in all your desired behavior.
emtr.emit('greet');
