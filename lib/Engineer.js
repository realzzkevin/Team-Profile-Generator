const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        if (typeof github !=='string' || !github.match(/^[a-zA-Z0-9_-]{1,}$/)){
            throw new Error(`user name must be a string and cannot contain space`);
        }
        this.github = github;
    }

    // return github value and return role of engineer.
    getGithub(){
        return this.github;
    }
    
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;