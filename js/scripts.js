
//Pokidex
const pokemonRepository = (function(){
  const pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //condition for adding pokemon to pokemonList
  function add(pokemon) {
    if(
      typeof pokemon === 'object' &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
      ) {
      repository.push(pokemon);
    } else{
      console.log("pokemon is not correct");
    }
  }

  // for returning pokemonList to use outside IIFE
  function getAll() {
    return repository;
  }

   //show more details of pokemon
   function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
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

  //load pokemon from api
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    addListItem,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails
    };
})();


console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add({name: "Weedle", type: ["bug", "poison"], height: 1}));
console.log(pokemonRepository.getAll());

//calling loadList
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){ //creates pokemon button
    pokemonRepository.addListItem(pokemon);
  });
});