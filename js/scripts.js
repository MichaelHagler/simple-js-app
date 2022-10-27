
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
    const pokemonList = $(".list-group").append("<li class='group-list-item'></li>");
    const button = $("<button></button>");

    $(pokemonList).append(button);
    $(button).addClass("btn btn-primary");
    $(button).attr("type", "button");
    $(button).attr("data-toggle", "modal");
    $(button).attr("data-target", "#modalContainer");
    $(button).html(pokemon.name);
    $(button).on("click", function (event) {
      showDetails(pokemon);
    });

    $(pokemonList).append(button);
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

  function loadDetails(pokemon) {
    const url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //modal to show pokemon details
  function showModal(pokemon){
    const modalHeader = $(".modal-header");
    const modalTitle = $(".modal-title");
    const modalBody = $(".modal-body");


    modalTitle.empty();
    modalBody.empty();


    //modal content
    const pokemonName = $("<h1>" + pokemon.name + "</h1>");
    
    const pokemonDetails = $("<p>" + "Height: " + pokemon.height + "</p>");
    //const pokemonTypes = $("<p>" + "type(s): " + pokemon.types + "</p>");

    const pokemonPic = $("<img class='modal-img' alt='image of pokemon' style='width:50%'>");
    pokemonPic.attr("src", pokemon.imageUrl);

    //render code
    modalTitle.append(pokemonName);
    modalBody.append(pokemonPic);
    modalBody.append(pokemonDetails);
    //modalBody.append(pokemonTypes);
  }


  //show more details of pokemon
  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    };
})();

//calling loadList
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){ //creates pokemon button
    pokemonRepository.addListItem(pokemon);
  });
});