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
// GreatestNumberDivisors(nums);

function basis2(num) {
  let basis = [];

  while (num >= 1) {
    console.log(num);
    basis.push(num % 2);
    num = ~~(num / 2);
  }
  console.log(basis);
}

basis2(40);
// let a = [];
// a.push(1);
console.log(~~(15 / 2));
