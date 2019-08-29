/////////////////////////////////
// Blocks and IIFEs


// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b); // error as a and b are only accessible inside the block 
console.log(c);// output:3 as var is accessible throughout the function


// ES5 /*Instead of using IIFEs , we could create a simple block with let and const to ensure data privacy*/
(function() {
    var c = 3;
})();

//console.log(c);




