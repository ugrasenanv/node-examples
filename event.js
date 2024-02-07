// Module 2 Built in Modules
// Event Module 

// Import events module
const EventEmitter = require('events');

// Create an eventEmitter object
const myEmitter = new EventEmitter();
let username = 'Ugrasenan V';

// Create an event listener
myEmitter.on('event1', function (username) {
    console.log('username is ' + username)
});
 
// Emit an event
myEmitter.emit('event1', username);

//Add another Event Emitter
myEmitter.on('event2', () => {
    console.log('Another event occurred!');
  });
  myEmitter.emit('event2');


let m = 0;
myEmitter.on('event3', () => {
    console.log(++m);
});
myEmitter.emit('event3');
myEmitter.emit('event3');
myEmitter.emit('event3');
 