const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        if(typeof shcool !== string || ! school.trim().length){
            throw new Error (`School name canot be a empty string`);
        }
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;