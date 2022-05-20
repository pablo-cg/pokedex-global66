import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    favoritePokemons: []
  }),
  actions: {
    addFavorite(pokemon) {
      this.favoritePokemons.push(pokemon)
    },
    removeFavorite(pokemon) {
      this.favoritePokemons = this.favoritePokemons.filter(
        (p) => p.name !== pokemon.name
      )
    }
  }
})
