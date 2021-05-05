const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inter = require('./lib/Intern');
const Intern = require('./lib/Intern');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team manager?',
        validate: (name)=> nameValidation(name),
        /*validate: function (answer){
            if(answer.trim().length){
                return true;
            } else {
                return 'Please enter a valid name.';
            }
        },*/
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
        validate: (id)=>intValidation(id),
        /*
        validate: function (value){
            if(parseInt(value)){
                return true;
            } else {
                return 'Please enter a number.';
            }
        },*/
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
        validate: function (value){
            if(parseInt(value)){
                return true;
            } else {
                return 'Please enter a number.';
            }
        },
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
        message: "Enter github account",
        validate: function (value){
            if(value.match(/^[a-z0-9_-]{0,}$/)){
                return true;
            }
            return 'Please enter a valid github accoutn';
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
        message: 'Enter the name of school',
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

}

function addManager(){
    inquirer
        .prompt([
            questions[0],
            questions[1], 
            questions[2], 
            questions[3]])
        .then((answer) =>{
            console.log(answer);
            console.log(parseInt(answer.id));
            let manager = new Manager(answer.name, parseInt(answer.id), answer.email, parseInt(answer.officeNum));
            teamMembers.push(manager);
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
            console.log(answer);
            let engineer = new Engineer(answer.name, parseInt(answer.id), answer.email, answer.github);
            teamMembers.push(engineer);
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
            console.log(answer);
            let intern = new Intern(answer.name, parseInt(answer.id), answer.email, answer.school);
            teamMembers.push(intern);
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
                    console.log(teamMembers);
                    writeToFile('team Portfolio', teamMembers);
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