import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);
console.log(answers)
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

//conditional statements
// if-else - if-else if-else
//syntax
// if(condition){
    //block of code
// }

let pet = "cat"
let isHungry = true
let isThirsty = false

//if-else
if (isHungry == true){
    console.log(`${pet} is hungry and wants food`)
}else{
    console.log(`${pet} is not hungry`)
}

// if if-else

if(isHungry == true){
    console.log(`${pet} is hungry and wants food`)
}
if(isThirsty){
    console.log(`${pet} wants milk`)
}
else{
    console.log(`Pet dont want anything`)
}

//scenario 2
let hasPass : boolean = true

if(hasPass){
    console.log("Welcome in class")
}else{
    console.log("Student not allowed")
}

//Functions - and syntax:

// function fun_name(parameter) {
//code
// }

//function declaration
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("John"); //function call


//function declaration
function Welcome(parameter: string) {
  console.log(`Welcome ${parameter}`);
}

Welcome("wania"); //function call

Welcome("Class 54");

function getFavoriteNumber(): string {
  return "Value is positive";
}

// console.log(getFavoriteNumber())
getFavoriteNumber();

//Arrow Function
let sum1 = (x: number, y: number): number => {
  return x + y;
};

// console.log(sum1(2,3))


//Arrays
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr[0]);
