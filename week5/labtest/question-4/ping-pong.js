var moment = require('moment');
var events = require('events');
var emitter = new events.EventEmitter();
var count = 0;
var max = 15

var ping = () => {
  console.log(`Ping!-- Count: ${count} -- Time: ${moment().format("hh:mm:ss a")}`);
}

var pong = () => {
  console.log(`Pong!-- Count: ${count} -- Time: ${moment().format("hh:mm:ss a")}`);
}

var gameover = () => {
  console.log("Game Over!");
}

emitter.on('Ping', ping);
emitter.on('Pong', pong);
emitter.on('Game Over', gameover)

for (var i = 0; i <= max+1; i++) {
  if (i < max+1) {
    if (i % 2 == 0)
      setTimeout(() => {
        emitter.emit("Ping");
        count++;
      }, 1000);
    else
      setTimeout(() => {
        emitter.emit("Pong");
        count++;
      }, 1000);
  } else {
    setTimeout(() => {
      emitter.emit("Game Over");
    }, 1000);
  }
}