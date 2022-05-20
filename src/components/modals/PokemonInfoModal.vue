<script setup>
import { computed, onMounted, ref } from 'vue'
import FavoriteStar from '../layout/FavoriteStar.vue'
import { usePokemonStore } from '@/stores/pokemon'

const emit = defineEmits(['close'])
const store = usePokemonStore()

const props = defineProps({
  pokemon: Object
})

function join(array) {
  return array?.join(', ')
}

function isFavorite(pokemon) {
  return store.favoritePokemons.find((p) => p.name === pokemon.name)
}

const favoriteColor = computed(() => {
  return isFavorite(props.pokemon) ? '#eca539' : '#bfbfbf'
})

function copyAttribs() {
  const { name, weight, height, types } = props.pokemon
  const attribs = `name: ${name}, weight: ${weight}, height: ${height}, types: ${join(
    types
  )}`
  navigator.clipboard.writeText(attribs)
}

function setFavorite(value) {
  if (isFavorite(value)) {
    store.removeFavorite(value)
  } else {
    store.addFavorite(value)
  }
}
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <header class="header">
        <img :src="pokemon?.img" class="pokemon-img" />
        <img
          src="@/assets/img/close-icon.png"
          class="close-button"
          @click="emit('close')"
        />
      </header>
      <main class="content">
        <ul>
          <li><strong>Name: </strong>{{ pokemon?.name }}</li>
          <li><strong>Weight: </strong>{{ pokemon?.weight }}</li>
          <li><strong>Height: </strong>{{ pokemon?.height }}</li>
          <li><strong>Types: </strong>{{ join(pokemon?.types) }}</li>
        </ul>
        <section class="actions">
          <Button label="Share to my friends" @click="copyAttribs" active />
          <button class="star-btn" @click="setFavorite(pokemon)">
            <FavoriteStar :color="favoriteColor" />
          </button>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.close-button {
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;
}

.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 0%;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background-transparent);
}

.modal {
  width: 85vw;
  height: 65vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 1.5rem;
}

.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/img/modal-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  max-height: 230px;
}

.content {
  flex: 2;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  gap: 1rem;
}

.content ul {
  list-style: none;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content ul li {
  border-bottom: solid var(--color-lightgrey) 1px;
  padding: 0.8rem 0;
  padding-left: 5px;
  text-transform: capitalize;
}

.content ul strong {
  font-weight: 700;
}

.pokemon-img {
  max-width: 60%;
  min-height: 230px;
  padding: 1rem 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}

.star-btn {
  border: none;
  background-color: var(--color-lightergrey);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>
