"use strict"

// 1 Taks

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
    
	if (direction === ">"){
        return (a,b) => (a[property] > b[property] ? 1 : -1)
    }
    return (a,b) => (a[property] < b[property] ? 1 : -1)
};


// 2 Task

function add(a,b) {
    console.log(a + b)
};

function slower(func, seconds) {

    console.log(`Chill out, you will get you result in ${seconds} seconds`);

    return function (...args){
    
        return setTimeout(()=> func.apply(this, args), seconds * 1000);
    };
  
};

let slowedAddFunction = slower(add, 5); 

slowedAddFunction(7,3);






