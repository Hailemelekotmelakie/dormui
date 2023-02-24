<template>
    <div class="errorContainer">
        <slot></slot>
    </div>
</template>
<style scoped>
.errorContainer {
    background-color: rgba(216, 49, 49, 0.307);
    border-left: 10px solid rgb(235, 13, 13);
    padding: 10px 10px;
    width: 100%;
    text-align: center;
    border-radius: 4px;
}
</style>