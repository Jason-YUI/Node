var eventEmitter = require('events').EventEmitter;
var event = new eventEmitter();

event.on('some_event', function() {
  console.log('some_event 事故');
});

setTimeout(function() {
 event.emit('some_event');
}, 1000) 
