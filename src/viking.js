// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;

    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;

    } 

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry (){
        return `Odin Owns You All!`
    }
}
        
        
        
// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength);
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }


    addViking (viking){
        this.vikingArmy.push (viking);
    }


    addSaxon (saxon){
        this.saxonArmy.push (saxon);
    }

    vikingAttack() {

        //to get a random Saxon soldier
        const randomSaxonArmy = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonArmy];


        //to get a random viking soldier
        const randomVikingArmy = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingArmy];


        //to calculate the damage
        const damage = randomViking.strength;
        const result = randomSaxon.receiveDamage(damage);


        //to remove a dead Saxon from the array
        if (randomSaxon.health <= 0 ) {
            this.saxonArmy.splice(randomSaxonArmy, 1);
            
        }return result;

    }


    saxonAttack() {

        //to get random Viking
        const randomVikingArmy = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingArmy];


        //to get random Saxon
        const randomSaxonArmy = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonArmy];

        //to calculate damage
        const damage = randomSaxon.strength;
        const result = randomViking.receiveDamage(damage);


        //to remove dead Viking from the array
        if (randomViking.health <= 0 ){
            this.vikingArmy.splice(randomVikingArmy, 1);
            
        }return result;

    }


    showStatus (){
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }

}