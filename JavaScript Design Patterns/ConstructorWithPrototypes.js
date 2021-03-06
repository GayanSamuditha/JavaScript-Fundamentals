/* 
Constructors With Prototypes
Functions, like almost all objects in JavaScript, contain a "prototype" object. 
When we call a JavaScript constructor to create an object, all the properties of the 
constructor's prototype are then made available to the new object. In this fashion, 
multiple Car objects can be created which access the same prototype. We can thus extend the original example as follows:

*/

function Car( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object

Car.prototype.toString = function () {
    return this.model + " has done "+ this.miles + " miles";
};

// Usage :
 var civic = new Car( "Honda Civic", 2020, 5000000);
 var premio = new Car ( "Toyota Premio", 2021, 6000000);

 console.log( civic.toString());
 console.log( premio.toString());


// Above, a single instance of toString() will now be shared between all of the Car objects.