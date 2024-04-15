function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(14));
console.log(isPowerOfTwo(140));
console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(8));

// Big-O is log(n)

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log("Power of two ==========================");
console.log(isPowerOfTwoBitWise(14));
console.log(isPowerOfTwoBitWise(140));
console.log(isPowerOfTwoBitWise(1024));
console.log(isPowerOfTwoBitWise(8));
