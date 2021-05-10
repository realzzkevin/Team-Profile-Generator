const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;

        if (typeof officeNumber !=='number' || officeNumber <= 0){
            throw new Error(`office number must be a positive integer`);
        }

        this.officeNumber = officeNumber;

    }
    // return office number
    getOfficeNumber () {
        return this.officeNumber;
    }
    //role is Manager
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;