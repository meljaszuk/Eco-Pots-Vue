import { createApp } from "vue";
import App from "./App.vue";
import "./main.scss";

createApp(App).mount("#app");

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
