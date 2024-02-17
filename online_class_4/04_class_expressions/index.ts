// Explanation:
// In this code, we're exploring class expressions. Similar to class declarations,
// class expressions allow us to create new classes. However, there's a key difference:
// you can use class expressions wherever you use an expression (e.g., as part of an extends clause).

// First, we define an anonymous class expression with a single method called 'reset'.
// This method simply returns true.
const AnonymousClass = class {
    reset() {
        return true;
    }
};

// Now, let's create a StateHandler class that extends our anonymous class.
class StateHandler extends AnonymousClass {
    constructor() {
        super(); // Call the constructor of the parent class
    }
}

// Example 1: Creating an instance of StateHandler
const handler = new StateHandler();
console.log(handler.reset()); // Output: true

// Example 2: You can use this anonymous class just like any other class!
// For instance, you can add more methods or properties to it.
// Even though it's anonymous, it has all the same capabilities as named class declarations.
