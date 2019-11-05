// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerChoice = null;
var userChoice = null;
var winner = null;
var randomNumber = 0;


// DOCUMENT READY FUNCTION BELOW

$(document).ready(function() {

    $("#shoot").click(function(){
        let userInput = $("#input").val();
        $("#userChoice").text(userInput);
        randomNumber = Math.floor((Math.random()*3)+1);
        computerChoice = genComputerChoice(randomNumber);
        $("#computerChoice").text(computerChoice);
        $("#result").text(whoWins(userInput,computerChoice));
        $("#userChoice").val("");
    });

    function genComputerChoice(randomNumber) {
        if (randomNumber==1) {
            return "rock";
        }
        if (randomNumber==2) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    function whoWins(userInput,computerChoice) {
        if (userInput === computerChoice)
            {
                return "tie game! try again.";
            }

        if ((userInput === "scissors"&&computerChoice ==="rock")||(userInput==="rock"&&computerChoice=="paper")||(userInput==="paper"&&computerChoice==="scissors")){
            return "BOO! computer wins!";
        }

        else {
            return "YOU WIN!!!";
        }
    }

});
