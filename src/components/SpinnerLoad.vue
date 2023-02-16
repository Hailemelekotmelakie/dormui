<template>
  <div class="spinnerLoaderyyyy">
    <svg class="spinneryyyy">
      <circle
        class="pathyyyy"
        cx="20"
        cy="20"
        r="15"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>
  </div>
</template>
<style>
.spinnerLoaderyyyy {
  background: #297085;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinneryyyy {
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-animation: rotate 0.7s linear infinite;
  animation: rotate 0.7s linear infinite;
  width: 40px;
  height: 40px;
}
.spinneryyyy .pathyyyy {
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #ffffff;
  stroke-linecap: round;
  -webkit-animation: dash 1.9s ease-in-out infinite;
  animation: dash 1.9s ease-in-out infinite;
}

@-webkit-keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
