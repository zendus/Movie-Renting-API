const inquirer = require('inquirer');
const validate = require('./validate')
const homePage = require('./homePage');

var password;

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
                message: 'Please enter your email',
                validate: function (value) {
                    var pass = value.match(/^\w+\@\w+\.\w{2,}$/);
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a valid Email'
                }
            },
            {
                type: 'input',
                name: 'signUpUserName',
                message: 'Please enter your Username'
            },
            {
                type: 'password',
                mask: true,
                name: 'signUpPass',
                message: 'Please enter your Password',
                validate: function (value) {
                    var pass = value.match(/^\d+$/);
                    if (pass) {
                        password = value;
                        return true;
                    }
                    return 'Please enter a valid password (digits only)'
                }
            },
            {
                type: 'password',
                mask: true,
                name: 'confirmPassword',
                message: 'Confirm Password',
                validate: function (value) {
                    var pass = /^\d+$/.test(value)
                    if (pass && value === password) {
                        return true
                    }
                    return 'Password does not match, re-enter please'
                }
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
                    if (answer.proceed) {
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