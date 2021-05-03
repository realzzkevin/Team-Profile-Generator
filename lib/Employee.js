class Employee {
    constructor(name, id, email){

        if(typeof name !=='string' || !name.trim().length){
            throw new Error(`name can not be a empty string`);
        }

        if(typeof id !=='number' || id<=0){
            throw new Error(`id must be a positive integer`);
        }

        if(typeof email !=='string' || !email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)){
            throw new Error(`email must be a non-empty string and in valid format`);
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    
    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}


module.exports = Employee;