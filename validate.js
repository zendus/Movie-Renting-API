const inquirer = require('inquirer');
const homePage = require('./homePage');


function validateUser() {
    inquirer.prompt([{
        type: 'input',
        name: 'valo',
        message: 'Please input your Username',
        validate: function (value) {
            var pass = value.match(/^[\D]+$/);
            if (pass) {
                return true;
            }
            return 'Please enter the correct username';
        }
    },
    {
        type: 'input',
        name: 'val',
        message: 'Please input your Password',
        validate: function (value) {
            var pass = value.match(/^[\d]+$/);
            if (pass) {
                return true;
            }
            return 'Please enter the correct Password';
        }
    }]).then(answers => {
        console.log('                                                                                      ');
        console.log(`Hi, ${answers.valo}`);
        // console.log('````````````````````````````````````````````````````````````````````````````````````');
        console.log("                                                                                     ");
        homePage.homePage();
    })
}

module.exports = { validateUser }