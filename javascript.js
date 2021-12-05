function computerPlay(){
    //Computer selects an integer between 1-3//
    let computerSelection = Math.floor((Math.random()*3)+1);
    //Returns that integer//
    return(computerSelection);
}

function round(){
//Player types in rock, paper, or scissors after message to select//
    let playerSelection = prompt("Choose your fighter: rock, paper, or scissors?");
//Convert the input to lowercase//
    playerSelection = playerSelection.toLowerCase();
//Convert the strings to numbers with rock being 1, scissors being 2, and paper being 3
    let playerRock = 1
    let playerPaper = 2
    let playerScissors = 3
    if (playerSelection = "rock") {
        playerSelection = playerRock;
        }
    else if (playerSelection = "paper") {
        playerSelection = playerPaper;
        }
    else (playerSelection = "scissors") 
        playerSelection = playerScissors;
        
console.log(playerSelection);
//play a single round comparing the player selection with computer selection//
//and outputting victory/defeat messages//
//Return results of function//
}

round();
