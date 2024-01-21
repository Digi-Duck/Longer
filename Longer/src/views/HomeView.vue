<script>
// import MainCSS from "@/assets/main.css";
import RankingList from "@/components/homepage/RankingList.vue";
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import CourseInfo from "@/components/homepage/CourseInfo.vue";
import AboutTeacher from "@/components/homepage/AboutTeacher.vue";
import StudentWork from "@/components/homepage/StudentWork.vue";

// import TheWelcome from '../components/TheWelcome.vue'
export default {
  components: { RankingList, HomeTitle, AboutTeacher, CourseInfo, StudentWork },
};
</script>

<template>
  <!-- <TheWelcome /> -->
  <main></main>
  <section class="banner"></section>
   <HomeTitle class="pl-[13px]">畫室介紹</HomeTitle>
  <section class="introduce">
    <section class="introduce-text">
      <p class="title">龍格畫室</p>
      <p>一間成立於1994年的小畫室</p>
      <p>位在三民路的小巷裡，由丁建中老師從零開始默默耕耘</p>
      <p>至今已成為在地人口耳相傳的老字號畫室。</p>
    </section>
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
      <div class="pen"></div>
      <HomeTitle class="pl-[138px]" :class="{ 'bg-set': true }">學生作品</HomeTitle>
    <StudentWork></StudentWork>
    </div> 
    <div class="Block4Buttom">
      <div class="Block4ButtomCurve"></div>
    </div>
  </section>
  
  <section>
    <HomeTitle class="pl-[138px]">歷年榜單</HomeTitle>
    <RankingList></RankingList>
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
    @apply flex items-center justify-center  w-[300px] h-[72px] text-[3.25rem] bg-[url('@/assets/img/homepage/CommonIcon/YLdraw.svg')];
  }
}

.banner {
  @apply w-[100%] h-[calc(100vh_-_160px)] bg-[url('../assets/img/generic/banner.png')] bg-cover bg-no-repeat;
}
.introduce {
  @apply flex justify-center items-end w-[100%] h-[calc(100vh_-_152px)] pl-[150px] bg-[url('../assets/img/generic/introduce.png')] bg-cover bg-no-repeat;
  writing-mode: vertical-rl;
  .title {
    @apply text-[40px] relative top-[-50px];
  }
  .introduce-text {
    @apply text-[24px];

    p {
      @apply m-[10px];
    }
  }
}

// 區塊4的css
.bg-set {
  background: none; /* Add !important to override scoped styles */
  height: 72px;
  padding-left: calc(50% - 150px);
}
.Block4Top {
  @apply w-[100%] h-[289px] bg-MainColorBG;
  .Block4TopCurve {
    @apply w-[100%] h-[100%] bg-[url("@/assets/img/homepage/BGpictures/curve1.svg")] bg-no-repeat bg-cover;
  }
}
.Block4Buttom{
  @apply w-[100%] h-[450px] bg-MainColorBG;
  .Block4ButtomCurve {
    @apply w-[100%] h-[100%] bg-[url("@/assets/img/homepage/BGpictures/curve2.svg")] bg-no-repeat bg-cover bg-center;
  }
}


.Block4 {
  @apply w-[100%] h-[1900px] bg-MainColor;
  .pen{@apply w-[100%] h-[460px] mb-[171px] bg-[url("@/assets/img/homepage/pen.png")] bg-contain bg-no-repeat  bg-left}
}
// .block4::before {
//   @apply content-none bg-[url("@/assets/img/homepage/BGpictures/curve2.svg")];
// }
</style>
