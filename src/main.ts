import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./style.css";
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");
