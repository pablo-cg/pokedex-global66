<script setup>
import { useRouter } from 'vue-router';
import CallToAction from '../components/layout/CallToAction.vue';

const router = useRouter()

function start() {
  router.push('/pokemons')
}
</script>

<template>
  <div class="home">
    <header class="header">
      <img class="logo" src="@/assets/img/pikachu.png" alt="">
    </header>
    <main class="content">
      <h1>Welcome to Pokédex</h1>
      <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <CallToAction label="Get Started" @click="start" />
    </main>
  </div>
</template>
<style scoped>
body {
  max-width: 100vw;
  max-height: 100vh;
}

.home {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 100%;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  color: var(--color-dark);
}

p {
  font-weight: 500;
  line-height: 150%;
  color: var(--color-darkgrey);
  text-align: center;
  font-size: 1.5rem;
}
</style>
