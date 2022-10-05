
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
      console.log("this is a valid object");
      repository.push(pokemon);
    } else{
      console.log("this is not a valid object");
    }
    
  }

  // for returning pokemonList to use outside IIFE
  function getAll() {
    return repository;
  }

  // add list of pokemon on webpage
  /*In your addListItem() function, add an event listener to the button you created.
   It should listen to a click. As for its event handler function, call the showDetails
    function there, passing the pokemon object as a parameter when a Pokémon is clicked. 
    This parameter should be the same parameter as addListItem(). Note: You might have 
    thought of this already, but you don’t need to select the button using querySelector()
     to add event listeners if you’ve already created the element using createElement() 
     within your JavaScript. Simply add the event listener to the variable that’s been 
     assigned with document.createElement('button').*/
  function addListItem(pokemon){
    const pokemonList = document.querySelector(".pokemon-list");
    const listpokemon = document.createElement('li');
    const button = document.createElement('button');

    button.addEventListener('click', showDetails);
    button.innerText = pokemon.name;
    button.classList.add('button-class');

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  //show more details of pokemon
  function showDetails(pokemon){
    console.log(pokemon);
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