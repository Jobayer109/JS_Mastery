const x = myFunction(4, 5);

function myFunction(a, b) {
  return a + b;
}

// console.log(x);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(58);
console.log(typeof value.toFixed(2));
