<script setup>
defineProps({
  label: String,
  iconSrc: String,
  active: Boolean,
  normal: Boolean
})
</script>

<template>
  <button class="btn" :class="active ? 'active' : ''">
    <img v-if="iconSrc" :src="iconSrc" alt="" width="22" height="22" />
    <span :class="normal ? 'normal' : 'thick'">{{ label }}</span>
  </button>
</template>

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

.normal {
  font-weight: 400;
}

.thick {
  font-weight: 700;
}

span {
  color: var(--color-light);
  font-size: 1rem;
}

.btn:hover,
.btn:active {
  background-color: var(--color-crimson);
}

@media (min-width: 1024px) {
  .btn{
    width: 300px;
  }

  span{
    font-size: 1.2rem;
  }
}
</style>
