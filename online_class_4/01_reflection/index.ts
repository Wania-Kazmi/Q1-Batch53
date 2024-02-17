///<reference path="node_modules\reflect-metadata\reflect-metadata.d.ts"/>

// This line refers to a TypeScript definition file (d.ts) that provides additional type information.
// It helps TypeScript understand certain libraries or modules.

// The following import statement brings in the 'reflect-metadata' library.
// This library allows us to work with metadata (extra information) about our code.

import "reflect-metadata";

// Now let's define a decorator called 'logType'.
// A decorator is like a special sticker we can put on things in our code.

function logType(target: any, key: any) {
    // The 'target' here refers to the class (or object) containing the property.
    // The 'key' is the name of the property we're decorating.

    // We use 'Reflect.getMetadata' to find out the type of the property.
    // It's like peeking at the label on a box to see what's inside!
    var t = Reflect.getMetadata("design:type", target, key);

    // Finally, we log a message telling us what type 'attr1' is (e.g., "string").
    console.log(`${key} type: ${t.name}`);
}

// Now let's create a class called 'Demo'.
class Demo {
    // We apply our 'logType' decorator to the 'attr1' property.
    @logType
    public attr1: string = 'Reflection';

}
