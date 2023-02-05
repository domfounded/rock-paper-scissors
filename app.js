// Rock, Paper, Scissors
// The Odin Project

function getComputerChoice() {
    // Return random choice from computer between rock, paper, and scissors

    let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
        default:
            return "Error in Computer Selection"
    }
}

function getPlayerChoice() {
    // Asks player to pick betwen rock, paper, scissors

    let playerSelection = prompt("Please choose between rock, paper, or scissors.")
    let validChoice = false;

    while (!validChoice) {
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt("Invalid choice. Please choose between rock, paper, or scissors.");
        }
        else {
            validChoice = true;
        }
    }
    return playerSelection;
}

function playRound(playerSelection = getPlayerChoice().toUpperCase(), computerSelection = getComputerChoice().toUpperCase()) {
    // Plays one round of game and returns winner

    console.log("Computer chose: " + computerSelection);
    console.log("Player chose: " + playerSelection);

    if (playerSelection === computerSelection) {
        //console.log("Tie round!");
        return "Tie";
    }
    else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        //console.log("Player wins!");
        return "Player";
    }
    else {
        //console.log("Computer wins!");
        return "Computer";
    }
}

function game() {
   // Plays five rounds of game and returns winner

   let playerScore = 0;
   let computerScore = 0;
   let roundResults = "";

   for (let i = 1; i < 6; i++) {
    console.log("Round " + i)
    roundResults = playRound();
    
    if (roundResults === "Tie") {
        console.log("Tie round!");
    }
    else if (roundResults === "Player") {
        playerScore++;
        console.log("Player wins this round!");
    }
    else {
        computerScore++;
        console.log("Computer wins this round!");
    }

    console.log ("Current score is " + playerScore + " for the player and " + computerScore + " for the computer.")
   }

   // Return results of the five rounds
   if (playerScore === computerScore) {
    console.log("It's a tie game!");
   }
   else {
    playerScore > computerScore ? console.log ("Player wins the game!") : console.log("Computer wins the game!");
   }
}