<template>
    <div class="icon">
        <div class="arrow"></div>
    </div>
</template>

<style scoped>
.icon {
    position: relative;
    width: 80px;
    height: 50px;
    cursor: pointer;
}

.arrow {
    position: absolute;
    width: 50%;
    height: 7px;
    background-color: var(--buttonColor);
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
}

.arrow::after,
.arrow::before {
    content: '';
    position: absolute;
    width: 55%;
    height: 7px;
    background-color: var(--buttonColor);
}

.arrow::after {
    top: -6px;
    left: -4px;
    transform: rotate(-50deg);
}

.arrow::before {
    top: 6px;
    left: -4px;
    box-shadow: 0 3px 5px rgba(96, 14, 237, 0.2);
    transform: rotate(45deg);
}
</style>