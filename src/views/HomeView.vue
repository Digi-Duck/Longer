<script>
// import MainCSS from "@/assets/main.css";
import RankingList from "@/components/homepage/RankingList.vue";
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import CourseInfo from "@/components/homepage/CourseInfo.vue";
import AboutTeacher from "@/components/homepage/AboutTeacher.vue";
import StudentWork from "@/components/homepage/StudentWork.vue";
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
  },
  data() {
    return {
      WidthControl: "",
    };
  },
  mounted() {
    // 在組件掛載後添加 scroll 事件監聽
    window.addEventListener("scroll", this.MaskMove);
    const maskElement = document.querySelector(".mask");
    const maskWidth = Number(
      getComputedStyle(maskElement)
        .getPropertyValue("--mask-width")
        .trim()
        .replace("%", "")
    );
    this.WidthControl = maskWidth;
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
      const scrollPercentage = Math.floor(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100
      );
      // console.log(scrollPercentage);
      // 获取 .mask 元素的当前位置
      const maskOffsetTop = this.$refs.Mask.offsetTop;
      // 计算相对于整个文档高度的百分比
      const relativeHeightPercentage = Math.floor(
        (maskOffsetTop / document.documentElement.scrollHeight) * 100 - 20
        // 再剪掉一些百分比
      );
      // console.log(relativeHeightPercentage);
      if (scrollPercentage > relativeHeightPercentage) {
        // 減少百分比
        this.WidthControl--;
      }
    },
  },
};
</script>

<template>
  <!-- <TheWelcome /> -->
  <main></main>
  <!-- banner -->
  <picture class="banner">
    <source media="(min-width:1800px)" srcset="@/assets/img/generic/banner-xl.png">
    <source media="(min-width:1200px)" srcset="@/assets/img/generic/banner-xl.png">
    <source media="(min-width:768px)" srcset="@/assets/img/generic/banner-xl.png">
    <source media="(min-width:0px)" srcset="@/assets/img/generic/banner-sm.png">
    <img src="@/assets/img/generic/banner-sm.png" alt="Weather">
  </picture>
  <section class="position-container">
    <div class="since1994" @click="scrollToLonger">since 1994</div>
  </section>
  <section class="longer-introduce">
    <div class="longer-position">
      <p class="title">龍格畫室</p>
      <p class="content">一間成立於1994年的小畫室</p>
      <p class="content">位在三民路的小巷裡，由丁建中老師從零開始默默耕耘</p>
      <p class="content">至今已成為在地人口耳相傳的老字號畫室。</p>
    </div>
    <blob2 class="top-[100%] left-[-10%]"></blob2>
  </section>
  <section class="longer-bgc">
    <div class="longer-bg-area"></div>
  </section>

  <section>
    <HomeTitle class="pl-[138px]">關於老師</HomeTitle>
    <AboutTeacher></AboutTeacher>
  </section>

  <section>
    <div class="Block4Top">
      <div class="Block4TopCurve"></div>
    </div>
    <div class="Block4">
      <HomeTitle class="pl-[138px]" :class="{ 'bg-set': true }">課程資訊</HomeTitle>
      <CourseInfo></CourseInfo>
      <div ref="Mask" class="pen">
        <div class="mask" :style="{ width: `${WidthControl}% ` }"></div>
      </div>

      <HomeTitle class="pl-[138px]" :class="{ 'bg-set': true }">學生作品</HomeTitle>
      <StudentWork></StudentWork>
    </div>
    <div class="Block4Buttom">
      <div class="Block4ButtomCurve"></div>
    </div>
  </section>

  <section>
    <div class="Block5">
      <HomeTitle class="pl-[138px] mt-[130px] " :class="{ 'bg-set': true }">歷年榜單</HomeTitle>
      <blob2 class="top-[1100px] left-[-30px]"></blob2>
      <blob3 class="right-[-30px]"></blob3>


      <RankingList></RankingList>
    </div>
  </section>
  <section></section>
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

// .banner {
//   @apply w-[100%] h-[calc(100vh_-_120px)] bg-[url('@/assets/img/generic/banner.png')] bg-cover bg-no-repeat;
// }
.banner{
  
  img{
    @apply lg:h-[calc(100vh_-_120px)] w-full;
  }
}

// since-1994黃色小圓
.position-container {
  @apply relative;

  .since1994 {
    @apply flex justify-center items-center w-[170px] h-[170px] z-[2] text-[#fff] text-[24px] bg-EmphasizeColor opacity-[0.7] rounded-full absolute top-[-85px] left-[50%] translate-x-[-50%];
  }
}

// 龍格畫室直式文字
.longer-introduce {
  @apply w-full h-[100vh] relative text-[#fff] bg-MainColor;

  .longer-position {
    @apply h-[150vh] absolute top-[100%] left-[60%] translate-x-[-50%] translate-y-[-50%];
    writing-mode: vertical-rl;

    .title {
      @apply text-[5rem] leading-[5];
    }

    .content {
      @apply text-[3rem] leading-[2];
    }
  }

}

// 直式文字底部圓弧背景
.longer-bgc {
  @apply bg-MainColorBG;

  .longer-bg-area {
    @apply w-full h-[60vh] bg-[url('../assets/img/generic/longer-slogn-bg.svg')] bg-bottom;
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
  @apply w-[100%] h-[2227px] bg-MainColor overflow-hidden;

  .pen {
    @apply w-[100%] h-[480px] mb-[180px] mt-[180px] bg-[url("@/assets/img/homepage/pen.png")] bg-contain bg-no-repeat bg-left relative;
  }
}

// GSAP
.mask {
  @apply w-[120%] h-[480px] absolute bottom-0 right-[0px] rounded-l-[50%] bg-MainColor;
  --mask-width: 120%;

}

.Block5 {
  @apply w-[100%] h-[1480px] bg-MainColorBG relative overflow-hidden;
}</style>
