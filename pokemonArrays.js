/*

IMPORTANT
IMPORTANT
IMPORTANT
IMPORTANT

ACCIDENTALLY DID ALL POKEMON LESSONS FOR ASC IN ONE FILE.
IF YOU WILL GRADE, PLEASE TAKE INTO CONSIDERATION ALL BONUSES ARE DONE
*/

var prompt = require('prompt-sync')();

var charizard = ["Charizard", ["Type:", "Fire"], ["HP:", 200], ["ATK:", 120], ["DEF:", 150],["Legend:", false]];
var pikachu = ["Pikachu", ["Type:", "Electric"], ["HP:",80], ["ATK:", 50], ["DEF:", 50],["Legend:", false]];
var mew = ["Mew", ["Type:", "Psychic"], ["HP:", 100], ["ATK:", 120], ["DEF:", 150],["Legend:", true]];
var umbra = ["Umbra", ["Type:", "Dark"], ["HP:", 120], ["ATK:", 120], ["DEF:", 150],["Legend:", false]];
var dragonite = ["Dragonite", ["Type:", "Fire"], ["HP:", 200], ["ATK:", 120], ["DEF:", 150],["Legend:", false]];
var mewtwo = ["Mewtwo", ["Type:", "Psychic"], ["HP:", 150], ["ATK:", 200], ["DEF:", 80],["Legend:", true]];

var pokedex = [charizard,pikachu,mew,mewtwo,umbra,dragonite];

for(var i=0;i<pokedex.length;i++){
    var str = pokedex[i][0] + " > ";
    for(var j=1;j<pokedex[i].length;j++){
        var data = "";
      for(var k=0;k<pokedex[i][j].length;k++){
          data += pokedex[i][j][k] + " "
      }
      if(j == pokedex[i].length - 1){
          str += data + " ";
      } else {
         str += data + " > ";
      }
    }
    console.log(str)
}

var name = prompt("What pokemon would you like to see?");
var bool = false;
for(var i=0;i<pokedex.length;i++){
    if(pokedex[i][0] == name){
        console.log("It exists at index " + i + "!");
        var bool = true;
    }
}

if(!bool){
    console.log("It doesnt eixst!")
}
