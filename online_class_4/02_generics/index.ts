// Explanation:
// In languages like C# and Java, one of the main tools for creating reusable components is 'generics'.
// Generics allow us to create a component that can work with different types (e.g., strings, numbers, etc.)
// instead of being tied to a single type. This flexibility allows users to consume these components
// and use their own specific types.

class Container<T> {
    private _array: T[]; // Private array to store items of type T

    constructor() {
        this._array = []; // Initialize an empty array
    }

    // Explanation:
    // The 'add' method allows us to add an item of type T to the container.
    // We use the 'push' method to add the item to the internal array.
    add(item: T) {
        this._array.push(item);
    }
}

// Example 1: Creating a container for strings
let stringContainer = new Container<string>();
stringContainer.add("Hello");
stringContainer.add("World");

// Example 2: Creating a container for numbers
let numberContainer = new Container<number>();
numberContainer.add(42);
numberContainer.add(123);

// Now we can use these containers to store and manage different types of data!
