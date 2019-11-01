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
      <p>直接点击下方链接，就可以进入「快知 - SpencerWoo」的主题订阅地址，下载「快知 App」即可订阅我的全部平台内容的更新。</p>
      <Card
        msg="快知"
        backgroundColor="#168FEC"
        description="直接订阅我在各个平台的发布"
        textColor="#FFFFFF"
        icon="kuaizhi.png"
        link="https://kz.sync163.com/web/topic/dP8yRN01yrwA6?uid=q1opr09GyJ58V"
      />

      <h2>如何只订阅我的少数派文章？</h2>
      <p>我的主要输出战场是少数派，因此如果希望只订阅我的少数派文章，可以通过 RSS 进行订阅管理。</p>
      <p>RSS 是一个非常简单且方便管理的信息聚合管理协议，是一种 <a href="https://zh.wikipedia.org/wiki/RSS">消息来源格式规范</a>，用以聚合经常发布更新数据的网站，例如博客文章、新闻、音频或视频的网摘。利用 RSS 同学们可以非常方便的订阅我的文章更新。借助于 RSSHub，我为我自己的文章生成了一个 RSS 订阅链接，点击下方链接并复制进入你的 RSS 阅读器即可实时获得我的文章更新。</p>
      <Card
        msg="少数派 RSS 订阅"
        backgroundColor="#ca2c2a"
        description="利用 RSS 订阅我的少数派文章更新"
        textColor="#FFFFFF"
        icon="sspai.png"
        link="https://rsshub.app/sspai/author/800610"
      />
      <p>另外，第一次接触 RSS 的同学如果感觉陌生，也可以先阅读这两篇文章，它们分别介绍了 RSS 具体怎么用，以及如何具体利用 RSS 订阅我的文章：</p>
      <ul>
        <li><a href="https://diygod.me/ohmyrss/">DIYgod - 我有特别的 RSS 使用技巧</a></li>
        <li><a href="https://archive.spencerwoo.com/posts/2019/07/11/an-easy-way-to-subscribe.html">SpencerWoo - 如何利用 RSS 订阅我的文章</a></li>
      </ul>

      <h2>如何只订阅我的博客（Listed）文章？</h2>
      <p>Listed 是一个独立的小众博客平台，我偶尔会选择在 Listed 上面更新我的个人博客、技术文章等等内容。希望订阅我的 Listed 博客的同学可以利用 Listed 自带的「邮件订阅」功能，更为方便及时的订阅我的文章发布。</p>
      <p>点击下方链接，直接进入我的 Listed 博客，在右上角就能看的 Subscribe to @spwoo's posts 的选项。在那里填写你的邮箱，即可直接订阅我的博客文章发布。</p>
      <Card
        msg="Listed 博客订阅"
        backgroundColor="#f6f6f6"
        description="利用邮件订阅我的 Listed 博客更新"
        textColor="#2c2c2c"
        icon="s.notes.png"
        link="https://listed.to/@spwoo"
      />

      <h2>最后，感谢。</h2>
      <p>感谢大哥的关注！您的支持是我更新的最大动力。ღ( ´･ᴗ･` )比心</p>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'subscribe',
  components: {
    Card
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-weight: 700;
  font-size: 20px;
}

h3 {
  font-weight: 700;
  font-size: 18px;
}
</style>
