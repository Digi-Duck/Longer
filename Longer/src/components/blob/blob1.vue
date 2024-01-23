<script>
import blob1 from "@/assets/img/homepage/BGpictures/Vector1.svg";
export default {
  data() {
    return {
      blob1: blob1,

    };
  }}
</script>
<template>
  
<div class="swing"><img :src="blob1" alt="" /></div>
  
</template>
<style>

.swing {
  animation: swing ease-in-out 1s infinite alternate;
  transform-origin: center -20px;
  position: absolute;
  z-index: 1;
}
.swing img {
  width: 300px;
  height: 300px;
  display: block;
}

@keyframes swing {
  0% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
}
</style>