<template>
    <div class="errorContainer">
        <slot></slot>
    </div>
</template>
<style scoped>
.errorContainer {
    background-color: rgba(216, 49, 49, 0.675);
    padding: 10px 10px;
    width: 80%;
    text-align: center;
    border-radius: 10px;
}
</style>