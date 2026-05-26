//var c = 300
let a = 300
if (true){
    let a = 10 
const b = 20
 c = 30
// console.log("INNER: ", a)
}





//console.log(a)
//console.log(b)
//console.log(c)

// Inside if that is block scpoe
// outside of if that is global scope
// The variable in global scope must be available inside the {}
// The value written inside the scope should not be available outside{}

// there is difference when you check scope in browser and in the code environment , using node , it is a interview question , we will see this next time



function one(){

    const username = "hitesh"

    function two (){

        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    //two()


}

//one()

if (true) {
    const username ="hitesh"
    if(username === "hitesh"){
        const website = "youtube"
       // console.log("CONCATING",website + username)
    }
    //console.log(website)
}

//console.log(username)



// +++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1

}


// another method to declare function
addTwo(5)// the function is not gonna execute because its is inside variable
const addTwo = function(num){
    return num + 2

}
