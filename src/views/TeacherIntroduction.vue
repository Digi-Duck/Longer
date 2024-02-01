<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
// 圖片命名用首字大寫+IMG_
// 老師的照片
import IMG_TeacherPic1 from "@/assets/img/teacher_introduction/teacher_pic1.svg";
import IMG_TeacherPic2 from "@/assets/img/teacher_introduction/teacher_pic2.svg";
import IMG_TeacherPicMobile1 from "@/assets/img/teacher_introduction/teacher_pic_mobile1.svg";
import IMG_TeacherPicMobile2 from "@/assets/img/teacher_introduction/teacher_pic_mobile2.svg";

// 小電腦以下黃色泡泡背景
import IMG_Background from "@/assets/img/teacher_introduction/background.svg";

// 泡泡
import IMG_BlobYellow1 from "@/assets/img/teacher_introduction/blob_yellow1.svg";
import IMG_BlobGreen1 from "@/assets/img/teacher_introduction/blob_green_1.svg";
import TabletBlobYellowNoMove from "@/assets/img/teacher_introduction/tablet_blob_yellow_no_move.svg";
import TabletBlobGreenNoMove from "@/assets/img/teacher_introduction/tablet_blob_green_no_move.svg";

// 裝飾物
import IMG_Easel from "@/assets/img/teacher_introduction/easel.svg";
import IMG_Palette from "@/assets/img/teacher_introduction/palette.svg";
import IMG_PenAndEraser from "@/assets/img/teacher_introduction/pen_and_eraser.svg";
import IMG_PenGreen from "@/assets/img/teacher_introduction/pen_green.svg";
import IMG_PenPink from "@/assets/img/teacher_introduction/pen_pink.svg";
import IMG_PenWatercolor from "@/assets/img/teacher_introduction/pen_watercolor.svg";

// 紫色散開
import IMG_Pigment from "@/assets/img/teacher_introduction/pigment.svg";

export default {
  components: { HomeTitle },
  data() {
    return {
      // 照片
      IMG_TeacherPic1: IMG_TeacherPic1,
      IMG_TeacherPic2: IMG_TeacherPic2,
      IMG_TeacherPicMobile1: IMG_TeacherPicMobile1,
      IMG_TeacherPicMobile2: IMG_TeacherPicMobile2,
      // 泡泡
      IMG_Background: IMG_Background,
      IMG_BlobYellow1: IMG_BlobYellow1,
      IMG_BlobGreen1: IMG_BlobGreen1,
      TabletBlobYellowNoMove: TabletBlobYellowNoMove,
      TabletBlobGreenNoMove: TabletBlobGreenNoMove,
      // 裝飾物
      IMG_Easel: IMG_Easel,
      IMG_Palette: IMG_Palette,
      IMG_PenAndEraser: IMG_PenAndEraser,
      IMG_Pigment: IMG_Pigment,
      // pen
      IMG_PenGreen: IMG_PenGreen,
      IMG_PenPink: IMG_PenPink,
      IMG_PenWatercolor: IMG_PenWatercolor,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$emit("ShakeBoxMobile_flagback", true);
    // const ShakeBoxId = document.querySelector("#ShakeBoxId");
    // ShakeBoxId.style.display = "block";
  },
};
</script>
<template>
  <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <div class="overflow-hidden">
    <!-- 第一個黃色泡泡 -->
    <div
      :style="{ backgroundImage: `url(${IMG_BlobYellow1})` }"
      class="swing absolute right-[30px] top-[220px] xl:w-[400px] lg:w-[300px] xl:h-[400px] lg:h-[300px] lg:block hidden bg-no-repeat bg-contain"
    ></div>

    <div class="TeacherItroBG overflow-hidden">
      <HomeTitle class="xl:!justify-start xl:pl-[138px] md:pb-[0px] pb-[28px]"
        >師資介紹</HomeTitle
      >
      <!-- 第一個不動綠色泡泡 -->
      <img
        :src="IMG_BlobGreen1"
        class="absolute xl:w-[1200px] lg:w-[1000px] xl:left-[-40%] lg:left-[-60%] xl:top-[10%] lg:top-[36%] lg:block md:hidden hidden"
        alt=""
      />
      <!-- 第二個黃色泡泡 -->
      <div
        :style="{
          backgroundImage: `url(${IMG_BlobYellow1})`,
          rotate: '90deg',
        }"
        class="swing absolute bg-no-repeat bg-contain md:block hidden xl:left-[30px] xl:top-[2900px] lg:left-[30px] lg:top-[2800px] md:top-[96%] md:left-[10%] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px]"
      ></div>
      <!-- 筆-綠色 -->
      <img
        class="absolute xl:w-[300px] lg:w-[150px] md:w-[120px] lg:left-[90%] md:left-[6%] md:rotate-90 lg:top-[30%] lg:block hidden md:block md:top-[32%]"
        :src="IMG_PenGreen"
        alt=""
      />
      <!--  筆-粉色  -->
      <img
        class="absolute xl:left-[0%] md:right-[6%] xl:top-[42%] md:top-[60%] md:rotate-180 xl:hidden lg:hidden md:block md:w-[120px] hidden"
        :src="IMG_PenPink"
        alt=""
      />
      <!-- 筆+橡皮擦 -->
      <img
        class="absolute xl:right-[0%] lg:right-[-2%] xl:top-[43%] lg:top-[48%] xl:w-[600px] lg:w-[400px] lg:block md:hidden hidden"
        :src="IMG_PenAndEraser"
        alt=""
      />
      <!-- 調色盤 -->
      <img
        class="absolute lg:right-[0%] md:right-[0%] lg:top-[86%] md:top-[90%] xl:w-[400px] lg:w-[300px] md:w-[200px] md:block hidden"
        :src="IMG_Palette"
        alt=""
      />
      <!-- 水彩筆 -->
      <img
        class="absolute xl:right-[12%] lg:right-[-16%] xl:top-[68%] xl:w-[200px] lg:hidden hidden"
        :src="IMG_PenWatercolor"
        alt=""
      />
      <!-- 顏料塊 -->
      <img
        class="absolute xl:right-[12%] lg:left-[8%] xl:top-[76%] lg:top-[76%] xl:w-[300px] lg:w-[200px] lg:block md:hidden hidden"
        :src="IMG_Pigment"
        alt=""
      />
      <!-- 第一個不動黃色泡泡:平板 -->
      <img
        class="absolute lg:hidden md:block hidden md:right-[0%] md:top-[28%] md:w-[180px]"
        :src="TabletBlobYellowNoMove"
        alt=""
      />
      <!-- 第二個不動綠色泡泡:平板 -->
      <img
        class="absolute lg:hidden md:block hidden md:left-[0%] md:top-[58%] md:w-[260px]"
        :src="TabletBlobGreenNoMove"
        alt=""
      />

      <!-- 師資介紹 -->
      <div class="TeacherItro">
        <div
          class="singleblock lg:pt-[203px] md:pt-[56px] flex-col xl:md:flex-row lg:md:flex-row"
        >
          <div
            class="bg top-[380px]"
            :style="{
              backgroundImage: `url(${IMG_Background})`,
            }"
          ></div>
          <div data-aos="zoom-in-right">
            <img class="pic hidden md:block" :src="IMG_TeacherPic1" />
            <img class="pic block md:hidden" :src="IMG_TeacherPicMobile1" />
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
          <div
            class="bg top-[1200px]"
            :style="{
              backgroundImage: `url(${IMG_Background})`,
            }"
          ></div>
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
            <img class="pic hidden md:block" :src="IMG_TeacherPic2" />
            <img class="pic block md:hidden" :src="IMG_TeacherPicMobile2" />
          </div>
        </div>
      </div>

      <div class="ClassInfo"></div>
      <HomeTitle
        class="xl:!justify-start xl:pl-[138px] xl:pt-[376px] lg:pt-[385px] md:pt-[237px]"
        >課堂實況</HomeTitle
      >
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
        class="xl:absolute top-[68%] right-[20%] hidden"
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
          <!-- 第二個搖擺黃色泡泡 -->
          <div
            class="swing left-[-10%] bottom-[0%] md:w-[200px] md:block hidden"
          >
            <img :src="IMG_BlobYellow1" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 一整個頁面
.TeacherItroBG {
  @apply flex flex-col items-center xl:h-[3100px] lg:h-[2962pxf] md:h-[3013px] h-[1800px] w-[100%] bg-MainColorBG relative;
}
// 師資介紹內容
.TeacherItro {
  @apply flex flex-col 

  xl:h-[1069px] lg:h-[790px] 
  md:w-[1290px] w-[280px]
    bg-MainColorBG;
  .singleblock {
    @apply flex xl:justify-between items-center lg:justify-around 
    
    xl:w-[100%];
    .textblock {
      @apply text-[1.5rem] xl:w-[100%] lg:w-[478px];
      .title {
        @apply pt-[32px] pb-[32px] md:flex-none flex xl:justify-start  justify-center 
        md:font-[GenWanMin-L] font-[GenWanMin-L];
      }
    }
    h1 {
      @apply md:text-[1.5rem] text-[2rem] 
      md:font-[GenWanMin-L] font-[ChenYuluoyan] font-semibold
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

.bg {
  @apply w-[100%] h-[670px] absolute bg-no-repeat 
  lg:hidden md:block hidden;
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
<!-- 調整灰色抖抖得顯示 -->
<style>
#ShakeBoxId {
  display: block;
}
</style>
