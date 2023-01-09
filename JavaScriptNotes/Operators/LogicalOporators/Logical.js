//Logical and  && oporators
// Returns True if both operators are True

console.log(true && true);
// true

// Logical OR (||)
// Return True if one the operators is True
 let highIncome = true;
 let goodCreditScore = true;
 let eligibleForLoan = highIncome || goodCreditScore;

 console.log('Eligible', eligibleForLoan);

 //NOT ( ! )
 let applicationRefused = !eligibleForLoan;
 console.log('Applicatin Refuced', applicationRefused);

 // falsy (false)
 // undefined
// null
// 0
// false
// NaN

let userColor = 'red';
let defualtColor = 'blue';
let currentColor = userColor || defualtColor;

console.log(currentColor);

