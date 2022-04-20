// let cars = ['Ferrari', 'Lamborghini', 'Ford', 'Chevy',]

// console.log(cars[1])

// console.log(cars.length)

let ourCars= [{
    brand: 'Audi',
    year: 2018,
    modal: 'A3',
    miles: 25580,
    color: 'Grey'
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55000,
}]

console.log(ourCars[1].miles)

const { miles, year} =ourCars[0]

const age = 2022 - year
const mileage =miles/age

console.log(mileage + 'miles per year')

if (mileage < 10000){
    console.log('This is a LOW mileage car')
} else {
    console.log('This is a HIGH mileage car')
}

(mileage < 1000) 
    ? console.log ('This is a LOW mileage car')
    : console.log ('This is a High mileage car.')

(mileage < 10000) ? console.log('This is a LOW mileage car') : console.log ('This is a HIGH mileage car')

const isIt = (mileage < 10000)? 'is a' : 'is Not a'
console.log (`This ${isIt} LOW mileage car.`)

