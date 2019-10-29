<template>
  <div id="app" class=".slide-in-bottom">
    <div id="container">
      <img id="avatar" alt="avatar" src="./assets/logo.jpg" />
      <h1>Spencer Woo</h1>
      <h2>👨‍🎨 👨‍💻 🙋‍♂️ .DS_Store</h2>

      <span>
        * he is the creator of
        <a href="https://dowww.spencerwoo.com/">'Dev on Windows with WSL'</a>!
      </span>

      <hr id="top-hr" />
      <h3>🎉 Where to find me!</h3>
      <div id="card-container">
        <Card
          msg="GitHub"
          backgroundColor="#24292E"
          description="📦 我做过的项目都在这里"
          textColor="#FFFFFF"
          icon="github.png"
          link="https://github.com/spencerwooo"
        />
        <Card
          msg="少数派 sspai"
          backgroundColor="#C03237"
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
            <img class="media-icon" src="@/assets/weibo.png" alt />
            <span>
              Weibo:
              <a href="https://weibo.com/u/6265807914">@SPNCR</a>
            </span>
          </div>
          <div class="social-media-card">
            <img class="media-icon" src="@/assets/twitter.png" alt />
            <span>
              Twitter:
              <a href="https://twitter.com/realSpencerWoo">@realSpencerWoo</a>
            </span>
          </div>
        </div>

        <hr />
        <p>🧨感谢大哥的关注！给您拜年了！</p>
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
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
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

body {
  margin: 0;
  border-top: #141313 5px solid;
}

#app {
  font-family: 'Nunito Sans', 'Avenir Next', -apple-system, BlinkMacSystemFont,
    Segoe UI, Helvetica, Arial, 'PingFang SC', 'Noto Sans CJK SC',
    'Microsoft YaHei', sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #141313;
  -webkit-animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

#container {
  text-align: center;
  margin: 40px auto 0 auto;
  max-width: 600px;
  padding: 60px 20px;
}

#avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
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
  margin: 60px 0;
  border-top: solid 3px #141313;
}

span {
  color: #666666;
}

#top-hr {
  width: 100px;
  margin: 60px auto;
  border-top: solid 3px #c03237;
}

.social-media-card {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.social-media-card .media-icon {
  width: 30px;
  height: 30px;
  padding-right: 20px;
}

a {
  text-decoration: none;
  color: #c03237;
}

a:hover {
  border-bottom: #c03237 solid 1px;
}

#others {
  text-align: left;
}

#footer {
  padding: 20px 20px;
  background-color: #141313;
  color: #ffffff;
}

#footer-text {
  margin: 0px auto;
  max-width: 600px;
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
