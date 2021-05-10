const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){        

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        
        if(typeof school !=='string' || !school.trim().length){
            throw new Error('School name canot be a empty string');
        }

        this.school = school;
    }
    //return school
    getSchool(){
        return this.school;
    }
    //return role, which is Intern.
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;