import {HasFormater } from '../Interfaces/HasFormater.js'
export class Payment implements HasFormater{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount :number
    ) {
        // this.client = c;
        // this.details = d;
        // this.amount=a
    }
    format() {
        return `${this.recipient} owed E${this.amount}`
    }
}