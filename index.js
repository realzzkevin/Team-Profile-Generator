const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team manager?',
        validate: (name)=> nameValidation(name),
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
        validate: (id)=>intValidation(id),
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter Email address:',
        validate: function (value){
            if (value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)){
                return true;
            } 
            return `Please enter a valide Email address.`;
        },
    },

    {
        type: 'input',
        name: 'officeNum',
        message: 'Enter office number:',
        validate: (value) => intValidation(value),
    },

    {
        type: 'list',
        name: 'option',
        message: 'Do you want to add more team members?',
        choices: ['Engineer', 'Intern', 'Finished'],        
    },
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the engineer?",
        validate : (name)=>nameValidation(name),
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter github account:",
        validate: function (value){
            if(value.match(/^[a-zA-Z0-9_-]{1,}$/)){
                return true;
            }
            return 'Please enter a valid github accoutn.';
        },
    },
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the intern?",
        validate: (name)=> nameValidation(name),
    },

    {
        type: 'input',
        name: 'school',
        message: 'Enter the name of school:',
        validate: (name)=>nameValidation(name), 
    },

]

let teamMembers = [];

function nameValidation(name){
    if(name.trim().length){
        return true;
    } else {
        return 'Please enter a valid name.';
    }
}

function intValidation(int){
    if(parseInt(int)){
        return true;
    } else {
        return 'Please enter a number.';
    }
}

function writeToFile(fileName, data){
    let html = generateHTML(data);
    fs.writeFile(`./dist/${fileName}`, html, (err)=>{
        if (err) throw err;
    });
    console.log(`${fileName} created!`);
}

function addManager(){
    inquirer
        .prompt([
            questions[0],
            questions[1], 
            questions[2], 
            questions[3]])
        .then((answer) =>{
            let manager = new Manager(answer.name, parseInt(answer.id), answer.email, parseInt(answer.officeNum));
            teamMembers.push(manager);
            console.log(`${manager.getRole()} ${manager.getName()} profile created`);
            options();
        })
        .catch(err =>{
            console.log(err);
        })

}

function addEngineer(){
    inquirer
        .prompt([
            questions[5],
            questions[1],
            questions[2],
            questions[6],
        ])
        .then((answer) =>{
            let engineer = new Engineer(answer.name, parseInt(answer.id), answer.email, answer.github);
            teamMembers.push(engineer);
            console.log(`${engineer.getRole()} ${engineer.getName()} profile created`);
            options();
        })
        .catch(err=>{
            console.log(err);
        })
}

function addIntern(){
    inquirer
        .prompt([
            questions[7],
            questions[1],
            questions[2],
            questions[8],
        ])
        .then((answer) =>{
            let intern = new Intern(answer.name, parseInt(answer.id), answer.email, answer.school);
            teamMembers.push(intern);
            console.log(`${intern.getRole()} ${intern.getName()} profile created`);
            options();
        })
        .catch(err =>{
            console.log(err);
        })
}

function options(){
    inquirer
        .prompt(questions[4])
        .then((answer)=>{
            let key = answer.option;
            switch (key) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Finished':
                    writeToFile('team_Portfolio.html', teamMembers);
                    return;
                default:
                    options();
                    break;
            }
        })
        .catch(err =>{
            console.log(err);
        })
}

function init(){
    teamMembers = new Array();
    addManager();
}

init();