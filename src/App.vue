<script>
import { RouterLink, RouterView } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import ShakeBoxMobile from "./components/ShakeBoxMobile.vue"

// 手機板-搖晃"關注我們"

export default {
  // 元件宣告
  components: {
    RouterLink,
    RouterView,
    ShakeBoxMobile,

  },
  data() {
    return {
      HelloWorld,
      activeLink: null,
      scrollBottom: false,
      hamState: false,
      colorBlockStyle: {
        left: "0",
        top: "0",
      },
      x: 0,
      y: 0,
      isY: false,
      isG: false,
    };
  },
  mounted() {
    //mouse-block
    window.addEventListener("mousemove", this.mouseMoveCursor);
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
    },
    mouseMoveCursor(e) {
      this.x = e.clientX;
      this.y = e.clientY;
      this.colorBlockStyle.left = this.x + window.scrollX - 25;
      this.colorBlockStyle.top = this.y + window.scrollY - 25;
    },
    setActiveLink(link) {
      this.activeLink = link;
      sessionStorage.setItem("activeLink", JSON.stringify(this.activeLink));
    },
    scrollIng() {
      this.colorBlockStyle.left = window.scrollX + this.x;
      this.colorBlockStyle.top = window.scrollY + this.y;
      const scrollNow = document.documentElement;
      const isAtBottom =
        scrollNow.scrollTop + scrollNow.clientHeight >= scrollNow.scrollHeight;
      if (isAtBottom) {
        this.scrollBottom = true;
      } else {
        this.scrollBottom = false;
      }
    },
    // 操控漢堡條
    // hamSwitch() {
    //   const webHeader = this.$refs.webHeader;
    //   const webFooter = this.$refs.webFooter;
    //   this.hamState = !this.hamState;
    //   console.log(this.hamState);
    //   if (this.hamState == true) {
    //     webHeader.style.display = "none";
    //     webFooter.style.display = "none";
    //   }else{
    //     webHeader.style.display = "flex";
    //     webFooter.style.display = "flex";
    //   }
    // }
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
        <input type="checkbox" id="ham" hidden>
        <label for="ham" class="ham-menu-all">
          <div class="menu">
            選單
          </div>
        </label>
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
  <main ref="webContent">
    <RouterView />
  </main>
  <section
    class="sm-iframe md:hidden flex flex-col justify-center items-center bg-MainColorBG"
  >
  <ShakeBoxMobile></ShakeBoxMobile>
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064163762139&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      class="iframe-area"
      width="242"
      height="242"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    >
    </iframe>
  </section>

  <!-- 公版頁尾 -->


  <footer class="">
    <section class="footer-l">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064163762139&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        class="iframe-area"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      >
      </iframe>
    </section>
    <section class="footer-r">
      <div class="all">
        <div class="logo">
          <img
            src="@/assets/img/generic/logo.png"
            class="logo-img"
            alt="LOGO"
          />
          <div class="logo-slogn">
            <p class="slogn-text">在龍格&emsp;</p>
            <p class="slogn-text">為你的每個夢想填上顏色</p>
          </div>
        </div>
        <div class="container">
          <div class="content-wrap">
            <p class="item">電話</p>
            <p class="content">(04)2225-8657</p>
          </div>
          <div class="content-wrap">
            <p class="item">地址</p>
            <p class="content">台中市北區三民路三段54巷19號之3號4樓</p>
          </div>
          <div class="content-wrap">
            <p class="item">電子信箱</p>
            <p class="content">longer959@gmail.com</p>
          </div>
          <div class="content-wrap">
            <p class="item">營業時間</p>
            <p class="content">
              週三至週五 15:00 — 21:00
              <br />
              週六及週日 09:00 — 17:00
              <br />
              每週一和週二公休
            </p>
          </div>
        </div>
      </div>
    </section>

    <ul class="footer-nav">
      <li>
        <a
          href="/about"
          @click="setActiveLink('about')"
          @mouseenter="changeGreen"
        >
          關於我們
        </a>
      </li>
      <li>
        <a
          href="/teacher"
          @click="setActiveLink('teacher')"
          @mouseenter="changeGreen"
        >
          師資介紹
        </a>
      </li>
      <li>
        <a
          href="/courseInformation"
          @click="setActiveLink('courseInformation')"
          @mouseenter="changeGreen"
        >
          課程資訊
        </a>
      </li>
      <li>
        <a
          href="/studentWork"
          @click="setActiveLink('studentWork')"
          @mouseenter="changeGreen"
        >
          學生作品
        </a>
      </li>
      <li>
        <a
          href="/admissionList"
          @click="setActiveLink('admissionList')"
          @mouseenter="changeGreen"
        >
          歷年榜單
        </a>
      </li>
      <li>
        <a
          href="/connection"
          @click="setActiveLink('connection')"
          @mouseenter="changeGreen"
        >
          聯絡資訊
        </a>
      </li>
    </ul>
    <section class="copy-right">
      <p>Designed by 創室網匠 Copyright &copy; 2024</p>
    </section>
  </footer>
</template>
<!-- <img src="" alt=""> -->

<style lang="scss" scoped>
#color-block {
  position: absolute;
  z-index: 4;
  width: 60px;
  height: 60px;
  background-color: yellow;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: exclusion;
}

//公版 nav
header {
  @apply lg:flex lg:justify-between lg:items-end w-[100%] md:h-[120px] h-[60px] fixed z-[3] lg:drop-shadow-[0_4px_20px_#262626] bg-EmphasizeColor;

  .ham-menu-all{
    @apply  lg:hidden md:w-[120px] md:h-[120px] w-[60px] h-[60px] absolute bg-[#ccc];

    .menu{
      @apply text-[25px];
    }
    
  }

  #ham:checked ~nav{
    @apply h-[561px];
  }


  .LOGO {
    @apply lg:ms-[30px] h-full block;

    img{
      @apply md:w-[263px] w-[130px] mx-[auto];
    }
  }

  nav {
    @apply lg:flex lg:items-end lg:me-[5px] lg:w-[auto] w-[50vh] h-0 bg-[#faa] duration-[2s] truncate;

    .navBar {
      @apply flex items-center h-[50px] me-[15px] xl:px-[30px] px-[20px] text-[1.2rem] text-[#fff] lg:bg-[#024b06] rounded-t-lg lg:shadow-[2px_0px_3px_#333];

      &.active {
        @apply lg:h-[70px] lg:bg-[#838666];
      }
    }
  }
}

main {
  @apply md:pt-[120px] pt-[60px];
}

// 公版頁尾
// 雅芬有改 h-[60vh] --> h-[70vh]
footer {
  @apply xl:text-[1.5rem] lg:text-[1.2rem] text-[0.87rem] flex flex-wrap w-full xl:h-[95vh] lg:h-[70vh] h-[70vh] z-[1] text-[#fff] md:tracking-[3px] md:leading-[2] leading-[2] md:bg-[url('@/assets/img/generic/footer-bg.png')] bg-[url('@/assets/img/generic/footer-sm-bg.png')] bg-cover bg-no-repeat;

  .footer-l {
    @apply lg:pb-0 md:pb-[30px] md:w-[40%] md:flex lg:justify-center justify-end items-end h-[80%] hidden;

    iframe {
      @apply xl:w-[500px] xl:h-[500px] lg:w-[336px] lg:h-[336px] md:w-[300px] md:h-[300px];
    }
  }

  .footer-r {
    @apply lg:max-w-full md:max-w-[400px] lg:pb-0 md:pb-[30px] md:w-[60%] flex flex-wrap justify-center items-end w-[100%] h-[80%];

    .all {
      @apply md:flex-col md:gap-0 lg:w-[auto] md:w-[530px] lg:px-[40px] md:pl-[80px] flex flex-col-reverse gap-[20px] w-[330px];
      // logoarea
      .logo {
        @apply md:mb-[50px] flex md:justify-start justify-center items-end gap-[10px];

        .logo-img {
          @apply xl:w-[327px] lg:w-[220px] w-[143px];
        }

        .logo-slogn {
          .slogn-text {
            @apply md:inline-block md:ms-0 ms-[8px] block tracking-[1.2px];
          }
        }
      }
      // content area
      .container {
        @apply flex flex-wrap justify-center items-center;
        .content-wrap {
          @apply w-full flex flex-wrap justify-start mb-[10px] lg:tracking-[6px] tracking-[2px];

          .item {
            @apply w-[28%];
          }
          .content {
            @apply flex-1 text-justify;
          }
        }
      }
    }
  }

  .footer-nav {
    @apply xl:pt-[30px] lg:justify-end md:flex md:justify-center md:gap-[30px] md:items-center w-full h-[10%] pe-[48px] hidden;

    li {
      @apply relative;
    }
    li:not(:last-child):after {
      @apply content-['|'] absolute top-[-5%] right-[-18%];
    }
  }

  .copy-right {
    @apply flex justify-center items-center w-full md:h-[10%] border-t-[1px] border-[rgba(255,255,255,0.5)];
  }
}





</style>
