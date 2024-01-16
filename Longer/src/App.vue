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
  <!-- 公版nav -->
  <header class="">
    <!-- LOGO -->
    <RouterLink to="/">
      <img src="./assets/img/generic/logoTest.png" alt="LOGO">
    </RouterLink>
    <!-- nav Btn -->
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
  <!-- 公版頁尾 -->
  <footer>
    <section class="footer-content">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064163762139%26sk%3Dabout&tabs=timeline&width=340&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </section>
    <section class="footer-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptate ab eveniet fugit repudiandae, corporis fugiat consectetur asperiores illum facilis itaque expedita labore id dolor. Ut saepe aperiam fugit veritatis.
      Porro iusto reiciendis accusamus, nostrum doloremque aspernatur cumque vel placeat. Necessitatibus natus consectetur similique officiis laudantium minus odio ad cumque voluptates pariatur reiciendis culpa, quibusdam, eius est? Sit, quam? Labore.
      Eum inventore repudiandae nemo maxime reprehenderit commodi laboriosam accusantium pariatur autem quo, quae iusto necessitatibus officia culpa odio illum doloremque iste architecto, ea possimus! Perspiciatis sint deserunt amet ut dolorem!
    </section>
    <section class="copyRight">
      <p>Designed by 創室網匠 Copyright &copy; 2024</p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
//公版 nav
  header {
    // @apply flex justify-between items-end w-[100%] h-[250px] fixed z-[1] bg-[#ebe7d5];
    @apply flex justify-between items-end w-[100%] h-[250px] z-[1] bg-[#ebe7d5];

    nav {
      @apply flex me-[5px];

      .navBar {
        @apply block me-[15px] px-[30px] py-[6px] text-[1.8rem] text-[#fff] bg-[#203922] rounded-t-lg shadow-[2px_0px_5px_#333];

        img {
          @apply w-[250px];
        }
      }
    }
  }
  // 分頁內容
  main {
    // @apply pt-[250px];
  }
  // 公版頁尾
  footer{
    @apply flex flex-wrap w-[100%] h-[85vh] bg-[#ebe7d5];

    .footer-content{
      @apply flex justify-center items-center w-[50%] h-[75vh];
    }
    .copyRight{
      @apply flex-1 self-end flex justify-center items-center h-[10vh] border-t-[1px];
    }
  }
</style>
