// this method checks every element in ana array that passes the condition returning true or false as appropriat
const arr = [1, 2, 3, 4, 5, 6, 7];

// all elemnt are greater than 5
const greaterThan5 = arr.every(num => num > 5);
console.log(greaterThan5);

// all elements are less than 9
const less9 = arr.every (num => num < 9);
console.log(less9);