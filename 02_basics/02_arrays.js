// This file is important for reactjs and nodejs

const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman","flash" , "batman"]

//marvel_heros.push(dc_heros) // adds the dc_heros array to the end of the marvel_heros array
//console.log(marvel_heros) // the dc_heros array is the fourth element of the marvel_heros array
//console.log(marvel_heros[3][2]); // not a good practice 

//const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros) // concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const all_new_heros = [...marvel_heros, ...dc_heros]// this is spread operator it is used to spread the elements of an array into a new array. It is a more modern way to merge two or more arrays and it is more concise than the concat method.


//console.log(all_new_heros)

const another_array = [1 ,2 ,3 ,[4 ,5 ,6], 7 ,[6,7,[4 ,5]]]

const real_another_array = another_array.flat(Infinity)//

console.log(real_another_array)

//Another array method is mostly used in data scrapping (data in different format like node list or object or string ) but we need in array
// Only in array we can use loop 
// we can ask and we can convert into array

console.log(Array.isArray("Arpan"))//Checks if the given value is an array or not. It returns true if the value is an array, otherwise it returns false.

console.log(Array.from("Arpan"))//Converts an array-like or iterable object into an array. In this case, it converts the string "Arpan" into an array of characters.

console.log(Array.from({name : "Arpan"}))// it is interesting if we pass object then it gives us an empty array because the object is not iterable and it does not have a length property. So it cannot be converted into an array.
//in some of the case we have to mention that wether from keys or values or entries to make array from object

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1 , score2 , score3))
