<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 元件宣告
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      HelloWorld,
    };
  },
};
</script>

<template>
  <header class="w-[100vw] flex bg-[#ffa] p-0">
    <RouterLink to="/" class="text-[red]">
      <img
        src="@/assets/img/generic/logoTest.png"
        alt="LOGO"
        class="w-[200px] inline"
      />
    </RouterLink>

    <nav>
      <RouterLink to="/about" class="text-[red]"> 關於我們 </RouterLink>
      <RouterLink to="/teacher" class="text-[red]"> 師資介紹 </RouterLink>
      <RouterLink to="/courseInformation" class="text-[red]">
        課程資訊
      </RouterLink>
      <RouterLink to="/studentWork" class="text-[red]"> 學生作品 </RouterLink>
      <RouterLink to="/admissionList" class="text-[red]"> 歷年榜單 </RouterLink>
      <RouterLink to="/connection" class="text-[red]"> 聯絡資訊 </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style lang="scss" scoped>
header {
  @apply flex justify-between items-end w-[100vw] p-0 bg-[#ffa];

  .navBar {
    @apply  mx-[5px] text-[1.8rem] text-[#fff] bg-[#050];
    img{
      @apply w-[300px];
    }
  }
}
</style>
