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

// baseTwo(8);

////////////////////////////////////////Base Two to Ten/////////////////////

function TwoTenBase(n) {
  let p = 1;
  let s = 0;
  while (n > 0) {
    s = s + (n % 10) * p;
    console.log(s);
    p = p * 2;
    n = ~~(n / 10);
  }
  console.log(s, "TwoTenBase");
}

TwoTenBase(11111111110);

/////////////////////////////TwoEight/////////////////////
////////////1111111==>
console.log("TwoToEightBase");
console.log(~~(111110111 / 1000));

function TwoToEightBase(n) {
  let p = 1;
  let s = 0;
  let r = 0;
  let q = 0;
  while (n > 0) {
    r = n % 1000;
    q = (~~(r / 10) % 10) * 4 + (~~(r / 10) % 10) * 2 + (r % 10);
    s = s + q * p;
    p = p * 10;
    n = ~~(n / 1000);
  }
  console.log(s);
}

TwoToEightBase(111001001111);
