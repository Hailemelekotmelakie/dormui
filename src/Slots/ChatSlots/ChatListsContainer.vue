<template>
    <div class="mainContainer">
        <slot></slot>
    </div>
</template>
<style scoped>
.mainContainer {
    display: flex;
    width: max-content;
    flex-direction: column;
    padding: 0px 5px;
    top: 35px;
    bottom: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--backgroundColor);
    width: 200px;
}

::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.259);
    border-radius: 1px;
}

::-webkit-scrollbar-thumb {
    border-radius: 1px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width:600px) {
    .mainContainer {
        width: 100%;
    }

}
</style>