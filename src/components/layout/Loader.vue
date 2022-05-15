<template>
    <div class="container">
        <img class="pokeball" src="@/assets/img/pokeball.svg" alt="">
    </div>
</template>
<style scoped>
.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pokeball {
    animation: spin .7s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>