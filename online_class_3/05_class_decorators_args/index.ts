
// "Decorator Factory":  A decorator factory is a function that can accept any number of arguments, 
//   and must return one of the types of decorator.

function logClassWithArgs(filter: Object) {
    return (target: Object, key: any) => {
        // implement class decorator here, the class decorator 
        // will have access to the decorator arguments (filter) 
        // because they are  stored in a closure 
        console.log(target, filter);
    }
}



//apply the decorator to a class
@logClassWithArgs({ when: { name: "Zeeshan" } })
class Person {

    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}


var me = new Person("Zia", "Khan");
// New: Person

console.log(me instanceof Person);
// true