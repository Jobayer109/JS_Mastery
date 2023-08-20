// String slice method with 'start' and 'end' position
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
// console.log(part);
//
//
//
//
// // String slice method without 'end' position
let text2 = "Apple, Banana, Kiwi";
let part2 = text.slice(7);
// console.log(part2);
//
//
//

// Replace() method: Replace only the first match
let text3 = "Please visit Microsoft and Microsoft!";
let newText3 = text3.replace("Microsoft", "W3Schools");
// console.log(newText3);
//
// Replace() method: Replace all matches by using Regular expression
let text4 = "Please visit Microsoft and Microsoft!";
let newText4 = text4.replace(/Microsoft/g, "W3Schools");
// console.log(newText4);
//
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text5 = "Please visit Microsoft!";
let newText5 = text5.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText5);
//
//
//
//
const p = "The quick brown fox jumps over the lazy Dog. If the dog reacted, was it really lazy?";
console.log(p.replaceAll("dog", "monkey")); // Throw error
console.log(p.replaceAll(/dog/gi, "monkey")); // Regex should be write and avoid case sensitive issue.
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(p.replaceAll(regex, "ferret"));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
//
//
//
//
// String split() method
const splitted = "Hello world";
console.log(splitted.split("")); // [  'H', 'e', 'l', 'l',  'o', ' ', 'w', 'o',  'r', 'l', 'd']
console.log(splitted.split(" ")); // [ 'Hello', 'world' ]
console.log(splitted.split(",")); // [ 'Hello world' ]
console.log(splitted.split("|")); // [ 'Hello world' ]
