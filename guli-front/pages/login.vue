<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
        <el-form-item
          class="input-prepend restyle"
          prop="email"
          :rules="[
            {
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur',
            },

          ]"
        >
          <div>
            <el-input type="text" placeholder="邮箱地址" v-model="user.email"/>
            <i class="el-icon-message"/>
          </div>
        </el-form-item>
        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <div>
            <el-input
              type="password"
              placeholder="密码"
              v-model="user.password"
            />
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>
        <div class="btn">
          <input
            type="button"
            class="sign-in-button"
            value="登录"
            @click="submitLogin()"
          />
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li>
            <a
              id="weixin"
              class="weixin"
              target="_blank"
              href="http://localhost:8160/api/ucenter/wx/login"
            ><i class="iconfont icon-weixin"
            /></a>
          </li>
          <li>
            <a id="qq" class="qq" target="_blank" href="#"
            ><i class="iconfont icon-qq"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import cookie from "js-cookie";
import loginApi from "@/api/login";

export default {
  layout: "sign",
  data() {
    return {
      user: {
        //封装用于登录的用户对象
        email: "",
        password: "",
      },
      //用于获取接口传来的token中的对象
      loginInfo: {},
    };
  },
  methods: {
    //登录的方法
    submitLogin() {
      // 1. 调用接口登录 返回token字符串
      loginApi.submitLogin(this.user).then(resp => {
        // 2. 获取token字符串放到cookie中
        //参数1 给cookie的命名 参数二 给cookie放的值 参数三 作用范围只要是localhost都传递
        cookie.set('guli_token', resp.data.data.token, {domain: 'localhost'})

        // 3. 在utils.request中加上拦截器将token加到header中(如果有)
        // 4.调用接口 根据token获取用户信息
        loginApi.getLoginUserInfo().then(value => {
          //获取返回用户信息,放到cookie中
          this.loginInfo = value.data.data.userInfo
          console.log(value.data.data)
          //这里传的是一个对象不知道为什么老师直接就能加到cookie中 这里需要转成字符串不然会报错
          cookie.set('guli_ucenter', JSON.stringify(this.loginInfo), {domain: 'localhost'})
          if (cookie.get('guli_ucenter') !== 'undefined') {
            //跳转到主页
            window.location.href = "/";
          }else {
            //提示
            this.$message({
              type: "error",
              message: "账号或密码不正确"
            })
          }
          //5.在主页显示用户的信息 在layouts.default中
        })
      })
    },
    // checkPhone(rule, value, callback) {
    //   //debugger
    //   if (!/^1[34578]\d{9}$/.test(value)) {
    //     return callback(new Error("手机号码格式不正确"));
    //   }
    //   return callback();
    // },
  },
};
</script>
<style>
.el-form-item__error {
  z-index: 9999999;
}
</style>
