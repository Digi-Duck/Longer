<script>
// import MainCSS from "@/assets/main.css";
import RankingList from "@/components/homepage/RankingList.vue";
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import CourseInfo from "@/components/homepage/CourseInfo.vue";
import AboutTeacher from "@/components/homepage/AboutTeacher.vue";
import StudentWork from "@/components/homepage/StudentWork.vue";
import blob1 from "@/assets/img/homepage/BGpictures/Vector1.svg";
import blob2 from "@/assets/img/homepage/BGpictures/Vector2.svg";
import blob3 from "@/assets/img/homepage/BGpictures/Vector3.svg";

// import TheWelcome from '../components/TheWelcome.vue'
export default {
  components: {
    RankingList,
    HomeTitle,
    AboutTeacher,
    CourseInfo,
    StudentWork,
  },
  data() {
    return {
      WidthControl: "",
      blob1: blob1,
      blob2: blob2,
      blob3: blob3,
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
      //  捲動百分比
      const scrollPercentage = Math.floor(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
      // console.log(scrollPercentage);
      //
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
        if (this.WidthControl == 0) return;
      }
    },
  },
};
</script>

<template>
  <!-- <TheWelcome /> -->
  <main></main>
  <section class="banner"></section>
  <section class="position-container">
    <div class="since1994" @click="scrollToLonger">since 1994</div>
  </section>
  <img src="@/assets/img/generic/longer-slogn.png" alt="" />

  <section>
    <HomeTitle class="pl-[138px]">關於老師</HomeTitle>
    <AboutTeacher></AboutTeacher>
  </section>

  <section>
    <div class="Block4Top">
      <div class="Block4TopCurve"></div>
    </div>
    <div class="Block4">
      <HomeTitle class="pl-[138px]" :class="{ 'bg-set': true }"
        >課程資訊</HomeTitle
      >
      <CourseInfo></CourseInfo>
      <div ref="Mask" class="pen">
        <div class="mask" :style="{ width: `${WidthControl}% ` }"></div>
      </div>

      <HomeTitle class="pl-[138px]" :class="{ 'bg-set': true }"
        >學生作品</HomeTitle
      >
      <StudentWork></StudentWork>
    </div>
    <div class="Block4Buttom">
      <div class="Block4ButtomCurve"></div>
    </div>
  </section>

  <section>
    <div class="Block5">
      <HomeTitle class="pl-[138px] mt-[130px] " :class="{ 'bg-set': true }"
        >歷年榜單</HomeTitle
      >
      <div class="swing top-[1100px] left-[-30px]"><img :src="blob2" alt="" /></div>
      <div class="swing right-[-30px]" ><img :src="blob3" alt="" /></div>

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

.banner {
  @apply w-full h-[calc(100vh_-_120px)] bg-[url('../assets/img/generic/banner.png')] bg-cover bg-no-repeat;
}

.position-container {
  @apply relative;
  .since1994 {
    @apply flex justify-center items-center w-[170px] h-[170px] text-[#fff] text-[24px] bg-EmphasizeColor opacity-[0.7] rounded-full absolute top-[-85px] left-[50%] translate-x-[-50%];
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
  @apply w-[100%] h-[1900px] bg-MainColor overflow-hidden;
  .pen {
    @apply w-[100%] h-[480px] mb-[171px] bg-[url("@/assets/img/homepage/pen.png")] bg-contain bg-no-repeat  bg-left relative;
  }
}
// GSAP
.mask {
  @apply w-[120%] h-[480px] absolute bottom-0 right-[0px] rounded-l-[50%] bg-MainColor;
  --mask-width: 120%;
  // background: linear-gradient(
  //   90deg,
  //   rgba(2, 75, 6, 0.2189250700280112) 0%,
  //   rgba(2, 75, 6, 1) 12%
  // );
}
.Block5 {
  @apply w-[100%] h-[1480px]  bg-MainColorBG relative overflow-hidden;
}

// 搖擺
.swing {
  animation: swing ease-in-out 1s infinite alternate;
  transform-origin: center -20px;
  position: absolute;
  z-index: 1;
}
.swing img {
  width: 300px;
  height: 300px;
  // border: 5px solid #f8f8f8;
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
</style>
