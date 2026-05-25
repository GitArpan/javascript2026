//console.log("H");
//console.log("I");
//console.log("T");
//console.log("E");
//console.log("S");
//console.log("H");

function sayMyName() {
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName();
//sayMyName = this is only reference(yo tyaha basacha)
//sayMyName() = this is the function call (yo function lai call garne , execution garne)

//function addTwoNumbers(num1 , num2) {
//    console.log(num1 + num2);
//}
function addTwoNumbers(num1 , num2) {
    
    //let result = num1 + num2;
    //console.log("Hitesh");
    //return result;
    //console.log("This will not be printed"); //return pachi ko code execute hudaina
    return num1 + num2;

}


const result = addTwoNumbers(3,4);
//console.log("Result is: ", result); //undefined

//function le kunai value return nagareko le result undefined aayo
//function le kunai value return garna parcha jasle garda result ma value aauxa



function loginUserMessage(username = "sam"){
    //or you can write !username
    if (username === undefined){
        console.log("Please enter a username")
        return

    }


    return `${username} just logged in`;
}

//console.log(loginUserMessage("Hitesh"));
//console.log(loginUserMessage());//undefined

function calculateCartPrice(val1 , val2 , ...num1){
    
    return num1

}
//console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "hitesh" ,
    prices :"199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    
}

//handleObject(user)

handleObject(
    {
        username : "sam",
        price : 399
    }
)



//In type script typechecking is strict and automatic i suppose



//passing arrays through functions

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){ // takes parameter , you can give any name

    return getArray[1] // which value you would like to return of the array

}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 ,100]));



