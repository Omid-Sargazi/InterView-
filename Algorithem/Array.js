console.log("object");
const arr = [1, 2, 2, "Omid"];
console.log(arr[0]);
arr.push("front");
console.log(arr[4]);

for (const item of arr) {
  console.log(item);
}

arr.unshift(0); // Add
console.log(arr[0]);

arr.pop(); // remove item from the end of the array
arr.shift(); // remove item from the beginning of the array
