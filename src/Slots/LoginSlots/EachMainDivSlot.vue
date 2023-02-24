<template>
    <div class="container">
        <slot> </slot>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}
</style>