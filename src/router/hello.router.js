import HelloTest1Vue from "@/components/HelloTest1.vue";
import HelloHi1 from "@/components/HelloHi1.vue";
import HelloHi2 from "@/components/HelloHi2.vue";

/**
 * 页面多路由渲染数据
 * App.vue
 * <router-view name="left"></router-view>
 * <router-view name="right"></router-view>
 */
export default [
  {
    path: "/hello",
    components: {
      default: HelloTest1Vue,
      left: HelloHi1,
      right: HelloHi2,
    },
  },
];
