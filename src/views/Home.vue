<template>
  <div class="container">
    <img id="avatar" alt="avatar" src="./../assets/icon.jpg" />
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
        link="https://sspai.com/u/spencerwoo/posts"
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

      <!-- <hr /> -->
      <p>🧨 感谢大哥的关注！给您拜年了！干杯 🍻</p>
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
