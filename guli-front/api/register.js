import request from '@/utils/request'

export default {
  //根据邮箱地址发送验证码
  sendCode(email) {
    return request({
      url: `/api/msm/send/${email}`,
      method: 'get'
    })
  },
  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/serviceUcenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}
