#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from 'chalk';

let NumOne = await inquirer.prompt([{
    name: "numberOne",
    type: "number",
    message: "First parameter"
}]);

// console.log(chalk.red(NumOne.numberOne));

let NumTwo = await inquirer.prompt([{
    name: "numberTwo",
    type: "number",
    message: "Second parameter"
}]);

// console.log(chalk.green(NumTwo.numberTwo));


let Operator = await inquirer.prompt([{
    name: "OperatorSign",
    type: "string",
    message: "Select Your Operator (+ - / x)"
}]);






console.log(Calculate(Operator.OperatorSign))

function Calculate(Operator: String) {

    switch (Operator) {
        case "+":
            return  parseInt(NumOne.numberOne) +parseInt(NumTwo.numberTwo);
        case "-":
            return NumOne.numberOne - NumTwo.numberTwo;
        case "X":
            return NumOne.numberOne * NumTwo.numberTwo;
        case "*":
            return  NumOne.numberOne * NumTwo.numberTwo;
        case "/":
            return  chalk.blue(NumOne.numberOne / NumTwo.numberTwo);
    }
}
