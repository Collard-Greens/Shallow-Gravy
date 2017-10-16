"use strict";

// using a function contructor form to create an object
function MyApp()
{
	var version = "v1.0";

	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");
	};
} // end MyApp
var unknownNumber = Math.round((Math.random() * 99) + 1);
var guesses = 0;

function guessProcess() {
    var guess = document.getElementById("guess").value;
    guesses++;
    if (guesses <= 7) {
        if (guess == unknownNumber) {
            alert("You found my secret sauce!");
        }
        if (unknownNumber < guess) {
            alert("Less than my sauce");
        }

        if (unknownNumber > guess) {
            alert("Greater than my sauce");
        }
    } else {
        alert("Max guesses");
    }
}
/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyApp();
	window.app.start();
});
