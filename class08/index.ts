//Named function
function add(x: number, y: number): number {
    return x+y;
}

//Anonymous function
//Function Expression / Anonymous Function:
//What is anonymous function?
//An anonymous function in programming is a set of instructions that does something specific (like adding numbers) without being assigned a specific name, and you can store and use these instructions by assigning them to variables like myAdd1.

//Why it is called as anonymous function?
//Imagine you have a friend who can do math really well, but this friend doesn't have a name. You might still refer to this friend as "the math whiz" or something similar
//Similarly, in programming, you can create a piece of code that does something specific, like adding two numbers, without giving it a name.

let myAdd1 = function(x: number, y: number): number { 
    return x+y; 
};

//Anonymous function with explict type
let myAdd2: (a:number, b:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};

let a:string = "A"

//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};

//Lambda functions/closure function														
let myAdd4 = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter1(fn: GreetFunction) {
	//....
}

function greetEnglish(name: string): void {
    console.log(`Hello, ${name}!`);
}

function greetFrench(name: string): void {
    console.log(`Bonjour, ${name}!`);
}

function greeter(fn: GreetFunction) {
    fn('Alice'); //calling
}

// Passing the greetEnglish function to the greeter
greeter(greetEnglish); // Output: Hello, Alice!

// Passing the greetFrench function to the greeter
greeter(greetFrench); // Output: Bonjour, Alice!


//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob"); //ok  
let result2 = buildName("Bob", "Adams", "Sr.");  //error
var result3 = buildName("Bob", "Adams"); //ok

//Default parameters
function buildName1(firstName: string, lastName: string = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
    
let result11 = buildName("Bob"); //ok - Bob Khan 
let result22 = buildName("Bob", "Adams", "Sr.");  //error
var result3 = buildName("Bob", "Adams"); //ok   - Bob Adams

//Rest Parameters - countless parameters
function buildName12(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}
function buildName13(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName12("Joseph", "Samuel", "Lucas", "MacKinzie");

//Function overloading:

function addd(arg1: string, arg2: string): string;//option 1
function addd(arg1: number, arg2: string): string;//option 2
function addd(arg1: number, arg2: number): number;//option 3
function addd(arg1: boolean, arg2: boolean): boolean;//option 4
function addd(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

addd(33,"abc")
addd(1,2)
addd("Abc","ee")
addd(true,false)

