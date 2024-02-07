// Module 2 Built in Modules
// Event Module Exercise

// Import events module
const EventEmitter = require('events');

// Create an eventEmitter object
const myEmitter = new EventEmitter();
let username = 'Ugrasenan V';
let password = '000000';

// Create an event listener
myEmitter.on('showusername', function (username) {
    console.log('username is ' + username);
});
 
// Emit an event
myEmitter.emit('showusername', username);

// Create a second event listener
myEmitter.on('showpassword', function (password) {
    console.log('password is ' + password);
});
 
// Emit an event
myEmitter.emit('showpassword',password);