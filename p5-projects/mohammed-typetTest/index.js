var data = [
    "Our string is here right now.",
    "Here is another string to try",
    "Please don't jest about such things",
    "Unique New York and pork and more!",
    "Tiddly taddler tickled a dabber."
];

var s = data[0];
var input = "";
var points = 0;
var info = [];
var iLastTime = 0;
var iTime = 0;
var total = 0;
var allWords = "";

function setup(){
    createCanvas(500,500);
    background(100);
}



function draw(){
   background(100);
   textAlign(CENTER);
   fill(0,0,0);
   text("Points: " + points, 50, 50);
   fill(0,0,0);
   text(s, 250, 100);
   fill(0,0,0);
   text(input, 250, 200);
   console.log(showWPM());
   text("WPM: " + showWPM(), 250, 350);
 
   if(input.length == s.length){
       if(input === s){
           points = points + 10;

           //CORS policy prevents loadStrings()
           //loadStrings("text.txt", handleData);
           s = random(data);
           allWords = "";
           total = 0;
           iTime = 0;
           iLastTime = 0;
       }
       input = "";
       background(100);
   }
}

function keyTyped(){
    input += key;
    allWords += key;
    info.push(key);
}

function showWPM(){
    iTime = new Date().getTime();
    if(iLastTime != 0){
        total = iTime - iLastTime;
        var words = allWords.split(' ').length;
        console.log(total/800);
        console.log(words/(total/6000));
        return Math.round(words/(total/800)*60);
    }
    iLastTime = iTime;
}

function handleData(info){
    s = random(info);
}