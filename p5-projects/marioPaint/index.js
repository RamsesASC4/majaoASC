var bool = true;

function setup(){
    createCanvas(1000,1000);
    frameRate(60);
}

function mouseClicked(){
        fill(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255));
}

function mouseDragged(){
    //fill(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255));
    rect(mouseX, mouseY, 10,10);
    return false;
}

function mouseReleased(){
    clear();
}

console.log("Working");