<template>
  <div class="docs">
    <h1>首页</h1>
    <count-num></count-num>

    <hr>
    <ul>
      <router-link to="/">首页</router-link> |
      <router-link to="/hello">HELLO</router-link> | 
      <router-link to="/hello-hi">Hi1</router-link>
    </ul>
    <p>参数 = {{$route.name}}</p>
    <p>{{count}}</p>
    <button v-on:click="addItem">+</button>
    <button v-on="evnets" >-</button>
    <br>
    {{val1}}
    <input type="text" :value="val1" v-on:input="handleChange">
    <p v-color="color">这是自定义指令</p>

    <hello-test1 :initialCount="3" @increment="handleIncrement" @click.native="addItem"></hello-test1>

    <hello-test2>
      <template v-slot:right>
        <h1>
          rightrightright
        </h1>
      </template>

      <p>hello = middle</p>

      <template v-slot:left>
        <h1>
          <div>son - left</div>
        </h1>
      </template>
      
    </hello-test2>
  </div>
</template>
<script>
import CountNum from '../components/CountNum.vue'

export default {
  name: "HomeVue",
  components: {
    "count-num": CountNum
  },
  data() {
    return {
      count: 1,
      val1: 1,
      color: "green",
      evnets: {
        click: () => {
            this.count--;
        }
      }
    };
  },
  methods: {
    addItem() {
      this.count++;
      this.color = 'red'
      this.val1 = 'red'
    },
    handleChange(e){
        this.val1 = e.target.value;
    },
    handleIncrement(newCount) {
      console.log(`New count: ${newCount}`);
    }
  },
};
</script>

<style scoped>
p, h1, div {
    line-height: initial !important;
}
button {
    display: inline-block;
    width: 36px;
    margin-right: 12px;
}
</style>
