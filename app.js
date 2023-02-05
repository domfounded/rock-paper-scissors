// Rock, Paper, Scissors
// Assuming rock = 0, paper = 1, scissors = 2

function getComputerChoice() {
    // return random choice from computer between rock, paper, scissors
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    // ask player to pick betwen rock, paper, scissors
        // use prompt()
    let playerChoice = prompt("Please choose between rock, paper, or scissors")

    switch (playerChoice) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
    }
    // set whatever player picks to a number
    // return player choice
}

function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
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
        return;
    }
    else if (
        (playerSelection === 0 && computerSelection === 2) || (playerSelection === 1 && computerSelection === 0) || (playerSelection === 2 && computerSelection === 1)) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
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
}