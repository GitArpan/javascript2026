//-----logic control or control flow--------------//

// if

const isUserloggedIn = true
const temperature = 41

//if(temperature < 50){
//    console.log("less than 50")

//} else{
//    console.log("temperature is greater than 50")

//}

//console.log("execute")

//2<=2
//3!=2
// 2=="2" that gives true value

//< ,> , <= ,>= , == , != , === , !==

//const score = 200

//if (score > 100){
//    const power ="fly"
//    console.log(`user power: ${power}`)
//}

//console.log(`user power: ${power}`) outputs :the power is undefined it is because its not inside the scope (block scope)

const balance = 1000

//if (balance > 500) console.log("test") , console.log("test2") ; // implicit scope , assume there is a scope
// this is unreadable code , is a bad practice

// nested

//if (balance < 500) {
//console.log("less than 500");
//}else if(balance < 750){
//    console.log("less than 750")
//}else if(balance < 900){
//    console.log("less than 900")
//}else {
//    console.log("less than 1200")
//}

// use in real life online shopping , online course purchase

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in")
}
