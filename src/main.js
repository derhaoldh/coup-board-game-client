import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Axios from "axios";
import router from "./router";
import { ValidationProvider } from "vee-validate";

Vue.prototype.$http = Axios;
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
