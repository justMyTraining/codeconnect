import { createApp } from "vue";
import "./style.css";
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from "primevue/config";
import App from "./App.vue";

createApp(App).mount("#app");
App.use(PrimeVue);
