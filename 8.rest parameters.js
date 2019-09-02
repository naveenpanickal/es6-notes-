/////////////////////////////////
// Rest parameters


//ES5
function isFullAge5() { // no need to specify anything if the number of arguments passed is dynamic 
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);/* Array.prototype.slice.call has 3 argumnts usually, first argument is the array to be sliced, second is which element to start slicing from, and third up to where*/
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}


//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) { // here the spread operator converts the arguments in to an array names years
    years.forEach(cur => console.log( (2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);// as limit is the first argument passed, we need slicing from position 1 and not 0.

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}


//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(limit, ...years) {// here limit = 16, years = [1990,1999,1965,2016,1987]
    years.forEach(cur => console.log( (2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);





