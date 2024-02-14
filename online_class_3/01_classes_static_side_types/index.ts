// In TypeScript, classes have two types:

// 1. The instance side (which includes properties and methods).
// 2. The static side (which includes the constructor and static members).

// When dealing with constructor signatures in interfaces, we focus on the static side.
// By using the new keyword in an interface, we describe how the constructor should look.
// To create instances, we work with the class directly (as shown with Clock).




interface ClockInterface {
    new(hour: number, minute: number): ClockInterface; //this defines a constructor signature
}

// static side, it cannot be implemented:

// we get an error:

// class Clock1 implements ClockInterface { //Error
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) { }
// }



// Instead, you would need to work with the 'static' side of the class directly.
//  In this example, we work with the class directly:

interface ClockStatic {
    new(hour: number, minute: number): ClockStatic;
}

interface MyClockInterface {
    currentTime: Date;
}

class Clock implements MyClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { }
}



// var cs: ClockStatic = Clock; // Error

// var newClock: ClockInterface = new cs(7, 30);