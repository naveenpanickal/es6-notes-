/////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);/* Instead of using the array slice method , we can use Array.from method to obtain array directly from nodelist.*/ 
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/*---------------------------------------*/
//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
    
}


//ES6
for (const cur of boxesArr6) {/* this means, for current element of boxes, do the task.*/
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


/*------------------------------------------*/

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {// returns an array with elements satisfying the condition.
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));// finds the index of the elements satisfying the given condition.
console.log(ages.find(cur => cur >= 18));// finds the elements satisfying the given condition.





