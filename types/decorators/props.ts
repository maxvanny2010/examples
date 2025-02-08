function Max(limit: number) {
    return function (target: Object, key: string | symbol) {
        let value: number

        const get = () => value
        const set = (val: number) => {
            if (val > limit) {
                value = limit
                console.warn(`More than limit. It is ${limit}`)
            } else {
                value = val
            }
        }

        Object.defineProperty(target, key, { get, set })
    }
}

class User4 {

    @Max(10)
    children

    constructor(children: number) {
        this.children = children
    }
}

const user4 = new User4(100)
console.log(user4.children)