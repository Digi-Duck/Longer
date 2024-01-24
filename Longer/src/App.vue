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
      scrollBottom: false,
      colorBlockStyle: {
        left: "0",
        top: "0",
      },
      isY: false,
      isG: false,
    };
  },
  mounted() {
    //mouse-block
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("scroll", this.scrollIng);

    if (sessionStorage.getItem("activeLink")) {
      this.activeLink = JSON.parse(sessionStorage.getItem("activeLink"));
    } else {
      sessionStorage.setItem("activeLink", JSON.stringify(this.activeLink));
    }
  },
  methods: {
    changeYellow() {
      this.isY = true;
    },
    changeGreen() {
      this.isG = true;
      this.isY = false;
      console.log(1);
    },
    mouseMove(e) {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      // this.$data.colorBlockStyle = {
      //   left: `${x}px`,
      //   top:`${y}px`
      // };
      this.colorBlockStyle.left = x;
      this.colorBlockStyle.top = y;
    },
    setActiveLink(link) {
      this.activeLink = link;
      sessionStorage.setItem("activeLink", JSON.stringify(this.activeLink));
      console.log(this.activeLink);
    },
    scrollIng() {
      const scrollNow = document.documentElement;
      const isAtBottom =
        scrollNow.scrollTop + scrollNow.clientHeight >= scrollNow.scrollHeight;
      if (isAtBottom) {
        this.scrollBottom = true;
      } else {
        this.scrollBottom = false;
      }
      // console.log(scrollNow.scrollTop);
    },
  },
};
</script>

<!-- 公版nav -->
<template>
  <div
    :style="{
      left: `${colorBlockStyle.left}px`,
      top: `${colorBlockStyle.top}px`,
      backgroundColor: isY ? 'yellow' : isG ? 'green' : 'red',
    }"
    id="color-block"
  ></div>
  <header class="" v-if="scrollBottom == false">
    <!-- LOGO -->
    <RouterLink
      to="/"
      class="LOGO"
      :class="{ navBar: true }"
      @click="setActiveLink('')"
    >
      <img
        src="./assets/img/generic/logoTop.png"
        alt="LOGO"
        @mouseenter="changeYellow"
      />
    </RouterLink>
    <!-- nav Btn -->
    <nav>
      <!-- 預設navBar為true，點擊時會將activeLink賦值為指定的路徑字串，當activeLink等於指定的路徑字串時添加active的CSS -->
      <RouterLink
        to="/about"
        :class="{ navBar: true, active: activeLink === 'about' }"
        @click="setActiveLink('about')"
        @mouseenter="changeGreen"
      >
        關於我們
      </RouterLink>
      <RouterLink
        to="/teacher"
        :class="{ navBar: true, active: activeLink === 'teacher' }"
        @click="setActiveLink('teacher')"
        @mouseenter="changeGreen"
      >
        師資介紹
      </RouterLink>
      <RouterLink
        to="/courseInformation"
        :class="{ navBar: true, active: activeLink === 'courseInformation' }"
        @click="setActiveLink('courseInformation')"
        @mouseenter="changeGreen"
      >
        課程資訊
      </RouterLink>
      <RouterLink
        to="/studentWork"
        :class="{ navBar: true, active: activeLink === 'studentWork' }"
        @click="setActiveLink('studentWork')"
        @mouseenter="changeGreen"
      >
        學生作品
      </RouterLink>
      <RouterLink
        to="/admissionList"
        :class="{ navBar: true, active: activeLink === 'admissionList' }"
        @click="setActiveLink('admissionList')"
        @mouseenter="changeGreen"
      >
        歷年榜單
      </RouterLink>
      <RouterLink
        to="/connection"
        :class="{ navBar: true, active: activeLink === 'connection' }"
        @click="setActiveLink('connection')"
        @mouseenter="changeGreen"
      >
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
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064163762139&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500"
        height="500"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </section>
    <section class="footer-content">
      <section class="footer-r-top">
        <img
          src="./assets/img/generic/logo.png"
          class="img-fluid rounded-top"
          alt="LOGO"
        />
        <section class="footer-r-top-text">
          <p>電話&emsp;&emsp;&emsp;&emsp;(04)2225-8657</p>
          <p>
            地址&emsp;&emsp;&emsp;&emsp;台中市北區三民路三段54巷19號之3號4樓
          </p>
          <span>營業時間&emsp;&emsp;</span>
          <div>
            週三至週五 15:00 — 21:00
            <br />
            週六及週日 09:00 — 17:00
            <br />
            每週一和週二公休
          </div>
        </section>
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
<!-- <img src="./assets/img/generic/footer-bg.png" alt=""> -->

<style lang="scss" scoped>
#color-block {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 70px;
  background-color: red;
  border-radius: 50%;
  pointer-events: none;
}

//公版 nav
header {
  @apply flex justify-between items-end w-[100%] h-[120px] drop-shadow-[0_5px_5px_#222] bg-EmphasizeColor;

  .LOGO {
    @apply self-center ms-[30px];
  }

  nav {
    @apply flex items-end me-[5px];

    .navBar {
      @apply flex items-center h-[50px] me-[15px] px-[30px] text-[1.2rem] text-[#fff] bg-[#024b06] rounded-t-lg shadow-[2px_0px_3px_#333];

      &.active {
        @apply h-[70px] bg-[#838666];
      }

      img {
        @apply w-[160px];
      }
    }
  }
}

// 公版頁尾
footer {
  @apply flex flex-wrap w-[100%] h-[85vh] text-[#fff] bg-[url('./assets/img/generic/footer-bg.png')] bg-cover bg-no-repeat;

  .footer-content {
    @apply flex flex-wrap justify-center items-end w-[50%] h-[90%] pb-[20px];

    .footer-r-top {
      @apply w-[100%];

      img {
        @apply mb-[30px];
      }

      .footer-r-top-text {
        @apply flex flex-wrap text-[1.5rem];

        p {
          @apply w-[100%] mb-[30px];
        }
      }
    }

    .footer-B-nav {
      @apply w-[100%];

      .footer-ul {
        @apply flex justify-end gap-[20px] pe-[35px] text-[1.5rem];

        li:not(:last-child)::after {
          content: "|";
          position: relative;
          top: -5%;
          left: 10%;
        }
      }
    }
  }

  .copyRight {
    @apply flex-1 self-end flex justify-center items-center h-[10%] border-t-[1px];
  }
}
</style>
