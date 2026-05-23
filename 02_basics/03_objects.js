// if literals then no singletons
// if constructors then singletons

// object literals (object declaration method)
//Object.create (Constructor method using singleton ) 
const mySym = Symbol("key1")
const JsUser = {
    name: "Arpan",
    "full name" : "Arpan Esrael",
    [mySym] : "myKey1",
    age: 14,
    location: "pandoniax",
    email:"arpan@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
    
}

//console.log(JsUser);
//console.log(JsUser.email);//this is one method and another method is using bracket notation
//console.log(JsUser[email]); //undefined
//it is because email is not a variable it is a string so we have to use dot notation or we can use bracket notation with string

//console.log(JsUser["email"]);//it is correct because we are using bracket notation with string

console.log(JsUser["full name"]);//it is correct because we are using bracket notation with string

// In MDN JS datatypes in primitive : symbol 
console.log(typeof JsUser[mySym]); // it will print symbol because we have assigned mySym to a symbol
// we needed symbol but got string
//If we want to use symbol as a key in object literal then we have to use computed property name syntax and use square brackets around the symbol key 

JsUser.email = "arpan@chatgpt.com"
//Object.freeze(JsUser) // it will freeze the object and we cannot change any property of the object
JsUser.email = "arpan@openai.com"//doenot make any change to the email because the email is locked
console.log(JsUser); 


JsUser.greeting = function(){
    console.log("Hello, welcome to the world of JavaScript!");
}

//console.log(JsUser.greeting);//function is not executed but function reference is printed


JsUser.greetingTwo = function(){
    console.log(`Hello, welcome to the world of JavaScript! ,${this.name}`);
}
console.log(JsUser.greetingTwo()); //function reference is printed
//In output we can see undefined which is even seen in the browser , that we will discuss in the next section


//note : in most of the cases we use dot operator to access but in interview they say there is no option then we can use the bracket notation to access the properties of the object and we can also use the bracket notation to access the properties of the object when the property name is not a valid identifier or when the property name is a variable.