console.log("base tow");

function baseTwo(n) {
  let p = 1;
  let s = 0;
  while (n > 0) {
    s = s + (n % 2) * p;
    console.log(n);
    p = p * 10;
    n = Math.floor(n / 2);
  }
  console.log(s);
}

baseTwo(8);
