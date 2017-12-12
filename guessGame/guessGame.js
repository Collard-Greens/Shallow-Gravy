function submitSecret() {
	var secret = parseInt(document.getElementById("secretNum").value);
	document.getElementById("secretNum").style.color = "#ffffff";
	document.getElementById("hideMe").style.visibility = "visible";
}

var count=0;

function submitGuess(){
var guess = document.getElementById("guessNum").value; 
var secret = document.getElementById("secretNum").value; 
var help;
		count++;
		if (guess > secret) {
			help = "That's too High";
		} else if (guess == secret ){
			help = "You got the number! It only took you " + count + " tries.";
		} else if (guess < secret ){
			help = "That's too Low!";
		} else {
			help = "Enter a valid number.";
		}
document.getElementById("demo").innerHTML = help;		
}