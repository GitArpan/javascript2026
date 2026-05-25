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


//data structure is being strong array , objects . objects disscussion leads to API discussions

//there is destructuring of objects as well as array . Array we will discuss other time

//destructuring of objects is a way to extract values from an object and assign them to variables in a single statement. It is a convenient way to extract multiple properties from an object and assign them to variables.

const course ={
    coursename : "JavaScript in hindi",
    price : 999,
    courseInstructor: "hitesh"
}

//cousrse.courseInstructor

const {courseInstructor: instructor} = course // it will extract the value of the courseInstructor property from the course object and assign it to the variable instructor

console.log(instructor); // it will print the value of the courseInstructor property of the course object


//react code (concept of destructuring in react)
//const navbar = ({company}) => {

//}

//navbar(company = "hitesh")

// In simple language API is putting our work into another persons head


// API is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable integration between different systems and to allow developers to access the functionality of other applications or services without having to understand their internal workings. APIs can be used for various purposes, such as retrieving data from a server, sending data to a server, or performing specific actions on a server. They are commonly used in web development, mobile app development, and software development in general.
//previous days the data from backend use to come in xml format but now a days it comes in json format because it is easier to parse and it is more lightweight than xml. JSON stands for JavaScript Object Notation and it is a text-based format for representing data that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used as a data interchange format in web applications and APIs because it is language-independent and can be easily parsed by JavaScript.

//{
  //  "name" : "hitesh"
    //"coursename": "js in hindi"
    //""price": "free"
//}


//some times APIs is received in array format

//[
  //  {},
    //{},
//{}]

//randomuserme API is used to get random user data for testing purposes. It provides a simple way to generate random user data, such as names, email addresses, and profile pictures, which can be used for testing and development of applications that require user data. The API allows you to specify the number of users you want to generate and the fields you want to include in the response. It is commonly used by developers to create mock data for testing and development of applications that require user data.
//some of the tools to understand the API : JSON formatter, Postman, Thunder client, etc. These tools allow you to send requests to the API and view the responses in a structured format, making it easier to understand the data being returned by the API and to test the functionality of the API. They also provide features such as saving requests, organizing requests into collections, and generating code snippets for making API calls in different programming languages.`