<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 元件宣告
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      HelloWorld,

    }
  },
}

</script>

<template>
  <header class="">
    <RouterLink to="/" class="navBar">
      <img src="./assets/img/generic/logoTest.png" alt="LO GO">
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
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
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
