<template>
  <div class="container">
    <h1>📈</h1>
    <h1>Stats</h1>
    <p>各项指标，实时监控！</p>

    <hr id="top-hr" />
    <div class="col-container">
      <div class="row-container">
        <statCard
          statTitle="Telegram 频道"
          :followers="telegram"
          suffix="members"
          icon="telegram.png"
          link="https://t.me/realSpencerWoo"
        />
        <statCard
          statTitle="RSS 订阅"
          :followers="rss"
          suffix="subscribers"
          icon="rss.png"
          link="https://blog.spencerwoo.com/posts/index.xml"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="少数派"
          :followers="sspai"
          suffix="关注"
          icon="sspai.png"
          link="https://sspai.com/u/spencerwoo/posts"
        />
        <statCard
          statTitle="微博"
          :followers="weibo"
          suffix="粉丝"
          icon="weibo.png"
          link="https://weibo.com/spencerwoo"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="知乎"
          :followers="zhihu"
          suffix="关注"
          icon="zhihu.png"
          link="https://www.zhihu.com/people/spencer-woo-64"
        />
        <statCard
          statTitle="Twitter"
          :followers="twitter"
          suffix="followers"
          icon="twitter.png"
          link="https://twitter.com/realSpencerWoo"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="GitHub"
          :followers="github"
          suffix="followers"
          icon="github.png"
          link="https://github.com/spencerwooo"
        />
        <statCard
          statTitle="Medium"
          :followers="medium"
          suffix="readers"
          icon="medium.png"
          link="https://medium.com/spencerweekly"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="Steam Games"
          :followers="steamGames"
          suffix="games bought"
          icon="steam.png"
          link="https://steamcommunity.com/id/firebearllc/"
        />
        <statCard
          statTitle="Steam Friends"
          :followers="steamFriends"
          suffix="friends"
          icon="steam.png"
          link="https://steamcommunity.com/id/firebearllc/friends/"
        />
      </div>
    </div>

    <div id="substats-footer">
      Service provided by:
      <a href="https://api.spencerwoo.com/substats">Substats</a>.
    </div>
  </div>
</template>

<script>
import statCard from '@/components/StatCard.vue'

export default {
  components: {
    statCard
  },
  data() {
    return {
      rss: 0,
      sspai: 0,
      zhihu: 0,
      weibo: 0,
      twitter: 0,
      medium: 0,
      github: 0,
      steamGames: 0,
      steamFriends: 0,
      telegram: 0
    }
  },
  mounted() {
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=feedly|inoreader&queryKey=https://blog.spencerwoo.com/posts/index.xml'
      )
      .then(resp => {
        this.rss = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=sspai&queryKey=spencerwoo'
      )
      .then(resp => {
        this.sspai = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=zhihu&queryKey=spencer-woo-64'
      )
      .then(resp => {
        this.zhihu = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=weibo&queryKey=6265807914'
      )
      .then(resp => {
        this.weibo = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=twitter&queryKey=realSpencerWoo'
      )
      .then(resp => {
        this.twitter = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=medium&queryKey=@SpencerWooo'
      )
      .then(resp => {
        this.medium = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=github&queryKey=spencerwooo'
      )
      .then(resp => {
        this.github = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=steamGames&queryKey=76561198336249957'
      )
      .then(resp => {
        this.steamGames = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=steamFriends&queryKey=76561198336249957'
      )
      .then(resp => {
        this.steamFriends = resp.data.data.totalSubs
      })
    this.axios
      .get(
        'https://api.spencerwoo.com/substats/?source=telegram&queryKey=realSpencerWoo'
      )
      .then(resp => {
        this.telegram = resp.data.data.totalSubs
      })
  }
}
</script>

<style lang="css" scoped>
.col-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
}

.row-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}

@media screen and (max-width: 960px) {
  .row-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
  }
}

a {
  text-decoration: none;
}

#substats-footer {
  color: #666666;
  text-align: left;
  margin: 60px 0 0 0;
}
</style>
