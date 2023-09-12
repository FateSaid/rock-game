const choice = ['rock', 'paper', 'scissor'];



let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    let playerSelection = prompt("Choose between 'Rock, 'Paper', or 'Scissor'.").toLowerCase();
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

function playRound() {
   
    
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

function roundScore() {
    
    if (playRound() === 'Computer wins!') {
        
        return Number(computerScore++);
    } else if (playRound() === 'Player wins!') {
        return Number(playerScore++);
    } else {
        return 0;
    }
    
    
}

function game() {
    for(let i = 1; i < 6; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound();
        roundScore();
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        console.log(playRound());
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
        console.log(`Round: ${i}`);
    }
}


    



game();
