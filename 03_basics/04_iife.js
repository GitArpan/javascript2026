// Immediately Invoked Function Expressions (IIFE)
// database connection
// to prevent global variable pollution

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)

}) (); // immediately invoked function// TO END THE SCOPE ; is used

((name)=>{
    //unamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})("hitesh");


