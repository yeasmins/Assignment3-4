function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let computerSelection = computerChoice[Math.floor(Math.random() * 3)].toLowerCase();
    return computerSelection;
}

function PlayerPlay() {
    let playerchoose = prompt("Please enter your choice", "Scissors");
    let playerSelection = playerchoose.toLowerCase();
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Computer wins!";
        }
        else {
            return "Player wins!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Player wins!";
        }
        else {
            return "Computer wins!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Computer wins!";
        }
        else {
            return "You win!";
        }
    }
}


for (i = 0; i < 5; i++) {
    var PlayerChoice = PlayerPlay();
    var computerSelection = computerPlay();
    console.log("Player's choice", PlayerChoice);
    console.log("Computer's choice", computerSelection);

    var result = playRound(PlayerChoice, computerSelection);
    console.log("Result is", result);
}

function game() {
    if (result = "Computer wins!" && result > 2) {
        return "Computer wins!"
    }
    else if (result = "You win!" && result > 2) {
        return "You win!"
    }
    else {
        return "Draw";
    }
}
console.log("Final result is", game());

