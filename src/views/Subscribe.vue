<template>
  <div class="container">
    <h1>📩</h1>
    <h1>Subscribe</h1>
    <p>如何订阅我的文章，或跟踪我在其他平台的发布？</p>

    <hr id="top-hr" />
    <div class="article">
      <!-- <h3>🚧 Under construction</h3> -->
      <p>感谢大哥选择订阅我的发布！Big brother drink Coca Cola 🍻</p>
      <h2>如何订阅我在各个平台的发布内容？</h2>
      <p>事实上，我除了在少数派更新文章、在 Listed 上更新博客，还会在其他平台比如 Twitter 以及微博更新「碎碎念」，甚至还有可能在 Instagram 上发布照片等等。因此如果同学希望能够直接订阅我的全部发布，我推荐使用优秀的订阅抓取与管理 App ——「快知」。</p>
      <p>直接点击下方链接，就可以进入「快知 - SpencerWoo」的主题订阅地址，下载「快知 App」即可订阅我的全部平台内容的更新。<strong>欢迎大家使用我的邀请码：F2Z5L</strong></p>
      <AppCard
        msg="快知"
        stars="⭐⭐⭐⭐⭐"
        description="直接订阅我在各个平台的发布"
        icon="kuaizhi.png"
        link1Tooltip="下载「快知 App」"
        link2Tooltip="快知 -「SpencerWoo」又开始发各种东西了"
        link1="https://kzfeed.com/?r=F2Z5L"
        link2="https://kz.sync163.com/web/topic/dP8yRN01yrwA6?uid=q1opr09GyJ58V"
        rightIcon1="app.png"
        rightIcon2="bookmark.png"
      />

      <h2>如何只订阅我的少数派文章？</h2>
      <p>我的主要输出战场是少数派，因此如果希望只订阅我的少数派文章，可以通过 RSS 进行订阅管理。</p>
      <p>
        RSS 是一个非常简单且方便管理的信息聚合管理协议，是一种
        <a href="https://zh.wikipedia.org/wiki/RSS">消息来源格式规范</a>，用以聚合经常发布更新数据的网站，例如博客文章、新闻、音频或视频的网摘。利用 RSS 同学们可以非常方便的订阅我的文章更新。借助于 RSSHub，我为我自己的文章生成了一个 RSS 订阅链接，点击下方链接并复制进入你的 RSS 阅读器即可实时获得我的文章更新。
      </p>
      <AppCard
        msg="RSS 订阅"
        stars="⭐⭐⭐⭐"
        description="利用 RSS 订阅我的少数派文章更新"
        icon="sspai-red.png"
        link1Tooltip="下载「少数派」App"
        link2Tooltip="我的少数派文章 RSS 订阅链接"
        link1="https://apps.apple.com/cn/app/%E5%B0%91%E6%95%B0%E6%B4%BE/id1191720421"
        link2="https://rsshub.app/sspai/author/800610"
        rightIcon1="app.png"
        rightIcon2="rss.png"
      />
      <p>另外，第一次接触 RSS 的同学如果感觉陌生，也可以先阅读这两篇文章，它们分别介绍了 RSS 具体怎么用，以及如何具体利用 RSS 订阅我的文章：</p>
      <ul>
        <li>
          <a href="https://diygod.me/ohmyrss/">DIYgod - 我有特别的 RSS 使用技巧</a>
        </li>
        <li>
          <a
            href="https://archive.spencerwoo.com/posts/2019/07/11/an-easy-way-to-subscribe.html"
          >SpencerWoo - 如何利用 RSS 订阅我的文章</a>
        </li>
      </ul>

      <h2>如何只订阅我的 Hugo 博客？</h2>
      <p>Hugo 是「全世界最快的静态网站编译框架」，我选择 Hugo 作为我的博客引擎，部署于 Netlify 上面。同样，我提供了 RSS 订阅链接，利用上面介绍的方法就可以直接订阅我的个人博客啦~</p>
      <AppCard
        msg="Hugo 博客"
        stars="⭐⭐⭐"
        description="利用 RSS 订阅我的博客更新"
        icon="cola.png"
        link1Tooltip="我的博客地址"
        link2Tooltip="我的博客 RSS 订阅链接"
        link1="https://blog.spencerwoo.com/"
        link2="https://blog.spencerwoo.com/posts/index.xml"
        rightIcon1="bookmark.png"
        rightIcon2="rss-blue.png"
      />

      <h2>最后，感谢。</h2>
      <p>感谢大哥的关注！您的支持是我更新的最大动力。ღ( ´･ᴗ･` )比心</p>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue'

export default {
  name: 'subscribe',
  components: {
    AppCard
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
}

h3 {
  font-weight: 700;
  font-size: 18px;
  padding: 18px 0 0 0;
  margin: 0;
}

ul {
  padding-left: 15px;
  line-height: 30px;
  margin: 0;
}

p {
  line-height: 30px;
}
</style>
