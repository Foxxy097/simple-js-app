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

  return {
    add: add,
    getAll: getAll
  };
})();
pokemonRepository.add({name: 'Vulpix', types:['fire'], height: 2.00 });

pokemonRepository.getAll().forEach(function(item, i) {
});
