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

// create a for loop that iterates over each item.
// conditional for biggest pokemon
// document.write() pokemons name and height (bulbasuar (height: 7))

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 0.6) {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})-Wow that's big! `);
  }
  else {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) `);
  }
}