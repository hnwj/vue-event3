<template>
    <el-container class="main-container">
      <!-- 头部区域 -->
      <el-header>
        <!-- 左侧的 logo -->
        <img src="../../assets/images/logo.png" alt="" />
        <!-- 右侧的菜单 -->
        <el-menu
          class="el-menu-top"
          mode="horizontal"
          background-color="#23262E"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <el-submenu index="1">
            <template slot="title">
              <!-- 头像 -->
              <img src="../../assets/images/logo.png" alt="" class="avatar" />
              <span>个人中心</span>
            </template>
            <el-menu-item index="1-1"><i class="el-icon-s-operation"></i>基本资料</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-camera"></i>更换头像</el-menu-item>
            <el-menu-item index="1-3"><i class="el-icon-key"></i>重置密码</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-switch-button" @click="logoutFn"></i>退出</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <!-- 侧边栏区域 -->
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <!-- 页面主体区域 -->
          <el-main>
            Main.vue后台主页
          </el-main>
          <!-- 底部 footer 区域 -->
          <el-footer>© www.baidu.com - 百度程序员</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'my-layout',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    // 退出登录
    logoutFn () {
      // 询问用户是否退出登录
    // 路由跳转到登录
      this.$router.push('/login')
      // 清除token
      this.updateToken('')
    }
  }
}
</script>

  <style lang="less" scoped>
  .main-container {
    height: 100%;
    .el-header,
    .el-aside {
      background-color: #23262e;
    }
    .el-header {
      padding: 0;
      display: flex;
      justify-content: space-between;
    }
    .el-main {
      overflow-y: scroll;
      height: 0;
      background-color: #F2F2F2;
    }
    .el-footer {
      background-color: #eee;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .avatar {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: #fff;
    margin-right: 10px;
    object-fit: cover;
  }
  </style>
