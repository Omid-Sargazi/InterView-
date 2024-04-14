console.log("Factorial");
function factorial(n) {
  if (n < 0) {
    return null;
  }
  if (n == 0 || n == 1) {
    return 1;
  }
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
}
console.log(factorial(-1));
console.log(factorial(1));
console.log(factorial(50));
