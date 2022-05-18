<script setup>
import { computed } from 'vue'
import FavoriteStar from './FavoriteStar.vue'
const props = defineProps({
  pokemon: Object,
})

const favoriteColor = computed(() => {
  const { pokemon } = props
  return pokemon?.isFavorite ? '#eca539' : '#bfbfbf'
})
</script>

<template>
  <main class="item">
    <span class="label">{{ pokemon?.name }}</span>
    <div class="star">
      <FavoriteStar :color="favoriteColor" />
    </div>
  </main>
</template>

<style scoped>
.item {
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  border-radius: 5px;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.item:hover .item:active {
  transform: scale(1.02);
}

.label {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.star {
  background-color: var(--color-lightergrey);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
