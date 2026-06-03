const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((num)=>num+10)//better than for each
// if you open scopes then use return keyword return num+10,
//fiter can use conditions and can use strings
//console.log(newNums)

//chaining 
const newNums = myNumbers
                .map((num)=>num * 10)//operations
                .map( (num)=>num +1)// operations
                .filter((num)=> num >= 40)//true or false condition

 console.log(newNums)