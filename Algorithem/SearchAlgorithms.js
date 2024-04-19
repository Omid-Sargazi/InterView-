// Search Algorithms
// Linear Search

function linearSearch(array, n = 0) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == n) {
      return `${i}, ${array[i]}`;
    }
  }
  return "not found";
}

// console.log(linearSearch([120, 1, 2, 3, 0, 120], 120));

/////////////////////////////Binary Search///////////////////////

function BinarySearch(array, t = 0) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === array[middleIndex]) {
      return middleIndex;
    }
    if (t < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return "not found";
}
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 70));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length;
// // arr = arr.slice(0, 4);
// console.log(arr[~~(n / 2)], "end");

// Big-O(log(n))
