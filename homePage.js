const fs = require('fs');
const inquirer = require('inquirer');
const classConstructor = require('./classConstructor');

const storeJson = fs.readFileSync('movies.json', 'utf8');
var moviesFolder = JSON.parse(storeJson);

function homePage() {
    if (classConstructor.state){
        console.log("                                                         Zendus' HomePage                           ")
    console.table(moviesFolder); 
}
    inquirer.prompt({
        type: 'list',
        name: 'genre',
        message: 'Please select a genre',
        choices: ['Drama', 'Action', 'Horror', 'Thriller']
    }).then(answer => {
        if (answer.genre === 'Drama') {
            classConstructor.drama();
        } else if (answer.genre === 'Action') {
            classConstructor.action()
        } else if (answer.genre === 'Horror') {
            classConstructor.horror()
        } else if (answer.genre === 'Thriller') {
            classConstructor.thriller();
        }

    })
    classConstructor.state = false;
}


exports.homePage = homePage;
