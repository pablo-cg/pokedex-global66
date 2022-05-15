<template>
    <footer>
      <Button
        label="All"
        icon-src="/src/assets/img/list-icon.png"
        :active="route.name.includes('all')"
        @click="to('all')"
      />
      <Button
        label="Favorites"
        icon-src="/src/assets/img/star-icon.png"
        :active="route.name.includes('favorites')"
        @click="to('favorites')"
      />
    </footer>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

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
