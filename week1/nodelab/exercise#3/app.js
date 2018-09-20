function getCurrentDateAndTime() {
  let date = new Date();
  console.log(`Current Date: ${date.toLocaleDateString(date.getDate())} Current Time: ${date.toLocaleTimeString(date.getTime())}`);
}

getCurrentDateAndTime();