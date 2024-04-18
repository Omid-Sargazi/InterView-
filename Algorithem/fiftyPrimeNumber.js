console.log("fiftyPrimeNumber");

function Prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return 1;
}

console.log(Prime(5), "Prime");

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
fiftyPrimeNumber();
