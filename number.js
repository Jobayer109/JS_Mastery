const x = 999999999999999;
// console.log(x);
const y = 1000000000000000;
// console.log(y); // accurate until 17 digits

const float = 0.2 + 0.1;
// console.log(float);
const result0 = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(result0);

//
//

const str1 = "10";
const str2 = "10";
const result1 = str1 + str2; // 1010
const result2 = str1 - str2; // 0
const result3 = str1 * str2; // 100
const result4 = str1 / str2; // 1

//
// console.log(-2 / 0);
//

let isNaNTest1 = 100 / "Apple";
// console.log(isNaN(isNaNTest1)); // true

let isNaNTest2 = 100 / "10";
// console.log(isNaN(isNaNTest2)); // false
//
//
let a = NaN;
let b = 5;
let z = a + b;
// console.log(z); // NaN

let p = NaN;
let q = "5";
let r = p + q;
console.log(r); // NaN5
console.log(typeof p);
