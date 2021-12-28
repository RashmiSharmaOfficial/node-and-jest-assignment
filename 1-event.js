//  Have 2 listeners and connect it with the same event using .on() and emit the event.

var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('Hi I am listener1');
}

var listener2 = function listener1(){
    console.log('Hi I am listener2');
}

eventEmitter.on('myevent', listener1)
eventEmitter.emit('myevent')
console.log(eventEmitter.listenerCount('myevent'));

eventEmitter.on('myevent', listener2)
eventEmitter.emit('myevent')
console.log(eventEmitter.listenerCount('myevent'));
console.log(eventEmitter.eventNames());
