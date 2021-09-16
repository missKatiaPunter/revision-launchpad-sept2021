const subtract = (a,b) => a-b;

// write a function that divides whole numbers

const divide = (numerator, denominator) => {
    return numerator / denominator;
}

// write a function that divides whole numbers

const isDivisibleBy = (numerator, denominator) => {
    return numerator % denominator === 0;
}

module.exports = { 
    subtract,
    divide,
    isDivisibleBy
};
