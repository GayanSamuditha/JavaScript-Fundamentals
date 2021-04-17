

/* 
Modules
Modules are an integral piece of any robust application's architecture and typically help in keeping the 
units of code for a project both cleanly separated and organized. */

/* 
In JavaScript, there are several options for implementing modules. These include:

The Module pattern
Object literal notation
AMD modules
CommonJS modules
ECMAScript Harmony modules

*/
// ======================================================================================================


// Object Literals

/* In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in 
curly braces ({}). Names inside the object may be either strings or identifiers that are followed by a colon. 
There should be no comma used after the final name/value pair in the object as this may result in errors. */

var myObjectLiteral = {

    variableKey: variableValue,

    functionKey: function () {
        // ...............
    }
};

/*
NOTE:
================
Object literals don't require instantiation using the new operator but shouldn't be used at the start of a statement 
as the opening { may be interpreted as the beginning of a block. Outside of an object, new members may be added to it 
using assignment as follows myModule.property = "someValue";
*/