let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modal = document.querySelector('#exampleModal');

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll() {
    return pokemonList;
  }
function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');

  button.innerText = pokemon.name;
  button.classList.add('Pokemon-button');
  button.classList.add('btn')
  button.classList.add('btn-dark')

  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

  button.addEventListener('click', function(event) {
  showDetails(pokemon, modal);
  });
}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
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
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.weight = details.weight;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon){
  pokemonRepository.loadDetails(pokemon).then(function () {
  showModal(pokemon);
  });
}
function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  modalTitle.empty();
  modalBody.empty();



//Create a name element to display in the console
let nameElement = $('<h1 class="text-capitalize">' + pokemon.name + '</h1>');
// Image element
let imageElement = $('<img class="modal-img" src="" >');
imageElement.attr('src', pokemon.imageUrl);
// Height and Weight
let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');


  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);

  $('#exampleModal').modal();
  }


fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
return response.json();
}).then(function (pokemonList) {
console.log(pokemonList);
}).catch(function () {
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();
pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
