<template>
  <div class="container">
    <h1>📩</h1>
    <h1>Subscribe</h1>
    <p>如何订阅我的文章，或跟踪我在其他平台的发布？</p>

    <hr id="top-hr" />
    <div class="article">
      <h3>🚧 Under construction</h3>
      <p>感谢大哥选择订阅我的发布！Big brother drink Coca Cola 🍻</p>
      <h2>如何订阅我在各个平台的发布内容？</h2>
      <p>事实上，我除了在少数派更新文章、在 Listed 上更新博客，还会在其他平台比如 Twitter 以及微博更新「碎碎念」，甚至还有可能在 Instagram 上发布照片等等。因此如果同学希望能够直接订阅我的全部发布，我推荐使用优秀的订阅抓取与管理 App ——「快知」。</p>
      <Card
        msg="快知"
        backgroundColor="#168FEC"
        description="直接订阅我在各个平台的发布"
        textColor="#FFFFFF"
        icon="kuaizhi.png"
        link="https://kz.sync163.com/web/topic/dP8yRN01yrwA6?uid=q1opr09GyJ58V"
      />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

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
