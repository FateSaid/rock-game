
function getComputerChoice() {
    let game = ["rock", "paper", "scissor"];
    return (game[(Math.floor(Math.random() * game.length))]);
    
}

let playerSelection = prompt("Choose between 'Rock', 'Paper', or 'Scissor'").toLowerCase();
let computerSelection = getComputerChoice();
 

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return ("You lose! Paper beats Rock.")
    } else if(playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore + 1;
        return("You lose! Paper beats Rock.")
    } else if(playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore + 1;
        return ("You lose! Rock beats Scissor.")
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        userScore + 1;;
        return("You win! Rock beats Scissors")
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        userScore + 1;
        return("You win! Paper beats Rock.")
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        userScore + 1;
        return("You win! Scissors beats Paper.")
    } else if(playerSelection === computerSelection) {
        return("It's a tie!")
    } else {
        return("Wrong input")
    }
    
}

function game(userScore, computerScore) {
    playRound();
}




console.log(playRound(playerSelection, computerSelection));

