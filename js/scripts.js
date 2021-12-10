let pokemonList= [
  {name: 'Bulbasaur', types: ['grass'], height: 2.04},
  {name: 'Charmeleon', types: ['fire'], height: 2.00},
  {name: 'Squirtle', types: ['water'], height: 1.08},
];

pokemonList.forEach((item, i) => {
  document.write('<br>' + pokemonList[i].name + '(height:' + pokemonList[i].height + ') <br>');

});
