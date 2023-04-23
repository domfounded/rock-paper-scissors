// Rock, Paper, Scissors
// The Odin Project

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Return random choice from computer between rock, paper, and scissors

    let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            // console.log("Computer chose: ROCK")
            return "Rock";
        case 1:
            // console.log("Computer chose: PAPER")
            return "Paper";
        case 2:
            // console.log("Computer chose: SCISSORS")
            return "Scissors"
        default:
            return "Error in Computer Selection"
    }
}

function playRound(playerSelection = getPlayerChoice().toUpperCase(), computerSelection = getComputerChoice().toUpperCase()) {
    // Plays one round of game and returns winner

    // console.log("Computer chose: " + computerSelection);
    // console.log("Player chose: " + playerSelection);

    let result;

    if (playerSelection === computerSelection) {
        // console.log("Tie round!");
        result = "Tie";
    }
    else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        // console.log("Player wins!");
        playerScore++;
        result = "Player";
    }
    else {
        // console.log("Computer wins!");
        computerScore++;
        result = "Computer";
    }

    // Display results
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}<br/>Result: ${result}`;

}

function addListeners() {
    // Get references to DOM elements
    const btnRock = document.querySelector('#btn_rock');
    const btnPaper = document.querySelector('#btn_paper');
    const btnScissors = document.querySelector('#btn_scissors');

    // Add event listeners
    btnRock.addEventListener('click', () => {
        // console.log("Player chose: ROCK");
        playRound('ROCK');
    });
    btnPaper.addEventListener('click', () => { 
        // console.log("Player chose: PAPER");
        playRound('PAPER');
    });
    btnScissors.addEventListener('click', () => {
        // console.log("Player chose: SCISSORS");
        playRound('SCISSORS');
    });
}

window.addEventListener('load', addListeners);

/* // Removed getPlayerChoice()), game(), gameFun() to add button UI

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

function gameFun() {
    // Pretty much same as game() function, but I was curious as to the rate that the computer wins if player chooses rock at all times

    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let roundResults = "";
    let rockCount = 0;
    let paperCount = 0;
    let scissorsCount = 0;

    // Play 1000 rounds
    for (let i = 1; i < 1001; i++) {
    roundResults = playRound("ROCK");

    if (roundResults === "Tie") {
        tieScore++;
        rockCount++;
        //console.log("Tie round!");
    }
    else if (roundResults === "Player") {
        scissorsCount++;
        playerScore++;
        //console.log("Player wins this round!");
    }
    else {
        paperCount++;
        computerScore++;
        //console.log("Computer wins this round!");
    }

    //console.log ("Current score is " + playerScore + " for the player and " + computerScore + " for the computer.")
    }

    // Return results
    console.log("Final Score:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Tie Games :" + tieScore);
    console.log("");


    if (playerScore === computerScore) {
    console.log("It's a tie game!");
    }
    else {
    playerScore > computerScore ? console.log ("Player wins the game!") : console.log("Computer wins the game!");
    }
    console.log("")
    console.log("Data Below:");
    console.log("Rock was chosen " + rockCount + " times")
    console.log("Paper was chosen " + paperCount + " times")
    console.log("Scissors were chosen " + scissorsCount + " times")
}

*/