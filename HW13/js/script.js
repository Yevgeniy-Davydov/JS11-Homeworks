"use strict"

// DOM Variables

const button = document.querySelector(".button");
const body = document.body;
const dateText = document.querySelector(".text");

// // Date format function

function formatDate(number){
    if (number < 10){
        return `0${number}`
    }else{
        return `${number}`
    }
};

// // Date

function getCustomDate() {

    let dateTimestamp = Date.now();
    let currentDate = new Date(dateTimestamp);

    let year = currentDate.getFullYear();

    let month = currentDate.getMonth() + 1;
    let currentMonth = formatDate(month);


    let date = currentDate.getDate();
    let currentDay = formatDate(date);


    let hours = currentDate.getHours();
    let currentHours = formatDate(hours);


    let minutes = currentDate.getMinutes();
    let currentMinutes = formatDate(minutes);


    let seconds = currentDate.getSeconds();
    let currentSeconds = formatDate(seconds);


    return `${currentDay}-${currentMonth}-${year} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    
};


let customDate = getCustomDate();

// // Theme change function

function changeTheme(theme){

    if(theme === "dark"){
        button.textContent = "Turn on";
        button.classList.add("active");
        dateText.style.color = "beige";
        dateText.textContent = `Last turn off: ${getCustomDate()}`;
        body.classList.add("active__body");

    }else if(theme === "light"){
        button.textContent = "Turn off";
        button.classList.remove("active");
        dateText.style.color = "blue";
        dateText.textContent = `Last turn on: ${getCustomDate()}`;
        body.classList.remove("active__body");

    }
};

// // Event Listener

button.addEventListener("click", (event) => {

    event.target.classList.toggle("active");


    if(event.target.classList.contains("active")){

        changeTheme("dark");
    
        localStorage.setItem("date", `Last turn off: ${getCustomDate()}`);
        localStorage.setItem("theme", "dark");

    }else{

        changeTheme("light");

        localStorage.setItem("date", `Last turn on: ${getCustomDate()}`);
        localStorage.setItem("theme", "light");



    }
    
});

// // Initialisation

function initTheme(){

    let themeFromLocalstorage = localStorage.getItem("theme");
    changeTheme(themeFromLocalstorage);

    let dateFromLocalStorage = localStorage.getItem("date") || "";
    dateText.textContent = dateFromLocalStorage;

};

initTheme()





