console.log("Recursion");
// Recursive Fibonacci Sequence
//0,1,1,2,3,5,8,13,21,....

function fiboRecu(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  while (n >= 1) {
    return fiboRecu(n - 1) + fiboRecu(n - 2);
    n--;
  }
}
console.log(fiboRecu(8));
