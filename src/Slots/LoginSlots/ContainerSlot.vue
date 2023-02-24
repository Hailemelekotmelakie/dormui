<template>
    <div class="container">
        <ul class="background">
            <slot></slot>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<style scoped>
@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.background {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: var(--backgroundColor);
    overflow: hidden;
}

.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 40px;
    height: 40px;
    background: var(--buttonColor);
    animation: animate 19s linear infinite;
    z-index: -999;
}




.background li:nth-child(0) {
    left: 60%;
    width: 97px;
    height: 97px;
    bottom: -97px;
    animation-delay: 1s;
}

.background li:nth-child(1) {
    left: 81%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 1s;
}

.background li:nth-child(2) {
    left: 0%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 1s;
}

.background li:nth-child(3) {
    left: 72%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 8s;
}

.background li:nth-child(4) {
    left: 78%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 3s;
}

.background li:nth-child(5) {
    left: 18%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 4s;
}

.background li:nth-child(6) {
    left: 67%;
    width: 97px;
    height: 97px;
    bottom: -97px;
    animation-delay: 21s;
}

.background li:nth-child(7) {
    left: 75%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 24s;
}

.background li:nth-child(8) {
    left: 44%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 11s;
}

.background li:nth-child(9) {
    left: 67%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 39s;
}

.background li:nth-child(10) {
    left: 12%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 8s;
}

.background li:nth-child(11) {
    left: 83%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 25s;
}

.background li:nth-child(12) {
    left: 60%;
    width: 97px;
    height: 97px;
    bottom: -97px;
    animation-delay: 24s;
}

.background li:nth-child(13) {
    left: 2%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 27s;
}

.background li:nth-child(14) {
    left: 66%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 65s;
}

.background li:nth-child(15) {
    left: 47%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 10s;
}

.background li:nth-child(16) {
    left: 18%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 78s;
}

.background li:nth-child(17) {
    left: 12%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 82s;
}

.background li:nth-child(18) {
    left: 29%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 50s;
}

.background li:nth-child(19) {
    left: 64%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 18s;
}

.background li:nth-child(20) {
    left: 39%;
    width: 93px;
    height: 93px;
    bottom: -93px;
    animation-delay: 96s;
}

.background li:nth-child(21) {
    left: 12%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 60s;
}

.background li:nth-child(22) {
    left: 6%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 56s;
}

.background li:nth-child(23) {
    left: 46%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 30s;
}

.background li:nth-child(24) {
    left: 15%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 114s;
}

.background li:nth-child(25) {
    left: 15%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 101s;
}

.background li:nth-child(26) {
    left: 58%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 98s;
}

.background li:nth-child(27) {
    left: 0%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 24s;
}

.background li:nth-child(28) {
    left: 58%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 71s;
}

.background li:nth-child(29) {
    left: 45%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 33s;
}

.background li:nth-child(30) {
    left: 84%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 125s;
}

.background li:nth-child(31) {
    left: 23%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 103s;
}

.background li:nth-child(32) {
    left: 52%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 155s;
}

.background li:nth-child(33) {
    left: 43%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 115s;
}

.background li:nth-child(34) {
    left: 1%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 145s;
}

.background li:nth-child(35) {
    left: 11%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 112s;
}

.background li:nth-child(36) {
    left: 10%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 63s;
}

.background li:nth-child(37) {
    left: 78%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 108s;
}

.background li:nth-child(38) {
    left: 59%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 164s;
}

.background li:nth-child(39) {
    left: 30%;
    width: 96px;
    height: 96px;
    bottom: -96px;
    animation-delay: 1s;
}

.background li:nth-child(40) {
    left: 48%;
    width: 95px;
    height: 95px;
    bottom: -95px;
    animation-delay: 106s;
}

.background li:nth-child(41) {
    left: 60%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 125s;
}

.background li:nth-child(42) {
    left: 48%;
    width: 97px;
    height: 97px;
    bottom: -97px;
    animation-delay: 20s;
}

.background li:nth-child(43) {
    left: 73%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 165s;
}

.background li:nth-child(44) {
    left: 49%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 181s;
}

.background li:nth-child(45) {
    left: 2%;
    width: 97px;
    height: 97px;
    bottom: -97px;
    animation-delay: 216s;
}

.background li:nth-child(46) {
    left: 7%;
    width: 98px;
    height: 98px;
    bottom: -98px;
    animation-delay: 170s;
}

.background li:nth-child(47) {
    left: 59%;
    width: 94px;
    height: 94px;
    bottom: -94px;
    animation-delay: 209s;
}

.background li:nth-child(48) {
    left: 76%;
    width: 99px;
    height: 99px;
    bottom: -99px;
    animation-delay: 79s;
}
</style>