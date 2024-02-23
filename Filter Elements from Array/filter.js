// 2634 leetcode
console.log("2634");

function filter(arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i], i);
    if (result) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) {
  return n > 10;
};

console.log(filter(arr1, fn1));
