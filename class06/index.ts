//Structual Typing
//Type compatibility
//Fresh Objects
//Stale object

interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

//tube = ball;//Error
ball = tube;


//Fresh Object Casees:
interface Type {
    id: number,
    name: string
}
//Case 1
let myType = {id:22, name:"wania"} //ok

myType = {id: 24, name: "Muzhar"}
//Case 2a
myType = {id: 23, name_person:"wania"} //Error: missing property or rename
myType = {id: 23, admin:"wania"} //Error: missing property or rename

//Case 2b
let x : {id:number, [a:string]:any }

x = {id:2, name:"wania"}
x = {id:2, name_person:"wania"} //ok

//Case 3
myType = {id:2, name:"wania",age:60} //Error, excess property 
// myType = x


//Stale object cases:
let myType2 : {id:number, name:string}
myType2 = {id:33, name:"TS"}

//case 1:
myType = myType2 //ok

//case 2a:
let x1 = {id:22, new_name:"Wania" }
myType2 = x1 //Error - missing or rename property

//case 2b:
let x2 : {id:number, [w:string]:any} 
let y1 = {id: 88, admin_name:"Wania"}
x2 = y1 //ok
// myType = y1

//Case 3
let y2 = {id:44, admin_name:"Wania", age:60}
y1 = y2 //stale object
y2 =y1



