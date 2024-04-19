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

console.log(linearSearch([120, 1, 2, 3, 0, 120], 120));
