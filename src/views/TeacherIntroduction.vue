<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import Img1 from "@/assets/img/teacher_introduction/pic-1.svg";
import Img2 from "@/assets/img/teacher_introduction/pic-2.svg";
import BlobY from "@/assets/img/about_us_ph/blob-2.svg";
import Blob1 from "@/assets/img/teacher_introduction/blob-1.svg";
import Blob2 from "@/assets/img/teacher_introduction/blob-2.svg";
import pen1 from "@/assets/img/teacher_introduction/pen-1.svg";
import pen2 from "@/assets/img/teacher_introduction/pen-2.svg";
import pen3 from "@/assets/img/teacher_introduction/pen-3.svg";
import easel from "@/assets/img/teacher_introduction/easel.svg";
import palette from "@/assets/img/teacher_introduction/palette.svg";
import pigment from "@/assets/img/teacher_introduction/pigment.svg";
import watercolor_pen from "@/assets/img/teacher_introduction/watercolor_pen.svg";
import BG from "@/assets/img/teacher_introduction/bg.svg";
import MobileImg1 from "@/assets/img/teacher_introduction/mobile_pic1.svg";
import MobileImg2 from "@/assets/img/teacher_introduction/mobile_pic2.svg";
export default {
  components: { HomeTitle},
  data() {
    return {
      Img1: Img1,
      Img2: Img2,
      BlobY: BlobY,
      Blob1: Blob1,
      Blob2: Blob2,
      pen1: pen1,
      pen2: pen2,
      pen3: pen3,
      easel: easel,
      palette: palette,
      pigment: pigment,
      watercolor_pen: watercolor_pen,
      BG: BG,
      MobileImg1: MobileImg1,
      MobileImg2: MobileImg2,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<template>
  <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <div class="overflow-hidden">
    <div
      class="swing lg:right-[0%] lg:top-[-10%] md:left-[-40%] md:top-[90%] md:block hidden"
    >
      <img :src="Blob1" alt="" />
    </div>
    <!-- <div class="abc h-[1000px]"></div> -->

    <div class="TeacherItroBG overflow-hidden">
      <HomeTitle class="xl:!justify-start xl:pl-[138px] md:pb-[0px] pb-[28px]">師資介紹</HomeTitle>

      <img
        :src="Blob2"
        class="absolute xl:left-[-40%] lg:left-[-60%] lg:top-[10%] lg:block md:hidden hidden"
        alt=""
      />
      <div
        class="swing left-[-5%] bottom-[40%] lg:hidden hidden md:top-[61%] md:left-[-20%]"
      >
        <img :src="Blob2" alt="" />
      </div>
      <img
        class="pen right-[0%] top-[5%] lg:block hidden md:block md:top-[65%]"
        :src="pen1"
        alt=""
      />
      <img
        class="pen xl:left-[0%] xl:top-[40%] xl:block lg:hidden md:hidden hidden"
        :src="pen2"
        alt=""
      />
      <img
        class="pen xl:right-[0%] lg:right-[-16%] top-[50%] w-[400px] lg:block md:hidden hidden"
        :src="pen3"
        alt=""
      />
      <div class="TeacherItro">
        <div class="singleblock lg:pt-[203px] md:pt-[56px] flex-col">
          <div class="bg"></div>
          <div data-aos="zoom-in-right">
            <img class="pic hidden md:block" :src="Img1" />
            <img class="pic block md:hidden" :src="MobileImg1" />
          </div>

          <div class="text">
            <h1 class="">丁建中 老師</h1>
            <div class="textblock">
              <p class="title">文化大學美術系設計組</p>
              <p class="content">
                授課項目：<br />
                素描、色鉛筆、麥克筆、粉彩、水彩、油畫、壓克力、水墨畫、書法及雕刻技術、創意設計與創意表現。
              </p>
            </div>
          </div>
        </div>
        <div
          class="singleblock mt-[115px] xl:flex-row lg:flex-row-reverse flex-col-reverse"
        >
          <div class="bg"></div>
          <div class="text xl:pl-[80px] lg:pl-[0px]">
            <h1>張桂苓 老師</h1>
            <div class="textblock">
              <p class="title">國立藝術專科 美工科</p>
              <p class="content]">
                授課項目：<br />
                兒童美術、基礎素描、基礎水彩、蠟筆、色鉛筆技法
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-left">
            <img class="pic hidden md:block" :src="Img2" />
            <img class="pic block md:hidden" :src="MobileImg2" />
          </div>
        </div>
      </div>

      <div class="ClassInfo"></div>
      <HomeTitle class="xl:!justify-start xl:pl-[138px]">課堂實況</HomeTitle>
      <img
        :src="palette"
        class="absolute top-[88%] right-[4%] md:w-[250px] md:pt-[100px] md:block hidden"
        alt=""
      />
      <img
        :src="pigment"
        class="absolute xl:top-[68%] lg:top-[65%] xl:left-[12%] lg:left-[-14%] lg:block hidden"
        alt=""
      />
      <img
        :src="watercolor_pen"
        class="xl:absolute top-[68%] right-[20%]   hidden"
        alt=""
      />
      <div class="frame">
        <div class="FBvideo">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100064163762139%2Fvideos%2F790202262409733%2F&show_text=false&width=560&t=0"
            width="100%"
            height="100%"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <div
            class="swing left-[-10%] bottom-[0%] md:w-[200px] md:block hidden"
          >
            <img :src="BlobY" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 一整個頁面
.TeacherItroBG {
  @apply flex flex-col items-center xl:h-[3600px]  w-[100%] bg-MainColorBG relative;
}
// 師資介紹內容
.TeacherItro {
  @apply flex flex-col 

  xl:h-[1400px] lg:h-[1000px] 
  md:w-[1290px] w-[280px]
    bg-MainColorBG;
  .singleblock {
    @apply flex xl:justify-between items-center relative lg:justify-around 
    xl:md:flex-row lg:md:flex-row 
    xl:w-[100%];
    .textblock {
      @apply text-[1.5rem] xl:w-[100%] lg:w-[478px];
      .title {
        @apply pt-[32px] pb-[32px] md:flex-none flex justify-center 
        md:font-sans  font-[GenWanMin-L];
      }
    }
    h1 {
      @apply md:text-[1.5rem] text-[2rem] 
      md:font-sans font-[ChenYuluoyan] font-semibold
       md:bg-none bg-[url("@/assets/img/teacher_introduction/underLine.svg")] bg-no-repeat bg-bottom;
    }
  }
  .pic {
    @apply xl:w-[600px] lg:w-[498px] md:w-[600px]
    xl:h-[400px] lg:h-[332px] md:h-[400px]   
    md:shadow-xl lg:shadow-none 
    rounded-[20px];
  }
  .text {
    @apply xl:w-[600px] lg:w-[478px] md:w-[471px]
      md:pt-[72px]
      md:flex-none
      flex flex-col  items-center;
    h1 {
      @apply text-[2rem];
    }
  }
}
.frame {
  @apply flex justify-center items-center 
  xl:w-[1176px] lg:w-[976px] md:w-[659px] w-[307px] 
  lg:h-[862px] md:h-[500px] h-[311px]
  md:mb-[310px]

     md:bg-[url('@/assets/img/teacher_introduction/easel.svg')] bg-contain bg-center bg-no-repeat;

  .FBvideo {
    @apply xl:w-[854px] lg:w-[708px] md:w-[500px] 
    xl:h-[480px] lg:h-[415px] md:h-[500px] lg:mt-[50px] md:mt-[260px];
  }
}

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

.pen {
  @apply absolute;
}
.bg {
  @apply md:bg-[url('@/assets/img/teacher_introduction/bg.svg')]
   w-[100%] h-[670px] absolute top-[0px] 
  lg:hidden md:block;
}

// .title {
// }
// .content {
// }
// .ClassInfo {
//   @apply flex h-[1500px] w-[100%] bg-MainColorBG;
// }
// .pic {
//   @apply w-[600px] h-[415px] bg-[gray];
// }
</style>
