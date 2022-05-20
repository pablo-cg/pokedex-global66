<script setup>
import PokemonInfoModal from '../modals/PokemonInfoModal.vue'
import PokemonListItem from '../layout/PokemonListItem.vue'
import CallToAction from '@/components/layout/CallToAction.vue'
import { usePokemonStore } from '../../stores/pokemon'
import { ref } from 'vue'

const store = usePokemonStore()

const isModalOpen = ref(false)
const selectedPokemon = ref()
const searchInput = ref('')

function closeModal() {
  isModalOpen.value = false
  selectedPokemon.value = null
}

function getInfoPokemon(value) {
  selectedPokemon.value = value
  isModalOpen.value = true
}
</script>

<template>
  <div class="main">
    <SearchInput v-model="searchInput" />
    <NoData
      btn-label="Add Some"
      push-to="all"
      description="You don't have any favorites, why don't you add some?"
      v-if="!store.favoritePokemons.length"
    />
    <div class="poke-list" v-else>
      <PokemonListItem
        v-for="poke in store.favoritePokemons"
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
