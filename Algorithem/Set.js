const set = new Set([1, 2, 3]);
console.log(set);
set.add(4); // we can add a item with add keyword in set
set.add(4); // we cannot two same items in sets

for (const s of set) {
  console.log(s);
}

console.log(set.has(7)); // has keyword check whatever is in set or not

set.delete(4);
set.delete(7);
set.delete(7); // keyword delete, can be deleting a item
console.log(set);

console.log(set.size);
console.log(set.clear());

console.log(set);
