let greatHello = () => {
    console.log('hello world')
}

let great: Function


const add = (a:number,b:number,c:number| string=10):void => {
    console.log(a + b)
    console.log(c)
}
add(5,10)
// great='elias'

const minus = (a: number, b: number):number => {
    return a+b
}
let result = minus(10, 7)
// result='eldmlsm'