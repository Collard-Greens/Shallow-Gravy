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
		document.getElementById("mashedTater").addEventListener("click", submitGuess);
		$("#app>header").append(version);
		setStatus("ready");
	};
} // end MyApp
function submitSecret(){
	var unknown = parseInt(document.getElementById("unknown").value);
	document.getElementById("unknown").style.color = "#ffffff";
	document.getElementById("hideMe").style.display = "none";
}

var count=0;

function submitGuess() {
    var guess = parseInt(document.getElementById("guessNum").value);
	var spookyNum = parseInt(document.getElementById("unknown").value);
	var tries;
	
		count++;
        if (guess == spookyNum) {
           tries = "You found my secret sauce! It took you "+ count + " stirs.";
        }
        else if (spookyNum > guess) {
            tries = "Stir that sauce slower";
        }

        else if (spookyNum < guess) {
            tries = "Stir that sauce faster";
		}
		else{
			tries = "Enter a valid amount of stirs-per-minute.";
		}
			document.getElementById("demo").innerHTML = help;
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
