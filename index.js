#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number
// user input for guessing number
// compare user input with computer genrated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
