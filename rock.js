const choices = ["rock", "paper", "scissor"];

function game(){
    //5 rounds of rock/paper/scissor; calculate scoreboard
}
let choiceP = getPlayerChoice();
let choiceC = getComputerChoice();

function playRound(choiceP, choiceC) {
    //code for round results
    
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
