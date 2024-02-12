//What is an Abstract class?
//Think of an abstract class in programming like a blueprint for a house.
//This blueprint outlines some basic structures—like having walls and a roof—that all houses built from this blueprint
//must have. However, it doesn't specify what color the walls should be painted or what type of tiles should go
//on the roof. Those details are left for the builders of individual houses to decide.

//Abstract class in TS
//In TypeScript (a programming language that adds types to JavaScript), an abstract class is a special kind of class
//that cannot be used to create objects directly. Instead, it's used as a base class from which other
//classes can inherit. It can include details that are common to all subclasses, while also
//specifying "abstract" methods that the subclasses must define on their own.

//Example:
// Define an abstract class called Shape


abstract class Shape {
    // Define an abstract method called area. It doesn't have an implementation here.
    abstract area(): number;

    // A concrete method that's fully defined and can be used by subclasses
    display(): void {
        console.log(`The area is: ${this.area()}`);
    }
}

// const shape = new Shape(); // This is not allowed because Shape is an abstract class

// Define a subclass of Shape for squares
class Square extends Shape {
    sideLength: number;

    constructor(sideLength: number) {
        super(); // Call the constructor of the base class, Shape
        this.sideLength = sideLength;
    }

    // Implement the abstract method area for Square
    area(): number {
        return this.sideLength * this.sideLength;
    }
}

// Create an instance of Square
const mySquare = new Square(5);
mySquare.display(); // Outputs: The area is: 25


