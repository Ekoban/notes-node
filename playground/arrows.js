const square = x => x*x;
console.log(square(25));

const user = {
    name: 'Alex',
    sayHi: () => {
        console.log(this.name)
    },
    sayHiAlt () {
        console.log(this.name)
    }
}

user.sayHi();
user.sayHiAlt();