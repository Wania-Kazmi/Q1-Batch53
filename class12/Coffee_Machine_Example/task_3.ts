//Class-11:
//Task-3: Using async await

/*
Example: Coffee Machine
-----------------------
Step-1: Start the coffee machine.
Step-2: Grind coffee beans.
Step-3: Boil water.
Step-4: Pour boiling water into a cup.
Step-5: Add grinding coffee to the cup.
Step-6: Stir the coffee.
Step-7: Enjoy your coffee.
*/

//import {Promise} from 'es6-promise';

type CallBack = {(a:string):void};

function startMachine(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Step-1: Machine is starting...");
            resolve("Step-1: Completed!");
        }, 2000);
    });    
}

function grindBeans(s1:string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(s1);
            console.log();
            console.log("Step-2: Grinding coffee beans...");
            resolve("Step-2: Completed!");
        }, 2000);
    });
}

function boilWater(s2:string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(s2);
            console.log();
            console.log("Step-3: Boiling Water...");
            resolve("Step-3: Completed!");
        }, 2000);   
    });
}

function fillCup(s3:string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(s3);
            console.log();
            console.log("Step-4: Pouring boiling water into a cup...");
            resolve("Step-4: Completed!");
        }, 2000);
    });
}

function addCoffee(s4:string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(s4);
            console.log();
            console.log("Step-5: Adding grinding coffee to the cup...");
            resolve("Step-5: Completed!");
        }, 2000);   
    });
}

function stirCoffee(s5:string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(s5);
            console.log();
            console.log("Step-6: Stirring the coffee...");
            resolve("Step-6: Completed. Coffee is Ready!");
        }, 2000);                
    });
}

function enjoyCoffee(s6:string){
    return new Promise((resolve,reject)=>{
        console.log(s6);
        console.log();
        console.log("Enjoy your coffee.");               
    });
}

console.log("Task-3:");
async function makeCoffee(){
    try{
        const s1 = await startMachine();
        const s2 = await grindBeans(s1 as string);
        const s3 = await boilWater(s2 as string);
        const s4 = await fillCup(s3 as string);
        const s5 = await addCoffee(s4 as string);
        const s6 = await stirCoffee(s5 as string);
        await enjoyCoffee(s6 as string);
    }catch(e){
        console.log(e);
    }
    console.log("Finally Completed!");
}

makeCoffee();
export{};
