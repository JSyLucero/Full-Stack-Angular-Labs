var handleCounter = (result) => {
  console.log(`The callback count is ${result}`);
};

function callbackLoop(counter, handleCounter) {
  for (let i = 1; i <= counter; i++) {
    handleCounter(i);
  }

  console.log("*** exiting callbackLoop *****");
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);