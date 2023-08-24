const choices = ["rock", "paper", "scissor"];

function game(){
    //5 rounds of rock/paper/scissor; calculate scoreboard
    
        for(let i = 1; i <= 5; i++) {
            playRound(i);
        }
        
        
}

    



function playRound(round) {
    //code for round results
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection)

    
    
    
}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return 'Tie';
    } else if(
        choiceP === 'rock' && choiceC === 'scissor' || 
        choiceP === 'paper' && choiceC === 'rock' ||
        choiceP === 'scissor' && choiceC === 'paper'
        ) {
            return 'Player';
        } else {
            return 'Computer';
    }

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

console.log(playRound(choiceP, choiceC));
console.log(game(playerScore, computerScore));

