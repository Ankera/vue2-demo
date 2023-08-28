<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "router-view left hello hi 111",
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next);
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from, next);
    next();
  },
};
</script>
