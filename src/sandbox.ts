// let great:Function


//Example 1
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string):number => {
    if (action === 'add') {
        return numOne+numTwo
    }
    else {
        return numOne-numTwo
    }
}

// Example
let LogFDetails: (obj: { name: string, age: number }) => void

type person = { name: string, age: number }
    
LogFDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}