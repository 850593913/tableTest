import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/index.css";

Vue.use(VXETable);
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
