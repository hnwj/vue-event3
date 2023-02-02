<template>
    <div class="reg-container">
        <div class="reg-box">
            <div class="title-box"></div>
            <!-- 注册的表单区域 -->
            <el-form :model="regForm" :rules="regRules" ref="regRef">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="regForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="regForm.password" type="password"
                        placeholder="请输入密码"></el-input>
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item prop="repassword">
                    <el-input v-model="regForm.repassword" type="password"
                        placeholder="请再次确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn-reg" @click="regNewUserFn">注册</el-button>
                    <el-link type="info" @click="$router.push('/login')">去登录</el-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  data () {
    const samePwd = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        // 如果验证失败，则调用 回调函数时，指定一个 Error 对象。
        callback(new Error('两次输入的密码不一致!'))
      } else {
        // 如果验证成功，则直接调用 callback 回调函数即可。
        callback()
      }
    }
    return {
      // 注册表单的数据对象
      regForm: {
        username: '',
        password: '',
        repassword: ''
      },
      // 注册表单的验证规则对象
      regRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          }
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' },
          { validator: samePwd, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册功能实现
    regNewUserFn () {
      this.$refs.regRef.validate(async valid => {
        if (!valid) return false
        // 尝试拿到用户输入的内容
        console.log(this.regForm)
        // 注册调用接口
        const { data: res } = await registerAPI(this.regForm)
        console.log('res', res)
        // 注册失败
        if (res.code !== 0) return this.$message.error(res.message)
        this.$message.success(res.message)
        // 跳转到登录界面
        this.$router.push('/login')
      })
    }
  }
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

.btn-login {
    width: 100%;
    padding-right: 10px;
}
</style>
