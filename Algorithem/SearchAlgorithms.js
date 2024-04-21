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
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 7));

console.log("///////////BinarySearchWithoutRecursive/////////");

function BinarySearchWithoutRecursive(array, n) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (n === array[middle]) {
      return `${middle} ${array[middle]}`;
    }

    if (n < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return "not found";
}
console.log(
  BinarySearchWithoutRecursive([10, 20, 30, 40, 100, 500, 600, 700], 700)
);

//////////////////////////Recursive Binary Search////////////////////
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}
function search(array, target, left, right) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (target === array[middle]) {
    return middle;
  }

  if (target < array[middle]) {
    return search(array, target, left, middle - 1);
  } else {
    return search(array, target, middle + 1, right);
  }
}

let array = [1, 2, 4, 6, 8, 9, 10, 14, 15, 16, 160, 170];
console.log(recursiveBinarySearch(array, 160));
