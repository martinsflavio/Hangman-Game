//-----------Global Variables---------------
var choises=["sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
var win=0, lose=0; 
var nGuess=10;
var wrongGuess=[], word=[], setupSR=[], compGuess=[];
var userGuess="";

//Generate the random word and the array full of '-'
function newGame(choisesArray){
	var spaces = [];
	var randomWord = choisesArray[Math.floor(Math.random() * choisesArray.length)].split("");
		for(var i = 0; i < randomWord.length ;i++){
			spaces[i] = "-";
	}
	document.getElementById("word").innerHTML = spaces.join(" ");

	return [spaces,randomWord];
}
function printRightGuess(letter,wToCompare,result){
	for(var i = 0; i < wToCompare.length ;i++){
		if (letter === wToCompare[i]){
			result[i] = letter;
		}
	}	
	return result;
}
function compare(element) { 
  return element !== userGuess; 
} 
function checkWin(array1,array2){
	var array1 = array1.join("");
	var array2 = array2.join("");
	if (array1 === array2){
		return true;
	}else{
		return false;
	}
	console.log(array1);
	console.log(array2);
}

function printScreen(){
	document.getElementById("word").innerHTML = setupSR[0].join(" ");
	document.getElementById("wrong-guess").innerHTML = wrongGuess;
	document.getElementById("n-guesses").innerHTML = nGuess;
	document.getElementById("times-win").innerHTML = win;
	document.getElementById("times-lose").innerHTML = lose;
}
function reset(){
	nGuess=10;
	wrongGuess=[], word=[],compGuess=[];
	userGuess="";
	document.getElementById("wrong-guess").innerHTML = wrongGuess;
	document.getElementById("n-guesses").innerHTML = nGuess;
	document.getElementById("times-win").innerHTML = win;
	document.getElementById("times-lose").innerHTML = lose;
}


setupSR = newGame(choises);

document.onkeyup = function(event){ 
	userGuess = event.key.toLowerCase();
	compGuess = setupSR[1];
	word = setupSR[0]; 
	
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
		reset();
		setupSR = newGame(choises);
	}else if(nGuess === 0){
		lose++;
		reset();
		setupSR = newGame(choises);
	}

	printScreen();
}










