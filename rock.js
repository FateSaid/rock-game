const choice = ['rock', 'paper', 'scissor'];

function getPlayerChoice() {
    let playerSelection;
    playerSelection = prompt("Choose between 'Rock, 'Paper', or 'Scissor'.").toLowerCase();
    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        return playerSelection;
    } else {
        console.log("Invalid")
    }
    
}

function getComputerChoice() {


    let computerSelection;
    computerSelection = Math.floor(Math.random() * 3) + 1;
    return computerSelection;
    
}
console.log(getPlayerChoice());
console.log(getComputerChoice())