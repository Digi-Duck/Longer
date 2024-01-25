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
  <div :style="{
    left: `${colorBlockStyle.left}px`,
    top: `${colorBlockStyle.top}px`,
    backgroundColor: isY ? 'yellow' : isG ? 'green' : 'red',
  }" id="color-block"></div>
  <header class="" v-if="scrollBottom == false">
    <!-- LOGO -->
    <RouterLink to="/" class="LOGO" :class="{ navBar: true }" @click="setActiveLink('')">
      <img src="./assets/img/generic/logoTop.png" alt="LOGO" @mouseenter="changeYellow" />
    </RouterLink>
    <!-- nav Btn -->
    <nav>
      <!-- 預設navBar為true，點擊時會將activeLink賦值為指定的路徑字串，當activeLink等於指定的路徑字串時添加active的CSS -->
      <RouterLink to="/about" :class="{ navBar: true, active: activeLink === 'about' }" @click="setActiveLink('about')"
        @mouseenter="changeGreen">
        關於我們
      </RouterLink>
      <RouterLink to="/teacher" :class="{ navBar: true, active: activeLink === 'teacher' }"
        @click="setActiveLink('teacher')" @mouseenter="changeGreen">
        師資介紹
      </RouterLink>
      <RouterLink to="/courseInformation" :class="{ navBar: true, active: activeLink === 'courseInformation' }"
        @click="setActiveLink('courseInformation')" @mouseenter="changeGreen">
        課程資訊
      </RouterLink>
      <RouterLink to="/studentWork" :class="{ navBar: true, active: activeLink === 'studentWork' }"
        @click="setActiveLink('studentWork')" @mouseenter="changeGreen">
        學生作品
      </RouterLink>
      <RouterLink to="/admissionList" :class="{ navBar: true, active: activeLink === 'admissionList' }"
        @click="setActiveLink('admissionList')" @mouseenter="changeGreen">
        歷年榜單
      </RouterLink>
      <RouterLink to="/connection" :class="{ navBar: true, active: activeLink === 'connection' }"
        @click="setActiveLink('connection')" @mouseenter="changeGreen">
        聯絡資訊
      </RouterLink>
    </nav>
  </header>
  <!-- 漢堡條 -->
  <!-- <nav class="ham-menu-all" :class="{'add-ham-ani': scrollState, 'remove-ham-ani': !scrollState}" ref="hamMenu" v-if="scrollState == true">
    <input id="ham-menu-switch" type="checkbox" width="300px" @click="hamSwitch" hidden>
    <label for="ham-menu-switch" class="ham-menu">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </label>
  </nav> -->
  <!-- <div class="ham-content" v-if="hamState"></div> -->

  <!-- 分頁內容 -->
  <main ref="webContent">
    <RouterView />
  </main>
  <!-- 公版頁尾 -->
  <!-- <div class="bg-MainColorBG">
    <img src="./assets/img/generic/footer-bg-top.svg" alt="">
  </div> -->
  <footer ref="webFooter">
    <section class="footer-content footer-content-l">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064163762139&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        class="iframe-area" style="border: none; overflow: hidden" scrolling="no" frameborder="0"
        allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </section>
    <section class="footer-content footer-content-r">
      <section class="footer-r-top">
        <div class="footer-longer-slogn">
          <img src="@/assets/img/generic/logo.png" class="img-fluid rounded-top" alt="LOGO" />
          <p>在龍格為你的每個夢想填上顏色</p>
        </div>
        <section class="footer-r-top-text">
          <p>電話&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(04)2225-8657</p>
          <p>
            地址&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;台中市北區三民路三段54巷19號之3號4樓
          </p>
          <p>
            電子信箱 &emsp;&emsp;&emsp;&emsp;longer959@gmail.com
          </p>
          <span>營業時間&emsp;&emsp;&emsp;&emsp;</span>
          <div>
            週三至週五 15:00 — 21:00
            <br />
            週六及週日 09:00 — 17:00
            <br />
            每週一和週二公休
          </div>
        </section>
      </section>
      <section class="footer-b-nav">
        <ul class="footer-ul">
          <li>
            <a href="/about" @click="setActiveLink('about')" @mouseenter="changeGreen">
              關於我們
            </a>
          </li>
          <li>
            <a href="/teacher" @click="setActiveLink('teacher')" @mouseenter="changeGreen">
              師資介紹
            </a>
          </li>
          <li>
            <a href="/courseInformation" @click="setActiveLink('courseInformation')" @mouseenter="changeGreen">
              課程資訊
            </a>
          </li>
          <li>
            <a href="/studentWork" @click="setActiveLink('studentWork')" @mouseenter="changeGreen">
              學生作品
            </a>
          </li>
          <li>
            <a href="/admissionList" @click="setActiveLink('admissionList')" @mouseenter="changeGreen">
              歷年榜單
            </a>
          </li>
          <li>
            <a href="/connection" @click="setActiveLink('connection')" @mouseenter="changeGreen">
              聯絡資訊
            </a>
          </li>
        </ul>
      </section>
    </section>
    <section class="copyRight">
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
  @apply flex justify-between items-end w-[100%] h-[120px] fixed z-[3] drop-shadow-[0_4px_20px_#262626] bg-EmphasizeColor;

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

main {
  @apply pt-[120px];
}

// 漢堡條動畫
// .ham-menu-all {
//   @apply w-[120px] h-[120px] rounded-full fixed top-[20px] left-[20px] z-[2] bg-[#cca600] hover:opacity-[0.7];

//   .ham-menu {
//     @apply inline-block w-full h-full relative;

//     &:after {
//       content: 'MENU';
//       font-weight: bold;
//       position: absolute;
//       top: 70%;
//       left: 50%;
//       transform: translate(-50%, -50%)
//     }


//     .line {
//       @apply w-[50%] h-[3px] rounded-xl bg-[#000] absolute left-[50%] translate-x-[-50%] -translate-y-[-50%] duration-[0.7s];
//     }

//     .line-1 {
//       @apply w-[20%] absolute top-[20%];
//     }

//     .line-2 {
//       @apply w-[40%] absolute top-[30%];
//     }

//     .line-3 {
//       @apply absolute top-[40%];
//     }
//   }

//   #ham-menu-switch {
//     display: none;
//   }

//   #ham-menu-switch:checked+.ham-menu:after {
//     content: 'CLOSE';
//   }

//   #ham-menu-switch:checked+.ham-menu .line-1 {
//     transform: translate(-50%, -50%) rotate(30deg);
//     width: 50%;
//     top: 40%;
//   }

//   #ham-menu-switch:checked+.ham-menu .line-2 {
//     display: none;
//   }

//   #ham-menu-switch:checked+.ham-menu .line-3 {
//     transform: translate(-50%, -50%) rotate(-30deg);
//     top: 40%;
//   }
// }

// 添加動畫
// .add-ham-ani {
//   animation: hamShake 0.2s 2;
// }
// .remove-ham-ani {
//   animation: hamHide 0.8s 1 ease-in-out forwards;
// }
// .ham-content{
//   @apply w-[100%] h-[100vh] bg-MainColorBG;
// }

// 公版頁尾
footer {
  @apply flex flex-wrap w-[100%] h-[95vh] z-[1] text-[#fff] xl:text-[1.5rem] lg:text-[1.2rem] bg-[url('./assets/img/generic/footer-bg.png')] bg-cover bg-no-repeat;

  .footer-content {
    @apply flex flex-wrap justify-center items-end w-[50%] h-[90%];

    // footer-contentl
    .iframe-area{
      @apply xl:w-[500px] xl:h-[500px] lg:w-[360px] lg:h-[360px];
    }


    // footer-content-r
    .footer-r-top {
      @apply w-[100%];

      .footer-longer-slogn {
        @apply flex justify-start items-end mb-[20px];

        p {
          @apply pb-[10px];
        }
      }


      .footer-r-top-text {
        @apply flex flex-wrap;

        p {
          @apply w-[100%] mb-[30px];
        }
      }
    }

    .footer-b-nav {
      @apply w-[100%];

      .footer-ul {
        @apply flex justify-end gap-[20px] xl:pe-[48px] lg:pe-[30px];


        li:not(:last-child)::after {
          @apply content-['|'] relative xl:top-[-5%] left-[5%];
        }
      }
    }
  }

  // 個別調整footer-content padding-bottom
  .footer-content-l {
    @apply xl:pb-[80px] lg:pb-[160px];
  }

  .footer-content-r {
    @apply pb-[30px]
  }

  .copyRight {
    @apply flex-1 self-end flex justify-center items-center h-[10%] border-t-[1px];
  }
}

// animation
// @keyframes hamShake {
//   0% {
//    height: 120px;
//   }

//   50% {
//    height: 100px;
//   }

//   100% {
//    height: 120px;
//   }
// }

// @keyframes hamHide {
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;

//   }
// }
</style>
