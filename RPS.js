let userScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let gamesRemaining = 5;



document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    document.getElementById('welcome-message').style.display = 'none';

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
    if (result === 'You win!') {
        userScore++;
        updateScore();
    } else if (result === 'Computer wins!') {
        computerScore++;
        updateScore();
    }

    // Check if five non-draw games have been played
    if (result !== "It's a draw!") {
        gamesPlayed++;
        if (gamesPlayed >= 5) {
            displayFinalResult();
        }
    }

    if (result !== "It's a draw!") {
        gamesRemaining--;
        document.getElementById('games-left').textContent = gamesRemaining;

        // Check if the game series is over
        if (gamesRemaining <= 0) {
            displayFinalResult();
        }
    }
}



function updateScore() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function displayFinalResult() {
    // Disable game buttons
    document.getElementById('game-container').style.pointerEvents = 'none';

    // Determine which page to redirect to based on the final scores
    let victoryPage = userScore > computerScore ? 'UserVictory.html' : 'ComputerVictory.html';
    window.location.href = victoryPage;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
        return 'You win!';
    }
    return 'Computer wins!';
}

function displayResult(userChoice, computerChoice, result) {
    // Clear previous selections
    const choices = document.querySelectorAll('.game-button');
    choices.forEach(choice => choice.classList.remove('selected-choice'));

    // Highlight user's choice
    document.getElementById(userChoice).classList.add('selected-choice');

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your choice: ${userChoice}<br>Computer's choice: ${computerChoice}<br><strong>${result}</strong>`;
}