const obj = {
  name: "Omid",
  age: 42,
  "key-tree": true,
  sayMyName: function () {
    console.log(this.name);
  },
};
console.log(obj.name);
console.log(obj.age);
console.log(obj["age"]);
console.log(obj["key-tree"]);

obj.hobby = "hiking";

console.log(obj);

// we can delete key and value pair in the object with delete keywords

delete obj.hobby;
console.log(obj);
obj.sayMyName();

// Objects.keys()  Objects.values() Objects.entries() become iterable
