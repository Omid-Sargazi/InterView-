console.log("GreatestCommonDivisor");
// console.log(~~(123 / 10));
// console.log(123 % 10);

function AddnumbersofNum(num) {
  let s = 0;
  while (num >= 1) {
    s = s + (num % 10);
    num = ~~(num / 10);
  }
  console.log(s);
}
AddnumbersofNum(123335);
