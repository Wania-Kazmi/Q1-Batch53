//A class declaration creates two things: a type representing instances of the class and a constructor function. 
//Because classes create types, you can use them in the same places you would be able to use interfaces.

class Point {
    x: number = 0;
    y: number = 1;
}

interface Point3d extends Point {
    z: number;
}

var point3d: Point3d = { x: 1, y: 2, z: 3 };





// Further Explaination
// 1.  A type representing instances of the class: This means that if you have a class Car, then you can create objects that are of type Car. These objects are instances of the Car class, and they can be used wherever this type is expected.
// TypeScript

class Car {
    make: string = '';
    model: string = '';
}

let myCar: Car = { make: 'Toyota', model: 'Corolla' };


// 2. A constructor function: This is a function that is used to create new instances of the class. When you use the new keyword followed by the class name, you are calling the constructor function.
// TypeScript

class Car2 {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

let myCar2: Car2 = new Car2('Toyota', 'Corolla');