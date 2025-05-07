import { createApp } from "vue";
import App from "./App.vue";

import { createVuetify } from "vuetify";
import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi",
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(BootstrapVue3);
app.mount("#app");
