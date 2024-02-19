"use strict"

// 1 Task

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray = 1;

// resultsArray.flat(Infinity).forEach((number) => {
//     return productOfArray *= number
//  });
 

// console.log(productOfArray);

// // 2 Task

// const priceData = {
//     Apples: '23.4',
//     BANANAS: '48',
//     oRAngGEs: '48.7584',
//     };
    
//     function optimizer(data) {

//         let array = Object.entries(data);

//         let mappedArray = array.map((item) => {
//             return [item[0].toLowerCase(), Number(item[1]).toFixed(2)]
    
//         });
    
//         let newObject = Object.fromEntries(mappedArray)
    
//         return newObject;
     
//     };
    
//     let updatedPriceData = optimizer(priceData);
    
//     console.log(updatedPriceData)



// 2 Task - shorter solution

// const priceData = {
//     Apples: '23.4',
//     BANANAS: '48',
//     oRAngGEs: '48.7584',
//     };
    
//     function optimizer(data) {
    
//         return Object.fromEntries(Object.entries(data).map((item) => [item[0].toLowerCase(), Number(item[1]).toFixed(2)]));
     
//     };
    
//     let updatedPriceData = optimizer(priceData);
    
//     console.log(updatedPriceData)



// 3 Task - methods of array


// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let vowels = ["А", "Е", "Є", "І", "Ї", "О", "У", "Ю", "Я"];


// let filteredNames = [];
// userNames.forEach((name) =>{
//    if(vowels.includes(name[0])){
//       filteredNames.push(name)
//    }
//    return filteredNames
// });

// console.log(filteredNames);


// 3 Task - filter

// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let vowels = ["А", "Е", "Є", "І", "Ї", "О", "У", "Ю", "Я"];

//  let filteredNames = userNames.filter((name)=> {
//    return vowels.includes(name[0])
//  })

// console.log(filteredNames);


// 4 Task

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials;


// let mappedArray = userNames.map((name) =>{
//    let groupedNames = name.split(" ");
 

//    let separatedNames = groupedNames.map((item) =>{
//     let sinlgleName = item.split("");
//     return sinlgleName[0];
    
//    })
//     let joinedLetters = separatedNames.join(".") + "."

//     return joinedLetters


//    });
// initials = mappedArray.sort()


// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// 4 Task - shorter solution

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

// let initials = userNames.map((name) => name.split(" ").map((item) => item.split("")[0]).join(".") + ".").sort();


// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


