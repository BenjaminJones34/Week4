const multiply = (a, b) => {
    return a * b;
};

const add = (a, b) => {
    return a + b;
};

const divide = (a, b) => {
    return a / b;
};

const subtract = (a, b) => {
    return a - b;
};

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};

let first = doMath(4);
let second = first(5, multiply);

console.log(second);
