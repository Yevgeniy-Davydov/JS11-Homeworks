"use strict"


class Strings {
    constructor(name, amounthOfStrings, type) {
        this.name = name;
        this.amounthOfStrings = amounthOfStrings;
        this.#type = type;
    };
    showName(){
        console.log(`Here is the ${this.name}`)
    };
    playSound() {
        console.log(`Sound like all ${this.type} instruments.`)
    };
    showFullDescription() {
        console.log(`The ${this.name} is ${this.type} instrument and has ${this.amounthOfStrings} strings.`)
    };

};

class Guitars {
    constructor(name, price, countryOfProduction) {
        this.name = name;
        this.price = price;
        this.#countryOfProduction = countryOfProduction
        
    };
    showName(){
        console.log(`Here is the ${this.name}`)
    };
    showCountryOfProduction() {
        console.log(`This Guitar was made in ${this.countryOfProduction}`)
    };
    showPrice() {
        console.log(`The price ot this Guitar is ${this.price}`)
    };
};

class Violins {
    constructor(name, price, yearOfProduction){
        this.name = name;
        this.price = price;
        this.#yearOfProduction = yearOfProduction;
    };
    showName(){
        console.log(`Here is the ${this.name}`)
    };
    showPrice() {
        console.log(`The price ot this Violin is ${this.price}`)
    };
    showYearOfProduction() {
        console.log(`This Violin was manufactured in ${this.yearOfProduction}`)
    };
};

class Pianos {
    constructor(name, price, type){
        this.name = name;
        this.price = price;
        this.type = type;
    };
    showName(){
        console.log(`Here is the ${this.name}`)
    };
    showPrice() {
        console.log(`The price ot this Piano is ${this.price}`)
    };
    showType() {
        console.log(`This Piano is ${this.type}`)
    };
}