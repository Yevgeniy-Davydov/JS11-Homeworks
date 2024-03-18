"use strict"


const button = document.querySelector(".button");
const body = document.querySelector("body");
const dateText = document.querySelector(".text");



// // Date

function getCustomDate() {

    let dateTimestamp = Date.now();
    let currentDate = new Date(dateTimestamp);

    let year = currentDate.getFullYear();

    let month = currentDate.getMonth() + 1;
    let currentMonth = month < 10 ? `0${month}` : `${month}`;

    let date = currentDate.getDate();
    let currentDay = date < 10 ? `0${date}` : `${date}`;

    let hours = currentDate.getHours();
    let currentHours = hours < 10 ? `0${hours}` : `${hours}`;

    let minutes = currentDate.getMinutes();
    let currentMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    let seconds = currentDate.getSeconds();
    let currentSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${currentDay}-${currentMonth}-${year} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    
};


// // EventListener-color change

button.addEventListener("click", (event) => {

    event.target.classList.toggle("active");
    body.classList.toggle("active__body");

    if(event.target.classList.contains("active")){
        button.textContent = "Turn on";
        dateText.style.color = "beige";
        dateText.textContent = `Last turn off: ${getCustomDate()}`;
        localStorage.setItem("temporaryDate", JSON.stringify(`Last turn off: ${getCustomDate()}`));

    }else{
        button.textContent = "Turn off";
        dateText.style.color = "blue";
        dateText.textContent = `Last turn on: ${getCustomDate()}`;
        localStorage.setItem("temporaryDate", JSON.stringify(`Last turn on: ${getCustomDate()}`));


    }
    
});
// EventListener - localStorage

button.addEventListener("click", () => {
   
    localStorage.setItem("temporaryButtonState", JSON.stringify(button.classList));
    localStorage.setItem("temporaryBackground", JSON.stringify(body.classList));


});


// LocalStorage


let getTheDate = JSON.parse(localStorage.getItem("temporaryDate"));
dateText.textContent = `${getTheDate}`;


// // Its not working, but i suppose its still useful
// let getBackgroundState = JSON.parse(localStorage.getItem("temporaryBackground"));
// body.classList.add(getBackgroundState);
// console.log(getBackgroundState)

// let getButtonState = JSON.parse(localStorage.getItem("temporaryButtonState"));
// button.classList.add(`${getButtonState}`);

// console.log(getButtonState)






