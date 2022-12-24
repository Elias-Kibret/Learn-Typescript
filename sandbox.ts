//explicit type
let character: string
let age: number
let loggedin: boolean
// age='elias'
age = 30
loggedin=true

//array

let ninjas: string[]
// ninjas.push('elias') //canot push to empty array
ninjas = ['10', '30']
// ninjas.push(30)
console.log(ninjas)

//* union Types
let mixed: (string |number |boolean)[]=[]

mixed.push('hello')
mixed.push(20)
mixed.push(false)


let uid:string|number

//Object
let ninjaOne={name:'yesh',age:30}
let ninjaTwo:{
    name:string,
    age: number,
    beltColoer:string
}