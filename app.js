function getComputerChoice() {
    // return random choice from computer between rock, paper, scissors
}

function getPlayerChoice() {
    // ask player to pick betwen rock, paper, scissors
        // use prompt()
    // set whatever player picks to a number
    // return player choice
}

function playRound(playerSelection, computerSelection) {
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