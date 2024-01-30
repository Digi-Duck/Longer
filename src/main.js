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

app.component('NavCurve', NavCurve);
app.component('NavMobile', NavMobile);

window.scrollTo({
    top: 0,
});
console.log(document.documentElement.scrollTop);

app.use(router);

app.mount("#app");
