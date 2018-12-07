import "vue-multiselect/dist/vue-multiselect.min.css";
import "leaflet/dist/leaflet.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
