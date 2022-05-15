<template>
  <div class="form-group">
    <img class="magnifier" src="@/assets/img/search-icon.png" />
    <input class="search" type="text" placeholder="Search" v-model="value" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<style scoped>
.form-group {
  width: 100%;
  height: 2.5rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.search {
  font-family: 'Montserrat', sans-serif;
  height: 2.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 140%;
  color: var(--color-dark);
  flex: 1;
}

.search:focus {
  border: none;
}

.magnifier {
  margin-left: 0.8rem;
  width: 18px;
  height: 18px;
}
</style>
