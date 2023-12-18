//enum
//const enum
//arrays

//enum
//They allow you to declare a collection of related values that can be numeric or string-based. Enums make it easier to work with a fixed set of values within your code.

enum Color {Red = 2, Green = "TS", Blue = 55};//starts with 0
var c: Color = Color.Green;
console.log(c)

enum Color1 {Red = 1, Green = 1, Blue};
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);


//const enum
//Whenever you use const enum it's a bit different then simple enum.
//In case of const enum we give special instructions to Typescript that whenever you use "Color", just replace it with actual numbers (1,2,3) in our case.
//So when try let a1: Color12 = Color12[3] -> TypeScript doesn’t keep track of which number belongs to which color during compilation as it replace the Color with actual number that's why Color[3] is not allowed in const enum case 
// Whereas simple enum maintain both the names and numbers at runtime


const enum Color11 {Red, Green, Blue};//starts with 0
var a: Color11 = Color11.Green;
console.log(a)

const enum Color12 {Red = 1, Green = 2, Blue = 3}
// let a1: Color12 = Color12[3] //not allowed in const
// console.log(a1)

const enum Color13 {Red = 1, Green = 2, Blue = 3}
let a2 = Color13["Blue"] //allowed
console.log(a2)

//Arrays:
let array1: number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax

let array2: Array<number | string> = [1, 2, 3, "wania"]; //alternative correct syntax

let array3: number[] = []; //correct syntax to define an empty array

// let array4: number[] = new number[2];//error

//methods
let array5: number[] = [];
array5.push(1234); //dynamically adding

// let arr: number[] = [1,2,3,4]

// console.log(arr)
// arr.push(6)

// console.log(arr)
// let p = arr.pop()

// console.log(arr)
// console.log(p)

// let arr: number[] = [1,2,3,4]

// console.log(arr)
// arr.unshift(6)

// console.log(arr)
// let p = arr.shift()

// console.log(arr)
// console.log(p)

// let arr: number[] = [1,2,3,4]
// let arr2: number[] = [5,6,7]

// let arr3 = arr.join("-")
// console.log(arr3)

// let arr: string[] = ["hello","world"]

// let arr3 = arr.join(" ")
// console.log(arr3)

// let arr: number[] = [1,2,3,4,5,6]

// let arr3 = arr.slice(1,5)
// console.log(arr3)

// let arr: number[] = [1,2,3,4,5,6]

// let arr3 = arr.splice(1,0,67)
// console.log(arr)
// console.log(arr3)

let arr: number[] = [1, 2, 3, 4, 5, 6];

let arr3 = arr.splice(1, 2, 67);
console.log(arr);
console.log(arr3);
