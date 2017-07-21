

var Pikachu = {
    Name: "Pikachu",
    Type: "Electric",
    Num: 1,
    HP: 100,
    Attack: 155,
    Speed: 135,
    Defense: 80,
    LastEvolution: false,
    Thunderbolt: function(){
                    console.log("Pikachu used thunderbolt and dealt: " + Math.random(1, this.Attack).toFixed(2));
                },
    Iron_Whip: function(){
        console.log("Pikachu used Iron Whip and dealt: " + Math.random(5, this.Attack).toFixed(2));
    }
}

var Charizard = {
    Name: "Charizard",
    Type: "Fire and Dragon",
    Num: 2,
    HP: 110,
    Attack: 205,
    Speed: 75,
    Defense: 100,
    LastEvolution: false,
    Roar: function(){
    var chance = math.random(1, 100);
        if(chance > 80){
            console.log("Charizard used roar and petrified his opponent!");
        } else {
            console.log("Attack failed!");
        }
    },
    Scratch: function(){
        console.log("Charizard used Scratch and dealt: " + Math.random(10, this.Attack).toFixed(2));
    }
}

var Mewtwo = {
    Name: "Mewtwo",
    Type: "Psychic and Flying",
    Num: 3,
    HP: 110,
    Attack: 205,
    Speed: 75,
    Defense: 100,
    LastEvolution: true,
    Psychic: function(){
        console.log("Mewtwo used Psychic and it was super effective: " + this.Attack);
    },
    Scratch: function(){
        console.log("Mewtwo used Scratch and dealt: " + Math.random(10, this.Attack).toFixed(2));
    }
}

// I could've used this.Name LOL


Pikachu.Thunderbolt();
Mewtwo.Psychic();