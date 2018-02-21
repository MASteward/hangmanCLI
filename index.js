var Word = require("./Word.js");

var inquirer = require(inquirer);

var answerArray = ["plato", "aristotle", "socrates", "nietzsche", "descartes", "locke", "sarte", "hum", "confucius", "hobbes", "foucault"];

function(){

}
var theChoice = Math.floor(Math.random() * answerArray.length);

var theAnswer = answerArray[theChoice];

inquirer.prompt([
	{
		name: "guess",
		message: "Please enter a letter: "
	}
]).then(function(answer){

})