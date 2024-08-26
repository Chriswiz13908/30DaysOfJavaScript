// Declaring different variables of different data types
let space = ' '
let age = 28
let firstName = 'Christopher'
let lastName = 'Wolverton'
let country = 'USA'
let city = 'Beckley'
let language = 'JavaScript'
let job = 'Chef'
// Can concatenate using +
let fullName = firstName + space + lastName
console.log(fullName)

let personInfoOne = 'My name is ' + fullName + '. I am ' + age + '. I live in the ' + country + '.'
console.log(personInfoOne)

//Template Literals
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in the ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I am learning ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree) 

