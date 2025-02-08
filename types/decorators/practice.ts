interface ComponentProps {
    template: string
    selector: string
}

function Component(props: ComponentProps) {
    return function (target: any) {
        const node = document.querySelector(props.selector)
        const instance = new target()
        if (node) {
            node.insertAdjacentHTML('afterbegin', props.template)
            node.querySelector('span')!.textContent = instance.isProgrammer
        }
    }
}



@Component({
    selector: '#app',
    template: `
    <h1>This is user template</h1>
    <h2>Is programmer: <span></span></h2>
  `,
})
class User2 {
    constructor(public isProgrammer: boolean = false) {
        console.log('Constructor')
    }
}

const user2 = new User2(false)