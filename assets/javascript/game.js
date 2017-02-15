//-----------Global Variables---------------
var choises = ["brazil","australia"]
var win = 0; 
var lose = 0;
var nGuess = 10;
var wrongGuess = [];
var word = [];

function printSpace(nSpace){
	var result = [];
	for(var i = 0; i < nSpace.length ;i++){
		result[i] = "-";
	}	
	return result;
}
function printRightGuess(caracter,wToCompare,output){
	for(var i = 0; i < wToCompare.length ;i++){
		if (caracter === wToCompare[i]){
			output[i] = caracter;
		}
	}
	return output;
}
function compare(element) { 
  return element !== userGuess; 
} 
function checkWin(array1,array2){
	array1 = array1.join("");
	array2 = array2.join("");
	if (array1 === array2){
		return true;
	}else{
		return false;
	}
}
function newGame(){
	nGuess = 10;
	wrongGuess = [];
	word = [];
}
function printScreen(){
	document.getElementById("word").innerHTML = word.join(" ");
	document.getElementById("wrong-guess").innerHTML = wrongGuess;
	document.getElementById("n-guesses").innerHTML = nGuess;
	document.getElementById("times-win").innerHTML = win;
	document.getElementById("times-lose").innerHTML = lose;
}


document.getElementById("press-start").innerHTML = "Press any key to get started!";
document.onkeyup = function(event){
	compGuess = choises[Math.floor(Math.random() * choises.length)].split("");
	word = printSpace(compGuess);
	document.getElementById("press-start").innerHTML = "Chose a Letter";

	document.onkeyup = function(event){
		userGuess = event.key.toLowerCase();
	
		if (compGuess.every(compare)){
			if (wrongGuess.every(compare)){
				wrongGuess.push(userGuess);
				nGuess--;
			}	
		}else{
			word = printRightGuess(userGuess,compGuess,word);
		}

		if (checkWin(compGuess,word)){
			win++;		
		}else if(nGuess === 0){
			lose++;
		}
		printScreen();
	}
}











