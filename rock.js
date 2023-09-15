const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const scoreText = document.querySelector('#scoreText');

const choice = ['Rock', 'Paper', 'Scissor'];

let playerSelection;
let computerSelection;
let result;

let playerScore = 0;
let computerScore = 0;


const btn = document.querySelectorAll('.playerChoice');
btn.forEach(button => button.addEventListener('click', () => {
    
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    result = playRound();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = result;
    roundScore();
    scoreText.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`;
    winnerText.textContent = winner();
    if(playerScore === 5 || computerScore === 5) return buttonDisable();
    
    

}));

function buttonDisable(){
    btn.forEach(playerChoice => {
        playerChoice.disabled = true;
    })
}

function getComputerChoice() {
    

   
    computerSelection = choice[Math.floor(Math.random() * choice.length)];

    return computerSelection;
    
} 

function playRound() {
   
    
    if (playerSelection === computerSelection) {
        return ('Tie');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissor' ||
               playerSelection === 'Paper' && computerSelection === 'Rock' ||
               playerSelection === 'Scissor' && computerSelection === 'Paper') {
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


function winner(){
    if(playerScore === 5) return 'Player wins the game';
    else if(computerScore === 5) return 'Computer wins the game';
}

