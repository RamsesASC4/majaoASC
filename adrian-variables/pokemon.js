function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min + 1)) + min;
}

function Pokemon(options){
    // We can use a for loop to simply set the variables of pokemon, however...
    //We want to ensure that we only use memory for the variables we NEED. Not the variables passed in from the options object.
    this.name = options.name;
    this.type = options.type;
    this.moves = options.moves;
    this.health = options.health;
    this.defense = options.defense;
    this.attack = options.attack;
    this.specialAttack = options.specialAttack;
    this.specialDefense = options.specialDefense;
    this.happiness = options.happiness;
}

Pokemon.prototype.TakeDamage = function(int){
    var damage = Math.floor(int)
    this.health = Math.ceil(this.health - damage);
    console.log(this.name + " now has " + this.health + " HP.");
}

Pokemon.prototype.Battle = function(pokemon2){
    var pokemon = this; //I already named everything pokemon. Im lazy srry
    var turn = true;
    if(pokemon2 instanceof Pokemon){
        while(pokemon.health > 0 && pokemon2.health > 0){
            var critChance = Math.random(0,100) * 100;
            var didCrit = "";
            if(critChance > 50){
                critChance = 0.3;
                didCrit = " and it critically stroke";
            } else {
                critChance = 1;
            }
            if(turn){
                var moveIndex = getRandomInt(-1,pokemon.moves.length-2);
                var moveSelected = pokemon.moves[moveIndex];
                var moveDamage = getRandomInt(moveSelected.damageMin, moveSelected.damageMax);
                console.log(pokemon.name + " used " + moveSelected.name + " and dealt " + Math.floor((pokemon.attack*0.2 + pokemon.attack*critChance + moveDamage*0.3)) + " damage" + didCrit + "!");
                pokemon2.TakeDamage(pokemon.attack*0.2 + pokemon.attack*critChance + moveDamage*0.3);
            } else {
                var moveIndex = getRandomInt(-1, pokemon2.moves.length-2);
                var moveSelected = pokemon2.moves[moveIndex];
                var moveDamage = getRandomInt(moveSelected.damageMin, moveSelected.damageMax);
                console.log(pokemon2.name + " used " + moveSelected.name + " and dealt " + Math.floor((pokemon2.attack*0.2 + pokemon2.attack*critChance + moveDamage*0.3)) + " damage" + didCrit + "!");
                pokemon.TakeDamage(pokemon2.attack*0.2 + pokemon2.attack*critChance + moveDamage*0.3);
            }
            turn = !turn;
        }
        if(pokemon.health > 0){
            console.log(pokemon.name + " has won the duel!");
        } else {
            console.log(pokemon2.name + " has won the duel!");
        }
    }

}

var pikachu = new Pokemon({
    name: "Pikachu",
    type: "Electric",
    health: 105,
    defense: 50,
    attack: 75,
    specialAttack: 125,
    specialDefense: 85,
    happiness: 50,
    moves: [{
       name: "Iron Whip",
       type: "Melee, Metal",
       damageMin: 10,
       damageMax: 50,
       effectiveRatio: 0.325,
       debuff: "None",
    },
    {
       name: "Thunderbolt",
       type: "Electric",
       damageMin: 10,
       damageMax: 35,
       effectiveRatio: 0.8,
       debuff: "Paralysis",
    }],
});

var charizard = new Pokemon({
    name: "Charizard",
    type: "Electric",
    health: 105,
    defense: 50,
    attack: 75,
    specialAttack: 125,
    specialDefense: 85,
    happiness: 50,
    moves: [{
       name: "Dragon Meteor",
       type: "Dragon",
       damageMin: 5,
       damageMax: 100,
       effectiveRatio: 0.725,
       debuff: "Self-Weaken",
    },
    {
       name: "Firethrower",
       type: "Fire",
       damageMin: 25,
       damageMax: 40,
       effectiveRatio: 0.725,
       debuff: "Self-Weaken",
    }],
});

var sandshrew = new Pokemon({
    name: "Sandshrew",
    type: "Ground",
    health: 105,
    defense: 50,
    attack: 75,
    specialAttack: 125,
    specialDefense: 85,
    happiness: 50,
    moves: [{
       name: "Dig",
       type: "Ground",
       damageMin: 10,
       damageMax: 50,
       effectiveRatio: 0.45,
       debuff: "None",
    }],
});

var dragonite = new Pokemon({
    name: "Dragonite",
    type: "Fire",
    health: 105,
    defense: 50,
    attack: 75,
    specialAttack: 125,
    specialDefense: 85,
    happiness: 50,
    moves: [{
       name: "Dragon Meteor",
       type: "Dragon",
       damageMin: 50,
       damageMax: 200,
       effectiveRatio: 0.725,
       debuff: "Self-Weaken",
    }],
});

var pokedex = [];

pokedex.push(pikachu, charizard, dragonite, sandshrew, charizard);

/*

if(pokedex.length >= 5){
    for(var pokeman=pokedex.length-1;pokeman>-1;pokeman--){
        console.log(pokedex[pokeman].name);
    }
} else {
    console.log("You cannot play. You do not have enough pokemon.");
}
*/

pikachu.Battle(charizard);