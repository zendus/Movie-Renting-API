const inquirer = require('inquirer');
const homePage = require('./homePage');

class MoviesGenres {
    constructor() {
        this.numMovies = 0;
        this.arrayOfSelectedMovies = [];
        this.state = true;
    }
    drama() {
        inquirer.prompt({
            type: "checkbox",
            name: 'dram',
            message: 'Please click on the movies you want to rent',
            choices: ["A score to settle", "Unplanned", "Surviving Confession", "Into the Ashes"]
        }).then(answer => {
            console.log(`You selected ${answer.dram.length} movies`);
            this.numMovies += Number(answer.dram.length);
            this.arrayOfSelectedMovies.push(answer.dram);
            this.confirm();
        })
    }

    action() {
        inquirer.prompt({
            type: "checkbox",
            name: 'act',
            message: 'Please click on the movies you want to rent',
            choices: ["Avengers Endgame(2019)", "Batman Hush", "Point Blank", "Cold Blood"]
        }).then(answer => {
            console.log(`You selected ${answer.act.length} movies`)
            this.numMovies += Number(answer.act.length)
            this.arrayOfSelectedMovies.push(answer.act);
            this.confirm();
        })
    }

    horror() {
        inquirer.prompt({
            type: "checkbox",
            name: 'hoor',
            message: 'Please click on the movies you want to rent',
            choices: ["The Curse of La Llorona", "Pet Semetary(2019)", "Boarding School(2018)", "Truth or Dare(2018)"]
        }).then(answer => {
            console.log(`You selected ${answer.hoor.length} movies`)
            this.numMovies += Number(answer.hoor.length)
            this.arrayOfSelectedMovies.push(answer.hoor);
            this.confirm();
        })
    }

    thriller() {
        inquirer.prompt({
            type: "checkbox",
            name: 'thrill',
            message: 'Please click on the movies you want to rent',
            choices: ["Glass(2019)", "The Mule(2018)", "Fantastic Beasts(2018)", "Winter Ridge(2018)"]
        }).then(answer => {
            console.log(`You selected ${answer.thrill.length} movies`)
            this.numMovies += Number(answer.thrill.length)
            this.arrayOfSelectedMovies.push(answer.thrill);
            this.confirm();
        })
    }

    displayMovies() {
        for (let i = 0; i < this.arrayOfSelectedMovies.length; i++) {
            this.arrayOfSelectedMovies[i].forEach((element) => {
                console.log('* ', element)
            });
        }
    }



    checkout() {
        console.log("------------------------------------------")
        console.log("                                           ")
        console.log(`You selected: `)
        this.displayMovies();
        console.log("                                               ");
        console.log("------------------------------------------")
        console.log("                                               ");
        console.log(`The Total number of movies is ${this.numMovies} movies and Total amount is ₦${this.numMovies * 1000} `);
        console.log(``);
        inquirer.prompt([{
            type: 'input',
            name: 'moneypaid',
            message: 'Please input your card Number',
            validate: function (value) {
                var pass = value.match(/^(\d{4}\-){3}\d{4}$/)
                if (pass) {
                    return true
                }
                return "Please input a valid card number (1234-1234-1234-1234)"
            }
        },
        {
            type: 'input',
            name: 'passkey',
            message: 'Please input your card pin'
        }]).then(answer => {
            console.log('Successful!')
        })
    }

    confirm() {
        inquirer.prompt({
            type: 'confirm',
            name: 'con',
            message: 'Do you want to perform another operation?',
            default: false
        }).then(ans => {
            if (ans.con === true) {
                homePage.homePage();
            } else {
                this.checkout();
            }
        })
    }
}

module.exports = new MoviesGenres;