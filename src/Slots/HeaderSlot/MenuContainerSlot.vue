<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style scoped>
.container {
    z-index: 1;
    margin: 0px 5px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: max-content;
    background-color: var(--backgroundColor);
    /* box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.059), -4px -4px 8px rgba(129, 129, 129, 0.16); */
    box-shadow: 4px 4px 8px rgba(152, 151, 151, 0.207), -4px -4px 8px rgba(170, 165, 165, 0.189);
    border-radius: 5px;
    overflow: hidden;
}
</style>