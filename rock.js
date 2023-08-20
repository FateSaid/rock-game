let game = ["rock", "paper", "scissor"];
function getComputerChoice() {
    
    return (game[(Math.floor(Math.random() * game.length))]);
    
}


 

const playerSelection = prompt("Choose between 'Rock', 'Paper', or 'Scissor'").toLowerCase();
const computerSelection = getComputerChoice();



function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        return ("You lose! Paper beats Rock.")
    } else if(playerSelection === 'paper' && computerSelection === 'scissor') {
        return("You lose! Paper beats Rock.")
    } else if(playerSelection === 'scissor' && computerSelection === 'rock') {
        return ("You lose! Rock beats Scissor.")
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        return("You win! Rock beats Scissors")
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return("You win! Paper beats Rock.")
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        return("You lose! Paper beats Scissors.")
    } else if(playerSelection === computerSelection) {
        return("It's a tie!")
    } else {
        return("Wrong input")
    }
    
}

console.log(playRound(playerSelection, computerSelection));

