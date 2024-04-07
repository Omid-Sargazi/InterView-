// const createHelloWOrld = function () {
//   return function (...args) {
//     return "Hello World ";
//   };
// };
// const a = createHelloWOrld();
// console.log(a());
// // we have Function hosting in javascript
// // we don't have hosting in arrow function
// console.log(add(4, 3));

// function add(a, b) {
//   return a + b;
// }
// // closure

// function createCounter() {
//   let value = 0;
//   function incr() {
//     return ++value;
//   }
//   function dec() {
//     return --value;
//   }
//   return {
//     incr: incr,
//     dec: dec,
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();
// const counter3 = createCounter();
// console.log(counter1.dec(), "counter1");
// console.log(counter2.incr(), "counter2");
// console.log(counter2.incr(), "counter2");
// console.log(counter2.incr(), "counter2");
// console.log(counter3.incr(), "counter3");

// // spread operators
// let aa = [1, 2, 3];
// let bb = ["a", "b"];
// console.log([...aa, ...bb]);
var obj = {
  name: "Seid",
  Hi: hello,
};

var name = "John";

function hello() {
  console.log(this.name);
}

obj.Hi();
var helloJohn = obj.Hi;

helloJohn();
///////////////this in arrow functions/////////////////
console.log("object");
const Person = {
  name: "Emily",
  print: () => {
    console.log(this.name);
  },
};

Person.print();

var obj3 = {
  name: "Mika",
};
function w2() {
  console.log(this.name, "w2");
}

// w2.apply(obj3);
w2.call(obj3);

// w2();
