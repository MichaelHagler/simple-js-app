
//Pokidex
const pokemonRepository = (function(){
  const pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //condition for adding pokemon to pokemonList
  function add(pokemon) {
    if(
      typeof pokemon === 'object' &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
      ) {
      pokemonList.push(pokemon);
    } else{
      console.log("pokemon is not correct");
    }
  }

  // for returning pokemonList to use outside IIFE
  function getAll() {
    return pokemonList;
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
    const listpokemon = document.createElement("li");
    const button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener("click", function () {
      showDetails(pokemon.name);
    });

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  //loading messages
  function loadingMessages(){
    const messageBox = document.querySelector(".loading-messages");
    const message = document.createElement("p");

    messageBox.classList.add("");
    message.innerText = "Catching Pokemon!";

    messageBox.appendChild(message);
  }
  function showLoadingMessage() {
    console.log("Catching Pokemon!");
  }

  function hideLoadingMessage() {
    console.log("Pokemon caught!");
  }

  //load pokemon from api
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      hideLoadingMessage();
      json.results.forEach(function (item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      hideLoadingMessage(); 
      console.error(e);
    })
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    showLoadingMessage();
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      hideLoadingMessage();
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      hideLoadingMessage();
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
    };
})();

//calling loadList
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){ //creates pokemon button
    pokemonRepository.addListItem(pokemon);
  });
});