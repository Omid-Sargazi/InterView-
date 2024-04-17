console.log("Greatestـnumberـdivisors");
let nums = [12, 10, 1, 3, 5, 1600];
function GreatestNumberDivisors(array) {
  let p = 0;
  let max = 0;
  for (let num of array) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count += 1;
      }
    }
    if (max < count) {
      max = count;
      p = num;
    }
  }
  console.log(p, max);
}
GreatestNumberDivisors(nums);
