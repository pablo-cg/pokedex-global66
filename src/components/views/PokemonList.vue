<script setup>
import PokemonListItem from '../layout/PokemonListItem.vue'
import PokemonInfoModal from '../modals/PokemonInfoModal.vue'
import { onMounted, ref } from 'vue'
import { usePokeAPI } from '@/services/index'

const { getAllPokemons, getPokemon } = usePokeAPI()

const searchInput = ref('')
const pokemons = ref([])
const isModalOpen = ref(false)
const selectedPokemon = ref()
let nextPage
let previousPage

async function getData() {
  if (searchInput.value) {
    await getPokemon(searchInput.value).then((res) => {
      pokemons.value = [{ name: res.data?.name }]
    })
  } else {
    await getAllPokemons().then((res) => {
      const { results, next, previous } = res.data
      nextPage = next
      previousPage = previous
      pokemons.value = results.map((r) => {
        return { name: r.name }
      })
    })
  }
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
    <SearchInput v-model="searchInput" @input="getData" />
    <NoData
      btn-label="Go back home"
      push-to="home"
      description="You don't have any favorites, why don't you add some?"
      v-if="!pokemons.length"
    />
    <div class="poke-list" v-else>
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
