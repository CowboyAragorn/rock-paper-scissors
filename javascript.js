function computerPlay(){
    //Computer selects an integer between 1-3//
    let computerSelection = Math.floor((Math.random()*3)+1);
    if (computerSelection === 1){
        computerSelection = "rock";
        return computerSelection;
    }
    else if (computerSelection === 2) {
        computerSelection = "paper";
        return computerSelection;
    }
    else {
        computerSelection = "scissors";
        return computerSelection;
    }
    //Returns that integer//
}



function playerPlay(){
    //Player types in rock, paper, or scissors after message to select//
    let playerSelection = prompt("Choose your fighter: rock, paper, or scissors?");
    //Convert the input to lowercase//
    playerSelection = playerSelection.toLowerCase();
    //Convert the strings to numbers with rock being 1, scissors being 2, and paper being 3//
    return playerSelection;
}

let computerPick = computerPlay();
let playerPick = playerPlay();

console.log("You pick " + playerPick);
console.log("Computer picks " + computerPick);

function playRound (playerPick, computerPick) {
    if (playerPick === "rock" && computerPick === "rock"){
        return "Rock ties with Rock - try again";
    }
    else if (playerPick ==="rock" && computerPick === "scissors") {
        return "You win - Rock beats scissors!"
    }
    else if (playerPick ==="rock" && computerPick === "paper"){
        return "You lose :( - Paper beats Rock";
    }
}

console.log(playRound(playerPick, computerPick))
