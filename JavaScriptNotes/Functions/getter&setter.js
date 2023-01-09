const person = {
    firstName: 'Virat',
    lastName: 'Kohli',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split('');
        this.firstName = parts(0);
        this.lastName = parts(1);
    }
};

person.fullName = 'Rohit Sharma';

console.log(person);