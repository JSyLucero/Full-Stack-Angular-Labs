var events = require('events');
var eventEmitter = new events.EventEmitter();

/*var fn = function () {
  console.log('call me.');
}

eventEmitter.on('call', fn);
eventEmitter.emit('call');*/

var alarm = function() {
  console.log('Alarm has been triggered!');
}
var callPolice = function() {
  console.log('Call 911!');
}

eventEmitter
  .on('alarm', alarm)
  .on('callPolice', callPolice);
eventEmitter.emit('alarm');
eventEmitter.emit('callPolice');
