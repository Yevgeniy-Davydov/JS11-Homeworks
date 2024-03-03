"use strict"


// 1 Task

function durationBetweenDates(start = "01 Jan 1970", end = "02 Jan 1970", unit = "days"){

    let difference = Math.abs(new Date (end) - new Date (start));

    
    // let unitName = difference > 1 ? unit : unit.slice(0, unit.length-1);

     

    switch (unit){

        case "seconds" : return `${Math.floor(difference / 1000)} ${unit}`

        case "minutes" : return `${Math.floor(difference / 60000)} ${unit}`;

        case "hours" : return `${Math.floor(difference / 3600000)} ${unit}`;

        case "days" :  return `${Math.floor(difference / 86400000)} ${unit}`
       

    }

};


console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'



// 2 Task


const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

const filterUnique = (array) => [...new Set(array)];



console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];