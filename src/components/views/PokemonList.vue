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

<script setup>
import { onMounted, ref } from 'vue'
import FavoriteStar from '../layout/FavoriteStar.vue'
import PokemonListItem from '../layout/PokemonListItem.vue'
import { usePokeAPI } from '@/services/index'
import PokemonInfoModal from '../modals/PokemonInfoModal.vue'

const { getAllPokemons } = usePokeAPI()

const searchInput = ref('')
const pokemons = ref([])
const isModalOpen = ref(false)
const selectedPokemon = ref({
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  name: 'Squirtle',
  width: '20',
  height: '18',
  types: ['Normal, Water'],
})
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

function getInfoPokemon(pokemon) {
  console.log(pokemon)
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

onMounted(async () => {
  await getData()
})
</script>

<style scoped>
.poke-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>
