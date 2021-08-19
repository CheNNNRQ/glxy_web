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
            <li id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li id="is-login-one" class="mr10 undis">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li id="is-login-two" class="h-r-user undis">
              <a href="#" title>
                <img
                  alt
                  class="vam picImg"
                  height="30"
                  src="~/assets/img/avatar-boy.gif"
                  width="30"
                />
                <span id="userName" class="vam disIb"></span>
              </a>
              <a
                class="ml5"
                href="javascript:void(0)"
                onclick="exit();"
                title="退出"
              >退出</a
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
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";

export default {};
</script>
