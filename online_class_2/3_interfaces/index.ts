//Interfaces:
//Interfaces in programming, particularly in languages like TypeScript, are like contracts or blueprints for objects.
//They define the shape that an object should have by specifying the names and types of properties or methods that an
// object must implement, but not the implementation details themselves. Interfaces are used to ensure that different
//parts of your code are compatible with each other by adhering to a common structure.

//Example without a named interface

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

//Fresh Objects:
//Case 1
printLabel({ label: "Size 10 Object" }); //Case 1 exact properties: OK

//Case 2a
printLabel({ mylabel: "Size 10 Object" }); //Case 2a missing or renamed property: Error

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
function printLabelX(labelledObj: { [x: string]: any }) {
  //Note now 'x' can have any name, just that the property should be of type string
  console.log(arguments[0]);
}
printLabelX({ name: "Zia" }); // Ok, `name` matched by index signature

//Case 3
printLabel({ size: 10, label: "Size 10 Object" }); //Case 3 Fresh Literal: Error no extra properties allowed

//Stale Objects:

//Case 1:
var myObj1 = { label: "Size 10 Object" };
printLabel(myObj1); //Case 1 exact properties: OK

//Case 2a:
var myObj2 = { mylabel: "Size 10 Object" };
printLabel(myObj2); //Case 2a missing or renamed property: Error

//Case 2b:
var obj3 = { name: "Zia" };
printLabelX(obj3); // Ok, `name` matched by index signature

//Case 3
var myObj4 = { size: 10, label: "Size 10 Object" };
printLabel(myObj4); //Case 3 Stale Literal: extra properties allowed

//**************************************************************

//Same Example with a named interface

interface LabelledValue {
  label: string;
}

interface LabelledValue2 {
  [x: string]: any;
}

function printLabelY(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

function printLabelY2(labelledObj: LabelledValue2) {
  console.log(arguments[0]);
}

//Fresh Objects

//Case 1
printLabelY({ label: "Size 11 Object" }); //Case 1 exact properties: OK

//Case 2a
printLabelY({ mylabel: "Size 11 Object" }); //Case 2a missing or renamed property: Error

//Case 2b
printLabelY2({ abc: "Zia" }); // Ok, `name` matched by index signature

//Case 3
printLabelY({ size: 11, label: "Size 11 Object" }); //Case 3 Fresh Literal: Error no extra properties allowed

//Stale Objects

//Case 1
var myObjY1 = { label: "Size 11 Object" };
printLabelY(myObjY1); //Case 1 exact properties: OK

//Case 2a
var myObjY2 = { mylabel: "Size 11 Object" };
printLabelY(myObjY2); //Case 2a missing or renamed property: Error

//Case 2b
var objY3 = { name: "Zia" };
printLabelY2(objY3); // Ok, `name` matched by index signature

//Case 3
var myObjY4 = { size: 11, label: "Size 11 Object" };
printLabelY(myObjY4); //Case 3 Stale Literal: extra properties allowed


//Interface with classes:
interface Magician {
  introduce(): void;
  performMagic(): void;
  eat?:{():void}
}
// let abc : string | number; 
// abc = "ad"
// if(abc == String){
//     console.log(abc + " ")
// }else{
//     console.log(abc + 22)
// }

let abc: string | number;
abc = "ad";

if (typeof abc === "string") {
    // When abc is a string, concatenate it with another string
    console.log(abc + " ");
} else {
    // When abc is not a string (in this case, a number), add 22 to it
    console.log(abc + 22);
}


class CardMagician implements Magician {
  introduce(): void {
    console.log("Ladies and Gentlemen, I'm the Card Magician!");
  }

  performMagic(): void {
    console.log("And now, I will make this card disappear!");
  }
}

class RabbitMagician implements Magician {
  introduce(): void {
    console.log("Hello! I am the Rabbit Magician!");
  }

  performMagic(): void {
    console.log("Watch closely as I pull a rabbit out of my hat!");
  }
}

let cardMagician = new CardMagician();
cardMagician.introduce(); // Outputs: Ladies and Gentlemen, I'm the Card Magician!
cardMagician.performMagic(); // Outputs: And now, I will make this card disappear!

let rabbitMagician = new RabbitMagician();
rabbitMagician.introduce(); // Outputs: Hello! I am the Rabbit Magician!
rabbitMagician.performMagic(); // Outputs: Watch closely as I pull a rabbit out of my hat!
