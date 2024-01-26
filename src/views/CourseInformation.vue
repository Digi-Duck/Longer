<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
// 課程介紹圖檔
import introduce01 from "@/assets/img/courseInformation/img01.png";
import introduce02 from "@/assets/img/courseInformation/img02.png";
import introduce03 from "@/assets/img/courseInformation/img03.png";
import introduce04 from "@/assets/img/courseInformation/img04.png";
// 背景圖檔
import bg01 from "@/assets/img/courseInformation/blob_bg_01.png";
import bg02 from "@/assets/img/courseInformation/blob_bg_02.png";
import bg03 from "@/assets/img/courseInformation/blob_bg_03.png";


export default {
  components: { HomeTitle },
  data() {
    return {
      introduce01,
      introduce02,
      introduce03,
      introduce04,
      bg01,
      bg02,
      bg03,
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

};
</script>
<template >
  <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <!-- 課程資訊主要內容 -->
  <main>
    <img :src="bg01" alt="background01" class="bg bg01">
    <img :src="bg02" alt="background02" class="bg bg02">
    <img :src="bg03" alt="background03" class="bg bg03">
    <HomeTitle class="xl:!justify-start xl:pl-[138px] xl:mb-[134px] md:mb-[96px] mb-[87px]">課程資訊</HomeTitle>
    <section>
      <div class="bg-1"></div>
      <section class="container" v-for="item in courseContent" :key="item.id">
        <section class="img-area" :style="{ backgroundImage: `url(${item.imgPath})` }"></section>
        <section class="text-area">
          <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="text-content">
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
  @apply xl:pb-[387px] w-full pt-0 pb-[168px] bg-MainColorBG relative;

  // 背景圖定位
  .bg{
    @apply absolute ;
  }
  .bg01{
    @apply top-[11%] right-0;
  }

  .bg02{
    @apply top-[40%] left-0;
  }

  .bg03{
    @apply xl:bottom-[-5%] bottom-[-7%] left-0;
  }

  .HomeTitle{
      @apply xl:justify-start justify-center flex w-full my-[50px];
    }

  section {
    @apply flex justify-center flex-wrap max-w-[1215px] mx-[auto] z-[1];

    
    .container {
      @apply  xl:gap-[20px] flex flex-wrap gap-0 w-full;

      &:nth-child(odd) {
        @apply flex-row-reverse;


        .text-area{
          @apply lg:justify-end;

          .text-content{
            @apply  lg:me-[50px];
          }
        }
      }
      &:not(:last-child){
        @apply  mb-[168px];
      }

      .img-area {
        @apply xl:w-[521px] xl:h-[597px] md:w-[405px] md:h-[426px] w-[340px] h-[358px] mx-0 bg-no-repeat bg-cover;
      }

      .text-area {
        @apply lg:w-[40%] lg:justify-start md:justify-center md:w-full lg:mt-0 md:mt-[78px] flex items-center mx-0;

        .text-content {
          @apply xl:w-[570px] xl:h-[390px] lg:ms-[50px] md:w-[400px] md:h-[322px] w-[290px] h-[210px] flex flex-col justify-center items-center flex-wrap m-0 px-[30px] text-justify leading-[2] bg-[#fff] rounded-[0px_25px_25px_0px] shadow-[3px_3px_5px_#aaa];

          .title {
            @apply w-full mb-[20px] text-[1.5rem];
          }

          .introduce {
            @apply text-[1.2rem];
          }

          .content {
            @apply xl:text-[1.2rem] text-[0.9rem] indent-8;
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
