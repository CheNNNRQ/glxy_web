<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="在线课堂">
            <img
              alt="在线课堂"
              src="~/assets/img/logo.png"
              width="100%"
            />
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link active-class="current" exact tag="li" to="/">
              <a>首页</a>
            </router-link>
            <router-link active-class="current" tag="li" to="/course">
              <a>课程</a>
            </router-link>
            <router-link active-class="current" tag="li" to="/teacher">
              <a>名师</a>
            </router-link>
            <router-link active-class="current" tag="li" to="/article">
              <a>文章</a>
            </router-link>
            <router-link active-class="current" tag="li" to="/qa">
              <a>问答</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!loginInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li v-if="loginInfo.id" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
              <a href="/ucenter" title>
                <img
                  :src="loginInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                />
                <span id="userName" class="vam disIb">{{
                    loginInfo.nickname
                  }}</span>
              </a>
              <a
                href="javascript:void(0);"
                title="退出"
                @click="logout()"
                class="ml5"
              >退 出</a
              >
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input
                  name="queryCourse.courseName"
                  placeholder="输入你想学的课程"
                  type="text"
                  value
                />
                <button class="s-btn" type="submit">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt/>

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.baidu.com/" target="_blank" title="baidu"
              >百度</a
              >
            </li>
            <li>
              <a href="https://www.icourse163.org/" target="_blank" title="mooc"
              >慕课</a
              >
            </li>
            <li>
              <a href="https://ke.qq.com/" target="_blank" title="tx"
              >腾讯课堂</a
              >
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" target="_blank" title="关于我们">关于我们</a>|
                <a href="#" target="_blank" title="联系我们">联系我们</a>|
                <a href="#" target="_blank" title="帮助中心">帮助中心</a>|
                <a href="#" target="_blank" title="资源下载">资源下载</a>|
                <span>服务热线：1875xxxxxxx(上海) 1737xxxxxxx(北京)</span>
                <span>Email：1310885336@qq.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2021在线课堂</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img alt src="~/assets/img/wx-icon.png"/>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img alt src="~/assets/img/wb-icon.png"/>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import '~/assets/css/reset.css'
import '~/assets/css/theme.css'
import '~/assets/css/global.css'
import '~/assets/css/web.css'
import '~/assets/css/base.css'
import '~/assets/css/activity_tab.css'
import '~/assets/css/bottom_rec.css'
import '~/assets/css/nice_select.css'
import '~/assets/css/order.css'
import '~/assets/css/swiper-3.3.1.min.css'
import "~/assets/css/pages-weixinpay.css"
import cookie from "js-cookie";
import loginApi from "@/api/login";

export default {
  data() {
    return {
      token: '',
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        email: "",
        nickname: "",
        sex: "",
      },
    }
  },
  created() {
    //获取路径里的 token值
    this.token = this.$route.query.token;
    //判断路径是否有token
    if (this.token) {
      this.wxLogin()
    }
    //从cookie获取用户信息
    this.showInfo();
  },
  methods: {
    //微信登录显示的方法
    wxLogin(){
      //把token放到cookie中
      console.log(this.token)
      // cookie.set('guli_token',this.token,{domain:'.nihaochilema.vaiwan.com'})
      cookie.set('guli_token',this.token,{domain:'localhost'})
      cookie.set('guli_ucenter','',{domain:'localhost'})
      console.log('1111111111111'+cookie.get('guli_token'))
      //调用接口 根据token获取用户信息
      loginApi.getLoginUserInfo().then(resp=>{
        this.loginInfo = resp.data.data.userInfo;
        console.log(this.loginInfo)
        cookie.set('guli_ucenter',JSON.stringify(this.loginInfo),{domain:'localhost'})
        console.log('**************'+cookie.get('guli_ucenter'))
      })
    },
    //从cookie获取用户信息
    showInfo() {
      //从cookie获取用户信息
      var userStr = cookie.get('guli_ucenter');
      //后端传过来的都是字符串 需要把字符串转换成json "{'aa':20}"
      //   console.log(userStr!=='undefined')
      //判断是否为true 里面捕获一下异常 不然会报错
      if (userStr) {
        try {
          this.loginInfo = JSON.parse(userStr)
        } catch (e) {

        }

      }
    },
    //登出功能
    logout() {
      //没办法删cookie 只能在里面设置空值
      cookie.set('guli_ucenter', '', {domain: 'localhost'})
      cookie.set('guli_token', '', {domain: 'localhost'})
      window.location.href = "/";
    }
  },
}
</script>
