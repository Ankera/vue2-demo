<template>
  <div>
    <a-affix :offset-top="top">
      <a-button type="primary" @click="top += 10"> Affix top </a-button>
    </a-affix>
  </div>
</template>
<script>
export default {
  name: "RegisterVue",
};
</script>
