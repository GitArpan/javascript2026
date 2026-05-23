//const tinderUser1 = new Object()
const tinderUser = {}//object literal method
//console.log(tinderUser); // it will print an empty object because we have not added any properties to the object
//console.log(tinderUser1); // it will print an empty object because we have not added any properties to the object

//console.log(typeof tinderUser); //object
//console.log(typeof tinderUser1);//object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser); // it will print the object with the properties that we have added to the object

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sammy",
            lastname:"shark"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); // it will print the object with the properties that we have added to the object

// as we combines array , like wise we can combine objects as well and we can access the properties of the nested objects using dot notation or bracket notation.

const obj1 = {
    1: "a" ,
    2: "b" ,
}
const obj2 = {
    3: "a" ,
    4: "b" ,
}

//const obj3 ={obj1, obj2} // it will combine the two objects into one object
//const obj3 = Object.assign({}, obj1, obj2) // it will combine the two objects into one object , the empty curly bracket is target and objects are source.
const obj3 = {...obj1 , ...obj2}    
//console.log(obj3); // it will print the combined object with the properties of both objects

//if the values are from the database it comes in the form of arrays of objects.


const users = [
    {
       id: 1,
       email: "h@gmail.com"
    }
    ,
    {
       id : 1,
       email:"h@gmail.com" 
    }

]
users[1].email

console.log(tinderUser); // it will print the object with the properties that we have added to the object

console.log(Object.keys(tinderUser)); // it will print the keys of the object in an array
//you can use loops in arrays
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)); // it will print the key value pairs of the object in an array
//entries are not used commonly

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // it will return true because the object has the property isLoggedIn
console.log(tinderUser.hasOwnProperty("isAdmin")); // it will return false because the object does not have the property isAdmin
//it is used when we are looking if there is the particular property in the object or not and it will return true or false based on that.
//to know more about objects then declare an object and paste it into the browser and write the obj name inspect section and you can see all the properties of the object and you can also see the prototype of the object and you can also see the constructor of the object and you can also see the methods of the object and you can also see the symbols of the object and you can also see the getters and setters of the object.