var clr, shape;
var butt1,butt2,butt3;

function setup(){
   var cnv =  createCanvas(1500, 1500);
   fill('red');
   butt1 = rect(0,0,1500,50);
   fill('yellow');
   butt2 = rect(0,50,1500,50);
   fill('green');
   butt3 = ellipse(0,50,1500,100);
}

function mousePressed(){
    var d = dist(mouseX, mouseY, butt1.x, butt1.y)
    console.log(dist);
}

function mouseDragged(){
    if(clr && shape){
        fill(clr);
        shape();
    }
}

