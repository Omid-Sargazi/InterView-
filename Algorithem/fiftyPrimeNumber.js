console.log("fiftyPrimeNumber");

function Prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return 1;
}

// console.log(Prime(5), "Prime");

function fiftyPrimeNumber() {
  let count = 0;
  let i = 5;
  while (count <= 100) {
    if (Prime(i)) {
      count++;
      console.log(count, "count", i, "i");
    }
    i++;
  }
  console.log(i + 3);
}
// fiftyPrimeNumber();

//////////////////////////////////////////////////////////Fibonacci less than 1000///////////////////////////
// 1,1,2,3,5,8,13,21,....
function fiboLess1000() {
  let a = 1;
  let b = 1;
  let c = 0;
  while (a + b < 1000) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}
// fiboLess1000();

function Fibonacci() {
  let a = 3;
  let b = 1;
  let count = 0;
  let c = 0;
  while (count <= 5) {
    c = a + b;
    a = b;
    b = c;
    if (Prime(c)) {
      count++;
    }
  }
  console.log(c);
}

Fibonacci();
