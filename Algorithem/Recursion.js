console.log("Recursion");
// Recursive Fibonacci Sequence
//0,1,1,2,3,5,8,13,21,....

function fiboRecu(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  while (n >= 0) {
    return fiboRecu(n - 1) + fiboRecu(n - 2);
    n--;
  }
}
console.log(fiboRecu(6));

//
function recursiveFibo(n) {
  if (n < 2) return n;
  return recursiveFibo(n - 1) + recursiveFibo(n - 2);
}

console.log(recursiveFibo(6));
