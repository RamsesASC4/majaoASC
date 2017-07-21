function setup(){
    createCanvas(600,600);
    background('teal');
}
var x = 290;
var y = 550;
var ax = 25, ay=25,vx=1; //first alien of every row's x-position, first row's y-position, vector/direction for aliens
var spawn = y-21;
var bullets = []; //Bullets so they don't disappear when we draw
var aliens = [
    [[25,25],[],[],[],[]], //Initialize the first array in each row. The arrays in these rows represent an alien
    [[25,50],[],[],[],[]],
    [[25,75],[],[],[],[]],
    [[25,100],[],[],[],[]]
];

//Collision detection
//a - object 1
//b - object 2
//ax - object 1 x-position
//ay - object 1 y-position
//aw - object 1 width
//ah - object 2 height
//bx, by, bw, and bh as such aswell
function collisionDetection(ax,ay,aw,ah,bx,by,bw,bh){
    /*
    If a(object 1) and b(object 2) are within each other's boundaries,
    they are colliding. The returned calculated conditional basically states:
    if object 1's x-position is within object 2's x-boundaries (x-position+width)
    and object 2's y-position is within object 2's y-boundaries (y-position+height)
    and vice versa for object 2. We check if it is within object 1's boundaries
    */
    return(ax<bx+bw&&ax+aw>bx&&ay<by+bh&&ah+ay>by);
}

function draw(){
    setup()
    fill('purple')
    rect(x, y, 20, 40);
    if (keyIsDown(LEFT_ARROW)){
        x-=10;
    }

    if (keyIsDown(RIGHT_ARROW)){
    x+=10;
    }
    if (x<11){
        x=10
    }
    if (x>570){
        x=569
    }
    //Sets boundaries of aliens
    if(ax >= 500){ //Right limit
        vx=-1; //Go back left instead
        ay+=25; //Pull aliens down
    }
    if(ax <= 10){//Left limit
        vx=1;//Go right now instead
        ay+=25; //Pull aliens down
    }
    for(var i=0;i<aliens.length;i++){ //Goes through aliens for rows
        for(var j=0;j<aliens[i].length;j++){    //Goes through rows for individual aliens
           if(j==0){ //If it's the initial alien in that row
               aliens[i][j][0] = ax; //We set it to ax as every other empty array depends on the initial/index 0's values to work
           } else {
               aliens[i][j][0] = aliens[i][j-1][0]+=25; //Base the values of the individual alien's positions on its previous alien starting at 2nd alien
           }
            aliens[i][j][1]=ay+(25*i); //Set y position based on row for individual alien
            ellipse(aliens[i][j][0], aliens[i][j][1], 20, 20); //Create alien
        }
    }
    fill('red')
    for (var i=0;i<bullets.length;i++){
        bullets[i][1] -= 5; //Increases bullets y direction to fly up
        rect(bullets[i][0], bullets[i][1], 10, 10); //Creates bullets
        for(var k=0;k<aliens.length;k++){ //Go through the aliens array to find each row
            for(var j=0;j<aliens[k].length;j++){ //Go through each row to find each alien!
                if(aliens[k] && aliens[k][j] && bullets[i] ){ //Makes sure they exist so it doesn't break the code!
                    if(collisionDetection(bullets[i][0], bullets[i][1], 10, 10, aliens[k][j][0], aliens[k][j][1], 20, 20)){ //Checks if they collide
                        //Deletes from each array
                        bullets.splice(i,1);
                        aliens[k].splice(j,1);
                    }
                }
            }
        }
        //Deletes bullet if it hits the top
        if (bullets[i] && bullets[i][1] <=0){
            bullets.splice(i,1);
        }
    }
    ax+=5*vx; //Vx is the vector/direction. The number is the speed
}

function keyPressed(){
    if(keyCode ==UP_ARROW || keyCode == 32){
        bullets.push([x, spawn]);
        rect(x, spawn,10,10)
    }
}
