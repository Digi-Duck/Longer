// import "./assets/main.css";
import "@/assets/style.css";
import "@/assets/font.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import AOS from "aos";
// import "aos/dist/aos.css";

const app = createApp(App);

// app.config.globalProperties.$AOS = AOS;
// AOS.init();
app.use(router);

app.mount("#app");
