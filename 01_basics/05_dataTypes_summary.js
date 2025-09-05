// Primitive Data types

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100;
const scorevalue = 10.5;

const isLoggedIn = false;
const outsideTemp = null ;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log (id === anotherId);

const bigNumber = 234353463523423454n;//BigInt

//Reference (Non - Primitive)

//Array, Objects, Functions

const heroes= ["uzair", "Fahad", "Ahmed"];

//Object
let myObj = {
    name : "uzair",
    age : 22 
}

// Function

const myFunction = function(){
    console.log("Hellow World");
}

myFunction();

console.log(typeof scorevalue)