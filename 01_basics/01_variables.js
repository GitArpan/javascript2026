//Let us learn through investigation method
//lets learn about variables

//constants = whose value mustnot change ex: accountId

const accountId = 144553
let accountEmail = " arpan@gmail.com"
var accountpassword = "12345"
accountCity = "kathmandu"
let accountState; // If we print it then the value will show undefined

//LETS TRY TO CHANGE CONST AND PRINT

//accountId= 2 you can remove the comment and see the output // mot allowed

accountEmail = "jkg@pangpung.com"
accountpassword = "2343"
accountCity = "Butwal"
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountpassword , accountCity , accountState])