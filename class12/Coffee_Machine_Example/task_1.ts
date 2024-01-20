//Class-11:
//Task-1: Using Callback Hell

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

type CallBack = {(a:string):void};

function startMachine(callback:CallBack){
    setTimeout(() => {
        console.log("Step-1: Machine is starting...");
        callback("Step-1: Completed!");
    }, 2000);
}

function grindBeans(s1:string,callback:CallBack){
    setTimeout(() => {
        console.log(s1);
        console.log();
        console.log("Step-2: Grinding coffee beans...");
        callback("Step-2: Completed!");
    }, 2000);
}

function boilWater(s2:string,callback:CallBack){
    setTimeout(() => {
        console.log(s2);
        console.log();
        console.log("Step-3: Boiling Water...");
        callback("Step-3: Completed!");
    }, 2000);
}

function fillCup(s3:string,callback:CallBack){
    setTimeout(() => {
        console.log(s3);
        console.log();
        console.log("Step-4: Pouring boiling water into a cup...");
        callback("Step-4: Completed!");
    }, 2000);
}

function addCoffee(s4:string,callback:CallBack){
    setTimeout(() => {
        console.log(s4);
        console.log();
        console.log("Step-5: Adding grinding coffee to the cup...");
        callback("Step-5: Completed!");
    }, 2000);
}

function stirCoffee(s5:string,callback:CallBack){
    setTimeout(() => {
        console.log(s5);
        console.log();
        console.log("Step-6: Stirring the coffee...");
        callback("Step-6: Completed. Coffee is Ready!");
    }, 2000);
}

function enjoyCoffee(s6:string){
    setTimeout(() => {
        console.log(s6);
        console.log();
        console.log("Enjoy your coffee.");
    }, 2000);
}

console.log("Task-1:");
startMachine((s1)=>{
    //console.log("check:"+s1);
    grindBeans(s1,(s2)=>{
        boilWater(s2,(s3)=>{
            fillCup(s3,(s4)=>{
                addCoffee(s4,(s5)=>{
                    stirCoffee(s5,(s6)=>{
                        enjoyCoffee(s6);
                    });
                });
            });
        });
    });
});
