const inquirer = require('inquirer');

const Manager = require('./Manager.js');

const Intern = require('./Interns.js');

const Engineer = require('./Engineer.js');

const siteGenerator = require('./src/generated-site.js');
const fs = require("fs");
const path = require("path");
const { type } = require('os');
const { validate } = require('@babel/types');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'what is the Manager name? (Required)',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter the Manager name');
                    return false;                    
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the manager employee ID (Required)',
            validate: idInput => {
                if(idInput){
                    return true;
                }else{
                    console.log('Please Enter the employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the manager email address (Required)',
            validate: email => {
                if(email){
                    return true;
                }else{
                    console.log('Please Enter the Email Address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the manager office number (Required)',
            validate: idInput => {
                if(idInput){
                    return true;
                }else{
                    console.log('Please Enter the Office Number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose which employee option would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }
    ])
    .then(userchoice => {
        switch(userchoice.menu){
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
};

const promptEngineer = () =>{
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer? (Required)',
        validate: engineerName => {
            if(engineerName){
                return true;
            }else{
                console.log('Please enter the name of the Engineer');
                return false;
            }
        }     
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is the Employee Id of the engineer? (Required)',
        validate: employeeID => {
            if(employeeID){
                return true;
            }else{
                console.log('Please enter the ID of the Engineer');
                return false;
            }
        }     
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Email of the engineer? (Required)',
        validate: email => {
            if(email){
                return true;
            }else{
                console.log('Please enter the email of the Engineer');
                return false;
            }
        }     
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is the GitHub uUername of the engineer? (Required)',
        validate: githubUser => {
            if(githubUser){
                return true;
            }else{
                console.log('Please enter the GitHub Username of the Engineer');
                return false;
            }
        }     
    }
    ]).then(answers => {
        console.long(answers);
        const engineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.githubUser);
        teamMembers.push(engineer);
        promptMenu();
    })
};
const promptIntern = () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern? (Required)',
            validate: engineerName => {
                if(engineerName){
                    return true;
                }else{
                    console.log('Please enter the name of the Intern');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the Employee Id of the Intern? (Required)',
            validate: employeeID => {
                if(employeeID){
                    return true;
                }else{
                    console.log('Please enter the ID of the Intern');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Email of the Intern? (Required)',
            validate: email => {
                if(email){
                    return true;
                }else{
                    console.log('Please enter the email of the Intern');
                    return false;
                }
            }     
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school name of the Intern? (Required)',
            validate: email => {
                if(email){
                    return true;
                }else{
                    console.log('Enter the School Name of the Intern');
                    return false;
                }
            }     
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeID, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
        ===============
        Finished building the Team
        ===============
        `);
        if (!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, generateSite(teamMembers), "UTG-8");
}
promptManager();