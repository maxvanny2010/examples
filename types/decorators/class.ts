class User {
    isProgrammer?: boolean

    constructor(public name: string) {}

    sayHello() {
        console.log('User', this.name)
    }
}

function makeProgrammer(user: User) {
    user.isProgrammer = true
    return user
}

const user = makeProgrammer(new User('MAX'))
user.sayHello()
console.log(user.isProgrammer)