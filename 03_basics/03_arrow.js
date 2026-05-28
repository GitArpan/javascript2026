const user = {
    username : "hitesh",
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)

    }

}

//user.welcomeMessage()
//user.username = "sam" //context is changed , contex means value
//user.welcomeMessage()
//console.log(this)//we are in node environment // empty object // there is no object in global scope

// when we console log this in browser ,we can see window , there was only one way to run js in browser , there was only one engiene found in browser
//the engiene was broken down , some named them node , some named them ,deno , some named them bun
//the engiene is standalone
//Inside the browser when the engiene is runned , the global object is window


//function chai(){
//    let username = "hitesh"
//    console.log(this.username);// in objects we can use this but inside function we are not able to use this inside function.
//}
//chai()

//let us see how we can declare functions using arrow functions

//const chai = function(){
//    let username = "hitesh"
//    console.log(this.username);
//}

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
//chai()

//const addTwo = (num1 , num2) =>{
//    return num1 + num2 
//}
//Implicit return
//const addTwo = (num1 , num2) => num1 + num2 
//const addTwo = (num1 , num2) => (num1 + num2) // this technique is widely used in react . if you use curly braces then your code will not run 
const addTwo = (num1 , num2) => ({username : "hitesh"})

console.log(addTwo(3,4))

// Arrow functions are usefull in loops
 
//const myArray = [2,5,3,7,8]

//myArray.forEach(()=>{})
