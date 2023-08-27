<template>
  <div>
    <div>=======</div>
    <p>{{ message }}</p>
    <button @click="increment">加法</button>
  </div>
</template>

<script>
export default {
  props: {
    initialCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      message: "Counter: " + this.initialCount,
      count: this.initialCount,
    };
  },
  methods: {
    increment() {
      this.count++;
      this.message = `Counter: ${this.count}`;
      this.$emit("increment", this.count); // 触发自定义事件
    },
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