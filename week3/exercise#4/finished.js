var max = 50;
var handleCounter = (err, counter, waitTime, timestamp) => {
  if (!(waitTime > max)) {
    setTimeout(() => {
      console.log(`Callback counter: ${counter} Time: ${waitTime} ms Timestamp: ${timestamp.toLocaleDateString(timestamp.getDate())} ${timestamp.toLocaleTimeString(timestamp.getTime())}`);
    }, waitTime);
  } else {
    console.log(err.message);
  }
};

var callbackWait = (counter, callback) => {
  let err = new Error("ERROR: WaitTime cannot be greater than Max Time");
  let date = new Date();
  callback(err, counter, (Math.floor(Math.random() * 100)), date);
};

for (let i = 0; i < 10; i++) {
  callbackWait(i, handleCounter);
}