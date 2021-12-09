let pokemonList= [
  {name: 'Bulbasaur', types: ['grass'], height: 2.04},
  {name: 'Charmeleon', types: ['fire'], height: 2.00},
  {name: 'Squirtle', types: ['water'], height: 1.08},
];

for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 2) {
    document.write('<br>' + pokemonList[i].name + '(height:' + pokemonList[i].height + ') - Wow, that\'s big! <br>');
  } else {
    document.write('<br>' + pokemonList[i].name + '(height:' + pokemonList[i].height + ') <br>');
  }

}
