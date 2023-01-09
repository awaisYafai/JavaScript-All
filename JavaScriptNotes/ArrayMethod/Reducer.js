// .reduce array : reduce function is used at a place where you have to take all the element of a array
//coming out with single value of them
// used to reduce the array to a single vaLUE of an array and the return value of the function is stored in an 
// accumulator
// a reducer will only return one value and one value only hence the name reduce

// const arr = [5, 1, 3, 2, 6];

// const output = arr.reduce(function (max, curr){
//     if (curr > max ){
//         max = curr;
//     }
//     return max;
// }, 0);
// console.log(output);
// non functional way or for loop
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));


// const output = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
    
// },0);

const users = [
    { firstName: 'Awais', lastName: 'Yafai', age: 28},
    {firstName: 'Abdullah', lastName: 'Chaush', age: 26},
    {firstName: 'Virat', lastName: 'Kohli', age: 34},
    {firstName: 'Aliya', lastName: 'Bhatt', age: 26},
];

const output = users.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];

    }
    else{
        acc[curr.age] = 1;
    }
    return acc;

}, {});
console.log(output);

