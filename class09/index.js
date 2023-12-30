//Concept we will cover:
//1-- Asynchronous behaviour and callstack
//2-- Role of callbacks
//3-- Problem 1: Callback Hell
//4-- Probelm 2: Inversion of Control
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); //invoke/call
}
function sayGoodbye() {
    console.log('Goodbye!');
}
function sayHello() {
    console.log('Hello');
}
greet('Alice', sayGoodbye);
greet('Alice', sayHello);
//1.2 Calculator Callback Example - when function passed as an argument and become callback function
// The calculate function takes in two numbers and a callback function (operationCallback).
// It uses the operationCallback to perform an operation on the provided numbers (num1 and num2).
// The result is then logged to the console.
function calculate(num1, num2, operationCallback) {
    const result = operationCallback(num1, num2);
    console.log("The result is: ", result);
}
function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    }
    else {
        return "Error: Cannot be divided by 0";
    }
}
calculate(2, 4, subtract);
export {};
