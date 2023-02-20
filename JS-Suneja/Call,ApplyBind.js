// call, Apply & Bind in js

// problem statement

let userDetails={
    name : 'awais yafai',
    age: 28,
    Designation:'software engineer',
    printDetails: function(){
        console.log(this.name)
    }

}
userDetails.printDetails();


let userDetails2={
    name : 'awais chaus',
    age: 29,
    Designation:'software engineer',
    

}
userDetails.printDetails.call(userDetails2)