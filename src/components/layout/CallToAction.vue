<script setup>
defineProps({
    label: String,
})
</script>

<template>
    <button class="btn">
        {{ label }}
    </button>
</template>

<style scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 20px;
    gap: 10px;
    width: 131px;
    height: 44px;
    border: none;
    border-radius: 60px;
    background-color: var(--color-tomato);
    cursor: pointer;
    color: var(--color-light);
    font-weight: 700;
    font-size: 1rem;
}

.btn:hover,
.btn:active {
    background-color: var(--color-crimson);
}
</style>