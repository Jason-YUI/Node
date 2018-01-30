var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function(arg1, arg2) {
  console.log('1', arg1, arg2)
});

eventEmitter.on('some_event', function(arg1, arg2) {
  console.log('2', arg1, arg2)
}); 

eventEmitter.emit('some_event', 'hello', 'world');
