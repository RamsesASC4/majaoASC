function Player(data){
     for(var element in data){
          this[element] = data[element];
     }
}

var player = new Player({
     name: "Player",
     health: 100,
     losses: 0,
     gold: 0,
     wins: 0,
});

function Ogre(){

}

$("#title").append("<h1>Welcome to Ogre</h1>").css("color", "white");
function spawnOgre(){
     $("#ogres").html( "<img src='http://wiki.metin2.co.uk/images/thumb/2/21/Ogre_Warrior.png/200px-Ogre_Warrior.png'>");
}
function updateStats(){
     $("#info").text("HP:"+player.health + ", Gold: " + player.gold + ", Defeats: " + player.losses + ", Wins: " + player.wins);
}
// document.addEventListener("DOMContentLoaded", function(event){
//      $("body").append("<h1>Hi</h1>").css("color", "white");
// });

updateStats();
spawnOgre();

$("#hackGold").click(function(){
     player.gold += 50;
     updateStats();
})
$("body").append("<button onclick='attack()'>Attack the Ogre</button>");

function attack(){
     if(player.health > 0){
          console.log("hm");
          if(Math.floor(Math.random()*101) > 40){
               player.gold += 10;
               player.wins++;
               $("#result").text("You won 10 gold.");
          } else {
               player.gold-= 50;
               player.health-=10;
               player.losses++;
          }
          updateStats();
          spawnOgre();
     } else {
          $("body").html("<h1> GAME OVER</h1>");
     }
}
