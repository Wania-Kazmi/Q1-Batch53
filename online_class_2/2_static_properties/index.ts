//Static Properties
//Imagine a school where every classroom has its own clock, but there's also a big clock in the schoolyard that everyone
//can see from their windows. This big clock is important because it ensures that everyone is on the same schedule,
//whether it's time for classes to start, for lunch, or to go home. In this analogy, the big clock is like a
//static property in programming. It's shared among all the classrooms (instances) and doesn't belong to just
//one classroom.

//Purpose of static properties:
//1. Shared Value :
//When you want a property to be shared across all instances of a class, you make it static.
//This means all instances of the class see the same value, and if it changes, it changes for all of them.

//2. Utility Function :
//When you want a function to be shared across all instances of a class, you make it static.
//This means all instances of the class can call the function, and if it changes, it changes for all of them.

//3.Global Access:
//Since static properties and methods are accessed through the class name, they can be used without creating an
//instance of the class. This makes them easy to access from anywhere in your code.

//Example:
class School {
  // Static property
  static schoolDayEnds = "3:00 PM";

  static announceEndOfDay() {
    console.log(`School ends at ${School.schoolDayEnds}.`);
  }

  checkIfSchoolEnds(time: string) {
    if (time === School.schoolDayEnds) {
      console.log("Yes, it's time to go home!");
    } else {
      console.log("No, not yet.");
    }
  }
}

// Accessing static property without creating an instance
School.announceEndOfDay(); // School ends at 3:00 PM.

// Creating an instance to use non-static method
let myClass = new School();
myClass.checkIfSchoolEnds("3:00 PM"); // Yes, it's time to go home!
myClass.checkIfSchoolEnds("2:00 PM"); // No, not yet.

//schoolDayEnds is a static property of the School class. It's like the big clock in the schoolyard that everyone refers to. It ensures that no matter which classroom (instance) you're in, the end of the school day is the same for everyone. This property doesn't belong to any single instance of the School class but to the class itself.
//announceEndOfDay is a static method that prints the time when the school day ends, using the static schoolDayEnds property. You can call it without creating an instance of the School class, similar to how anyone can look at the big clock without being in a specific classroom.
//checkIfSchoolEnds is a non-static method that needs an instance of the class to be called. It compares a given time with the static schoolDayEnds property to tell if it's time to go home. Even though this method requires an instance, it still accesses the static property, showing how static properties can be shared among instances.

//why you need static property?
//Static properties are useful when you have a value or information that should be shared across all instances of a class. 
//They help keep data consistent and accessible without needing to create an object of the class. 
//In our school analogy, having the big clock as a "static property" ensures that everyone in the school operates 
//on the same schedule, maintaining order and consistency
