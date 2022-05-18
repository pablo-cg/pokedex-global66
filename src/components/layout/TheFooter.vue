<template>
  <footer>
    <Button
      label="All"
      :icon-src="listIcon"
      :active="route.name.includes('all')"
      @click="to('all')"
    />
    <Button
      label="Favorites"
      :icon-src="starIcon"
      :active="route.name.includes('favorites')"
      @click="to('favorites')"
    />
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import starIcon from '@/assets/img/star-icon.png'
import listIcon from '@/assets/img/list-icon.png'

const route = useRoute()
const router = useRouter()

function to(path) {
  router.push(`/pokemons/${path}`)
}
</script>

<style scoped>
footer {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
