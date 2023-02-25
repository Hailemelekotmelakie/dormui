<template>
    <div class="linkContainer">
        <slot></slot>
    </div>
</template>
<style scoped>
.linkContainer {
    box-sizing: border-box;
    color: var(--textColor);
    padding: 10px 25px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    border-bottom: 0.001px solid var(--blurBackgroundColor);
    margin: -0.5px;
}

.linkContainer:hover {
    background-color: var(--blurBackgroundColor);
}
</style>