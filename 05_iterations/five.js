const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){
//     console.log(item)
// }  )

// coding.forEach( (item)=>{
// console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index, arr)=>{
//     console.log(item , index , arr)
// })


const myCoding = [
    {
        languageName : "javascript",
        fileExtension : ".js"


    },
    {
        languageName : "java",
        fileExtension : ".java"


    },
    {
        languageName : "python",
        fileExtension : ".py"


    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})
// forEach loop is mostlu used in array and in database to print the values and it is not used in object and map because it is not iterable in object and map we can use for of loop in map and for in loop in object but not forEach loop in object and map