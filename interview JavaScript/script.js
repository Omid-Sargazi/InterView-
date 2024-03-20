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
