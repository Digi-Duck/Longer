// import "./assets/main.css";
import "@/assets/style.css";
import "@/assets/fonts.css";
import NavCurve from "@/components/NavCurve.vue";
import NavMobile from "@/components/NavMobile.vue";



import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
// 導入jquery(lightbox2所需)
import $ from 'jquery';
// lightbox
import 'lightbox2/dist/css/lightbox.css';
import 'lightbox2/dist/js/lightbox.js';
const app = createApp(App);
// font-awesome
import '@fortawesome/fontawesome-free/css/all.css';


// jquery初始化
window.$ = $;
window.jQuery = $;

AOS.init();

// 新增全域組件
app.component('NavCurve', NavCurve);
app.component('NavMobile', NavMobile);

// 進入頁面自動至頂
window.scrollTo({
    top: 0,
});
console.log(document.documentElement.scrollTop);
// 全域自定義指令



app.use(router);

app.mount("#app");
