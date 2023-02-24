<template>
    <a class="link">
        <slot></slot>
    </a>
</template>
<style scoped>
.link {
    display: flex;
    font-size: 20px;
    color: var(--ancherTextColor);
    cursor: pointer;
}

.link:hover {
    text-decoration: underline;
}
</style>