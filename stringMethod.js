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
console.log(newText3);
//
// Replace() method: Replace all matches by using Regular expression
let text4 = "Please visit Microsoft and Microsoft!";
let newText4 = text4.replace(/Microsoft/g, "W3Schools");
console.log(newText4);
//
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text5 = "Please visit Microsoft!";
let newText5 = text5.replace(/MICROSOFT/i, "W3Schools");
console.log(newText5);
