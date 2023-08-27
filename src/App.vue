<template>
  <div>
    <el-container style="min-width: 960px;">
      <el-header><PageHeader /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer><PageFooter /></el-footer>
    </el-container>
  </div>
</template>

<script>

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'VueApp',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
