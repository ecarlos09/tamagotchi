const { get } = require('http');

//Create a pet class
class Pet {
    constructor (name, hungerLevel=5, happinessLevel=5) {
        this.name = name;
        this.hungerLevel = hungerLevel;
        this.happinessLevel = happinessLevel;
    };

    get hungerStatus() {
        return this.hungerLevel
        ? `${this.name}'s hunger level is at ${this.hungerLevel}/10.`
        : `${this.name} isn't hungry!`
    }

    get happinessStatus() {
        return this.happinessLevel
        ? `${this.name}'s happiness level is at ${this.happinessLevel}/10.`
        : `${this.name} is a grumpy old sod right now!`
    }
};

// Using the built in readline module to get user input.
const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Defining a custom Error by extending the built in Error object
class TAMError extends Error {
    constructor(msg){
        super(`\nOh no! ${msg}!\n`);
        this.name = 'GameError';
    };
};

//Define Tamagotchi class that contains all the main game functions
class Tamagotchi {
    run() {
      console.clear();
      this.startGame();
    }

    //Prompt user to create a new pet
    startGame() {
        ui.question('\nWelcome to Tamagotchi, enter your pet\'s new name: ', (input) => {
            try {          
                this.pet = new Pet(input);
                ui.question(`\n${input}?  That's a cute name!  Are you sure? (y/n) `, (input) => {
                    try {
                    if (input === 'y') {
                        console.log(`Say hello to ${this.pet.name}!`);
                        this.displayStatus();
                        this.defineAction();
                    } else if (input === 'n') {
                        this.startGame();
                    } else {
                        throw new TAMAError(`What do you mean?! (remember to type 'y' or 'n') `);
                        this.startGame();
                    }
                    } catch (err) {
                    this.errorAndClose(err);
                    }
                });
            } catch (err) {
            this.errorAndClose(err);
            }
        });
    }

    //Define status getter
    displayStatus() {
        console.log(this.pet.hungerStatus);
        console.log(this.pet.happinessStatus);
    }

    //Create an action chooser
    defineAction() {
        ui.question('\nChoose from the following actions: feed, play, check, quit: ', (input) => {
          try {
            if (input === 'feed') {
              this.feedPet();
            } else if (input === 'play') {
              this.playPet();
            } else if (input === 'check') {
                this.displayStatus();
                this.defineAction();
            } else if (input === 'quit') {
                this.quitGame();
            } else {
              throw new TAMAError(`${this.pet.name} can not do that!  Try again!`);
              this.defineAction();
            }
          } catch (err) {
            this.errorAndClose(err);
          }
        });
    }

    //Define different pet actions
    feedPet() {
        ui.question(
          `\nAre you sure you want to feed ${this.pet.name}!?!?!? (y/n) `, (input) => {
            try {
              if (input === 'y') {
                this.pet.hungerLevel -= 1
                console.log(`You have fed ${this.pet.name}!`)
                this.displayStatus();
                this.defineAction();
              } else if (input === 'n') {
                console.log('So you changed your mind!')
                this.displayStatus();
                this.defineAction();
              } else {
                throw new TAMAError(`What do you mean?!`);
                this.displayStatus();
                this.defineAction();
              }
            } catch (err) {
              this.errorAndClose(err);
            }
          }
        );
      }

      playPet() {
        ui.question(
          `\nAre you sure you want to play with ${this.pet.name}!?!?!? (y/n) `, (input) => {
            try {
              if (input === 'y') {
                this.pet.happinessLevel += 1
                console.log(`You have played with ${this.pet.name}!`)
                this.displayStatus();
                this.defineAction();
              } else if (input === 'n') {
                console.log('So you changed your mind! ')
                this.displayStatus();
                this.defineAction();
              } else {
                throw new TAMAError(`What do you mean?! `);
                this.displayStatus();
                this.defineAction();
              }
            } catch (err) {
              this.errorAndClose(err);
            }
          }
        );
      }

      quitGame() {
        ui.question(
          '\nAre you sure you want to quit the game?!?!? (y/n) ', (input) => {
            try {
              if (input === 'y') {
                console.log("Thank you for playing Tamagotchi!");
                ui.close;
              } else if (input === 'n') {
                console.log('So you changed your mind! ')
                this.displayStatus();
                this.defineAction();
              } else {
                throw new TAMAError(`What do you mean?! `);
                this.displayStatus();
                this.defineAction();
              }
            } catch (err) {
              this.errorAndClose(err);
            }
          }
        );
      }

    errorAndClose(err){
        console.log('\n', err.message, '\n'); // Experiment with err, err.name, err.message, err.stack
        ui.close();
    }
}

// Export Tamagotchi
module.exports = { Tamagotchi }