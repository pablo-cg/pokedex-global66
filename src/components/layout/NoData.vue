<script setup>
defineProps({
  btnLabel: String,
  pushTo: String,
  description: String
})
</script>
<template>
  <div class="no-data">
    <h1>Uh-oh!</h1>
    <h2>{{ description }}</h2>
    <Button
      :label="btnLabel"
      normal
      active
      @click="$router.push(`/pokemons/${pushTo}`)"
    />
  </div>
</template>
<style scoped>
.no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

h1 {
  font-weight: 700;
  font-size: 3rem;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
}
</style>
