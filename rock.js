let game = ["Rock", "Paper", "Sissor"];
function getComputerChoice() {
    console.log(game[(Math.floor(Math.random() * game.length))]);
    
}
getComputerChoice();
