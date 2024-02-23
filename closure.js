let x = 1;
// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure is created when we define a function, not when a function is executed.
const parentFunction = () => {
  let myValue = 2;
  console.log(x);
  console.log(myValue);
  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };
  return childFunction;
};
// };
// const result = parentFunction();
// console.log(result, "result");
// result();
// result();
// result();
// console.log(x, "x");
// console.log(myValue, "my value"); //reference error
// parentFunction();
// parentFunction();
// ************************************
// IIFE(Immediately Invoke Function Expression)

const privateCounter = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();
privateCounter();
privateCounter();
privateCounter();
privateCounter();
