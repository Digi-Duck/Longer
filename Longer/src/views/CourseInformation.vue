<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import introduce01 from "@/assets/img/courseInformation/img01.png";
import introduce02 from "@/assets/img/courseInformation/img02.png";
import introduce03 from "@/assets/img/courseInformation/img03.png";
import introduce04 from "@/assets/img/courseInformation/img04.png";
// AOS
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default {
  components: { HomeTitle },
  data() {
    return {
      introduce01,
      introduce02,
      introduce03,
      introduce04,
      courseContent: [
        {
          imgPath: introduce01,
          title: "升大學美術班",
          introduce: "以大學術科考試項目：",
          content:
            "「素描、水彩、油畫、水墨、書法及創意表現」為授課項目，考前密集訓練，透過練習考古題及模擬術科考試，讓學生在短期內掌握考科重點。",
        },
        {
          imgPath: introduce02,
          title: "國高中美術資優班",
          content:
            "教授項目為升高中美術班術科測驗　「素描、水彩、水墨、書法」四項考科，考前密集訓練，透過練習考古題及模擬術科考試，讓學生在短期內掌握考科重點。",
        },
        {
          imgPath: introduce03,
          title: "成人美術西畫班",
          content:
            "為有精進美術技法需求的成人所開設的班級，老師根據學生程度以及學習目標設計專屬課程。自選時段的彈性課表，讓平時忙於工作的成人也能利用工作之餘，進修自己的美術能力。",
        },
        {
          imgPath: introduce04,
          title: "兒童美術基礎創作班",
          content:
            "九歲以下兒童，會以蠟筆、水彩、黏土等媒材進行創意創作，培養孩童的美感、創意力及觀察能力，讓孩童從作品中認識世界。九歲以上兒童會進入基礎的素描練習，教授初階的表現技法，讓孩童瞭解比例、光影、構圖等素描原理。",
        },
      ],
    };
  },
  mounted() {
    // AOS.init();
  },
};
</script>
<template lang="">
  <!-- 課程資訊主要內容 -->
  <main>
    <section>
      <HomeTitle class="pl-[13px]">課程資訊</HomeTitle>

      <section class="container" v-for="item in courseContent" :key="item.id">
        <section
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          class="img-area"
          :style="{ backgroundImage: `url(${item.imgPath})` }"
        ></section>
        <section class="text-area">
          <section>
            <p class="title">{{ item.title }}</p>
            <p class="introduce">{{ item.introduce }}</p>
            <p class="content">{{ item.content }}</p>
          </section>
        </section>
      </section>
    </section>
    <!-- <div data-aos="fade-up" data-aos-duration="1000" class="aos">
            这是一个使用aos.js的动画效果
        </div> -->
  </main>
</template>
<style lang="scss" scoped>
main {
  @apply w-full pt-0 pb-[50px] bg-MainColorBG;

  section {
    @apply max-w-[1215px] mx-[auto] pt-[30px];

    .container {
      @apply flex flex-wrap w-full mb-[80px];

      &:nth-child(odd) {
        @apply flex-row-reverse;
      }

      .img-area {
        @apply w-[50%] h-[500px] bg-no-repeat bg-cover;
      }

      .text-area {
        @apply flex flex-col justify-center items-center w-[50%];

        section {
          @apply w-[500px] text-justify;

          .title {
            @apply self-start mb-[20px] text-[1.5rem];
          }

          .introduce {
            @apply text-[1.2rem];
          }

          .content {
            @apply text-[1.2rem];
          }
        }
      }
    }
  }
  .aos {
    @apply w-[200px] h-[200px];
  }
}
</style>
