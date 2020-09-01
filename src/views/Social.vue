<template>
  <div class="container">
    <h1>Social</h1>
    <p>Some of my followers.</p>

    <div class="col-container">
      <div class="row-container">
        <statCard
          statTitle="Telegram Channel"
          :followers="telegram.data"
          suffix="members"
          icon="telegram.png"
          :loading="telegram.loading"
          link="https://t.me/realSpencerWoo"
        />
        <statCard
          statTitle="Jike"
          :followers="jike.data"
          suffix="followers"
          icon="jike.png"
          :loading="jike.loading"
          link="https://m.okjike.com/users/4DDA0425-FB41-4188-89E4-952CA15E3C5E"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="RSS"
          :followers="rss.data"
          suffix="subscribers"
          icon="rss.png"
          :loading="rss.loading"
          link="https://blog.spencerwoo.com/posts/index.xml"
        />
        <statCard
          statTitle="SSPAI"
          :followers="sspai.data"
          suffix="followers"
          icon="sspai.png"
          :loading="sspai.loading"
          link="https://sspai.com/u/spencerwoo/posts"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="Weibo"
          :followers="weibo.data"
          suffix="fans"
          icon="weibo.png"
          :loading="weibo.loading"
          link="https://weibo.com/spencerwoo"
        />
        <statCard
          statTitle="Zhihu"
          :followers="zhihu.data"
          suffix="followers"
          icon="zhihu.png"
          :loading="zhihu.loading"
          link="https://www.zhihu.com/people/spencerwoo"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="Twitter"
          :followers="twitter.data"
          suffix="followers"
          icon="twitter.png"
          :loading="twitter.loading"
          link="https://twitter.com/realSpencerWoo"
        />
        <statCard
          statTitle="GitHub"
          :followers="github.data"
          suffix="followers"
          icon="github.png"
          :loading="github.loading"
          link="https://github.com/spencerwooo"
        />
      </div>
      <div class="row-container">
        <statCard
          statTitle="Medium"
          :followers="medium.data"
          suffix="readers"
          icon="medium.png"
          :loading="medium.loading"
          link="https://medium.com/spencerweekly"
        />
        <statCard
          statTitle="Steam Games"
          :followers="steamGames.data"
          suffix="games"
          icon="steam.png"
          :loading="steamGames.loading"
          link="https://steamcommunity.com/id/firebearllc/"
        />
      </div>
    </div>

    <p id="substats-footer">
      * Follower statistics powered by:
      <a href="https://api.spencerwoo.com/substats">Substats</a>.
    </p>
  </div>
</template>

<script>
import statCard from '@/components/StatCard.vue'

export default {
  components: {
    statCard,
  },
  data() {
    return {
      rss: { data: 0, loading: true },
      jike: { data: 0, loading: true },
      sspai: { data: 0, loading: true },
      zhihu: { data: 0, loading: true },
      weibo: { data: 0, loading: true },
      twitter: { data: 0, loading: true },
      medium: { data: 0, loading: true },
      github: { data: 0, loading: true },
      steamGames: { data: 0, loading: true },
      telegram: { data: 0, loading: true },
    }
  },
  mounted() {
    const apiUrl = 'https://api.spencerwoo.com/substats'
    const rssUrl = 'https://blog.spencerwoo.com/posts/index.xml'

    const rssAxios = this.axios.get(`${apiUrl}/?source=feedly|inoreader|feedsPub&queryKey=${rssUrl}`)
    const sspaiAxios = this.axios.get(`${apiUrl}/?source=sspai&queryKey=spencerwoo`)
    const jikeAxios = this.axios.get(`${apiUrl}/?source=jikeFollower&queryKey=4DDA0425-FB41-4188-89E4-952CA15E3C5E`)
    const zhihuAxios = this.axios.get(`${apiUrl}/?source=zhihu&queryKey=spencerwoo`)
    const weiboAxios = this.axios.get(`${apiUrl}/?source=weibo&queryKey=6265807914`)
    const twitterAxios = this.axios.get(`${apiUrl}/?source=twitter&queryKey=realSpencerWoo`)
    const mediumAxios = this.axios.get(`${apiUrl}/?source=medium&queryKey=@SpencerWooo`)
    const githubAxios = this.axios.get(`${apiUrl}/?source=github&queryKey=spencerwooo`)
    const steamGamesAxios = this.axios.get(`${apiUrl}/?source=steamGames&queryKey=76561198336249957`)
    const telegramAxios = this.axios.get(`${apiUrl}/?source=telegram&queryKey=realSpencerWoo`)

    rssAxios.then(r => {
      this.rss = { data: r.data.data.totalSubs, loading: false }
    })
    sspaiAxios.then(r => {
      this.sspai = { data: r.data.data.totalSubs, loading: false }
    })
    jikeAxios.then(r => {
      this.jike = { data: r.data.data.totalSubs, loading: false }
    })
    zhihuAxios.then(r => {
      this.zhihu = { data: r.data.data.totalSubs, loading: false }
    })
    weiboAxios.then(r => {
      this.weibo = { data: r.data.data.totalSubs, loading: false }
    })
    twitterAxios.then(r => {
      this.twitter = { data: r.data.data.totalSubs, loading: false }
    })
    mediumAxios.then(r => {
      this.medium = { data: r.data.data.totalSubs, loading: false }
    })
    githubAxios.then(r => {
      this.github = { data: r.data.data.totalSubs, loading: false }
    })
    steamGamesAxios.then(r => {
      this.steamGames = { data: r.data.data.totalSubs, loading: false }
    })
    telegramAxios.then(r => {
      this.telegram = { data: r.data.data.totalSubs, loading: false }
    })
  },
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
  margin: 15px 0px;
}

.row-container .statCard:last-child {
  margin-left: 30px;
}

.row-container .statCard {
  flex: 1;
}

@media screen and (max-width: 760px) {
  .row-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
  }

  .row-container .statCard:last-child {
    margin-left: 0px;
    margin-top: 30px;
  }
}

#substats-footer {
  color: #666666;
  text-align: left;
}
</style>
