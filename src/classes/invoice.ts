import {HasFormater } from '../Interfaces/HasFormater.js'
export class Invoice implements HasFormater{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount :number
    ) {
        // this.client = c;
        // this.details = d;
        // this.amount=a
    }
    format() {
        return `${this.client} owes E${this.amount}`
    }
}