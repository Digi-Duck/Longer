<script>
// import MainCSS from "@/assets/main.css";
import RankingList from "@/components/homepage/RankingList.vue";
import HomeTitle from "@/components/homepage/HomeTitle.vue";
// import TheWelcome from '../components/TheWelcome.vue'
export default {
  components: { RankingList, HomeTitle },
};
</script>

<template>
  <!-- <TheWelcome /> -->
  <main>
  </main>
  <section>
    <HomeTitle class="pl-[138px]">歷年榜單</HomeTitle>
    <RankingList></RankingList>
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
    @apply flex items-center justify-center  w-[300px] h-[72px] text-[3.25rem] bg-[url('@/assets/img/homepage/CommonIcon/YLdraw.svg')];
  }
}
</style>
