
var Letter = function(letter) {
	// a string value to store the underlaing character for the letter
	this.guess = letter;
	
	this.newLetter = false;

	// a function that returns either the letter or an underscore depending on whether the letter has been guessed.	
	this.letterSpaces = function(letter) {
		if (this.newLetter){
			return this.guess;
		} else {
			return ("_");
		}
	}
	// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.	
	this.checkLetter = function(attempt, letter) {
		if(attempt === letter){ 
			this.newLetter = true;
		} 
	}
}
module.exports = Letter;