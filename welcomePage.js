const inquirer = require('inquirer');
const validate = require('./validate')
const homePage = require('./homePage');

function welcomePage() {
    console.log('````````````````````````````````````````````````````````````````````````````````````');
    console.log('                       Welcome to Zendus.com                                        ');
    console.log('````````````````````````````````````````````````````````````````````````````````````');
    console.log("                                                                                     ");
    inquirer.prompt(
        {
            type: 'list',
            name: 'welcome',
            choices: ['Log In', 'Sign Up']
        }
    ).then(answer => {
        if (answer.welcome === 'Log In') {
            validate.validateUser();
        } else {
            //console.log('Please sign Up');
            inquirer.prompt([{
                type: 'input',
                name: 'signUpEmail',
                message: 'Please enter your email'
            },
            {
                type: 'input',
                name: 'signUpUserName',
                message: 'Please enter your Username'
            },
            {
                type: 'input',
                name: 'signUpPass',
                message: 'Please enter your Password'
            },
            {
                type: 'input',
                name: 'confirmPassword',
                message: 'Confirm Password'
            }
            ]).then(answer => {
                console.log("                                   ")
                console.log('Sign Up Successful!')
                console.log("                                 ")
                inquirer.prompt({
                    type: 'confirm',
                    name: 'proceed',
                    message: 'Proceed to Home Page?',
                    default: false
                }).then(answer => {
                    if (answer.proceed){
                    homePage.homePage();
                    } else {
                        process.exit();
                    }
                })
                
                
                


            })
        }
    })
}

module.exports = welcomePage;