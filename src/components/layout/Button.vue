<template>
  <button class="btn" :class="active ? 'active' : ''">
    <img v-if="iconSrc" :src="iconSrc" alt="" width="22" height="22" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  label: String,
  iconSrc: String,
  active: Boolean,
})
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 20px;
  gap: 10px;
  width: 150px;
  height: 44px;
  border: none;
  border-radius: 60px;
  background-color: var(--color-grey);
  cursor: pointer;
}

.btn.active {
  background-color: var(--color-tomato);
}

span {
  color: var(--color-light);
  font-weight: 700;
  font-size: 1rem;
}

.btn:hover,
.btn:active {
  background-color: var(--color-crimson);
}
</style>
