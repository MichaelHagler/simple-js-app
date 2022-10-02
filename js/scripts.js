
//Pokidex
const pokemonRepository = (function(){
  const pokemonList = [
    {
      name: "Squirtle",
      type: "water", 
      height: 0.5
    },
    {
      name: "Charmander",
      type: "fire", 
      height: 0.6
    },
    {
      name: "Bulbasaur", 
      type: ["grass", "poison"], 
      height: 0.7
    }
  ];

  //for adding pokemon to pokemonList
  function add(pokemon) {
    if(typeof pokemon === 'object'){
      console.log("this is a valid object");
      pokemonList.push(pokemon);
    } else{
      console.log("this is not a valid object");
    }
    
  }

  // for returning pokemonList to use outside IIFE
  function getAll() {
    return pokemonList;
  }


  return {
    add: add,
    getAll: getAll
    }
})();
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add({name: "Weedle", type: ["bug", "poison"], height: 1}));
console.log(pokemonRepository.add("hello world"));
console.log(pokemonRepository.pokemonList);


// forEach()
// lists all pokemon from pokemonList array
pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height > 0.6){
    document.body.innerHTML += (`<p>${pokemon.name} (height: ${pokemon.height}) -Wow that's big!</p>`);
  } else{
    document.body.innerHTML += (`<p>${pokemon.name} (height: ${pokemon.height})</p>`);
  }});
