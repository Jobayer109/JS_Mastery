// function abcd() {
//   var a = 12;
//   function def() {
//     var b = 13;
//   }
//   console.log(a);
// }
// abcd();

// x = 5;
// var x;
// console.log(x);

// const x = 10;
// x = 5;
// console.log(x);

// // Example-1
// var a = [1, 2, 3, 4, 5];
// var b = [...a];
// b.pop();
// console.log(a); // 1,2,3,4,5
// console.log(b); // 1,2,3,4

// // Example-2
// var obj = { name: "Jobayer" };
// var copyObj = { ...obj };
// copyObj.name = "Ahmed";
// console.log(obj); // Jobayer
// console.log(copyObj); // Ahmed

// var a = [1, 2, 3, 4, 5];
// var b = a;
// console.log(b);
// false
// 0, -0 and 0n
// "", '' (empty strings)
// null, undefined and NaN
// document.all

// ForEach practice

// const a = [1, 2, 3, 4, 5];
// a.forEach((val) => {
//   console.log(val + 2);
// });

// console.log(a);

// const obj = {
//   name: "Taima",
//   age: 1,
//   city: "Gaibandha",
// };

// for (let key in obj) {
//   console.log(key); // name, age, city
//   console.log(obj[key]); // Taima, 1, Gaibandha
//   console.log(key, obj[key]);
// }

const arr = [1, 2, 3, 4, 5];
const result = Array.isArray(arr);
// console.log(result);
