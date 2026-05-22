//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)


let myCreatedDate = new Date(2020, 11, 24, 10, 33, 30, 0)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getFullYear())
console.log(myCreatedDate.getMonth())//months are zero indexed in JavaScript, so December is represented by 11
console.log(myCreatedDate.getDate())
console.log(myCreatedDate.getHours())
console.log(myCreatedDate.getMinutes())
console.log(myCreatedDate.getSeconds())
console.log(myCreatedDate.getTime())//this will give you the time in milliseconds since January 1, 1970, 00:00:00 UTC

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(Math.floor(Date.now() / 1000))//this will give you the time in seconds since January 1, 1970, 00:00:00 UTC or you can use Math.round() instead of Math.floor() if you want to round to the nearest second.

let newDate = new Date()

newDate.toLocaleString('default' ,{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'GMT'
})
console.log(newDate.toLocaleString('default' ,{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'GMT'
}))