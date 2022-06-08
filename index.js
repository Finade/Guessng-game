const username = prompt("Please enter your username");
const min = 1;
let max = 2;
let stage = 1;
let points = 0;
const guessNumber = Math.floor(Math.random() * max - min + 1) + min;
//console.log(guessNumber);
const number = Number(prompt(`Hi ${username} enter your number`));


function guess(number, guessNumber) {
    if (number < min || number > max || isNaN(number)) {
        console.log(`Number must be between ${min} and ${max}`);
    } else {
        if (number === guessNumber) {
            console.log("correct");
            nextStage();
        } else {
            console.log("Game over");
           
        }
    }
}

guess(number, guessNumber);

function nextStage() {
    max++;
    stage++;
    points++;
    console.log(`Total points: ${points}`);
    console.log("******************************");
    console.log(`Welcome to Stage ${stage}`);
    console.log(`Select number between ${min} and ${max}`);
    
    const guessNumber = Math.floor(Math.random() * max - min + 1) + min;
    //console.log(guessNumber);
    const number = Number(prompt(`Hi ${username} enter your number`));
    guess(number, guessNumber);
}
