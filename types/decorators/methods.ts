function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
    const newDescriptor: PropertyDescriptor = {
        enumerable: false,
        configurable: true,
        get() {
            return descriptor.value.bind(this)
        },
    }
    return newDescriptor
}

class User5 {
    constructor(public name: string) {}


    @Autobind
    sayMyName() {
        console.log(this?.name)
    }
}

const user5 = new User5('vladilen')

function nameSayer(fn: Function) {
    fn()
}

nameSayer(user5.sayMyName)