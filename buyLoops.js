 
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 

/*
var n = prompt('How many more times? ');
for(var i=0;i<n;i++){
    console.log("Hmmngg");
}

*/


var myMoney = Number(prompt("How much money do you have?"));
console.log("You currently have " + myMoney + " rupees");

function rand(mltp){
    return Math.floor(Math.random()*mltp);
}

function askBuyer(entity, price){
    var answer = prompt("Do you want to buy a " + entity + " for " + price +  " rupees ?");
    if(typeof(answer) == "string"){
        return answer;
    }
}

var bag = [];
var inventory = [["Master Sword", 5000], ["Potion", 50], ["Ancient Bow", 30000], ["Iron Shield", 5000], ["Secret Shield", 1000], ["Link's Girl", 500]];

console.log("Welcome to Hyrule!");

while(myMoney > 0 && (typeof(myMoney) === "number")){
    var ourRand = inventory[rand(inventory.length)]
    var ourAnswer = askBuyer(ourRand[0], ourRand[1]);
    if(myMoney <= 0){
        break;
    }
    if(ourAnswer && ourAnswer.toLowerCase() === "yes" && myMoney >= ourRand[1]){
        console.log("You bought " + ourRand[0] + " for " + ourRand[1] + " rupees.");
        myMoney -= ourRand[1];
        bag.push(ourRand[0]);
        console.log("You now have " + myMoney + " rupees.");
        console.log("Here's your current inventory: ");
        console.log(bag);
    }    
    if(ourAnswer === "exit"){
        break;
    }
}
