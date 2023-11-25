// import inquirer from "inquirer";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// console.log(answers)
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
//conditional statements
// if-else - if-else if-else
//syntax
// if(condition){
//     //block of code
// }
// let pet = "cat"
// let isHungry = true
// let isThirsty = true
// if (isHungry == true){
//     console.log(`${pet} is hungry and wants food`)
// }else{
//     console.log(`${pet} is not hungry`)
// }
// let pet = "cat"
// let isHungry = true
// let isThirsty = false
// if(isHungry == true){
//     console.log(`${pet} is hungry and wants food`)
// }
// if(isThirsty){
//     console.log(`${pet} wants milk`)
// }
// else{
//     console.log(`Pet dont want anything`)
// }
// let hasPass : boolean = true
// if(hasPass){
//     console.log("Welcome in class")
// }else{
//     console.log("Student not allowed")
// }
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("John");
// function fun_name(parameter) {
//code
// }
//function declaration
function Welcome(parameter) {
    console.log(`Welcome ${parameter}`);
}
Welcome("wania"); //function call
Welcome("Class 54");
function getFavoriteNumber() {
    return "Value is positive";
}
// console.log(getFavoriteNumber())
getFavoriteNumber();
let sum1 = (x, y) => {
    return x + y;
};
// console.log(sum1(2,3))
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr[0]);
export {};
