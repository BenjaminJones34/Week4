const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'intro',
        message: 'Hello!',
        validate(value) {
            if (value == "Hello") {
                return true;
            } else {
                console.log("\nHello?");
                return false;
            }
        },
    }
    ])
    .then((answers) => {
        console.log("Great")
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("nope")
        } else {
            console.log("Something weird went wrong")
        }
    });