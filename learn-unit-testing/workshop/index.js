// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

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
}