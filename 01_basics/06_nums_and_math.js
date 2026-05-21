const score = 400

const balance = new Number(100)
console.log(balance)// [Number: 100] -> it is a Number object, not a primitive
console.log(score) // it is automatically converted to number

console.log( balance.toString().length) //if type of is checked it will show string because toString() returns a string representation of the number

console.log(balance.toFixed(2)) // 100.00 -> it formats the number to 2 decimal places and returns a string

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)) // 124 -> it rounds the number to 3 significant digits and returns a string
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 -> it formats the number with commas as thousands separators and returns a string


//++++++++++++++++Math++++++++++++++

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(-3)) // 3 -> it returns the absolute value of a number
console.log(Math.round(3.9)) // 4 -> it rounds a number to the nearest integer
console.log(Math.floor(3.9)) // 3 -> it rounds a number down to the nearest integer
console.log(Math.ceil(3.1)) // 4 -> it rounds a number up to the nearest integer
console.log(Math.min(3,5,7,1)) // 1 -> it returns the smallest of zero or more numbers
console.log(Math.max(3,5,7,1)) // 7 -> it returns the largest of zero or more numbers
console.log(Math.random()) // it returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()*10) // it returns a random number between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random()*10)) // it returns a random integer between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random()*10)+1) // it returns a random integer between 1 (inclusive) and 10 (inclusive)
console.log(Math.sqrt(16)) // 4 -> it returns the square root of a number
console.log(Math.pow(2,3)) // 8 -> it returns the base to the exponent power, that is, base^exponent
console.log(2**3) // 8 -> it is the exponentiation operator, it returns the base to the exponent power, that is, base^exponent
console.log(Math.sign(-5)) // -1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(0)) // 0 -> it returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(5)) // 1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(-0)) // -0 -> it returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(NaN)) // NaN -> it returns the sign of a number, indicating whether the number is positive, negative or zero  
console.log(Math.sign(Infinity)) // 1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero   
console.log(Math.sign(-Infinity)) // -1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero 
console.log(Math.sign(0.0000001)) // 1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero
console.log(Math.sign(-0.0000001)) // -1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero    
console.log(Math.sign(-0.0000001)) // -1 -> it returns the sign of a number, indicating whether the number is positive, negative or zero    

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) // it returns a random integer between min (inclusive) and max (inclusive)