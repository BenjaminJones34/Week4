const os = require("os");
const fs = require("fs");

let userDetails = os.userInfo().username;

fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if (err) {
        console.log("oops");
    };
});

let data = require("./package.json");

console.log(data);

const _ = require("lodash");

let arr = [1, 2, 3, 4, 1];

arr = _.reverse(arr);
console.log(arr);
arr = _.pull(arr, 1, 3)
console.log(arr);