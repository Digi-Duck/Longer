<script>
// import MainCSS from "@/assets/main.css";
import RankingList from "@/components/homepage/RankingList.vue";
// import TheWelcome from '../components/TheWelcome.vue'
export default {
  components: { RankingList },
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
  </main>
  <section>
    <div class="Ranking">
      <div class="text">歷年榜單</div>
    </div>
    <RankingList />
  </section>
</template>
<style lang="scss" scoped>
// .Ranking {
//   @apply flex  align-center;
// }
.Ranking {
  @apply flex items-center h-[152px] w-[100%] bg-[#fff8dc];
  .text {
    // 第一行是所有文字外框都共用的樣式
    @apply bg-[url('@/assets/img/homepage/CommonIcon/YLdraw.svg')]  w-[300px] h-[72px]  
    ml-[138px] text-[3.25rem] ;
  }
}
</style>
