const myFunction = (a) => {
  a();
};

// myFunction(() => console.log("Hello first class function"));

// How arrays are made behind the scenes

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(Array.isArray(arr));
