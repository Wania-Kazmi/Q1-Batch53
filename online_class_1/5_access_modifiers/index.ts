//Access_modifiers:
//public: Members marked as public can be accessed from anywhere in the program.

//private: Members marked as private can only be accessed within the class they are defined in.
//They are not accessible from outside the class or by any class that inherits from the class.

//protected: Members marked as protected can be accessed within the class they are defined in
//and by instances of classes that inherit from this class. They are not accessible from outside these two scopes.

//In TypeScript, each member is public by default.
//Example of Private member:
class Animal1 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  move(meters: number) {
    alert(this.name + " moved " + meters + "m.");
  }
}

var a11 = new Animal1("cat").name;
console.log(a11);

//Example of protected memeber:
class Vehicle {
  private privateNumber: number;
  protected protectedNumber: number;

  constructor(privateNumber: number, protectedNumber: number) {
    this.privateNumber = privateNumber;
    this.protectedNumber = protectedNumber;
  }

  showProtectedNumber(): void {
    console.log(`Protected Number: ${this.protectedNumber}`);
  }
}

class Car extends Vehicle {
  constructor(privateNumber: number, protectedNumber: number) {
    super(privateNumber, protectedNumber);
  }

  showNumbers(): void {
    // console.log(`Private Number: ${this.privateNumber}`); // Error: Property 'privateNumber' is private and only accessible within class 'Vehicle'.
    console.log(`Protected Number: ${this.protectedNumber}`); // OK: Can access protected member
  }

//   updatePassword():{
//     password = newpassword
//   }
}

const myVehicle = new Vehicle(123, 456);
// myVehicle.privateNumber; // Error: Property 'privateNumber' is private and only accessible within class 'Vehicle'.
// myVehicle.protectedNumber; // Error: Property 'protectedNumber' is protected and only accessible within class 'Vehicle' and its subclasses.

const myCar = new Car(789, 1011);
myCar.showNumbers(); // Outputs: Protected Number: 1011
myVehicle.showProtectedNumber(); // Outputs: Protected Number: 456
