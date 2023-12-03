//Today's topics
//Arrays
// For loops
//Task of functions to create multiply,add,del,subtract
//union Literals - DIY
//objects
//object_aliased
//structural typing literals


//Union Literals: DIY

//objects:
let teacher = {
    "first-Name": "wania",
    age : 50,
    experience: 10
}

// console.log(teacher.first-Name)
console.log(teacher["age"])

//How to define Object's types

//1st method - directly define while declaring a variable
let Student : {
    name: string,
    class : string
} = {
    name : "wania",
    class : "AA65"
}

let uni : string = "Air"

Student = {
    name : "wania",
    class : "AA65",
}

let name1 : string;

name1 = "wania"

//method2 - using interface

interface University {
    id: string,
    courses: number,
    departments: number
}

let university : University = {
    id: "AIR101",
    courses: 10,
    departments : 15
}

console.log(university.courses)

//method 3 - using type
type Manager = {
    name: string,
    department : string
}

let manager : Manager = {
    name: "Wania",
    department : "IT"
}

console.log(manager.name)

//example - structural typing

interface Ball {
    diameter : number
}

let cricket_ball : Ball = {
    diameter : 10
}


interface Sphere {
    diameter : number
    color: string
}

let sphere : Sphere = {
    diameter : 10,
    color : "eee"
}

// sphere = cricket_ball //No Error
cricket_ball = sphere 


//Nested typing
type Author = {
    firstName : string,
    lastName : string   
}

type Book = {
    author : Author,
    publishedDate : string
}

let book : Book = {
    author:{
        firstName: "wania",
        lastName: "khan"
    },
    publishedDate:"2222"
}
console.log(book.author.firstName)