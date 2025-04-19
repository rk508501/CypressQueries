function sayHelloWtihDelay(delayInMilliSeconds) {
  setTimeout(() => {
    console.log('Hello after ' + delayInMilliSeconds  + ' ms');
  }, delayInMilliSeconds);
}

sayHelloWtihDelay(2000)

// Set