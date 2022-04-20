
//let firstName = "Cherie"
let firstName = "Cherie"
let lastName = "Allen"

if(firstName){
    console.log(`Hello world, ${firstName}`)
} else if (lastName){
    console.log("My last name is " + lastName)
} else {
    console.log("Hello world, stranger")
}

const today = "Tuesday"
let result = today === "Monday"? "Cherie is getting paid": "Cherie is broke"
console.log(result)


const fruit = "cherie"

switch(fruit){
    case"orange":
        console.log("This is an orange")
        break;
    case"apple":
        console.log("This is an apple")
        break;
    default:
        console.log("We are out of fruits")
        break;    
}

function sum (a,b){
    const result = a+b
    return result
}

let addition =sum(2,7)
console.log("The sum is", addition)