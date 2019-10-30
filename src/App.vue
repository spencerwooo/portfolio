<template>
  <div id="app">
    <vue-particles
      class="particles"
      color="#ca2c2a"
      :particleOpacity="0.3"
      :particlesNumber="20"
      shapeType="circle"
      :particleSize="4"
      :lineLinked="false"
      :moveSpeed="3"
      :hoverEffect="false"
      :clickEffect="false"
    ></vue-particles>

    <vue-navigation-bar :options="navbarOptions" />

    <div id="container">
      <img id="avatar" alt="avatar" src="./assets/icon.jpg" />
      <h1>Spencer Woo</h1>
      <h2>👨‍🎨 👨‍💻 🙋‍♂️ .DS_Store</h2>

      <p>CS 在读 / 少数派资深作者 / Arch Linux 精神用户</p>
      <p>
        * he is also the creator of
        <a href="https://dowww.spencerwoo.com/">'Dev on Windows with WSL'</a>
      </p>

      <hr id="top-hr" />
      <h3>🎉 Where to find me:</h3>
      <div id="card-container">
        <Card
          msg="少数派 sspai"
          backgroundColor="#ca2c2a"
          description="✏️ 主要输出战场！"
          textColor="#FFFFFF"
          icon="sspai.png"
          link="https://beta.sspai.com/u/spencerwoo/posts"
        />
        <Card
          msg="Listed"
          backgroundColor="#168FEC"
          description="📒 从头开始的博客（咕咕咕）"
          textColor="#FFFFFF"
          icon="s.notes.png"
          link="https://listed.to/@spwoo"
        />
        <Card
          msg="GitHub"
          backgroundColor="#24292E"
          description="📦 我做过的项目都在这里"
          textColor="#FFFFFF"
          icon="github.png"
          link="https://github.com/spencerwooo"
        />
      </div>

      <div id="others">
        <hr />
        <h3>我还偶尔出没于：</h3>
        <div class="social-media">
          <!-- <div class="social-media-card">
            <img class="media-icon" src="@/assets/jike.png" alt />
            <span>
              Jike:
              <a
                href="https://web.okjike.com/user/4DDA0425-FB41-4188-89E4-952CA15E3C5E/post"
              >@SpencerWoo</a>
            </span>
          </div>-->
          <div class="social-media-card">
            <img class="media-icon" src="@/assets/weibo.png" alt="weibo" />
            <span>
              Weibo:
              <a href="https://weibo.com/u/6265807914">@SPNCR</a>
            </span>
          </div>
          <div class="social-media-card">
            <img class="media-icon" src="@/assets/twitter.png" alt="twitter" />
            <span>
              Twitter:
              <a href="https://twitter.com/realSpencerWoo">@realSpencerWoo</a>
            </span>
          </div>
        </div>

        <hr />
        <p>🧨 感谢大哥的关注！给您拜年了！干杯 🍻</p>
        <!-- <p>
          Previous blog posts have been archived at:
          <a
            href="https://archive.spencerwoo.com"
          >https://archive.spencerwoo.com</a>. Thank you for following me.
        </p>-->
      </div>
    </div>

    <div id="footer">
      <div id="footer-text">©{{ getYear() }} Spencer Woo</div>
    </div>
  </div>
</template>

<script>
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage: require('./assets/brand.png'),
        brandImageAltText: 'Big brother drink Coca Cola!',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          { type: 'link', text: 'Spencer Woo', path: './' }
        ],
        menuOptionsRight: [
          {
            type: 'button',
            text: 'GitHub',
            path: 'https://github.com/spencerwooo/portfolio',
            class: 'button-github'
          }
        ]
      }
    }
  },
  methods: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: -9999;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  border-top: #ca2c2a 5px solid;
}

#app {
  font-family: 'Nunito Sans', 'Avenir Next', -apple-system, BlinkMacSystemFont,
    Segoe UI, Helvetica, Arial, 'PingFang SC', 'Noto Sans CJK SC',
    'Microsoft YaHei', sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #24292e;
  -webkit-animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

#container {
  text-align: center;
  margin: 0px auto 0 auto;
  max-width: 800px;
  padding: 0px 20px 44px 20px;
}

#main-navbar {
  padding-left: 15px;
  padding-right: 15px;
}

#main-navbar .button-github {
  background: #ca2c2a;
  transition: 0.3s;
}

#main-navbar .button-github:hover {
  -webkit-box-shadow: 0px 10px 40px -10px #ca2c2a;
  -moz-box-shadow: 0px 10px 40px -10px #ca2c2a;
  box-shadow: 0px 10px 40px -10px #ca2c2a;
}

.vnb__collapse-button img {
  width: 24px;
  height: 24px;
  padding-bottom: 3px;
}

#avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: 40px;
}

h1 {
  font-weight: 700;
  font-size: 28px;
}

h2 {
  font-weight: 400;
  font-size: 20px;
  padding: 20px 0;
}

hr {
  width: 100px;
  margin: 60px 0 0 0;
  border-top: solid 5px #24292e;
}

p,
span {
  color: #666666;
}

#top-hr {
  width: 100px;
  margin: 60px auto;
  border-top: solid 5px #ca2c2a;
}

.social-media-card {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.social-media-card .media-icon {
  width: 20px;
  height: 20px;
  padding-right: 10px;
}

#container a {
  text-decoration: none;
  color: #ca2c2a;
}

#container a:hover {
  border-bottom: #ca2c2a solid 1px;
}

#others {
  text-align: left;
}

#footer {
  padding: 20px 20px;
  background-color: #24292e;
  color: #ffffff;
}

#footer-text {
  margin: 0px auto;
  max-width: 800px;
}

/**
 * ----------------------------------------
 * animation fade-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
