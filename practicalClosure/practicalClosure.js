const createSecret = (secret) => {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => {
      secret = newSecret;
    },
  };
};

const mySecret = createSecret("My secret");
console.log(mySecret.getSecret());

mySecret.setSecret("My new Secret");
console.log(mySecret.getSecret());

// Data Privacy
const createCounter = () => {
  let count = 0;
  return {
    inc: () => count++,
    dec: () => count--,
    getCount: () => count,
    resetCount: () => (count = 0),
  };
};

const coun = createCounter();
console.log(coun.inc());
// console.log(coun.inc());
// console.log(coun.inc());
// console.log(coun.inc());
// console.log(coun.inc());
// console.log(coun.dec());
// console.log(coun.dec());
console.log(coun.resetCount());
console.log(coun.getCount());
/////////////////////////////
const add = (a) => (b) => a + b;

const inc = add(1);
console.log(inc(2));
