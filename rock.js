const choices = ["rock", "paper", "scissor"];

function game(){
    //5 rounds of rock/paper/scissor; calculate scoreboard
}

function playRound() {
    //code for round results
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let input = prompt("Choose 'Rock', 'Paper', or 'Scissor'");
    if(input === 'rock' || input === 'paper' || input === 'scissor') {
        return input;
    } else {
        console.log('Invalid');
    }
}

console.log(getPlayerChoice());
