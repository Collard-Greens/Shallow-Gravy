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
		document.getElementById("gravy boat").addEventListener("click", submitSecret);
		document.getElementById("submitGuess").addEventListener("click", submitGuess);
		$("#app>header").append(version);
		setStatus("ready");
	};
} // end MyApp
function submitSecret(){
	var unknown = parseInt(document.getElementById("unknown").value);
}

var count=0;

function submitGuess() {
    var guess = parseInt(document.getElementById("guess").value);
	var unknown = parseInt(document.getElementById("unknown").value);


        if (guess == unknown) {
            alert("You found my secret sauce!");
        }
        else if (unknown < guess) {
            alert("Less than my sauce");
        }

        else if (unknown > guess) {
            alert("Greater than my sauce");
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
