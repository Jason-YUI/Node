var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
  console.log('监听listener1');
}

var listener2 = function listener2() {
  console.log('监听listener2');
}

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventEmitters = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

eventEmitter.emit('connection');

console.log(eventEmitters + '个监听器数量');

eventEmitter.removeListener('connection', listener1);

console.log('listener1不再监听');

eventEmitters = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventEmitters + '个监听器数量');

console.log('程序执行完毕');

