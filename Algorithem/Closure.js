console.log("Closure");
//global scope
let x = 1;

const parentFunction = () => {
  //local scope
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childFunction = () => {
    console.log((x += 2));
    console.log((myValue += 5));
  };

  return childFunction;
};

const result = parentFunction();

console.log(result);

result();
result(); // increment value after executing parent function
console.log(x, "x");
// console.log(myValue, "myValue"); // reference error, private variables

/////////////////////////////////////////////IIFE/////////////////////////////

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
