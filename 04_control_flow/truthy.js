const userEmail = "h@hitesh.ai" // string is assumed as truthy value
// if there were empty string then it would have been falsy value and the else block would have been executed
if (userEmail){
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

// falsy values

//false , 0 , -0  , BigInt 0n , "" , null , undefined , NaN

//truthy values 
// "0" ,"false" , " ",[], {} , function(){} , true , 1 ,-1 , BigInt 1n , Symbol() , Infinity , -Infinity , new Date() , /a/ , new Error() , Promise.resolve() , Promise.reject() , etc


//empty array is truthy value

const emptyArray = []

if (emptyArray.length==0){
    console.log("Array is empty")
}else{
    console.log("Array is not empty")
}

// empty object is also truthy value 

const emptyObject = {}

if (Object.keys(emptyObject).length==0){
    console.log("Object is empty")
}else{
    console.log("Object is not empty")
}


//Nullish Coalescing Operator (??) : null undefined , it checks for null and undefined values only , if there is any other false value it will return that value

let val1 ;
//val1 = 5 ?? 10 // it will return 5 because it is not null or undefined
// it is used when from database we get null or undefined value and we want to assign default value to it
//val1 = null ?? 10 // it will return 10 because it is null
// instead of 10 we use complex function or value that we want to assign if the value is null or undefined
//val1 = undefined ?? 10 // it will return 10 because it is undefined
val1 = null ?? 10 ?? 120
console.log(val1);


// Terniary operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less thab 80") : console.log("more than 80")
