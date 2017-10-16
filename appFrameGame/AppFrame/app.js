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
}

var count=0;

function submitGuess() {
    var guess = parseInt(document.getElementById("guessNum").value);
	var spookyNum = parseInt(document.getElementById("unknown").value);
	var tries;
		count++;
        if (guess == spookyNum) {
            alert("You found my secret sauce!");
        }
        else if (spookyNum > guess) {
            alert("Stir that sauce slower");
        }

        else if (spookyNum < guess) {
            alert("Stir that sauce faster");
		}
		alert (document.getElementById("demo").innerHTML = tries);
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
