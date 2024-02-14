"use strict"

// 1 Task

function iterativeOddSumTo(number) {

    let result = 0;

    for (let i = 1; i <= number; i += 2){
        
        result = result + i;
    }
    return result
    
    };
    
    console.log(iterativeOddSumTo(1)); 
    console.log(iterativeOddSumTo(9)); 
    console.log(iterativeOddSumTo(10)); 



// 2 Task

function recursiveOddSumTo(number) {

    if (number === 1){
        return number
    }
    if (number % 2 === 1){
        return number + recursiveOddSumTo(number - 2)
    }
        return recursiveOddSumTo(number-1)
    };
    
    console.log(recursiveOddSumTo(1));
    console.log(recursiveOddSumTo(9));
    console.log(recursiveOddSumTo(10)); 



// 3 Task
// Напишіть стрілочну функцію isXOEqual яка перевіряє чи рядок має однакову кількість символів «x» та «o». 
// Функція повинна повертати логічне значення та бути нечутливою до регістру. 
// Рядок може містити будь-які символи.

// const isXOEqual = (str) => {
//     // тут ваш код
// }

// console.log(isXOEqual("ooxx")) // true
// console.log(isXOEqual("xooxx")) // false
// console.log(isXOEqual("ooxXm")) // true
// console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
// console.log(isXOEqual("zzoo")) // false