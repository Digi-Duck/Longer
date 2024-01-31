// import "./assets/main.css";
import "@/assets/style.css";
import "@/assets/fonts.css";
import "@/assets/fade.css";
import NavCurve from "@/components/NavCurve.vue";
import NavMobile from "@/components/NavMobile.vue";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
// 導入jquery(lightbox2所需)
import $ from "jquery";
// lightbox
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox.js";
const app = createApp(App);
// font-awesome
import "@fortawesome/fontawesome-free/css/all.css";

// jquery初始化
window.$ = $;
window.jQuery = $;

AOS.init();

// 新增全域組件
app.component("NavCurve", NavCurve);
app.component("NavMobile", NavMobile);

// 進入頁面自動至頂
window.scrollTo({
  top: 0,
});
console.log(document.documentElement.scrollTop);

// 全域自定義指令-文字自動淡入
app.directive("fade-in-out", {
  beforeMount(el) {
    // el.style.transition = "opacity 1s";
    // el.style.opacity = "0";
    el.classList.add("fade-in");
  },
  mounted(el) {
    // 監聽滾動
    window.addEventListener("scroll", function () {
      var position = el.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
      //   console.log(position, screenHeight);
      //   觸發條件
      if (position < screenHeight) {
        // console.log("這邊有執行");
        el.classList.remove("fade-in");
        el.classList.add("show");
      }
    });

    // 一進入畫面檢查條件是否成立
    var initialPosition = el.getBoundingClientRect().top;
    var initialScreenHeight = window.innerHeight;
    if (initialPosition < initialScreenHeight) {
      el.classList.add("show");
    }
  },
  //   updated(el) {
  //     // 当文本更新时，重新触发淡入淡出效果
  //     el.style.opacity = "0";
  //     setTimeout(() => {
  //       el.style.opacity = "1";
  //     }, 100);
  //   },
});

// app.directive("change-yellow", {
//   mounted(el) {
//     window.addEventListener("mouseenter", function () {
//       let mouse = document.querySelector("#color-block");
//       console.log(mouse);
//       console.log("執行");
//     });
//   },
// });

app.use(router);

app.mount("#app");
