<template>
  <div class="reg-container">
    <div class="reg-box">
      <div class="title-box">
        <!-- 注册的表单区域 -->
        <el-form :model="regForm" :rules="regRules" ref="regRef">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model="regForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="regForm.password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <!-- 确认密码 -->
          <el-form-item prop="repassword">
            <el-input
              v-model="regForm.repassword"
              type="password"
              placeholder="请再次确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn-reg">注册</el-button>
            <el-link type="info">去登录</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('../../assets/images/login_bg.jpg') no-repeat center;
  background-size: cover;
  height: 100%;

  .reg-box {
    width: 400px;
    height: 335px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;
    .title-box {
      height: 60px;
      background: url('../../assets/images/login_title.png') center no-repeat;
    }
  }
}
</style>
