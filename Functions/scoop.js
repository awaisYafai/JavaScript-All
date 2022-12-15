// local vs global scoop

const color = 'red';  // global object

function start(){
    const massage = 'hi';
    const color = 'blue'; // local object
    console.log(color);
}
function stop (){
    const massage = 'bye';
}

start();