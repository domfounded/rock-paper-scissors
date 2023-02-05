// Rock, Paper, Scissors
// Assuming rock = 0, paper = 1, scissors = 2

function getComputerChoice() {
    // return random choice from computer between rock, paper, scissors
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
    // ask player to pick betwen rock, paper, scissors
        // use prompt()
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
    // set whatever player picks to a number
    // return player choice
}

function playRound(playerSelection = getPlayerChoice().toUpperCase(), computerSelection = getComputerChoice().toUpperCase()) {
    /*
    let playerSelection equal getPlayerChoice
    let computerSelection equal getComputerChoice

    figure out winner
        if playerSelection = computerSelection, tie
        else if (player is rock, comp is scissor) or (player paper, comp rock) or (player scissor, comp paper)
            player wins
        else
            player lose

    return string to declare winner
    */

    // let computerSelection = getComputerChoice();
    // let playerSelection = getPlayerChoice();

    console.log("Computer chose: " + computerSelection);
    console.log("Player chose: " + playerSelection);

    if (playerSelection === computerSelection) {
        console.log("Tie round!");
        return "Tie";
    }
    else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        console.log("Player wins!");
        return "Player";
    }
    else {
        console.log("Computer wins!");
        return "Computer";
    }
}

function game() {
    /* 
    play five rounds of the game
    create scorePlayer int
    create scoreComp int
        for loop from 0 to 5
            play round
                return winner
            add point to winner
            console.log() results of round
        end loop
        if scoreComp = scorePlayer
            console.log tie!
        else 
            scoreComp > scorePlayer ? console.log(comp wins) : console.log (player wins)
    */
   let playerScore = 0;
   let computerScore = 0;

   for (let i = 0; i < 5; i++) {
    if (playRound() === "Tie") {
        playerScore++;
        computerScore++;
        console.log("Tie round!");
    }
    else if (playRound() === "Player") {
        playerScore++;
        console.log("Player wins this round!");
    }
    else {
        computerScore++;
        console.log("Computer wins this round!");
    }
   }
   if (playerScore === computerScore) {
    console.log("It's a tie game!");
   }
   else {
    playerScore > computerScore ? console.log ("Player wins the game!") : console.log("Computer wins the game!");
   }
}