"use strict"

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };

  let newObject = {};
  
for (let key in priceData){
  newObject[key.toLowerCase()] = Number(priceData[key]).toFixed(2);
};



console.log(newObject)
