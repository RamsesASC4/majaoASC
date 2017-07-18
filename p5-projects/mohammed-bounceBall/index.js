var x = 0;
var y = 0;
var vx = 1;
var vy = 1;
var distOffset = 5;
var minBoost = 0;

function setup(){
    createCanvas(500,500);
}

function draw(){
    background(100);
    var obj = ellipse(x,y,50,50);
    x += vx;
    y += vy;
    if(x >= 500 || x <= 0){
        vx = vx/Math.abs(vx);
        vx = -1 * vx;
        vx *= random(1,distOffset)+minBoost;
        minBoost++;
    } 
    if(y >= 500 || y <= 0){
        vy = vy/Math.abs(vy);
        vy = -1 * vy;
        vy *= random(1,distOffset)+minBoost;
        distOffset += 1;
        minBoost++;
    }
}