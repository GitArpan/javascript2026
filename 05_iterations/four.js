const myObject ={
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for ( const key in myObject){
    //console.log(`${key} :- ${myObject[key]}`)
}

const programming = ["js", "py", "rb" , "cpp" , "java"]

for (const prog in programming){
    //console.log(prog)// prints the index of the array
    // console.log(programming[prog])prints the value of the aray
}

const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

for(const key in map ){
    console.log(key);
}
//Map is not iterable with for in loop , we can use for of loop in map but not for in loop
