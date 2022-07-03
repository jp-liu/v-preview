import Vue from "vue";
import App from "./App.vue";
import VPreview from "./components/v-preview";
Vue.config.productionTip = false;

Vue.use(VPreview);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
