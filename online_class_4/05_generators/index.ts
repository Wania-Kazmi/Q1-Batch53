// This generator function demonstrates how to create an iterable sequence of values using the 'yield' keyword.
// Execution of the generator is paused until the next iteration is invoked.

function* generatorFn(): IterableIterator<string> {
    // First task: yield the value "firstValue"
    yield "firstValue";

    // Second task: yield the value "secondValue"
    yield "secondValue";

    // Third task: yield the value "thirdValue"
    yield "thirdValue";
}

// Create an instance of the generator
const generator = generatorFn();

// Example 1: Iterate through the generator using a 'for...of' loop
console.log("Example 1:");
for (const value of generator) {
    console.log(value);
}

// Example 2: Manually iterate through the generator using 'next()' method
console.log("\nExample 2:");
const next1 = generator.next();
console.log(next1.value); // Output: "firstValue"

const next2 = generator.next();
console.log(next2.value); // Output: "secondValue"

const next3 = generator.next();
console.log(next3.value); // Output: "thirdValue"


// Feel free to experiment with the generator and observe how it behaves!