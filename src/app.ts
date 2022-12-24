// const anchor = document.querySelector('a')!
// if (anchor) {
    
//     console.log(anchor.href)
// }
// console.log(anchor.href)

// const form=document.querySelector('form')

//Interfaces

interface isPerson{
    name: string,
    age: number,
    speak(a: string): void,
    spend(a:number):number
}

const me: isPerson = {
    name: 'elias',
    age: 20,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: 30): number{
        return 30
    },
}
// console.log(me)

const greetPerson = (person: isPerson) => {
    console.log('hello' ,person.age)
}

greetPerson(me)

import {Invoice} from './classes/invoice.js'

const invoiceOne = new Invoice('elias', 'work', 200)
const invoiceTwo = new Invoice('Kibret', 'work', 300)

let invoice: Invoice[] = []
invoice.push(invoiceOne)
invoice.push(invoiceTwo)
invoice.forEach(inv => {
    console.log(inv.client,inv.amount,inv.format())
})

console.log(invoiceOne,invoiceTwo)


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement
const toForm = document.querySelector("#tofrom") as HTMLSelectElement
const details = document.querySelector("#details") as HTMLSelectElement
const amount=document.querySelector("#amount") as HTMLInputElement



form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.valueAsNumber
    )
}
    )
    