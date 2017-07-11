console.log("Your choice has been entered in the script.");

var pChoice = "rock"

var chance = Math.floor(Math.random(0,10).toFixed(2)*10);
var cChoice;
if(chance <= 33){
    cChoice = "paper";
} else if(chance > 33 && chance <= 66){
    cChoice = "rock";
} else {
    cChoice = "scissors";
}

if((pChoice === "rock" && cChoice === "paper") || (pChoice === "scissors" && cChoice === "rock") || (pChoice === "paper" && cChoice === "scissors")){
    console.log("The computer won by picking: " + cChoice + ". You died a morbid death.");
} else {
    console.log("You won!");
}