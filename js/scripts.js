const ALL_OPTIONS = ["Rock", "Paper", "Scissors"];
const MAX_GAMES = 5;
let playerWins = 0;
let computerWins = 0;
let playerSelection;
let roundWinner;
let gameRound = 0;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundNumber = document.querySelector(".round-number");
const roundResult = document.querySelector(".round-result");
const buttons = document.querySelectorAll(".btn");
const playerBox = document.querySelector(".contender-1");
const computerBox = document.querySelector(".contender-2");
const modal = document.querySelector(".modal");
const modalWinner = document.querySelector(".modal__winner-text");
const modalScore = document.querySelector(".modal__score-text");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector(".modal__btn");
// const btnRock = document.querySelector("#rock");

// Computer picks a random option
const computerPlay = function () {
  return ALL_OPTIONS[Math.floor(Math.random() * 3)];
};

function reset() {
  toggleModal();
  setPlayerScore(0);
  setComputerScore(0);
  roundNumber.textContent = "Make your selection to start the game!";
  setRoundResult("Awaiting Game Start");
  setBackgroundColors(reset);
  playerWins = 0;
  computerWins = 0;
  gameRound = 0;
}

// EDIT DOM FUNCTIONS
/////////////////////////

function setBackgroundColors(winner) {
  if (winner === "Computer") {
    playerBox.classList.remove("winner");
    computerBox.classList.add("winner");
    playerBox.classList.remove("tie");
    computerBox.classList.remove("tie");
  } else if (winner === "Player") {
    playerBox.classList.add("winner");
    computerBox.classList.remove("winner");
    computerBox.classList.remove("tie");
    playerBox.classList.remove("tie");
  } else if (winner === "Tie") {
    playerBox.classList.add("tie");
    computerBox.classList.add("tie");
    computerBox.classList.remove("winner");
    playerBox.classList.remove("winner");
  } else {
    playerBox.classList.remove("tie");
    computerBox.classList.remove("tie");
    computerBox.classList.remove("winner");
    playerBox.classList.remove("winner");
  }
}

const setPlayerScore = (score) => {
  playerScore.textContent = score;
};

const setComputerScore = (score) => {
  computerScore.textContent = score;
};

const setRoundResult = (result) => {
  roundResult.textContent = result;
};

const setModalText = () => {
  modalScore.textContent = `Player (${playerWins}) vs (${computerWins}) Computer`;
  if (computerWins === playerWins) {
    modalWinner.textContent = `It's a TIE!`;
  } else {
    modalWinner.textContent = `${
      computerWins > playerWins ? "You Lost!" : "You Won!"
    }`;
  }
};

const toggleModal = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

// EVENT LISTENERS
////////////////////////

// Add an event listener to each button in the nodelist 'buttons'
buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    playerSelection = this.textContent;
    game(playerSelection);
  })
);

modalButton.addEventListener("click", () => {
  reset();
});

overlay.addEventListener("click", () => {
  reset();
});

// PLAY ROUNDS - EXECUTED ON CLICK
// SEE LINES 62 - 68
//////////////////////////////////

const playRound = function (computer, player) {
  gameRound++;
  roundNumber.textContent = `Round Number ${gameRound}`;
  // invalid user entry
  if (player !== "Rock" && player !== "Scissors" && player !== "Paper") {
    return `Player has made an invalid selection: ${player}`;
  }
  // TIE
  else if (computer === player) {
    roundWinner = "Tie";
    setBackgroundColors(roundWinner);
    setRoundResult(`It's a TIE, both picked ${computer}`);
    return `It's a TIE, both picked ${computer}`;
  }
  // Computer wins
  else if (
    (computer === "Rock" && player === "Scissors") ||
    (computer === "Paper" && player === "Rock") ||
    (computer === "Scissors" && player === "Paper")
  ) {
    computerWins++;
    roundWinner = "Computer";
    setBackgroundColors(roundWinner);
    setComputerScore(computerWins);
    setRoundResult(`Computer wins! ${computer} beats ${player}`);

    return `Computer wins! ${computer} beats ${player}`;
  }
  // Player wins
  else {
    playerWins++;
    roundWinner = "Player";
    setBackgroundColors(roundWinner);
    setPlayerScore(playerWins);
    setRoundResult(`Player wins! ${player} beats ${computer}`);
    return `Player wins! ${player} beats ${computer}`;
  }
};

// MAIN GAME EXECUTION
//////////////////////

const game = function (playerSelection) {
  if (gameRound < 4) {
    playRound(computerPlay(), playerSelection);
  } else {
    playRound(computerPlay(), playerSelection);
    setModalText();
    toggleModal();
  }
};
