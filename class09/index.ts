//Concept we will cover:
//1-- Asynchronous behaviour and callstack
//2-- Role of callbacks
//3-- Problem 1: Callback Hell
//4-- Probelm 2: Inversion of Control


// const a = "Wania"
// console.log(a)
// const b = "Kazmi"
// console.log(b)

// console.log('Starting');
// setTimeout(function() {
// console.log('Running');
// }, 3000);
// setTimeout(function() {
// console.log('Running2');
// }, 5000);
// console.log('ending');

// function a(){
//     console.log("a")
// }

// a()
// console.log("End")

// console.log("Hi")
// setTimeout(function cb1(){
//     console.log('cb1')
// },5000);
// console.log("Bye")
// console.log("a")
// console.log("b")

//callback function
//What are callback functions and why we use them?
// 1. Such functions that are passed as an argument to other function
// 2. Executed after a particular task is completed
// 3. Mostly used in asynchrous programing and event handling

//Use cases of callback functions:
//1. Asynchronous Operations: In scenarios where tasks take time to complete (like reading files, making API requests), JavaScript doesn't wait for these tasks to finish before moving on to the next line of code. Callbacks allow you to specify what should happen once these tasks complete.
//2. Event Handling: Callbacks are commonly used in event-driven programming. For instance, in web development, when a user clicks a button or submits a form, a callback function can be triggered to handle that event.
//3. Modular and Reusable Code: Callbacks promote modular and reusable code. You can create generic functions that can take different callback functions as arguments, allowing you to reuse the same function with different behaviors


// console.log("Hi")
// setTimeout(function cb1(){
//     console.log('cb1')
// },5000);
// setTimeout(function cb2(){
//     console.log('cb2')
// },2000);
// console.log("Bye")


// console.log("Hi")
// setTimeout(function cb1(){
//     console.log('cb1')
// },0);
// console.log("Bye")


//1.1 - Simple Callback Function

type Callback = {
    (): void
}
function greet(name:string, callback: Callback):void {
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


function calculate (num1: number, num2:number, operationCallback:(n1:number, n2:number)=>number):void{
    const result = operationCallback(num1, num2);
    console.log("The result is: ", result)
}

function add(n1:number, n2:number):number{
    return n1 + n2
}

function subtract(n1:number, n2:number):number{
    return n1 - n2
}

function multiply(n1:number, n2:number):number{
    return n1 * n2
}

function divide(n1:number, n2:number):number | string{
    if(n2 !== 0){
        return n1/n2
    }else{
        return "Error: Cannot be divided by 0"
    }
}

calculate(2,4,subtract) //subtact is callback here

//2-- Role of callbacks:
//The question arises here is what if we need to execute any function after some certain delay? How can we perform this delay function as callstack doesnot wait and it keep executing whatever comes inside it, and there is no question on blocking the main thread.
//So to tackle this problem, callbacks came into play: Callbacks used to be the main way asynchronous functions were implemented in JavaScript. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time.


//3-- Problem 1: Callback Hell: Callback hell is nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for previous callback, thereby making a pyramid structure that effects the readibility and maintability of the code.
//Example1:

setTimeout(function() {
    console.log('Create Order');
    setTimeout(function() {
      console.log('PAyment');
      setTimeout(function() {
        console.log('Show payment summery');
        setTimeout(function() {
          console.log('update wallet');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);

//1. Create Order
//2. Payment
//3. Show Payment Summary
//4. Update Wallet


//Inversion of control