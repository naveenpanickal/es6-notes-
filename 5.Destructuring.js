
/////////////////////////////////
// Lecture: Destructuring


// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6
const [name, age] = ['John', 26];// using [] because array elements are declared using []
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;/* using {} because objects are declared using {}. The const names here should be same as the names in the object*/
console.log(firstName);
console.log(lastName);
/* If we want to change the names use this method*/ 
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

/* Destructuring can be of great use during a function return; ie instead of returning the object as a whole we can use destructuring*/

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);



