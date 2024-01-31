<script>
// import MainCSS from "@/assets/main.css";
import RankingList from "@/components/homepage/RankingList.vue";
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import CourseInfo from "@/components/homepage/CourseInfo.vue";
import AboutTeacher from "@/components/homepage/AboutTeacher.vue";
import StudentWork from "@/components/homepage/StudentWork.vue";
import RankingListTablet from "@/components/homepage/RankingListTablet.vue";
import ShakeBox from "@/components/homepage/HomePageShakeBox.vue";
// import blob1 from "@/assets/img/homepage/BGpictures/Vector1.svg";
// import blob2 from "@/assets/img/homepage/BGpictures/Vector2.svg";
// import blob3 from "@/assets/img/homepage/BGpictures/Vector3.svg";
import blob1 from "@/components/blob/blob1.vue";
import blob2 from "@/components/blob/blob2.vue";
import blob3 from "@/components/blob/blob3.vue";

// import TheWelcome from '../components/TheWelcome.vue'
export default {
  components: {
    RankingList,
    HomeTitle,
    AboutTeacher,
    CourseInfo,
    StudentWork,
    blob1,
    blob2,
    blob3,
    RankingListTablet, ShakeBox
  },
  data() {
    return {
      WidthControl: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    const ShakeBoxId = document.querySelector('#ShakeBoxId')
    ShakeBoxId.style.display = "none"
    // 發送hakeBoxMobileFlag:false,


    // 在組件掛載後添加 scroll 事件監聽
    // window.addEventListener("scroll", this.MaskMove);
    // const maskElement = document.querySelector(".mask");
    // const maskWidth = Number(
    //   getComputedStyle(maskElement)
    //     .getPropertyValue("--mask-width")
    //     .trim()
    //     .replace("%", "")
    // );
    // this.WidthControl = maskWidth;
  },
  methods: {
    scrollToLonger() {
      window.scrollTo({
        top: 1000,
        behavior: "smooth", // 添加平滑滚动效果
      });
    },
    MaskMove() {
      // const windowBottom = window.scrollY + window.innerHeight;
      // const maskOffsetTop = this.$refs.Mask.offsetTop;
      // const maskHeight = this.$refs.Mask.offsetHeight;
      // const startPosition = maskOffsetTop + maskOffsetTop / 3;
      // console.log(maskHeight);
      // if(windowBottom > startPosition){
      //   this.WidthControl--;
      // }
      //  捲動百分比
      // const scrollPercentage = Math.floor(
      //   (window.scrollY /
      //     (document.documentElement.scrollHeight - window.innerHeight)) *
      //   100
      // );
      // console.log(scrollPercentage);
      // 获取 .mask 元素的当前位置
      // const maskOffsetTop = this.$refs.Mask.offsetTop;
      // 计算相对于整个文档高度的百分比
      // const relativeHeightPercentage = Math.floor(
      //   (maskOffsetTop / document.documentElement.scrollHeight) * 100 - 20
      //   // 再剪掉一些百分比
      // );
      // // console.log(relativeHeightPercentage);
      // if (scrollPercentage > relativeHeightPercentage) {
      //   // 減少百分比
      //   this.WidthControl--;
      // }
    },
  },
};
</script>

<template>
  <!-- <TheWelcome /> -->
  <main></main>
  <!-- banner -->
  <picture class="banner">
    <source media="(min-width:1800px)" srcset="@/assets/img/generic/banner-xl.png" />
    <source media="(min-width:1200px)" srcset="@/assets/img/generic/banner-xl.png" />
    <source media="(min-width:768px)" srcset="@/assets/img/generic/banner-xl.png" />
    <source media="(min-width:0px)" srcset="@/assets/img/generic/banner-sm.png" />
    <img src="@/assets/img/generic/banner-sm.png" alt="Weather" />
  </picture>
  <section class="position-container">
    <div class="since1994 breathing" @click="scrollToLonger">since 1994</div>
  </section>
  <section class="longer-bg bg-MainColorBG">
    <section class="longer-introduce">
      <div class="longer-position">
        <p class="title">龍格畫室</p>
        <p class="content">一間成立於1994年的小畫室</p>
        <p class="content">位在三民路的小巷裡，由丁建中老師從零開始默默耕耘</p>
        <p class="content">至今已成為在地人口耳相傳的老字號畫室。</p>
      </div>
      <blob2 class="blob2"></blob2>
    </section>
  </section>

  <!-- <img src="../assets/img/generic/longer-slogn-bg.svg" alt=""> -->

  <section>
    <HomeTitle class="bg-MainColorBG ">關於龍格</HomeTitle>
    <AboutTeacher></AboutTeacher>
  </section>

  <section>
    <div class="Block4Top">
      <div class="Block4TopCurve"></div>
    </div>
    <div class="Block4">
      <HomeTitle class="xl:mt-[0px] lg:mt-[-200px]">課程資訊</HomeTitle>
      <CourseInfo></CourseInfo>
      <div ref="Mask" class="pen">
        <!-- <div class="mask" :style="{ width: `${WidthControl}% ` }"></div> -->
      </div>

      <HomeTitle>學生作品</HomeTitle>
      <StudentWork></StudentWork>
    </div>
    <div class="Block4Buttom">
      <div class="Block4ButtomCurve"></div>
    </div>
  </section>

  <section>
    <div class="Block5">
      <HomeTitle class="mt-[30px] md:mt-[0px]">歷年榜單</HomeTitle>
      <blob2 class="top-[1100px] left-[-30px] md:hidden"></blob2>
      <blob3 class="lg:top-[0px] lg:right-[-30px] md:hidden"></blob3>

      <RankingListTablet class="flex justify-center"></RankingListTablet>
      <RankingList></RankingList>
    </div>
    <div class="ShakeBox">
      <ShakeBox></ShakeBox>
    </div>
  </section>
  <section>

  </section>
</template>
<style lang="scss" scoped>
// .Ranking {
//   @apply flex  align-center;
// }
.Ranking {
  @apply flex items-center h-[152px] w-[100%] bg-[MainColorBG];

  .text {
    // 第一行是所有文字外框都共用的樣式
    @apply flex items-center justify-center w-[300px] h-[72px] text-[3.25rem] bg-[url('@/assets/img/homepage/CommonIcon/YLdraw.svg')];
  }
}


.banner {
  img {
    @apply lg:h-[calc(100vh_-_120px)] md:h-auto h-[calc(100vh_-_60px)] w-full;
  }
}

// since-1994黃色小圓
.position-container {
  @apply relative;

  .since1994 {
    @apply z-[2] text-[#fff] bg-EmphasizeColor opacity-[0.7] rounded-full absolute xl:w-[170px] xl:h-[170px] lg:w-[114px] lg:h-[114px] w-[100px] h-[100px] flex justify-center items-center lg:text-[1.25rem] xl:text-[1.5rem] text-[1rem] xl:top-[-85px] lg:top-[-57px] top-[-50px] xl:left-[calc(50%_-_85px)] lg:left-[calc(50%_-_72px)] left-[calc(50%_-_50px)];
    // translate-x-[-50%]
  }
}

// 龍格畫室直式文字
.longer-introduce {
  @apply xl:h-[140vh] lg:h-[95vh] md:h-[60vh] h-[65vh] w-full flex justify-center relative text-[#fff] lg:bg-[url("@/assets/img/generic/longer-slogn-bg.svg")] md:bg-[url("@/assets/img/generic/longer-slogn-LG.svg")] bg-[url("@/assets/img/generic/longer-slogn-MD.svg")] xl:bg-cover md:bg-bottom bg-cover bg-top bg-no-repeat;

  .longer-position {
    // @apply absolute top-[0%] left-[60%];
    @apply xl:pt-[160px] xl:pl-[320px] lg:pt-[100px] lg:pl-[190px] md:pt-[80px] md:pl-[120px] pt-[90px] pl-[100px];
    writing-mode: vertical-rl;

    .title {
      @apply xl:text-[4rem] lg:text-[2.69rem] lg:tracking-[20px] md:text-[1.62rem] md:tracking-[10px] text-[1.25rem] tracking-[10px] leading-[5];
    }

    .content {
      @apply xl:text-[2.5rem] xl:tracking-[6px] lg:text-[1.72rem] lg:tracking-[4px] md:text-[1rem] md:tracking-[2.8px] text-[0.87rem] tracking-[5px] leading-[2];

    }
  }

  .blob2{
    @apply absolute xl:w-auto xl:top-[80vh] lg:w-[300px] lg:top-[50vh] md:w-[200px] md:top-[20vh] md:left-[-10vh] w-[0px];
  }
}

// 區塊4的css
.bg-set {
  background: none;
  /* Add !important to override scoped styles */
  height: 72px;
  padding-left: calc(50% - 150px);
}

.Block4Top {
  @apply w-[100%] h-[289px] bg-MainColorBG;

  .Block4TopCurve {
    @apply w-[100%] h-[100%] bg-[url("@/assets/img/homepage/BGpictures/curve1.svg")] bg-no-repeat bg-cover;
  }
}

.Block4Buttom {
  @apply w-[100%] h-[450px] bg-MainColorBG;

  .Block4ButtomCurve {
    @apply w-[100%] h-[100%] bg-[url("@/assets/img/homepage/BGpictures/curve2.svg")] bg-no-repeat bg-cover bg-center;
  }
}

.Block4 {
  @apply w-[100%] bg-MainColor overflow-hidden xl:h-[1600px] lg:h-[1438px] md:h-[1460px] h-[2096px];

  // .pen {
  //   @apply  bg-[url("@/assets/img/homepage/pen.png")] bg-contain  bg-no-repeat bg-center relative
  //   xl:h-[527px] lg:h-[291px]
  //   mb-[100px] mt-[100px] ;
  // }
}

// GSAP
.mask {
  @apply w-[120%] h-[480px] absolute bottom-0 right-[0px] rounded-l-[50%] bg-MainColor;
  --mask-width: 120%;
}

.Block5 {
  @apply w-[100%] h-[600px] lg:h-[1480px] md:h-[1000px] bg-MainColorBG relative overflow-hidden;
}

// 呼吸since1994
.breathing {
  animation: breathing 3s ease-in-out infinite normal;
  border-radius: 2px;
  text-align: center;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}

// 動來動去的盒子
.ShakeBox {
  @apply bg-MainColorBG bg-center flex justify-center;
}
</style>
