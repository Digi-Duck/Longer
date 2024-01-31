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
import Last from "@/assets/img/homepage/Swiper/Last.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCreative],
      List: [List1, List2, List3, List4, List5, List6, List7],
      Last,
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
      <swiper-slide
        :style="{ backgroundImage: `url(${Last})` }"
        class="bg-contain"
      >
        <RouterLink
          to="/admissionList"
          class="text-[1.5rem] bg-[#887c6c] w-[160px] h-[100px] text-center rounded-lg leading-[100px] font-[ChenYuluoyan] font-thin"
          >更多優良榜單</RouterLink
        >
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>-->
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

.swiper-slide:nth-child(8n) {
  background-color: #fef8dd;
}
</style>
