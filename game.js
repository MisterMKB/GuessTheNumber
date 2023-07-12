var secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
	var guessInput = document.getElementById('guess-input');
	var guess = parseInt(guessInput.value);
	
	var resultMessage = document.getElementById('result-message');
	if (guess === secretNumber) {
		resultMessage.textContent = "Congratulations! You guessed the number.";
	} else if (guess < secretNumber) {
		resultMessage.textContent = "Too low! Try again.";
	} else {
		resultMessage.textContent = "Too high! Try again.";
	}
	
	guessInput.value = "";
	guessInput.focus();
}