function setup(){
    createCanvas(300,300);
    background('blue');
    strokeWeight(12);
    fill('red');
    ellipse(150,150,250,250);
    fill('white');
    arc(150,150,250,250, 0, PI, CHORD);
    fill('white');
    ellipse(150,150,50,50);
    strokeWeight(0);
    fill('black');
    ellipse(150,150,20,20);
}