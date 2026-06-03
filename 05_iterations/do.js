//while (condition){

//}

let index = 0
while( index <= 10){
    if(index % 2 === 0 && index == 4){
     //   console.log(`${index} is even number`)
       // continue ; if we want to skip the current iteration using continue then it will go in infinite loop because the index++ part is skipped
       break;
    }
   // console.log(`value of index is ${index}`)
    index++;// also can be used index = index +2
}


let myArray = ["flash", "batman", "superman"]

let arrayIndex = 0

while (arrayIndex < myArray.length){
   // console.log(myArray[arrayIndex])
    arrayIndex++
}

let score=11
do{
console.log(`score is${score}`)
score++
}while (score<=10)
