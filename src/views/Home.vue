<template>
  <div class="docs">
    <h1>首页</h1>
    <p>{{count}}</p>
    <button v-on:click="addItem">+</button>
    <button v-on="evnets" >-</button>
    <br>
    {{val1}}
    <input type="text" :value="val1" v-on:input="handleChange">
    <p v-color="color">这是自定义指令</p>
  </div>
</template>
<script>
export default {
  name: "HomeVue",
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
