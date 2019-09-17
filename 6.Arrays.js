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

var full = ages.map(function(cur) {// returns an array with elements satisfying the condition with same no of elements as the parent array.
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));// finds the index of the elements satisfying the given condition.
console.log(ages.find(cur => cur >= 18));// finds the elements satisfying the given condition.
console.log(ages.filter(cur=> (cur>15&& cur<19)));// filters out elements satisfying the condition(like above**)
console.log(ages.sort((a,b)=> a-b));/* sort function will have two elements passed into it. if the function returns a negative number , second element is bubbled to right and if it returns a positive no, 1st element will be bubbled to right side . This carries on until array is fully sorted*/
var sum = ages.reduce((sum,num)=>{return sum =num;}),0);/* reduce is used usually to get the sum of elements.The function gets two inputs, the sum(here) variable which will add all elements to itself and num(here) which is the array element. Here we initialize the sum variable with 0.*/  

//another example for Array.reduce()
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
   const transportation = data.reduce((obj,item)=>{
     if(!obj[item]){
       obj[item]=0;
     }
     obj[item]++;
     return obj;

   },{});
   console.log(transportation);



