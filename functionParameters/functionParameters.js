let f = function (a, b) {
  if (arguments.length === f.length) {
    console.log("we have a match");
  } else {
    console.log("no match");
  }
};

f(1);
f(2, 3);
f(1, 2, 3);
f(1, 2, 3, 4);
f(1, 2);
