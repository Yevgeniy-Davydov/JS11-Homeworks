"use strict"


// 1 Task

function durationBetweenDates(start = "01 Jan 1970", end = "02 Jan 1970", unit = "days"){

    let startDate = new Date (start);
    let endDate = new Date (end);

    let difference = endDate > startDate ? endDate - startDate : startDate - endDate

    switch (unit){
        case "seconds" : console.log(Math.floor(difference / 1000), unit);
        break;

        case "minutes" : console.log(Math.floor(difference / 60000), unit);
        break;

        case "hours" : console.log(Math.floor(difference / 3600000), unit);
        break;

        case "days" : console.log(Math.floor(difference / 86400000), unit);
        break;

    }
    
};

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // поверне '362 days'



// 2 Task


const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

const filterUnique = (array) => [...new Set(array)];



console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];