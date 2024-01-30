<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

import List1 from "@/assets/img/homepage/Swiper/list1.png";
import List2 from "@/assets/img/homepage/Swiper/list2.png";
import List3 from "@/assets/img/homepage/Swiper/list3.png";
import List4 from "@/assets/img/homepage/Swiper/list4.png";
import List5 from "@/assets/img/homepage/Swiper/list5.png";
import List6 from "@/assets/img/homepage/Swiper/list6.png";
import List7 from "@/assets/img/homepage/Swiper/list7.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCreative],
      List: [List1, List2, List3, List4, List5, List6, List7],
    };
  },
};
</script>
<template>
  <div class="lg:hidden block">
    <swiper
      :grabCursor="true"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="item in List"
        :key="item.id"
        :style="{ backgroundImage: `url(${item})` }"
        class="bg-contain"
      >
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide> -->
    </swiper>
  </div>
</template>

<style>
/* #app { height: 100% }
html, */
body {
  position: relative;
  /* height: 100%; */
}

.swiper {
  margin: 100px auto;
  @apply md:w-[600px]  md:h-[600px]  w-[375px]  h-[375px];
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
