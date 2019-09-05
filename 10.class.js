/////////////////////////////////
// Classes


//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hey there!');
    }
}
/*Unlike function constructors  class definitions are not hoisted . Therefore we need to fist implement a class first so that we can use that later. Also we cannot use properties in a class, only methods.

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/





