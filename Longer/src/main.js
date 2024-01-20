// import "./assets/main.css";
import "@/assets/style.css";
import "@/assets/font.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
// lightbox
// import 'lightbox2/dist/css/lightbox.min.css'
// import 'lightbox2/dist/js/lightbox.min.js'
const app = createApp(App);

AOS.init();

app.use(router);

app.mount("#app");
