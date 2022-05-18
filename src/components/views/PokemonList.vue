<script setup>
import { onMounted, ref } from 'vue'
import FavoriteStar from '../layout/FavoriteStar.vue'
import PokemonListItem from '../layout/PokemonListItem.vue'
import { usePokeAPI } from '@/services/index'
import PokemonInfoModal from '../modals/PokemonInfoModal.vue'

const { getAllPokemons, getPokemon } = usePokeAPI()

const searchInput = ref('')
const pokemons = ref([])
const isModalOpen = ref(false)
const selectedPokemon = ref()
let nextPage
let previousPage

async function getData() {
  await getAllPokemons().then((res) => {
    const { results, next, previous } = res.data
    nextPage = next
    previousPage = previous
    pokemons.value = results
  })
}

async function getInfoPokemon(pokemon) {
  const { data } = await getPokemon(pokemon?.name)
  const { types, sprites } = data
  const pokeimg = sprites.other['official-artwork']
  const poketypes = types.map((t) => t.type.name)

  selectedPokemon.value = {
    name: data?.name,
    weight: data?.weight,
    height: data?.height,
    img: pokeimg.front_default,
    types: poketypes
  }
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

onMounted(async () => {
  await getData()
})
</script>

<template>
  <div class="main">
    <SearchInput v-model="searchInput" />
    <div class="poke-list">
      <PokemonListItem
        v-for="poke in pokemons"
        :key="poke.name"
        :pokemon="poke"
        class="pokemon"
        @click="getInfoPokemon(poke)"
      />
    </div>
    <Teleport to="body">
      <PokemonInfoModal
        v-if="isModalOpen"
        @close="closeModal"
        :pokemon="selectedPokemon"
      />
    </Teleport>
  </div>
</template>

<style scoped>
.poke-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>
