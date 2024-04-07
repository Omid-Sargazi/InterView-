// // let a = 10;
// // function outer() {
// //   let b = 20;
// //   function inner() {
// //     let c = 30;
// //     console.log(a, b, c);
// //   }
// //   inner();
// // }
// // outer();

// // Closures
// function outerClosure() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outerClosure();
// fn();
// fn();

// ////////////////
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(1, 2, 3));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));

// const add1 = curriedSum(1);
// const add2 = add1(2);
// const add3 = add2(3);
// console.log(add3);

// //Implicit binding

// const person = {
//   name: "Omid",
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// person.sayMyName();

// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }
// sayMyName.call(person);

// // ///////////////////This/////////////////////////
globalThis.name = "Omid";

function hello() {
  return globalThis;
}

console.log(hello());
