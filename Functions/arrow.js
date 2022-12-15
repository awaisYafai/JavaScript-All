// function
function sum(a, b){
    return a+b;
}

// arrow fnction single line
let sum2 = (a, b) => a + b;


// arrow functuon multi line (used in anonamous function)
let sum1 = (a, b) => {
    a = 2*a;
    return a+b
}

// arrow function with single parameter
let double = a => 2*a;

// arrow function without perameter
let random = () => Math.random();

// arrow function in anonamous function(call back function)
document.addEventListener('click', () => console.log('clicked..'));
