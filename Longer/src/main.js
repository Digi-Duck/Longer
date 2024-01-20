// import "./assets/main.css";
import "@/assets/style.css";
import "@/assets/font.css";

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

// jquery初始化
window.$ = $;
window.jQuery = $;

AOS.init();

app.use(router);

app.mount("#app");
