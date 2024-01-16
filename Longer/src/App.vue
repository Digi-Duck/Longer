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
  <!-- nav -->
  <header class="">
    <RouterLink to="/" class="navBar">
      <img src="./assets/img/generic/logoTest.png" alt="LOGO">
    </RouterLink>

    <nav>
      <RouterLink to="/about" class="navBar">
        關於我們
      </RouterLink>
      <RouterLink to="/teacher" class="navBar">
        師資介紹
      </RouterLink>
      <RouterLink to="/courseInformation" class="navBar">
        課程資訊
      </RouterLink>
      <RouterLink to="/studentWork" class="navBar">
        學生作品
      </RouterLink>
      <RouterLink to="/admissionList" class="navBar">
        歷年榜單
      </RouterLink>
      <RouterLink to="/connection" class="navBar">
        聯絡資訊
      </RouterLink>
    </nav>
  </header>
  <!-- 分頁內容 -->
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style lang="scss" scoped>
header {
  @apply flex justify-between items-end w-[100%] h-[15.6rem] fixed z-[1] bg-[#ebe7d5];

  nav{
    @apply flex;
    .navBar {
      @apply block me-[15px] px-[30px] py-[6px] rounded-t-lg text-[1.8rem] text-[#fff] bg-[#203922] shadow-[3px_0px_5px_#333];
  
      img {
        @apply w-[15.6rem];
      }
    }
  }
}
main{
  @apply pt-[15.6rem];
}

</style>
