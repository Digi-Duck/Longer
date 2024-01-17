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
      activeLink: null,
    };
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link;
    },
  },
};
</script>

<template>
  <!-- 公版nav -->
  <header class="">
    <!-- LOGO -->
    <RouterLink to="/" :class="{ 'navBar': true}" @click="setActiveLink('')">
      <img src="./assets/img/generic/logoTest.png" alt="LOGO">
    </RouterLink>
    <!-- nav Btn -->
    <nav>
      <!-- <RouterLink to="/about" class="navBar">
        關於我們
      </RouterLink> -->
      <RouterLink to="/about" :class="{ 'navBar': true, 'active': activeLink === 'about' }" @click="setActiveLink('about')">
        關於我們
      </RouterLink>
      <RouterLink to="/teacher" :class="{ 'navBar': true, 'active': activeLink === 'teacher' }" @click="setActiveLink('teacher')">
        師資介紹
      </RouterLink>
      <RouterLink to="/courseInformation" :class="{ 'navBar': true, 'active': activeLink === 'courseInformation' }" @click="setActiveLink('courseInformation')">
        課程資訊
      </RouterLink>
      <RouterLink to="/studentWork" :class="{ 'navBar': true, 'active': activeLink === 'studentWork' }" @click="setActiveLink('studentWork')">
        學生作品
      </RouterLink>
      <RouterLink to="/admissionList" :class="{ 'navBar': true, 'active': activeLink === 'admissionList' }" @click="setActiveLink('admissionList')">
        歷年榜單
      </RouterLink>
      <RouterLink to="/connection" :class="{ 'navBar': true, 'active': activeLink === 'connection' }" @click="setActiveLink('connection')">
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
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064163762139%26sk%3Dabout&tabs=timeline&width=340&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </section>
    <section class="footer-content">
      <section class="footer-T-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatem voluptas a nobis consequuntur quis
        sint aliquid porro, inventore, quaerat blanditiis id aut. Dolorem dignissimos doloribus, molestias dolor molestiae
        ducimus.
        Fugiat nobis dignissimos deleniti voluptas facilis in quasi atque a at quos corporis dicta, eveniet obcaecati quis
        voluptates exercitationem error natus non! Obcaecati natus quis saepe perferendis, voluptatem totam enim.
      </section>
      <section class="footer-B-nav">
        <ul class="footer-ul">
          <li>關於我們</li>
          <li>師資介紹</li>
          <li>課程資訊</li>
          <li>學生作品</li>
          <li>歷年榜單</li>
          <li>聯絡資訊</li>
        </ul>
      </section>
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
    @apply flex items-end me-[5px];

    .navBar {
      @apply flex items-center h-[60px] me-[15px] px-[30px] text-[1.2rem] text-[#fff] bg-[#024b06] rounded-t-lg shadow-[2px_0px_5px_#333];

      &.active {
        @apply h-[80px] bg-[#838666]
      }

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
footer {
  @apply flex flex-wrap w-[100%] h-[85vh] bg-[#ebe7d5];

  .footer-content {
    @apply flex flex-wrap justify-center items-center w-[50%] h-[90%];

    .footer-T-text {
      @apply self-end;
    }

    ;

    .footer-B-nav {
      @apply self-end;

      .footer-ul {
        @apply flex gap-[5px] text-[1.5rem];


        li:not(:last-child)::after {
          content: '|';
          position: relative;
          top: -5%;
          left: 2.5%;
        }

        ;
      }

      ;
    }

    ;

  }

  ;

  .copyRight {
    @apply flex-1 self-end flex justify-center items-center h-[10%] border-t-[1px];
  }

  ;
}</style>
