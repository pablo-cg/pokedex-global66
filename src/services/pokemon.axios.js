import axios from 'axios'

const apiPokemons = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export function usePokeAPI() {
  const getAllPokemons = async () => {
    return await apiPokemons.get('/pokemon')
  }

  const getPokemon = async (name) => {
    return await apiPokemons.get(`/pokemon/${name}`)
  }

  const getPokemons = async (url) => {
    const path = url.substring(25)
    return await apiPokemons.get(path)
  }

  return {
    getAllPokemons,
    getPokemon,
  }
}
