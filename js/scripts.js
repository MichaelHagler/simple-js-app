
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

// for loop that iterates over each item.
// conditional for biggest pokemon
// created HTML elements

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 0.6) {
    document.body.innerHTML += (`<p>${pokemonList[i].name} (height: ${pokemonList[i].height}) -Wow that's big!</p>`);
  }
  else {
    document.body.innerHTML += (`<p>${pokemonList[i].name} (height: ${pokemonList[i].height})</p>`);
  }
}