
//Pokidex
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


// forEach()
// lists all pokemon from pokemonList array
pokemonList.forEach(function(pokemon){
  if (pokemon.height > 0.6){
    document.write(`<p>${pokemon.name} (height: ${pokemon.height}) -Wow that's big!</p>`)
  } else{
    document.write(`<p>${pokemon.name} (height: ${pokemon.height})</p>`);
  }
});