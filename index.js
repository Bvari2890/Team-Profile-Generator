const inquirer = require('inquirer');
const fs = require('fs');
const constantsFile = require('./src/constant');
const {Card} = require('./src/createCard');
const {Intern} = require('./lib/Intern');
const {Manager} = require('./lib/Manager');
const {Engineer} = require('./lib/Engineer');

const intern = constantsFile.generalInfo.concat(constantsFile.internInfo);
const manager = constantsFile.generalInfo.concat(constantsFile.managerInfo);
const engineer = constantsFile.generalInfo.concat(constantsFile.engineerInfo);
const card = new Card();
let profiles = '';

const selectAction = () => {
    inquirer.prompt([{
        name: 'userActions',
        type: 'list',
        message: 'Select your next action:',
        choices: ['Add Engineer', 'Add Intern', 'Finalize Team'],
    }]).then((action) =>{
        switch (action.userActions) {
            case 'Add Engineer':
                askEngineer();
                break;
            case 'Add Intern':
                askIntern();
                break;
            case 'Finalize Team':
                // console.log('finalizing team!');
                writingFile()
                break;
                
        }
    })
}

const askEngineer = () => {
    inquirer.prompt(engineer).then((info) => {
    let newEng = new Engineer(info.name, info.id, info.email, info.github);
    profiles += card.getInfo(newEng);
    selectAction();
})}

const askIntern =() => {
    inquirer.prompt(intern).then((info) => {
        const newIntern = new Intern(info.name, info.id, info.email, info.school);
        profiles += card.getInfo(newIntern);
        selectAction();
    })
}


inquirer.prompt(manager).then(async (answers)=>{
    const newMngr = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    profiles += card.getInfo(newMngr);
    selectAction();
}) 
  
function writingFile() {
    fs.writeFile('./dist/index.html', constantsFile.writeOutput(profiles), (err) => {
    err ? console.log(err) : console.log('Generated');
    });
}
module.exports = profiles;