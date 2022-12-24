"use strict";
// const anchor = document.querySelector('a')!
// if (anchor) {
//     console.log(anchor.href)
// }
// console.log(anchor.href)
// const form=document.querySelector('form')
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount=a
    }
    format() {
        return `${this.client} owes E${this.amount}`;
    }
}
const invoiceOne = new Invoice('elias', 'work', 200);
const invoiceTwo = new Invoice('Kibret', 'work', 300);
let invoice = [];
invoice.push(invoiceOne);
invoice.push(invoiceTwo);
invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoiceOne, invoiceTwo);
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
