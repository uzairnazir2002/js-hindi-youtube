let randnum;
let prevGuess;
let numGuess;

const MAX_GUESSES = 10;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

function initGame() {
  randnum = Math.floor(Math.random() * 100) + 1;
  prevGuess = [];
  numGuess = 0;

  guessSlot.textContent = "";
  remaining.textContent = MAX_GUESSES;
  lowOrHi.textContent = "";

  userInput.removeAttribute("disabled");
  if (startOver.contains(p)) startOver.removeChild(p);
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMessage("Please enter a number between 1 and 100");
    return false;
  }
  return true;
}

function handleGuess(guess) {
  if (!validateGuess(guess)) return;

  prevGuess.push(guess);
  numGuess++;

  guessSlot.textContent = prevGuess.join(", ");
  remaining.textContent = MAX_GUESSES - numGuess;

  if (guess === randnum) {
    displayMessage("🎉 You guessed it right!");
    endGame();
  } else if (numGuess >= MAX_GUESSES) {
    displayMessage(`❌ Game Over! The number was ${randnum}`);
    endGame();
  } else {
    displayMessage(guess < randnum ? "📉 Too low" : "📈 Too high");
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p);
  document.querySelector("#newGame").addEventListener("click", initGame);
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  userInput.value = "";
  handleGuess(guess);
});

initGame(); // start the first game
