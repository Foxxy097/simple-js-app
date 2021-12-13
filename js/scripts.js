let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur', types: ['grass'], height: 2.04},
    {name: 'Charmeleon', types: ['fire'], height: 2.00},
    {name: 'Squirtle', types: ['water'], height: 1.08},
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
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
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

  button.addEventListener('click', function(event) {
  showDetails(pokemon);
  });
}
function showDetails(pokemon){
  console.log(pokemon.name)
}
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
pokemonRepository.add({name: 'Vulpix', types:['fire'], height: 2.00 });

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
