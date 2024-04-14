function primeNumber(n) {
  c = 0;
  if (n < 0) {
    return null;
  }
  if (n >= 0) {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        c += 1;
      }
    }
  }
  if (c == 2) {
    console.log(`${n} is a prime.`);
  } else {
    console.log(`${n} is not a prime.`);
  }
}
primeNumber(20);
primeNumber(191);
