"use strict"

// для елементу з текстом 'Навігація по DOM дереву'

let heading = document.getElementById("headerTwo");
console.log(heading)

// для першого елементу <section>

let section = document.querySelector(".firstSection");
let firstElementInSection = section.firstElementChild;

console.log(firstElementInSection)


// для елементу списку з текстом 'Пункт 5'
let listCollection = document.querySelectorAll("ul li.text");
let forthListItem = listCollection[1];
let fifthListItem = forthListItem.nextElementSibling;
console.log(fifthListItem)


// для елементу з класом 'hatredLevelBlock'

let divWithClass = document.querySelector(".hatredLevelBlock");
console.log(divWithClass)

