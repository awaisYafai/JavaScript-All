// this method checks if at least one element is an array that passes the comdition, returning true or false as appropriate
const arr = [1, 2, 3, 4, 5, 6, 7];
 
// atleast one element is greather than 5
const greaterThan5 = arr.some(num => num > 5);
console.log(greaterThan5);


// at least one element is less tha or equal to 0
const less0 = arr.some (num => num <= 0);
console.log(less0);