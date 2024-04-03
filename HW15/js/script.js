"use strict"


class Strings {
    #material
    constructor(name, price, color, amounthOfStrings, material, family) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.amounthOfStrings = amounthOfStrings;
        this.#material = material;
        this.family = "Strings";
        
    };
    showName(){
        console.log(`Here is the ${this.name}`)
    };
    playSound() {
        console.log(`Sound like all ${this.family} instruments.`)
    };
    showDescription() {
        console.log(`The ${this.name} is in wonderful ${this.color} color 
        and has ${this.amounthOfStrings} strings.`)
    };

};

class Guitars extends Strings {
    #serialNumber;
    constructor(name, price, color, amounthOfStrings, country, serialNumber, family) {
        super(name, price, color, amounthOfStrings, family);
        this.country = country;
        this.#serialNumber = serialNumber

        
    };
    showCountryOfProduction() {
        console.log(`This Guitar was made in ${this.country}`)
    };
    showPrice() {
        console.log(`The price ot this Guitar is ${this.price}`)
    };
    showFullDescription() {
        console.log(`The ${this.name} is in wonderful ${this.color} color 
        and has ${this.amounthOfStrings} strings. It was produced 
        in ${this.country} and costs ${this.price}.`)
    }
};

class Violins extends Strings {
    #cityOfProduction
    constructor(name, price, color, year, cityOfProduction, type){
        super(name, price, color, 4, type);
        this.year = year;
        this.#cityOfProduction = cityOfProduction;
    };
    showColor(){
        console.log(`The color of ${this.name} violin is ${this.color}.`)
    };
    showPrice() {
        console.log(`The price ot this Violin is ${this.price}.`)
    };
    showYearOfProduction() {
        console.log(`This Violin was manufactured in ${this.year}.`)
    };

};


class Pianos {
    #amountOfKeys
    constructor(name, price, color, type, amountOfKeys){
        this.name = name;
        this.price = price;
        this.color = color;
        this.type = type;
        this.#amountOfKeys = amountOfKeys
    };
    showNameAndColor(){
        console.log(`Here is the ${this.name} piano and it has ${this.color} color.`)
    };
    showPrice() {
        console.log(`The price ot this Piano is ${this.price}.`)
    };
    showType() {
        console.log(`This Piano is ${this.type} one.`)
    };
};



const cello = new Strings ("Stagg", 950, "brown", 4, "wood");
console.log(cello)
const violin = new Violins ("stradivari", 15000, "brown", 1844, "Venice");
console.log(violin);
const guitar = new Guitars ("fender", 1500, "orange", 6, "USA", "GR23416");
console.log(guitar);
const piano = new Pianos ("Yamaha", 899.95, "black", "electric", 76);
console.log(piano)