// return module.exports which is now the function constructor from emitter.js
var Emitter = require('./emitter');

// Create new instance of the Emitter constructor function who'se prototype will now contain an .on() and .emit() method previuously defined in emitter.js
var emtr = new Emitter();

// Call the .on() watch method and pass in the event name as the first parameter which will be a property on the this.events object, then pass in the listener function to the array of that property. The function will run whenever the greet method is emitted (called) as seen below...
emtr.on('greet', function() {
  console.log('someone said Hi!');
});

emtr.on('greet', function() {
  console.log('another persons says Hi!!');
});

// Here we explicitly let the application know that a 'greet' event happened (twice) which will then run the functions passed to the .on() method above and result in your desired behavior.
emtr.emit('greet');
