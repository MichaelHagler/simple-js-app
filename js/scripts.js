
//Pokidex
const pokemonRepository = (function(){
  const repository = [
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

  //condition for adding pokemon to pokemonList
  function add(pokemon) {
    if(typeof pokemon === 'object'){
      repository.push(pokemon);
    } else{
      console.log("this is not a valid object");
    }
    
  }

  // for returning pokemonList to use outside IIFE
  function getAll() {
    return repository;
  }

   //show more details of pokemon
   function showDetails(pokemon){
    console.log(pokemon);
  }

  // add list of pokemon on webpage
  function addListItem(pokemon){
    const pokemonList = document.querySelector(".pokemon-list");
    const listpokemon = document.createElement('li');
    const button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.addEventListener('click', function () {
      showDetails(pokemon.name);
    });

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    }
})();
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add({name: "Weedle", type: ["bug", "poison"], height: 1}));
console.log(pokemonRepository.getAll());


// forEach()
// lists all pokemon from pokemonList array
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});