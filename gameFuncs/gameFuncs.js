const { get } = require('http');

//Create a pet class
class Pet {
    constructor (name, hungerLevel=5, happinessLevel=5) {
        this.name = name;
        this.hungerLevel = hungerLevel;
        this.happinessLevel = happinessLevel;

        get hungerStatus() {
            return this.hungerLevel 
            ? `${this.name}'s hunger level is ${this.hungerLevel}/10.` 
            : `error: ${this.name} isn't hungry!`;
        }

        get happinessStatus() {
            return this.hunger 
            ? `${this.name}'s hunger level is ${this.hungerLevel}/10.` 
            : `error: ${this.name} isn't hungry!`;
        }
    };
};

// Using the built in readline module to get user input.
const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});