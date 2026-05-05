let score = "33abc" // check with  null // check with undefined //check with boolean
//console.log(typeof score);
//console.log(typeof(score)); 

let valueInNumber = Number(score)

//console.log(valueInNumber) // o/p:NaN(Not a Number)
//console.log(typeof valueInNumber );

// "33"=> 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//1 => true; 0=>false
//"" => false
//"hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)

//console.log(someNumber)
//console.log(typeof someNumber)

//****************** operations **************

let value = 100
let negValue = -value
//console.log(negValue);

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**2)//that is 2^2
//console.log(2%2)//gives remainder

//let see some confusing things
let str1 = "hello"
let str2 = "Arpan"

let str3 = str1 + str2 //concatenation
console.log(str3)

//problem

console.log("1" + 2)
console.log(1 + "2") 
console.log("1" + 2 + 2)
console.log(1 + 2 + "99") 

console.log(2+3*5%3) // bad practice , write clean code using parenthesis

let gameCounter = 100
//two types of operators

gameCounter++;
++gameCounter;
console.log(gameCounter)

