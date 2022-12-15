// Call Back Function = passing the function in another function as peramter
function sayHi(){
    console.log('Hii..');
}

function sayHello(){
    console.log('hello');
}
function add(num1, num2, callBack){
    console.log(num1, num2);
    callBack();

}
let a = 10;
let b = 20;

add(a, b, sayHi);
add(30, 4, sayHello);


add(30, 4, function(){
    console.log('bye...');
});