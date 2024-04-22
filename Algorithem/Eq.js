console.log("Eq");
console.log(Math.pow(3, 2));

function Equivalent() {
  let x1 = -1;
  let x2 = 1;
  let mid = 0;
  while (x2 - x1 < 0.00000001) {
    mid = (x2 - x1) / 2;
    if ((Math.pow(mid, 3) - 3 * mid + 1) * (Math.pow(x1, 3) - 3 * x1 + 1) > 0) {
      x1 = mid;
    }
    if ((Math.pow(mid, 3) - 3 * mid + 1) * (Math.pow(x2, 3) - 3 * x2 + 1) > 0) {
      x2 = mid;
    }
  }
  console.log(x1);
}
Equivalent();
