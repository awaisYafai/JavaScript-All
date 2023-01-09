function createfunction(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}
const mycircle = creatCircle(1);