let pokemonList= [
  {name: 'Bulbasaur', types: ['grass'], height: 2.04},
  {name: 'Charmeleon', types: ['fire'], height: 2.00},
  {name: 'Squirtle', types: ['water'], height: 1.08},
];

for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].types ='grass'){
    console.log(pokemonList[i].name);
  }
  else if (pokemonList[i].types ='fire'){
    console.log(pokemonList[i].name);
  }
  else {
    console.log(pokemonList[i].name);
  }
if (pokemonList[i].height > 2) {
  console.log( ' Wow, that\'s big!')
}
  document.write(pokemonList[i].name + '(height:' + pokemonList[i].height + ')')
}
