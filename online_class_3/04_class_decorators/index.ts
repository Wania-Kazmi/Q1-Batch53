// http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
// http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-ii

// Decorators can be used to annotate a class, property, method or parameter.

// To invoke a class decorator we need to prefix the method that we wish to decorate
// with the @ character follow by the name of the decorator.




function logClass(target: any, key: any) {
    // save a reference to the original constructor
    var original = target;

    // the new constructor behaviour
    var f: any = function (...args: any[]) {
        console.log("New: " + original.name);
        return new original(...args);
    }

    // copy prototype so instanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

//apply the decorator to a class
@logClass
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

console.log(me instanceof Person);  // object instanceof Class
// true



// What is prototype

// Imagine you’re the captain of a spaceship and you have a team of robots to help you. Now, you want all your robots to be able to say “Hello, Captain!” whenever you arrive.

// Instead of teaching each robot individually, you decide to add this greeting ability to their “blueprint” or “prototype”. Now, every robot made using this blueprint can say “Hello, Captain!”.

// In JavaScript, objects are like these robots. The prototype is their blueprint. When you add a function or property to the prototype, all objects created from it get that function or property. So, it’s like adding a new ability to all your robots at once!