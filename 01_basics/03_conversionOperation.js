let score = "33abc" // check with  null // check with undefined //check with boolean
console.log(typeof score);
console.log(typeof(score)); 

let valueInNumber = Number(score)

console.log(valueInNumber) // o/p:NaN(Not a Number)
console.log(typeof valueInNumber );

// "33"=> 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true; 0=>false
//"" => false
//"hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(someNumber)
console.log(typeof someNumber)