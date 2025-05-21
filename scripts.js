const choices = ["rock", "paper", "scissors"];
let compScore = 0;
let userScore = 0;
function rock() {
    const computerChoice = choices[Math.floor(Math.random() *3)];
    if(computerChoice === "rock") {
        document.getElementById("user-choice").innerHTML = "You chose Rock";
        document.getElementById("computer-choice").innerHTML = "Computer chose Rock";
        document.getElementById("outcome").innerHTML = "It's a tie😐";
    } else if(computerChoice === "paper") {
        document.getElementById("user-choice").innerHTML = "You chose Rock";
        document.getElementById("computer-choice").innerHTML = "Computer chose Paper";
        document.getElementById("outcome").innerHTML = "You lose😔";
        compScore++;
    } else {
        document.getElementById("user-choice").innerHTML = "You chose Rock";
        document.getElementById("computer-choice").innerHTML = "Computer chose Scissors";
        document.getElementById("outcome").innerHTML = "You win🥳";
        userScore++;
    }
    document.getElementById("user-score").innerHTML = `Your score: ${userScore}`;
    document.getElementById("computer-score").innerHTML = `Computer score: ${compScore}`;
}

function paper() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if(computerChoice === "paper") {
        document.getElementById("user-choice").innerHTML = "You chose Paper";
        document.getElementById("computer-choice").innerHTML = "Computer chose Paper";
        document.getElementById("outcome").innerHTML = "It's a tie😐";
    } else if(computerChoice === "scissors") {
        document.getElementById("user-choice").innerHTML = "You chose Paper";
        document.getElementById("computer-choice").innerHTML = "Computer chose Scissors";
        document.getElementById("outcome").innerHTML = "You lose😔";
        compScore++;
    } else {
        document.getElementById("user-choice").innerHTML = "You chose Paper";
        document.getElementById("computer-choice").innerHTML = "Computer chose Rock";
        document.getElementById("outcome").innerHTML = "You win🥳";
        userScore++;
    }
    document.getElementById("user-score").innerHTML = `Your score: ${userScore}`;
    document.getElementById("computer-score").innerHTML = `Computer score: ${compScore}`;
}

function scissors() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if(computerChoice === "scissors") {
        document.getElementById("user-choice").innerHTML = "You chose Scissors";
        document.getElementById("computer-choice").innerHTML = "Computer chose Scissors";
        document.getElementById("outcome").innerHTML = "It's a tie😐";
    } else if(computerChoice === "paper") {
        document.getElementById("user-choice").innerHTML = "You chose Scissors";
        document.getElementById("computer-choice").innerHTML = "Computer chose Rock";
        document.getElementById("outcome").innerHTML = "You lose😔";
        compScore++;
    } else {
        document.getElementById("user-choice").innerHTML = "You chose Scissors";
        document.getElementById("computer-choice").innerHTML = "Computer chose Paper";
        document.getElementById("outcome").innerHTML = "You win🥳";
        userScore++;
    }
    document.getElementById("user-score").innerHTML = `Your score: ${userScore}`;
    document.getElementById("computer-score").innerHTML = `Computer score: ${compScore}`;
}
