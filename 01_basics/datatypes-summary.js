// Primitive datatpes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 1234567892256n

console.log(id === anotherId);

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: "22",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);