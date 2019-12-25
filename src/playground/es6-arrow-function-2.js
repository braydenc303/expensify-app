// arguments object - no longer bound
// If you find yourself needing arguments, you will want to stick to ES5 function instead.
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1));

// this keyword - no longer bound


// remember to not use arrow functions for methods in objects
// const user = {
//     name: 'Brayden',
//     cities: ['Phoenix', 'Green River', 'Denver'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach((city) => {
//             console.log(this.name + " has lived in " + city);
//         })
//     }
// };

//Here is an example with ES6 method definition

const user = {
    name: 'Brayden',
    cities: ['Phoenix', 'Green River', 'Denver'],
    printPlacesLived() {
        
        return this.cities.map(city => this.name + ' has lived in ' + city + '!');
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // })
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,3,4,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());