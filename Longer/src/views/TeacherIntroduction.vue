<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import NavCurve from "@/components/NavCurve.vue";
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
export default {
  components: { HomeTitle, NavCurve },
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
      palette:palette,
      pigment:pigment,
      watercolor_pen:watercolor_pen,
    };
  },

};
</script>
<template>
  <div class="overflow-hidden">
    <NavCurve></NavCurve>
 
    <div class="swing right-[0%] top-[-10%]">
      <img :src="Blob1" alt="" />
    </div>
    <!-- <div class="abc h-[1000px]"></div> -->

    <div class="TeacherItroBG text-[GenWanMin-L] overflow-hidden">
      <HomeTitle class="sm:pl-[calc(50%_-_150px)] lg:pl-[138px] ">師資介紹</HomeTitle>

      <!-- <img :src="Blob2" class="absolute left-[-40%] " alt="" /> -->
      <!-- <div class="swing left-[-5%] bottom-[40%]">
      <img :src="Blob2" alt="" />
    </div> -->
      <img class="pen right-[0%] top-[5%]" :src="pen1" alt="" />
      <img class="pen left-[0%] top-[40%]" :src="pen2" alt="" />
      <img class="pen right-[0%] top-[50%] w-[400px]" :src="pen3" alt="" />
      <div class="TeacherItro">
        <div class="singleblock pt-[203px]">
          <div data-aos="zoom-in-right">
            <img class="pic" :src="Img1" />
          </div>

          <div class="text">
            <h1>丁建中 老師</h1>
            <div class="textblock">
              <p class="title">文化大學美術系設計組</p>
              <p class="content">
                授課項目：<br />
                素描、色鉛筆、麥克筆、粉彩、水彩、油畫、壓克力、水墨畫、書法及雕刻技術、創意設計與創意表現。
              </p>
            </div>
          </div>
        </div>
        <div class="singleblock pt-[115px] sm:flex-row-reverse">
          <div class="text lg:pl-[80px] sm:pl-[0px]">
            <h1>張桂苓 老師</h1>
            <div class="textblock">
              <p class="title">國立藝術專科 美工科</p>
              <p class="content]">
                授課項目：<br />
                兒童美術、基礎素描、基礎水彩、蠟筆、色鉛筆技法
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-left"><img class="pic" :src="Img2" /></div>
        </div>
      </div>

      <div class="ClassInfo"></div>
      <HomeTitle class="pt-[376px] pb-[62px] sm:pl-[calc(50%_-_150px)] lg:pl-[138px]">課堂資訊</HomeTitle>
      <img :src="palette" class="absolute top-[88%] right-[4%]" alt="">
    <img :src="pigment" class="absolute top-[85%] left-[10%]" alt="">
    <!-- <img :src="watercolor_pen" class="absolute top-[76%] right-[15%]" alt=""> -->
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
          <div class="swing left-[-10%] bottom-[0%]">
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
  @apply flex flex-col items-center h-[2600px] w-[100%] bg-MainColorBG relative;
}
// 師資介紹內容
.TeacherItro {
  @apply flex flex-col h-[935px] w-[1290px]  bg-MainColorBG;
  .singleblock {
    @apply flex lg:flex-row justify-between items-center h-[45%] w-[100%] ;
    .textblock {
      @apply text-[1.5rem];
      .title {
        @apply pt-[32px] pb-[32px];
      }
    }
  }
  .pic {
    @apply w-[600px] h-[415px] rounded-[20px];
  }
  .text {
    @apply w-[600px];
    h1 {
      @apply text-[2rem];
    }
  }
}
.frame {
  @apply flex justify-center items-center w-[1176px] h-[862px] bg-[url('@/assets/img/teacher_introduction/easel.svg')] bg-contain bg-center bg-no-repeat;
  .FBvideo {
    @apply w-[854px] h-[480px] mt-[50px];
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

// .title {
// }
// .content {
// }
// .ClassInfo {
//   @apply flex h-[750px] w-[100%] bg-MainColorBG;
// }
// .pic {
//   @apply w-[600px] h-[415px] bg-[gray];
// }
</style>
