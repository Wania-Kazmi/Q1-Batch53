//   The concept of a hybrid type refers to an object that combines properties of both a function and an object.

// Purpose:
// Hybrid types are useful when working with 3rd-party JavaScript libraries or APIs.
// They allow you to fully describe the shape of an object that behaves both like a function and an object.


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

let c: Counter;
c = function (start: number) {
    console.log(`Start: ${start}`);
    return "done";
} as Counter; // Type assertion

c.interval = 5.0;
c.reset = function () { console.log("Reset"); };



c(10);
c.reset();
console.log(`Interval: ${c.interval}`);