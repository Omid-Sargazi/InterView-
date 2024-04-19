console.log("FactorialRecursion");

function FactorialRecursion(n) {
  if (n === 0) return 1;

  return FactorialRecursion(n - 1) * n;
}
console.log(FactorialRecursion(5));
