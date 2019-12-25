class Person {
    constructor(name = 'Bobject', age = 0) {
        this.fullname = name,
        this.age = age
    }

    getGreeting() {
        // return 'Hi. I am ' + this.fullname + "!";
        return `Hi. I am ${this.fullname}!`
    }

    getDescription() {
        return `${this.fullname} is ${this.age} year${this.age !== 1 ? 's' : ''} old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let description = super.getDescription();
        return `${description} ${this.major ? 'Their major is ' + this.major + '.' : ''}`;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        return `${greeting} ${this.homeLocation ? 'I am visiting from ' + this.homeLocation + '.' : ''}`;
    }
}

const me = new Student('Brayden Copley', 43, 'Art');
const other = new Student();
console.log(me.getDescription());
console.log(other.getDescription());
const globeTrotter = new Traveller('Wendy Copley', 42, 'Denver');
console.log(globeTrotter.getGreeting());
const homeBody = new Traveller();
console.log(homeBody.getGreeting());
