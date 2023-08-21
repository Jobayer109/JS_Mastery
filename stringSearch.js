// Simply string match. This is a bad practice
let text1 = "The rain in SPAIN stays mainly in the plain";
// console.log(text1.match("ain")); // [ 'ain']
//
//
//
//
// String match with regEx g flag to match all things
let text2 = "The rain in SPAIN stays mainly in the plain";
// console.log(text2.match(/ain/g)); // [ 'ain', 'ain', 'ain' ]
//
//
//
//
// String match with regEx gi flag to match all things and avoid case sensitivity.
let text3 = "The rain in SPAIN stays mainly in the plain";
// console.log(text3.match(/ain/gi)); // [ 'ain', 'AIN', 'ain', 'ain' ]
//
//
//
let txt1 = "Please locate where 'locate' occurs!";
// console.log(txt1.search("locate"));

let txt2 = "Please locate where 'locate' occurs!";
// console.log(txt2.search(/locate/));
//
//
//
const text4 = "I love cats. Cats are very easy to love. Cats are very popular.";
// console.log(text4.matchAll("Cats"));
//
//
// String includes() method
let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world")); // true
// console.log(text.includes("World")); // false
//
//
//
// String startWith() method
let startText = "Hello world, welcome to the universe.";
// console.log(startText.startsWith("Hello")); // true
// console.log(startText.startsWith("world")); // false
//
//
//
// String endsWith() method
let endText = "Jobayet Ahmed";
// console.log(endText.endsWith("Ahmed")); // true
// console.log(endText.endsWith("ahmed")); // false
// console.log(endText.endsWith("Jobayer")); // false
