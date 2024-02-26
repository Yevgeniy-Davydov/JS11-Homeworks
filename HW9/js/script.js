"use strict"

// 1 Task - setInterval

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!


function detonatorTimer(delay) {

	let count = delay;

    let intervalId = setInterval(function(){
        console.log(count--);
       
        if (count === 0) {
        
             clearInterval(intervalId);
        }
       
    }, 1000)

     setTimeout(function(){
            console.log("BOOM!")
        }, 4000)
}

// 2 Task - setTimeout

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {

    let time = 1000;
    let count = delay;

    function counter (){
        console.log(count--);

        if (count > 0){
            setTimeout(counter, time);
        }
    }
    setTimeout(counter, time);

    setTimeout(() => console.log("BOOM!"), 4000)

}

// 3 Task - create an object with some methods

let me ={
    firstName: "Yevgeniy",
    secondName: "Davydov",
    age: 38, 
    city: "Nuremberg",   
    profession: "guitar teacher",
    interest: "coding",
    hobby: "play guitar",
    introduce(){
        console.log(`Hello! My name is ${this.firstName} ${this.secondName}. I live in ${this.city}`)
    },
    describeMyCareer(){
        console.log(`I'm working as a ${this.profession} and learning ${this.interest}`)
    },
    prognose(){
        console.log(`I hope to ${this.hobby} even in 10 years, when im ${this.age + 10}`)
    },

}

me.introduce();
me.describeMyCareer();
me.prognose()

// 4 Task

let me ={
    firstName: "Yevgeniy",
    secondName: "Davydov",
    age: 38, 
    city: "Nuremberg",   
    profession: "guitar teacher",
    interest: "coding",
    hobby: "play guitar",
    introduce(){
        console.log(`Hello! My name is ${this.firstName} ${this.secondName}. I live in ${this.city}`)
    },
    describeMyCareer(){
        console.log(`I'm working as a ${this.profession} and learning ${this.interest}`)
    },
    prognose(){
        console.log(`I hope to ${this.hobby} even in 10 years, when im ${this.age + 10}`)
    },
   
}

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfDescribeMyCareer = me.describeMyCareer.bind(me);
let securedSelfPrognose = me.prognose.bind(me);


setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfDescribeMyCareer, 2000); 
setTimeout(securedSelfPrognose, 3000); 
