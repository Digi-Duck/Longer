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
      isMenuOpen: false,
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
      // 紀錄順序
      this.activeLink = link;
      // 關閉選單
      if (this.isMenuOpen) {
        this.$refs.navContent.style.height = '0px';
        this.$refs.linkTop.classList.remove('ani-line-top');
        this.$refs.linkCenter.classList.remove('ani-line-center');
        this.$refs.linkBottom.classList.remove('ani-line-bottom');
        this.isMenuOpen = !this.isMenuOpen
      }
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
    openMenu(){

      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.$refs.navContent.style.height = '80vh';
        this.$refs.linkTop.classList.add('ani-line-top');
        this.$refs.linkCenter.classList.add('ani-line-center');
        this.$refs.linkBottom.classList.add('ani-line-bottom');
      }else{
        this.$refs.navContent.style.height = '0px';
        this.$refs.linkTop.classList.remove('ani-line-top');
        this.$refs.linkCenter.classList.remove('ani-line-center');
        this.$refs.linkBottom.classList.remove('ani-line-bottom');
      }
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
        <input type="checkbox" id="ham" hidden>
        <label for="ham" class="ham-menu-all" @click="openMenu">
          <div class="menu">
           <div class="link link-1" ref="linkTop"></div>
           <div class="link link-2" ref="linkCenter"></div>
           <div class="link link-3" ref="linkBottom"></div>
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
    <nav ref="navContent">
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
  <!-- <img src="" alt=""> -->

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
            <p class="content">
              <span class="md:inline-block hidden">(04)2225-8657&ensp;</span>
              <a href="tel:0422258657" class="md:hidden inline-block">
                (04)2225-8657&ensp;
              <i class="fa-solid fa-phone"></i>
              </a>
            </p>
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
        <RouterLink to="/about" @click="setActiveLink('about')"
          @mouseenter="changeGreen"
        >
          關於我們
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/teacher" @click="setActiveLink('teacher')"
          @mouseenter="changeGreen"
        >
          師資介紹
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/courseInformation" @click="setActiveLink('courseInformation')"
          @mouseenter="changeGreen"
        >
          課程資訊
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/studentWork" @click="setActiveLink('studentWork')"
          @mouseenter="changeGreen"
        >
          學生作品
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/admissionList" @click="setActiveLink('admissionList')"
          @mouseenter="changeGreen"
        >
          歷年榜單
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/connection" @click="setActiveLink('connection')"
          @mouseenter="changeGreen"
        >
          聯絡資訊
        </RouterLink>
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
  @apply lg:flex lg:justify-between lg:items-end lg:drop-shadow-[0_4px_20px_#262626] md:h-[120px] w-[100%] h-[60px] fixed z-[3] bg-EmphasizeColor;

  .ham-menu-all{
    @apply  lg:hidden md:w-[120px] md:h-[120px] w-[60px] h-[60px] absolute;

    .menu{
      @apply w-full h-full text-[25px] relative;

      .link{
        @apply  md:h-[4.5px] w-[55%] h-[3px] rounded-lg bg-[#000] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] duration-100;
      }
      .link-1{
        @apply top-[35%];
      }
      .link-2{
        @apply top-[50%];
      }
      .link-3{
        @apply top-[65%];
      }
    }
    
  }



  .LOGO {
    @apply lg:ms-[30px] h-full block;

    img{
      @apply md:w-[263px] w-[130px] mx-[auto];
    }
  }

  nav {
    @apply lg:flex lg:items-end lg:me-[5px] lg:w-[auto] lg:bg-[transparent] lg:overflow-visible w-[calc(100vw_17px)] h-0 bg-[url('@/assets/img/generic/ham-menu-md-bg.png')] bg-no-repeat md:bg-bottom bg-cover lg:duration-0 duration-200 overflow-hidden lg:drop-shadow-none drop-shadow-[0_10px_15px_#262626];

    .navBar {
      @apply  xl:px-[30px] lg:flex lg:mt-0 lg:bg-[#024b06] lg:shadow-[2px_0px_3px_#333] lg:text-[1.2rem] font-[ChenYuluoyan] items-center h-[50px] me-[15px] mt-[40px] px-[20px] md:text-[3.5rem] text-[#fff] rounded-t-lg text-center block;

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
  @apply xl:text-[1.5rem] lg:text-[1.2rem] text-[0.87rem] flex flex-wrap w-full xl:h-[95vh] lg:h-[70vh] h-[70vh] z-[1] text-[#fff] md:tracking-[3px] md:leading-[2] leading-[2] md:bg-[url('@/assets/img/generic/footer-bg.png')] bg-[url('@/assets/img/generic/footer-md-bg.svg')] bg-cover bg-no-repeat;

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

.ani-line-top{
  animation: toCloseTop 0.2s 1 forwards;
}
.ani-line-center{
  animation: toCloseCenter 0.1s 1 forwards;
}

.ani-line-bottom{
  animation: toCloseBottom 0.2s 1 forwards;
}

// ham-menu animation
@keyframes toCloseTop{
  0%{
    @apply top-[35%] rotate-0;
  }
  100%{
    @apply top-[50%] rotate-[30deg];
  }
}
@keyframes toCloseCenter{
  0%{
    @apply visible;
  }
  100%{
    @apply invisible;
  }
}
@keyframes toCloseBottom{
  0%{
    @apply top-[65%] rotate-0;
  }
  100%{
    @apply top-[50%] rotate-[-30deg];
  }
}





</style>
