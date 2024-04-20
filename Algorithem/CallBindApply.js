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
