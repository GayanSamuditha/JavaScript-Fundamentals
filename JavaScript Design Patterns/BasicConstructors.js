
function Car ( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done "+ this.miles + " miles";
    };
}


var civic = new Car("Honda Civic", 2021, 4500000);
var allion = new Car("Toyota Allion", 2021, 5500000);

console.log(civic.toString());
console.log(allion.toString());
