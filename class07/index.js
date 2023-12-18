//enum
//const enum
//arrays
//functions
//enum
//They allow you to declare a collection of related values that can be numeric or string-based. Enums make it easier to work with a fixed set of values within your code.
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color["Green"] = "TS";
    Color[Color["Blue"] = 55] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
//Arrays:
let array1 = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2 = [1, 2, 3, "wania"]; //alternative correct syntax
let array3 = []; //correct syntax to define an empty array
let array4 = new number[2]; //error
//methods
let array5 = [];
array5.push(1234); //dynamically adding
export {};
