const square = function(x) {
    return x * x;
};

const squareArrow = x => x * x;

console.log(square(8));
console.log(squareArrow(7));

const name1 = 'Brayden Copley';

const getFirstName = name => name.split(" ")[0];

console.log(getFirstName(name1));

