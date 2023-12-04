//. Importing the required packages
import inquirer from "inquirer"

//. Taking user input
//. Using inquirer to take input
//. Storing the input in a variable
let answers = await inquirer.prompt([
    //. Using inquirer to take input for first numeric value
    {
        type: "input",
        name: "fristNumber",
        message: "Enter first number"
    },
    //. Using inquirer to take input for second numeric value
    {
        type: "input",
        name: "secondNumber",
        message: "Enter second number"
    },
    //. Using inquirer to take input for operation
    {
        type: "list",
        name: "operation",
        message: "Select the operation",
        choices: ["+", "-", "*", "/"]
    }
])

//. Destructuring the input from stored variable
const { fristNumber, secondNumber, operation } = answers

//. Defining the maths function
//. Setting the types of parameters and return type
const maths = (fristNumber: number, secondNumber: number, operation: string): number | string => {
    //. Using if else statements to return the result conditionally
    //. Condition for plus operation
    if (operation === "+") {
        return fristNumber + secondNumber
    }
    //. Condition for minus operation
    else if (operation == "-") {
        return fristNumber - secondNumber
    }
    //. Condition for multiplication operation
    else if (operation == "*") {
        return fristNumber * secondNumber
    }
    //. Condition for division operation
    else if (operation == "/") {
        return fristNumber / secondNumber
    }
    //. Final else to ensure that operation is not possible
    else {
        return "Operation not possible"
    }
}

//. Calling the maths function and logging the output
//. Making sure that passed first and second parameters are numbers
console.log(maths(Number(fristNumber), Number(secondNumber), operation))