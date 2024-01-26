<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import About1 from "@/assets/img/about_us_ph/About1.png";
import NavCurve from "@/components/NavCurve.vue";
import BlobG from "@/assets/img/about_us_ph/blob-1.svg";
import BlobY from "@/assets/img/about_us_ph/blob-2.svg";
import Crayo from "@/assets/img/about_us_ph/crayo.svg";
export default {
  components: { HomeTitle, NavCurve },
  data() {
    return {
      AboutUsPH: [About1],
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
  <NavCurve></NavCurve>
  <div class="AboutUsBg overflow-hidden">
    <HomeTitle class="title pl-[200px]">關於龍格</HomeTitle>
    <div class="bg-1 z-[1]"></div>
    <section class="content z-[2] lg:gap-32 md:gap-10">
      <div class="ct-h lg:items-end items-center">
        <img :src="AboutUsPH[0]" class="rounded-[30px] " alt="" />
      </div>
      <div class="ct-h lg:items-start items-center">
        <div class="ct-text-1">
          <p class="content-font-setting">
            一間成立於1994年的小畫室，位在三民路的小巷裡，由丁建中老師從零開始緩緩耕耘，至今已成為在地人口耳相傳的老字號畫室。
          </p>
          <p class="content-font-setting">
            沒有多餘的廣告宣傳畫室，老師透過實力及教學熱忱，打動每位前來學習的學生，也為龍格畫室建立了最佳的口碑。
          </p>
          <p class="content-font-setting">
            老師期盼能幫助每個對夢想懷抱憧憬的孩子，成為他們在追尋理想的人生道路上，一盞指引前方的燈塔。
          </p>
        </div>
        <div class="swing right-[0%] bottom-[40%]">
          <img :src="BlobG" alt="" />
        </div>
      </div>
    </section>
    <HomeTitle class="lg:pt-[350px] pt-[300px] pl-[200px]">教學特色</HomeTitle>
    <div class="bg-2 z-[1]"></div>
    <section class="content z-[2]">
      <div class="ct-a">
        <ul class="ct-text-2 content-font-setting">
          <li>一、程度鑑定．甫報名課程皆會做程度鑑定，以利課程規劃</li>
          <li>
            二、專屬課表．老師依照程度與學習目標的不同，為每位學生設計專屬的課程表
          </li>
          <li>
            三、升學集訓班．從國中美術班至升大學術科考試，皆有開設升學考試集中訓練班
          </li>
          <li>四、彈性課表．自選上課時段</li>
          <li>
            五、小班制教學．同一時段授課學生不超過15位，顧及每位學生的學習進度和教學品質
          </li>
        </ul>
      </div>
    </section>
    <div class="swing left-[-10%] bottom-[0%]">
      <img :src="BlobY" alt="" />
    </div>
    <img class="crayo" :src="Crayo" alt="" />
  </div>
</template>
<style lang="scss" scoped>
* {
  @apply box-border;
}

.content-font-setting {
  @apply xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.125rem] text-[.875rem] text-[GenWanMin-L];
}

.AboutUsBg {
  @apply flex flex-col items-center h-[2400px] w-[100%] relative bg-MainColorBG;

  .content {
    @apply  lg:mt-[140px] flex flex-col items-center justify-center lg:flex-row;

    .ct-h {
      @apply w-[50%] flex flex-col md:w-[80%];

      img {
        // mix-blend-mode: luminosity;
        @apply xl:w-[518px] xl:h-[601px]  lg:w-[430px] lg:h-[500px] md:w-[640px] md:h-[470px] w-[253px] object-cover object-center;
      }

      img:hover {
        mix-blend-mode: normal;
      }

      .ct-text-1 {
        @apply lg:w-[60%] w-[80%] flex flex-col;

        p {
          @apply tracking-widest mt-5;
        }
      }
    }

    .ct-a {
      @apply flex justify-center;
      .ct-text-2 {
        @apply tracking-[.4rem] mt-[72px] lg:w-[60%] w-[70%] ;

        li {
          @apply mt-[24px];
        }
      }
    }

    .pen {
      background-image: url("@/assets/img/about_us_ph/pen1.svg");
      width: 100px;
      height: 100px;
    }
  }

  .content-1 {
    img {
      filter: invert(63%) sepia(64%) saturate(5792%) hue-rotate(88deg) brightness(120%) contrast(118%);
      // z-index: 2;
    }
  }
}

.bg-1 {
  @apply w-[100%] h-[1080px] bg-[url('@/assets/img/about_us_ph/bg-1.svg')] bg-contain bg-no-repeat absolute left-[-100px];
}

.bg-2 {
  @apply w-[100%] h-[974px] bg-[url('@/assets/img/about_us_ph/bg-2.svg')] bg-contain bg-no-repeat absolute top-[1200px] left-[140px];
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
  width: 600px;
  height: 600px;
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

.crayo {
  @apply w-[512px] h-[512px] absolute right-[0%] bottom-[0%];
}
</style>
