function computerPlay(){
    //Computer selects an integer between 1-3//
    let computerSelection = Math.floor((Math.random()*3)+1);
    if (computerSelection === 1){
        computerSelection = "rock";
        console.log(computerSelection);
    }
    else if (computerSelection === 2) {
        computerSelection = "paper";
        console.log(computerSelection);
    }
    else {
        computerSelection = "scissors";
        console.log(computerSelection);
    }
    //Returns that integer//
}



function playerSelection(){
    //Player types in rock, paper, or scissors after message to select//
    let playerSelection = prompt("Choose your fighter: rock, paper, or scissors?");
    //Convert the input to lowercase//
    playerSelection = playerSelection.toLowerCase();
    //Convert the strings to numbers with rock being 1, scissors being 2, and paper being 3//
    console.log(playerSelection);
}

