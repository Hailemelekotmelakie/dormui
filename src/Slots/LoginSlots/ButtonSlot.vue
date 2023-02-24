<template>
    <button type="button" class="btn-primary">
        <slot> </slot>
    </button>
</template>
<style scoped>
.btn-primary {
    display: flex;
    padding: 10px 25px;
    margin: 5px;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    background: linear-gradient(267.92deg, var(--buttonColor) 40%, var(--buttonColor) 100%);
    box-shadow: inset 4px 4px 8px rgb(255, 255, 255), inset -4px -4px 8px rgba(0, 0, 0, 0.7);
    border-radius: 8px;
}

.btn-primary:hover {
    opacity: 0.89;
    transition: 0.2s;
    cursor: pointer;
}
</style>