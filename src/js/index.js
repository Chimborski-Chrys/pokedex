const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
       const idPokemonSelecionado = pokemon.attributes.id.value

       document.getElementById('cartao-bulbasaur')
    } )
})

