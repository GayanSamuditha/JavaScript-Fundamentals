// The Module pattern was originally defined as a way to provide both private and public encapsulation 
// for classes in conventional software engineering.


// In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that 
// we're able to include both public/private methods and variables inside a single object, thus shielding 
// particular parts from the global scope. What this results in is a reduction in the likelihood of our function 
// names conflicting with other functions defined in additional scripts on the page.



var testModule = ( function() {
    var counter = 0;

    return{
        incrementCounter : function() {
            return counter++;
        },

        resetCounter: function () {
            console.log( "Counter value prior to reset: "+ counter );
            counter = 0;
        }
    };
})();

//Usage:

// Increment our counter
testModule.incrementCounter();

//Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

/**
 * NOTE:
 * =====
 * Here, other parts of the code are unable to directly read the value of our incrementCounter() or resetCounter(). 
 * The counter variable is actually fully shielded from our global scope so it acts just like a private variable would - its 
 * existence is limited to within the module's closure so that the only code able to access its scope are our two functions. 
 * Our methods are effectively namespaced so in the test section of our code, we need to prefix any calls with the name of 
 * the module (e.g. "testModule").
 * 
 */




var myNameSpace = (function() {
    var myPrivateVar, myPrivateMethod;

    // A private counter variable
    myPrivateVar = 0;

    //A private function which logs any arguments
    myPrivateMethod = function (foo){
        console.log( foo );
    };

    return {

        // A public variable
        myPrivateVar: "foo",

        // A public function utilizing privates
        myPublicFunction: function( bar ){
            
            // Increment our private counter
            myPrivateVar++;

            // Call our private method using bar
            myPrivateMethod(bar);
        }
    };
})();