<template>
  <div class="container">
    <img id="avatar" alt="avatar" src="./../assets/icon.jpg" />
    <h1>Spencer Woo</h1>
    <h2>👨‍🎨 👨‍💻 🙋‍♂️ .DS_Store</h2>

    <p>CS 在读 / 少数派资深作者 / Arch Linux 精神用户 / 人民艺术家</p>
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
        link="https://sspai.com/u/spencerwoo/posts"
      />
      <Card
        msg="博客 Blog"
        backgroundColor="#0083c0"
        description="📒 从头开始（咕咕咕）"
        textColor="#FFFFFF"
        icon="netlify.png"
        link="https://blog.spencerwoo.com"
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
        <div class="social-media-card">
          <img class="media-icon" src="@/assets/weibo.png" alt="weibo" />
          <span>
            Weibo:
            <a href="https://weibo.com/spencerwoo">@SPNCR</a>
          </span>
        </div>
        <div class="social-media-card">
          <img class="media-icon" src="@/assets/twitter.png" alt="twitter" />
          <span>
            Twitter:
            <a href="https://twitter.com/realSpencerWoo">@realSpencerWoo</a>
          </span>
        </div>
        <div class="social-media-card">
          <img class="media-icon" src="@/assets/telegram.png" alt="telegram" />
          <span>
            Telegram Channel:
            <a href="https://t.me/realSpencerWoo">t.me/realSpencerWoo</a>
          </span>
        </div>
      </div>

      <p>🧨 感谢大哥的关注！给您拜年了！干杯 🍻</p>

      <hr />

      <h3>Want to use this template on your website?</h3>
      <p>想要用我的模板搭建自己的 Portfolio？请记得不要删掉下面的 Badge，谢谢。</p>
      <a href="https://github.com/spencerwooo/portfolio">
        <img src="https://flat.badgen.net/badge/Designed%20by/@SpencerWoo/red" alt="copyright" />
      </a>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>
