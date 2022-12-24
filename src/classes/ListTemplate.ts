import { HasFormater} from '../Interfaces/HasFormater.js'
export class ListTempate{
    constructor(private container: HTMLUListElement) {
        
    }
    render(item: HasFormater, heading: string, pos: "start" | "end") {
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        h4.innerHTML = heading;
        li.append(h4)
        const p = document.createElement('p')
        p.innerHTML = item.format()
        li.append(p)

        if (pos === 'start') {
            this.container.prepend(li)
        }
    }
}