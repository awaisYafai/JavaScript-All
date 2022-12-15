const person = {
    firstName: 'Virat',
    lastName: 'Kohli',
    set fullName(value){
        if (typeof value !== "string")
        throw new Error('value is not a string.');
    
        const parts = value.split(' ');
        if (parts.lenght !==2)
        throw new Error('enter a firstand last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
person.fullName = '';
}
catch (e){
    alert(e);
}

console.log(person);