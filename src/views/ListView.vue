<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import TheFooter from '@/components/layout/TheFooter.vue'

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 1500)
</script>

<template>
  <Transition>
    <Loader v-if="isLoading" />
  </Transition>
  <div v-if="!isLoading" class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
  <div class="footer" v-if="!isLoading">
    <TheFooter />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
