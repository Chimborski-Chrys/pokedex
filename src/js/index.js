const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
//const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbri = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbri)
      cartaoPokemonParaAbrir.classList.add('aberto')

      const pokemonAtivoListagem = document.querySelector('.ativo')
      pokemonAtivoListagem.classList.remove('ativo')

      const pokmonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokmonSelecionadoNaListagem.classList.add('ativo')
    } )
})

