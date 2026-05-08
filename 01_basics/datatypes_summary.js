// Primitive

// 7 types : String  , number , Boolean , null , undefined , symbol , Bigint




//Is javascrit dynamically typed or Statically typed?

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)

const bigNumber =1234567890987654321n
console.log(typeof bigNumber)



//Reference type (Non-primitive)
// - Array , Objects , Functions

const heros = ["Spiderman" , "captain", "Ironman"]
let myObj = {
    name: "Aron",
    age: 23,


}

const myFunction = function(){
    console.log("Hello World"); //datatype is object function
}

myFunction();



//******************************* */

// Stack Memory (Primitive). , Heap Memory (Non-Primitive)

let myYoutubename = "arpanbkdotcom"
let anothername = myYoutubename
anothername = "MACDLN"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email :"user@google.com",
    upi: "user@ybl"


}

let userTwo = userOne

userTwo.email="arp@google.com"
console.log(userOne.email)
console.log(userTwo.email)