var x = 0;
var y = 70;
var vx = 1;
var vy = 1;
var distOffset = 5;

var rx = 0;
var ry = 250;
var rvy = 5;

var rx2 = 470;
var ry2 = 250;
var rvy2 = 5;

var minBoost = 0;


function setup(){
    createCanvas(500,500);
}

function collisionDetection(ax,ay,aw,ah,bx,by,bw,bh){
    return (ax<bx+bw&&ax+aw>bx&&ay<by+bh&&ah+ay>by);
}

function draw(){
    background(100);
    fill('red');
    var rectangle = rect(rx,ry, 30,70);
    rect(rx2, ry2, 30, 70);
    fill('white');
    var obj = ellipse(x,y,50,50);
    x += vx;
    y += vy;

    if(collisionDetection(x,y,50,50,rx,ry,30,70) || collisionDetection(x,y,50,50,rx2,ry2,30,70)){
        vx /= Math.abs(vx);
        vx *= -1;
        vx *= random(1,distOffset)+minBoost;

        vy /= Math.abs(vy);
        vy *= -1;
        vy *= random(1,distOffset)+minBoost;

        minBoost++;
    }
    if(y <= 50 || y >= 480){
        vx /= Math.abs(vx);
        vx *= -1;
        vx *= random(1,distOffset)+minBoost;

        vy /= Math.abs(vy);
        vy *= -1;
        vy *= random(1,distOffset)+minBoost;
    }

    if(keyIsDown(83)){
        ry+=rvy;
        ry = ry > 430 ? 430:ry;
    } else if(keyIsDown(87)){
        ry-=rvy;
        ry = ry < 0 ? 0:ry;
    }

    if(keyIsDown(DOWN_ARROW)){
        ry2+=rvy2;
        ry2 = ry2 > 430 ? 430:ry2;
    }else if(keyIsDown(UP_ARROW)){
        ry2-=rvy2;
        ry2 = ry2 > 0 ? ry2:0;
    }

    if(x<=0){
        textAlign(CENTER);
        fill('black');
        text('GAME OVER. Player 2 wins.',250,250);
        noLoop();
    }
    if(x >= 500){
        textAlign(CENTER);
        fill('black');
        text('GAME OVER. Player 1 wins.',250,250);
        noLoop();
    }
}

