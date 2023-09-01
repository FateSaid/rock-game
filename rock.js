const choice = ['rock', 'paper', 'scissor'];

function getPlayerChoice() {
    let playerSelection;
    playerSelection = prompt("Choose between 'Rock, 'Paper', or 'Scissor'.").toLowerCase();
    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        return playerSelection;
    } else {
        return ("Invalid")
    }
    
}

function getComputerChoice() {
    

    let computerSelection;
    computerSelection = choice[Math.floor(Math.random() * choice.length)];

    return computerSelection;
    
} 

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return ('Tie');
    } else if (playerSelection === 'rock' && computerSelection === 'scissor' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissor' && computerSelection === 'paper') {
                return ("Player wins!");
               } else {
                return ("Computer wins!");
               }
    }
    
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));