/////////////////////////////////
// let and const


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); // Error shows up as we cannot change a const value.

/* let and const only have block scope while var has function scope. For eg , if we declare a let or const in an if block or for loop, we won't be able to acces it outside the block. While var is accessible across a function.*/

// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}// console.log prints the output as the var declared inside the if block is accessible in the driverLicense5 function.
driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);/*If we print a let variable before it is declared it will show error because of temporal dead zone while if it were a var it would show undefined due to fact that in the execution context, all variables are hoisted and set to undefined. In the case of let and const, the variables are actually hoisted but still we cannot access them.*/ 
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);


//ES5

var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);// Outout : 0 1 2 3 4
}
\console.log(i); // Output:5 

//ES6

let i = 23;
for(let i = 0; i<5; i++){
console.log(i)}//Output:0 1 2 3 4
console.log(i) //Output:23




