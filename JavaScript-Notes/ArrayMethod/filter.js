const arr = [5, 1, 3, 2, 6];

// function isOdd(x) {
//     return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// function isEven(x) {
//     return x % 2 === 0;
// }
// const output = arr.filter(isEven);
// console.log(output);

// function greaterThan4(x) {
//     return x > 4;
// }
// const output = arr.filter(greaterThan4);
// console.log(output);

// const output = arr.filter(function greaterThan4(x){
//     return x > 4;
// });
// console.log(output);
// arrow function
// const output = arr.filter((x) => x > 4);
// console.log(output);

// const users = [
//     { firstName: 'Awais', lastName: 'Yafai', age: 28},
//     {firstName: 'Abdullah', lastName: 'Chaush', age: 26},
//     {firstName: 'Virat', lastName: 'Kohli', age: 34},
//     {firstName: 'Aliya', lastName: 'Bhatt', age: 26},
// ];
// // const output = users.filter(x => x.age < 30);
// // console.log(output);

// const output = users.filter(x => x.age < 30).map(x => x.firstName);
// console.log(output);

const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });
// arrow function
const filtered = numbers.filter(n => n >=  0);
console.log(filtered);