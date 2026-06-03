// for of (array specific loops)

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
//console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting){
    if(greet === " "){
        continue;
    }
    //console.log(`each character : ${greet}`)
}


// Maps

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// map.set("IN") => "India" // it will not take , it take unique values
//console.log(map)//map is usefull in data structure


for (const [key,value] of map){
    //console.log(key,':-' , value)
}

const myObject = {
    game1 : "GTA",
    game2 : "eFootball"

}

// for (const [key,value] of myObject){
//     console.log(key, ':-', value)
// }
//myObject is not iterable , we can not use for of loop in object but we can use for in loop in object


