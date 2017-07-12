function welloHorld(){
    return "Wello Horld!";
    console.log("Wello, horld!");
}

welloHorld();

var myCoin = ["Tails", "Heads"]

function rand(num){
    var randNum = Math.floor(Math.random() * num);
    return randNum;
}

console.log(myCoin[rand(2)]);