'use strict';
const testModule = (function() {
  let count = 0;

  return {
    increment : () => {
      return count++;
    },
    reset : () => {
      console.log(`counter value ${count}`);
      count = 0;
    }
  }
})();

testModule.increment();
testModule.increment();
testModule.increment();
testModule.increment();
testModule.increment();
testModule.increment();
testModule.reset();

testModule.increment();
testModule.increment();

testModule.reset();
