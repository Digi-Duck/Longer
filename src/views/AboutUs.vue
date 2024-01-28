<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import About1 from "@/assets/img/about_us_ph/About1.png";
import BlobG from "@/assets/img/about_us_ph/blob-1.svg";
import BlobY from "@/assets/img/about_us_ph/blob-2.svg";
import Crayo from "@/assets/img/about_us_ph/crayo.svg";
import About2 from "@/assets/img/about_us_ph/About2.png";
import About3 from "@/assets/img/about_us_ph/About3.png";
import underLine from "@/assets/img/about_us_ph/underLine.png";
export default {
  components: { HomeTitle },
  data() {
    return {
      AboutUsPH: [About1, About2, About3],
      underLine,
      isY: false,
      BlobG: BlobG,
      BlobY: BlobY,
      Crayo: Crayo,
    };
  },
  methods: {
    checkCollision() {
      console.log(1);
      this.isY = true;
    },
  },
};
</script>
<template>
  <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <div class="AboutUsBg">
    <HomeTitle class="xl:pl-[1317px]">關於龍格</HomeTitle>
    <div class="bg-1 z-[1]"></div>
    <section class="content z-[2] lg:gap-32 md:gap-10">
      <div class="ct-h lg:items-end items-center">
        <img
          :src="AboutUsPH[0]"
          class="bigImg rounded-[30px] md:block hidden"
          alt=""
        />
        <img :src="AboutUsPH[1]" class="md:hidden w-[255px]" alt="" />
      </div>
      <div class="ct-h lg:items-start items-center">
        <div class="ct-text-1">
          <p class="content-font-setting">
            <span class="text"
              >一間成立於1994年的小畫室<span class="symbol">，</span></span
            ><span class="text"
              >位在三民路的小巷裡<span class="symbol">，</span></span
            ><span class="text"
              >由丁建中老師從零開始緩緩耕耘<span class="symbol">，</span></span
            ><span class="text">至今已成為在地人口耳相傳的老字號畫室。</span>
          </p>
          <p class="content-font-setting">
            <span class="text"
              >沒有多餘的廣告宣傳畫室<span class="symbol">，</span></span
            >
            <span class="text"
              >老師透過實力及教學熱忱<span class="symbol">，</span></span
            >
            <span class="text"
              >打動每位前來學習的學生<span class="symbol">，</span></span
            >
            <span class="text">也為龍格畫室建立了最佳的口碑。</span>
          </p>
          <p class="content-font-setting">
            <span class="text"
              >老師期盼能幫助每個<span class="symbol">，</span></span
            >
            <span class="text"
              >對夢想懷抱憧憬的孩子<span class="symbol">，</span></span
            >
            <span class="text"
              >成為他們追尋理想的人生道路上<span class="symbol">，</span></span
            >
            <span class="text">一盞指引前方的燈塔。</span>
          </p>
        </div>
      </div>
    </section>
    <div
      class="swing BlobG "
    >
      <img :src="BlobG" alt="" />
    </div>
    <HomeTitle class="xl:mt-[300px] xl:pr-[1317px] md:mt-[110px] mt-[20px]"
      >教學特色</HomeTitle
    >
    <img :src="AboutUsPH[2]" class="md:hidden mt-[20px] w-[255px]" alt="" />
    <div class="bg-2 z-[1]"></div>
    <div class="bg-2-1 z-[1]"></div>
    <section class="content z-[2]">
      <div class="ct-a">
        <ul class="ct-text-2 content-font-setting">
          <li>
            <span class="changeLine">一、程度鑑定</span
            ><span class="symbol">．</span
            >甫報名課程皆會做程度鑑定，以利課程規劃
          </li>
          <li>
            <span class="changeLine">二、專屬課表</span
            ><span class="symbol">．</span
            >老師依照程度與學習目標的不同，為每位學生設計專屬的課程表
          </li>
          <li>
            <span class="changeLine">三、升學集訓班</span
            ><span class="symbol">．</span
            >從國中美術班至升大學術科考試，皆有開設升學考試集中訓練班
          </li>
          <li>
            <span class="changeLine">四、彈性課表</span
            ><span class="symbol">．</span>自選上課時段
          </li>
          <li>
            <span class="changeLine">五、小班制教學</span
            ><span class="symbol">．</span
            >同一時段授課學生不超過15位，顧及每位學生的學習進度和教學品質
          </li>
        </ul>
      </div>
    </section>
    <div class="swing BlobY">
      <img :src="BlobY" alt="" />
    </div>
    <img class="crayo" :src="Crayo" alt="" />
  </div>
</template>
<style lang="scss" scoped>
* {
  @apply box-border;
}

.AboutUsBg {
  @apply flex flex-col items-center overflow-hidden xl:h-[2400px] lg:h-[2500px] md:h-[2100px] w-[100%] relative bg-MainColorBG;
  .content {
    @apply xl:mt-[140px] lg:mt-[180px] md:mt-[60px] mt-[30px] flex flex-col items-center justify-center lg:flex-row;
    .ct-h {
      @apply w-[50%] flex flex-col xl:mt-[100px] md:w-[80%] w-[78%];
      .bigImg {
        // mix-blend-mode: luminosity;
        @apply xl:w-[518px] xl:h-[601px]  lg:w-[430px] lg:h-[500px] md:w-[640px] md:h-[470px] object-cover object-center;
      }
      img:hover {
        mix-blend-mode: normal;
      }
      .ct-text-1 {
        @apply lg:w-[80%] md:w-[76%] w-[100%] flex flex-col md:text-start text-center;
        .content-font-setting {
          @apply xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.125rem] text-[.875rem] text-[GenWanMin-L] tracking-[.2rem] mt-5;
          .text {
            @apply md:inline block;
            .symbol {
              @apply md:inline hidden;
            }
          }
        }
      }
    }
    .ct-a {
      @apply flex justify-center;
      .ct-text-2 {
        @apply tracking-[.25rem] xl:mt-[120px] xl:w-[100%] xl:text-[1.75rem] lg:mt-[100px] lg:w-[100%] lg:text-[1.5rem] md:mt-[70px] md:text-[1.125rem]  w-[70%] text-[.875rem] text-[GenWanMin-L];
        li {
          @apply mb-[24px];
          .changeLine {
            @apply lg:bg-none lg:inline bg-[url("@/assets/img//about_us_ph/underLine.png")]  bg-no-repeat block;
          }
          .symbol {
            @apply lg:inline hidden;
          }
        }
      }
    }
  }
  .content-1 {
    img {
      filter: invert(63%) sepia(64%) saturate(5792%) hue-rotate(88deg)
        brightness(120%) contrast(118%);
      // z-index: 2;
    }
  }
  .BlobY {
    @apply xl:left-[-10%] xl:bottom-[0%] lg:left-[-12%] lg:bottom-[6%] md:left-[-30%] md:bottom-[0%];
  }
  .BlobG{
    @apply xl:right-[-5%] xl:bottom-[40%] lg:right-[-10%] lg:bottom-[48%] md:right-[-26%] md:bottom-[38%];
  }
}

.bg-1 {
  @apply w-[100%] h-[1080px] xl:w-[100%] xl:left-[-100px] xl:top-[100px] lg:top-[320px] lg:w-[1500px] lg:left-[-200px] md:top-[496px] md:w-[1000px] md:left-[-200px] top-[550px] w-[400px] left-[-240px] bg-[url('@/assets/img/about_us_ph/bg-1.svg')] bg-contain bg-no-repeat absolute;
}

.bg-2 {
  @apply w-[100%] xl:left-[140px] xl:top-[1350px] lg:h-[974px] lg:left-[20px] lg:top-[1440px] lg:block hidden  bg-[url('@/assets/img/about_us_ph/bg-2.svg')] bg-contain bg-no-repeat absolute;
}

.bg-2-1 {
  @apply w-[100%] lg:hidden top-[1200px] left-[-5%] md:h-[955px]  bg-[url('@/assets/img/about_us_ph/bg-2-1.svg')] bg-contain bg-no-repeat absolute;
}

// .Rotate {
//   transform: rotate(-90deg) !important;
// }
.swing {
  animation: swing ease-in-out 1s infinite alternate;
  transform-origin: center -20px;
  position: absolute;
  z-index: 1;
}

.swing img {
  @apply xl:w-[600px] xl:h-[600px] md:block hidden;
}

@keyframes swing {
  0% {
    transform: rotate(3deg);
  }

  100% {
    transform: rotate(-3deg);
  }
}

.crayo {
  @apply w-[512px] h-[512px] absolute right-[0%] bottom-[0%] md:block hidden xl:top-[2050px] lg:top-[2150px] lg:block md:hidden;
}
</style>
