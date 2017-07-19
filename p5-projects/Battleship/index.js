
//Settings
var layout = [
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
  [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
];

const StateEnum = {
  HID: 0,
  HIT: 1,
  DED: 2
}

const ColorEnum = {
  RED: "red",
  HID: "#add8e6",
  DED: "#33"
}
var Grid;


function doIt(){
  for(var i=0;i<layout.length;i++){
    for(var j=0;j<layout[i].length;j++){
      layout[i][j][1] = Math.floor(random(0,2));
    }
  }
}

function setup(){
  createCanvas(500,500);
  background(100);
  Grid = new grid(layout,50);
  doIt();
}

function draw(){
  Grid.setup();
}

function mousePressed(){
  console.log("Clicked!");
  console.log(mouseX);
  console.log(mouseY);
  if(mouseButton == LEFT){
    for(var i=0;i<layout.length;i++){
      for(var j=0;j<layout[i].length;j++){
        if(layout[i][j][1] >= 1 && (mouseX > (j*50)) && (mouseX < (50+(j*50)) && (mouseY > (i*50)) && (mouseY < (50+(i*50))))){
           console.log(i);
           console.log(j);
            layout[i][j][0]++;
            return false;
        }
      }
    }
  }
}

function grid(array,dim2){
  this.dim2 = dim2;
  this.setup = function(){
    stroke("black");
    for(var i=0;i<array.length;i++){
      for(var j=0;j<array[i].length;j++){
          fill(StateEnum.HID);
          if(layout[i][j][0] == StateEnum.HID){
            fill(ColorEnum.HID);
          } else if(layout[i][j][0] == StateEnum.HIT){
            fill(ColorEnum.RED);
          } else if (layout[i][j][0] >= StateEnum.DED){
            fill(ColorEnum.DED);
          }
          rect(j*dim2,i*dim2,dim2,dim2);
      }
    }
  }
}


function ship(px,py,sx,sy,color){
  this.x = px;
  this.y = py;
  this.sx = sx;
  this.sy = sy;
  this.color = color;
  this.render = function(){
    if(this.color){ fill(this.color); }
    rect(this.x,this.y,this.sx,this.sy);
  }
}
