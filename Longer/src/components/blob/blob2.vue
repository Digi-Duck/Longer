<script>
import blob2 from "@/assets/img/homepage/BGpictures/Vector2.svg";
export default {
  data() {
    return {
      blob2: blob2,

    };
  }}
</script>
<template>
  
    <div class="swing"><img :src="blob2" alt="" /></div>    
  
</template>
<style>

.swing {
  animation: swing ease-in-out 1s infinite alternate;
  transform-origin: center -20px;
  position: absolute;
  z-index: 1;
}
.swing img {
  width: 400px;
  height: 400px;
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