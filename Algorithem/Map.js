const map = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map);
map.set("C", 3);
map.delete("C");
for (const [key, value] of map) {
  console.log(`${key}, ${value}`);
}
console.log("size of map", map.size);
console.log("is key in map", map.has("a"));
