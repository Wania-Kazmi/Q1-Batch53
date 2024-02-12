//What is inheritance?
// Inheritance in Object-Oriented Programming (OOP) is like family genetics but for computer code.
//---------------------------------------BASE CLASS/ PARENT CLASS---------------------------------------------
//Imagine you have a basic blueprint for a gadget, like a simple phone that can only make calls.
//This blueprint is like a class in OOP, which defines what the gadget can do and what it knows about itself.
//--------------------------------------DERIVED CLASS/ CHILD CLASS--------------------------------------------
//Now, say you want to create a smartphone. Instead of starting from scratch, you take the simple phone blueprint
//and add new features to it, like browsing the internet, taking photos, and playing games.
//This process of taking the simple phone's blueprint and extending it with new capabilities is what we call inheritance in OOP.


//Example :
// This is our base class representing all vehicles
class Vehicle {
    public speed: number;
    // brakes:string;

    constructor(speed: number) {
        this.speed = speed; 
        // this.brakes = brakes;
    }

    drive() {
        console.log(`Driving at ${this.speed} miles per hour`); //within the class
    }
}

// The Car class inherits from Vehicle
class Car extends Vehicle {
    color: string;


    constructor(speed: number, color: string) {
        super(speed); // Call the constructor of the Vehicle class
        this.color = color;
    }

    // We can add methods specific to Car
    honk() {
        console.log("Beep beep!");
    }
    speed_check(){
        console.log("This is car speed", this.speed) //within child class
    }
}

// Create a new Car object
let myCar = new Car(60, "red");
myCar.drive(); // Output: Driving at 60 miles per hour
myCar.honk();  // Output: Beep beep!
myCar.speed;   // outside of the class
