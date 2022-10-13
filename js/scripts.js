
//Pokidex
const pokemonRepository = (function () {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //condition for adding pokemon to pokemonList
  function add(pokemon) {
    if (
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

  // add list of pokemon on webpage
  function addListItem(pokemon){
    const pokemonList = document.querySelector(".pokemon-list");
    const listpokemon = document.createElement("li");
    const button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  //loading messages
  function showLoadingMessage() {
    const messageBox = document.querySelector("div");
    const message = document.createElement("p");

    messageBox.classList.add("loading-messages");
    message.innerText = "Catching Pokemon...";

    messageBox.appendChild(message);
  }

  function hideLoadingMessage() {
    setTimeout(function() {
      document.querySelector("div").classList.remove("loading-messages");
      document.querySelector("p").remove();
    }, 500);
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
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url).then(function (response) {
      showLoadingMessage();
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

  //show more details of pokemon
  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
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