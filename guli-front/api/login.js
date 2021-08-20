import request from '@/utils/request'

export default {
  //登录
  submitLogin(userinfo) {
    return request({
      url: `/serviceUcenter/member/login`,
      method: 'post',
      data:userinfo
    })
  },
  //根据token获取用户信息
  getLoginUserInfo(userinfo) {
    return request({
      url: `/serviceUcenter/member/getMemberInfo`,
      method: 'get',
    })
  },

}
