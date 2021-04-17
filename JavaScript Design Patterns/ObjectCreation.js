
var newObject = {};

var newObject2 = Object.create( Object.prototype);

var newObject3 = new Object();


// ECMAScript 3 compatible approaches
newObject.someKey = "Hello World";

var value = newObject.someKey;


newObject["someKey"] = "Hello World";

var value = newObject["someKey"];


// ECMAScript 5 only compatible approaches

Object.defineProperty( newObject, "someKey", {
    value: "for more control of the property's behaviour",
    writable: true,
    enumerable: true,
    configurable: true
});

var defineProp = function ( obj, key, value ){
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty( obj, key, config );
};

var person = Object.create ( Object.prototype );

defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

console.log(person)


