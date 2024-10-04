import { createApp } from "vue";
import App from "./App.vue";
import "./main.scss";
import Global from "./components/Global/Global.vue";

const app = createApp(App);

app.component("Global", Global);

app.mount("#app");

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
