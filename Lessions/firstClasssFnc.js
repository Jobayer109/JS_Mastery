const myFunction = (a) => {
  a();
};

// myFunction(() => console.log("Hello first class function"));

// How arrays are made behind the scenes

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(Array.isArray(arr));
// console.log(typeof arr);
console.log(arr);
// arr[0] = 2;
// arr[7] = 2;
arr[-1] = 2;
console.log(arr);
