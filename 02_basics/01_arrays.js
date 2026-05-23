//arrays


const myArray = [0 , 1, 2 ,3 ,4 ,5 ,true , "hello"]
const myHeros = ["superman" , "batman" , "wonder woman" , "flash" , "aquaman"]  
const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr2[0]) // 1
//console.log(myArray[0]) // 0

//Array methods

myArray.push(6) // adds 6 to the end of the array

//console.log(myArray) // [0 , 1, 2 ,3 ,4 ,5 ,true , "hello" , 6]

myArray.pop() // removes the last element of the array
//console.log(myArray) // [0 , 1, 2 ,3 ,4 ,5 ,true , "hello"]
myArray.unshift(-1) // adds -1 to the beginning of the array . Not so usefull because you have to shift all the array index 
//if there were 1000 elements in the array it would be very slow to shift all the index
//console.log(myArray) // [-1 , 0 , 1, 2 ,3 ,4 ,5 ,true , "hello"]
myArray.shift() // removes the first element of the array . Not so usefull because you have to shift all the array index
//console.log(myArray) // [0 , 1, 2 ,3 ,4 ,5 ,true , "hello"]

//to be continued...12 minutes

//console.log(myArray.includes(6))
//console.log(myArray.indexOf(1))//1
//console.log(myArray.indexOf(6))//-1 //-1 means that the element is not found in the array
//console.log(myArray.length) // 8
//console.log(myHeros.length) // 5
//console.log(myHeros[myHeros.length - 1]) // aquaman

 //const newArr = myArray.join()
 //console.log(myArray)
 //console.log(typeof newArr)

 //most commo slice , splice , concat , reverse , sort

 console.log("A ", myArray)
 const myn1 = myArray.slice(1,3)//Slice doesnot manipulate the original array it returns a new array with the selected elements and doesnot include the end index

 console.log(myn1);
 console.log("B ", myArray)

 const myn2 = myArray.splice(1,3)//Splice manipulates the original array it returns a new array with the selected elements and includes the end index.
 console.log("C ",myArray)
  console.log(myn2);