// Explanation:
// In this code, we're exploring 'generic constraints'. Generics allow us to create flexible components
// that work with different types. However, sometimes we want to restrict the types that can be used.
// That's where constraints come in.

// First, we define a basic object called MyObject with a 'name' property.
class MyObject {
    name: string = '';
}

// Now, let's create a Container class that works with types that extend MyObject.
class Container<T extends MyObject> {
    private _array: T[]; // Private array to store items of type T

    constructor() {
        this._array = []; // Initialize an empty array
    }

    // Explanation:
    // The 'add' method allows us to add an item of type T to the container.
    // We use the 'push' method to add the item to the internal array.
    add(item: T) {
        this._array.push(item);
        console.log(item.name); // Print the name of the added item
    }

    // Explanation:
    // The 'print' method iterates through the array and prints the names of all items.
    print() {
        this._array.forEach((value: T) => console.log(value.name));
    }
}

// Example 1: Creating an object of type MyObject2 (which extends MyObject)
class MyObject2 extends MyObject {
    doSomething() {
        console.log(this.name + " did it");
    }
}

let obj = new MyObject2();
obj.name = "Zeeshan";

let cont = new Container<MyObject2>();
cont.add(obj); // Add the object to the container
cont.print(); // Print the name of the object

// Example 2: You can't create a Container with string or number types (as shown in the commented lines)
// let c = new Container<string>(); // Error
// let c1 = new Container<number>(); // Error
