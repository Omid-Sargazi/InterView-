// execute from right to left
const add2 = (x) => x + 2;
const subtrack1 = (x) => x - 1;
const multiplayBy5 = (x) => x * 5;

const result = multiplayBy5(subtrack1(add2(4)));

console.log(result);
//
const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fun) => fns(prev));

const compResult = compose(multiplayBy5, subtrack1, add2)(4);
console.log(compResult);

const add = (a, b) => {
  return a + b;
};
[1, 2, 3, 4].reduceRight((item, add) => {
  console.log(add(item, 0), "item");
});
