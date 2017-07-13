var prompt = require('prompt-sync')();

var mashArray = ["Peach's Castle", "Mushroom Kingdom", "Yoshi's Island", "Hyrule Castle"];
var firstQuestion = [0,1];
var secondQuestion = ["Mario", "Lucario"];

function rand(mltp){
    return Math.floor(Math.random()*mltp);
}

function questions(){
    var a1 = prompt("How many times will you strike?");
    var a2 = prompt("Who will you choose to fight?");
    secondQuestion.push(a2);
    firstQuestion.push(a1);
}

function announce(){
    var enemy = secondQuestion.pop();
    var attacks = firstQuestion.pop();
    console.log("You fought "  + enemy + " in the " + mashArray[rand(mashArray.length)] + " and hit them " + attacks + " times. Too bad Mewtwo wins.");
}

questions();
announce();
