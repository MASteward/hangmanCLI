var Letter = require("./Letter.js");

var Word = function(theAnswer) { 
	this.letterArray = theAnswer.split("");
	
	var spaces = [];
	
	var wordStatus = "";

	this.formation = function() {
		for (var i = 0; i < letterArray.length; i++) {
			var underScores = new Letter.letterSpaces(letterArray[i]);
			spaces.push(underScores);
		}
		wordStatus = spaces.join(" ")
	}
	var checkGuess = function(input){
		for (var i = 0; i < letterArray.length; i++) {
			Letter.checkLetter(input, letterArray[i]);
		}
	}
}

module.exports = word;