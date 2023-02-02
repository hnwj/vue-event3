import request from '@/utils/request'

export const getListAPI = () => {
  return request({
    url: 'http://geek.itheima.net/v1_0/channels'
  })
}

// 用户注册接口
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: 'http://geek.itheima.net/v1_0/api/reg'
  })
}

// 用户登录接口
export const loginAPI = ({ username, password }) => {

}
