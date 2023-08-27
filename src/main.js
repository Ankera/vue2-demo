import Vue from "vue";
import ElementUI from "element-ui";
import Antd from "ant-design-vue";
import "element-ui/lib/theme-chalk/index.css";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./utils/request";

import './main.component'

Vue.config.productionTip = false;

Vue.use(Antd);

Vue.use(ElementUI);

Vue.directive("color", {
  // 钩子函数
  bind(el, binding) {
    console.log("bind");
    // el是绑定指令的元素
    // binding包含指令的信息
    el.style.backgroundColor = binding.value;
  },
  inserted() {
    console.log("inserted");
  },
  update(el, binding) {
    el.style.backgroundColor = binding.value;
    console.log("update");
  },
  componentUpdated() {
    console.log("componentUpdated");
  },
  unbind() {
    console.log("unbind");
  },
});


// Vue.extend({
//   props: ['title', 'content'],
//   template: `
//     <div class="modal">
//       <div class="modal-header">{{ title }}</div>
//       <div class="modal-content">{{ content }}</div>
//       <button @click="$emit('close')">Close</button>
//     </div>
//   `
// });

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
