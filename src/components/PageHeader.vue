<template>
    <el-row class="header-row">
      <el-col :span="18" style="display: flex;">
        <img
          src="http://www.zhufengpeixun.cn/skin/20142/img/logo1.png"
          class="logo"
          alt=""
        />
        <el-menu
          class="menu"
          mode="horizontal"
          background-color="#333"
          text-color="#fff"
          active-text-color="#fff"
          :router="true"
        >
          <el-menu-item index="/xxx">首页</el-menu-item>
          <el-menu-item index="/xxx">发布文章</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <div class="nav-right">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#333"
            text-color="#fff"
            active-text-color="#fff"
          >
              <el-menu-item index="login">
                  <router-link to="/login">登录</router-link>
              </el-menu-item>
              <el-menu-item index="reg">
                  <router-link to="/reg">注册</router-link>
              </el-menu-item>
              <el-submenu index="logout">
                  <template slot="title">张三</template>
                  <el-menu-item >退出登录</el-menu-item>
              </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </template>
  
  <style lang="scss">
      .header-row {
          height: 100%;
          .logo {
              margin: 5px;
              height: 50px;
          }
          .menu, .logo {
              display: inline-block;
          }
          .nav-right {
              float: right;
              li {
                  display: inline-block;
                  text-align: center;
                  line-height: 60px;
              }
              a {
                  color: #fff;
              }
          }
      }
  </style>