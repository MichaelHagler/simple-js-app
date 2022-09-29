
//Pokidex
let pokemonRepository = (function(){
  let pokemonList = [
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

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
console.log(pokemonRepository.pokemonList);



// forEach()
// lists all pokemon from pokemonList array
pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height > 0.6){
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}) -Wow that's big!</p>`)
  } else{
    document.write(`<p>${pokemon.name} (height: ${pokemon.height})</p>`);
  }});
