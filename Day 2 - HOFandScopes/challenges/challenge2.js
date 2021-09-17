const sum = (num1, num2)=> {
    return num1 + num2;
};

const exec = (fn, num1, num2)=> {
    let total = 0;
    for (let i = 0; i < 5; i++) {
        total += fn(num1, num2);
    };
    return total;
};

console.log(exec(sum, 2, 3));