const name = "Arpan"
const repoCount = 4
//console.log(name + repoCount + "value"); bad practice

// Morden way

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Arpa-n')
//console.log(gameName[0])
//console.log(gameName.__proto__)

//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-5,5)
console.log(anotherString)

const newString1 = "    hitesh.    "
console.log(newString1)
console.log(newString1.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
url.replace('%20','-')
console.log(url.replace('%20','-'))

url.includes('hitesh')
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))


