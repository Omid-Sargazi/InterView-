const createHelloWOrld = function () {
  return function (...args) {
    return "Hello World ";
  };
};
const a = createHelloWOrld();
console.log(a());
// we have Function hosting in javascript
// we don't have hosting in arrow function
console.log(add(4, 3));

function add(a, b) {
  return a + b;
}
// closure

function createCounter() {
  let value = 0;
  function incr() {
    return ++value;
  }
  function dec() {
    return --value;
  }
  return {
    incr: incr,
    dec: dec,
  };
}

const counter1 = createCounter();
const counter2 = createCounter();
const counter3 = createCounter();
console.log(counter1.dec(), "counter1");
console.log(counter2.incr(), "counter2");
console.log(counter2.incr(), "counter2");
console.log(counter2.incr(), "counter2");
console.log(counter3.incr(), "counter3");

// spread operators
let aa = [1, 2, 3];
let bb = ["a", "b"];
console.log([...aa, ...bb]);
