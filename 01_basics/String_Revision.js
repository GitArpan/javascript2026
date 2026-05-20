//-------------String---------------//
//two ways to declare string
//1. String primitive(most common)

const name = "Jackson";
const password = "jack123#Coder";
const product = "Iphone 17 pro max"

//2. String Object (rarely used)

const anotherName = new String("Tucson");
console.log([name , password , product , anotherName]);

// Template literals(Backticks `)

console.log(`Hello my name is ${name}`) // this is called String interpolation

// 1.Access Characters in String: Strings behave like arrays

const category ="Guitar"
console.log(category[0])
console.log(category[1])
console.log(category[2])
console.log(category[3])
console.log(category[4])

//Alternate way is to use function i.e charAt();

console.log(category.charAt(2))


// 2. String Length :Outputs length of the string using .length()


console.log(category.length)

//3 . String comparision : String compare alphabetically (Uicode order) using <, > ,==

const string1 = "Arpan"
const string2 = "Aayush"

console.log(string1 > string2)
console.log(string1 < string2)
console.log(string1 >= string2)
console.log(string1 <= string2)
console.log(string1 == string2)
console.log(string1 === string2)

// Case sensitive "A" == "a" // false

console.log("A".toLowerCase()=="a")

// Important String Methods (Most used)
// *searching using includes() , indexof(), startsWith(0),endswith()

const sentence = "I love my wife";

console.log(sentence.includes("love"))//trure
console.log(sentence.includes("hate"))//false
console.log(sentence.indexOf("wife"))
console.log(sentence.startsWith("I"))
console.log(sentence.endsWith("wife"))

// Extracting Strings 
// using slice (most useful), substring , substr (deprecated)

console.log(sentence.slice(2,6)) // love , doesnot include the end index , takes negative index as well
console.log(sentence.substring(2,6)) // love , doesnot include the end index , doesnot take negative index
console.log(sentence.substr(2,4)) // love , doesnot include the end index , takes negative index as well and 
// second parameter is length of the string to be extracted

//* Changing case using toUpperCase() and toLowerCase()

console.log(sentence.toUpperCase())
console.log(sentence.toLowerCase())


//---------Replace Text in String------------------//
// using replace() method

const newSentence = sentence.replace("wife","husband")
console.log(newSentence)

// using regular expression with replace() method

const newSentence2 = sentence.replace(/wife/i,"partner") // i for case insensitive
console.log(newSentence2)

//replace all :
const newSentence3 = sentence.replace(/i/g,"you") // g for global replacement
console.log(newSentence3)

//-----------------Split String -> Array------------------//
// using split() method

const words = sentence.split(" ") // split by space
console.log(words)

//-----------------Trim String------------------//
// using trim() method  
const stringWithSpaces = "   Hello World!   "
console.log(stringWithSpaces.trim()) // removes leading and trailing spaces

//-----------------String Padding------------------//
// using padStart() and padEnd() methods

const number = "5";
console.log(number.padStart(3,"0")) // pads with 0 to make the string length 3
console.log(number.padEnd(3,"0")) // pads with 0 to make the string length 3

//-----------------String Repetition------------------//
// using repeat() method

const repeatString = "Hello ";
console.log(repeatString.repeat(3)) // repeats the string 3 times

//-----------------String Template Literals------------------//
// using backticks `` and ${} for interpolation

const firstName = "John";
const lastName = "Doe";
console.log(`My name is ${firstName} ${lastName}`) // My name is John Doe   


//-----------------String Escape Characters------------------//
const stringWithQuotes = "He said, \"Hello!\"";
console.log(stringWithQuotes) // He said, "Hello!"

const stringWithNewLine = "Hello\nWorld!";
console.log(stringWithNewLine) 
// Hello
// World!

const stringWithTab = "Hello\tWorld!";
console.log(stringWithTab) // Hello   World!

//-----------------String Immutability------------------//`
let immutableString = "Hello";
immutableString[0] = "h";
console.log(immutableString) // Hello (string is immutable, so it does not change)



