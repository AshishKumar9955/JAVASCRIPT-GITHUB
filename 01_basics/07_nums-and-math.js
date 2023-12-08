const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otheNumber = 23.8966
// console.log(otheNumber.toPrecision(3));  O/P = 23.9

const otheNumberTwo = 123.8966
// console.log(otheNumberTwo.toPrecision(3));  O/P = 124

const otheNumberThree = 1123.9866
// console.log(otheNumberThree.toPrecision(3));  O/P = 1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ***********************************  MATH  ******************************************


// console.log(Math);  O/P = object [Math] {}
// console.log(Math.abs(-4));  O/P = 4
// console.log(Math.round(4.6)); O/P = 5
// console.log(Math.ceil(4.2));   O/P = 5
// console.log(Math.floor(4.9));    O/P = 4/
// console.log(Math.min(4,3,6,8,1));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
