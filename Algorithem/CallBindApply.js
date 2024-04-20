console.log("CallBindApply");

const user = {
  name() {
    return `${this.firstName} ${this.lastName}`;
  },
  hobbies(one, two) {
    return `My hobbies are ${one} ${two}`;
  },
};

const SaaedSargazi = {
  firstName: "Saeed",
  lastName: "Sargazi",
};
const VahidSargazi = {
  firstName: "Vahid",
  lastName: "Sargazi",
};

console.log(user.name.call(SaaedSargazi));
console.log(user.name.call(VahidSargazi));

console.log(user.hobbies.call(VahidSargazi, "football", "climbing"));

//////////////////////////////////////Apply Method//////////////////////////

const UseWithApply = {
  name() {
    return `${this.firstName} ${this.lastName}`;
  },
  hobbies(one, two, three) {
    return `My hobbies are ${one} ${two} ${three}`;
  },
};

const Omid = {
  firstName: "Omid",
  lastName: "Sargazi",
};
const David = {
  firstName: "David",
  lastName: "Sargazi",
};

console.log(UseWithApply.name.apply(Omid), "Apply");
console.log(
  UseWithApply.hobbies.apply(VahidSargazi, ["PS5", "football", "body"])
);
console.log(UseWithApply.name.apply(David), "Apply");
