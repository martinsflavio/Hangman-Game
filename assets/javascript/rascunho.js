var choises = ["brazil","australia"];
var word = [];
var wrongGuess = [];
var remaning = 10;
var chancesLeft = 0;
var win = 0;

document.getElementById("press-start").innerHTML = "Press any key to get started!";

document.onkeyup = function(event){
	document.getElementById("press-start").innerHTML = "Chose a letter.";
	//print the spaces
	var	compGuess = choises[Math.floor(Math.random() * choises.length)].split("");
	for(var i = 0; i < compGuess.length ;i++){
		word[i] = "-";
	}	
	document.getElementById("word").innerHTML = word.join("");
	//capture the user guess
	document.onkeyup = function(event){ 
		var userGuess = event.key.toLowerCase();
		//check the user guess and update the array word
		for(var i = 0; i < compGuess.length ;i++){
			if (userGuess === compGuess[i]){
				word[i] = userGuess;
			}
		}
		//end check


		//print the wrong letters
		if (compGuess.every(check)){
			wrongGuess.push(userGuess);
			chancesLeft = 1;
		}
		remaning = remaning - chancesLeft;

		function check(element){
			return element !== userGuess;
		}
		//end print


		
		console.log(compGuess.toString());
		console.log(userGuess.toString());

		document.getElementById("wrong-guess").innerHTML = wrongGuess;		
		document.getElementById("word").innerHTML = word.join("");
		document.getElementById("times-win").innerHTML = win;
		document.getElementById("remaning-chances").innerHTML = remaning;
	}
}	

