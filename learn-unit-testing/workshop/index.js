// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

const { is } = require("express/lib/request");

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(paramString) {
  const pairs = paramString.split('&');
  
  return pairs.reduce((acc, pair) => {

    const [key, value] = pair.split('=');
    
    acc[decodeURIComponent(key)] = decodeURIComponent(value);
    
    return acc;
  }, {});
};

function isLeapYear(year){
  
  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return 'Its a leap year!'
  } else {
    return 'It is not a leap year.'
  }
}

isLeapYear(2024); //should return It is a leap year!
isLeapYear(2025); //should return It is not a leap year!