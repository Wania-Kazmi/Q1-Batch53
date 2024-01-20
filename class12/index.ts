//OOP
//Classes are a fundamental concept in object-oriented programming, and they allow you to implement 
//principles such as encapsulation, inheritance, and polymorphism. These principles help organize 
//and structure code in a way that is more modular, maintainable, and scalable.

class Student{
    //properties
    id:number;
    name:string;
    program:string;

    constructor(id:number, name:string, program:string){
        this.id = id;
        this.name = name;
        this.program = program;
    }

    //methods
    study(){
        console.log("study all CS course")
    }
    exam(){
        console.log("pass all CS course")
    }
}


const std1 = new Student(12, "Usman", "CS");
const std2 = new Student(13, "Bilal", "CS");
console.log(std1.id);
console.log(std2.id);


//class structural typing:
class Human {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

class Animal {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}

class WildAnimal {
    title: string;
    
    constructor(title: string){
        this.title = title;
    }
    
    eat(){
        console.log(this.title + " is a Wild Animal and is eating");
    }
}

class Robot {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
}

let h: Human = new Human("Tom");
let a: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");

let h2 = h;

h2 = a; //ok
h2.eat();

let r2 = r;

r2 = a; //ok animal(name, eat), robot(name)

// a = r2; //not ok robot(name), animal(name, eat) Error



let hum : Human = new Animal("Dog");//Fresh Object
let r0: Robot = new Animal("Donkey");//Fresh Object
