<script setup>
import { computed } from 'vue'
import FavoriteStar from '../layout/FavoriteStar.vue'
const emit = defineEmits(['close'])

const props = defineProps({
  pokemon: Object,
})

const favoriteColor = computed(() => {
  const { pokemon } = props
  return pokemon?.isFavorite ? '#eca539' : '#bfbfbf'
})

function setFavorite() {
  console.log(props.pokemon)
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
          <li><strong>Types: </strong>{{ pokemon?.types }}</li>
        </ul>
        <section class="actions">
          <Button label="Share to my friends" @click="setFavorite" active />
          <div class="star">
            <FavoriteStar :color="favoriteColor" />
          </div>
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
}

.content ul strong {
  font-weight: 700;
}

.pokemon-img {
  max-width: 60%;
  max-height: 100%;
  padding: 1rem 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}

.star {
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
